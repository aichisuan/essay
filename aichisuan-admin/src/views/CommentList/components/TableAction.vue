<template>
  <div>
    <a-button type="primary" danger @click="handleDelte" size="small" class="mg-10"> 删除 </a-button>
    <a-button type="primary" @click="handleLookDetail" size="small" class="mg-10"> 查看详情 </a-button>
    <a-button type="default" @click="handleEditStatus" size="small" class="mg-10"> 更新状态 </a-button>
    <a-button type="default" @click="handleReplayComment" size="small"> 回复一级评论 </a-button>
    <a-modal v-model:open="statusEditOpen" title="修改状态" @ok="handleEditOk" style="width: 300px">
      <a-form>
        <a-form-item label="评论状态">
          <a-select v-model:value="formEdit.status" placeholder="选择评论状态" style="width: 88px">
            <a-select-option v-for="item in statusList" :key="item.label" :value="item.value">{{ item.label }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="喜欢数量">
          <a-input-number v-model:value="formEdit.like_count"></a-input-number>
        </a-form-item>
      </a-form>
    </a-modal>

    <a-modal v-model:open="statusReplayOpen" title="回复一级评论" @ok="handleReplayCommentOk" style="width: 1000px">
      <a-form>
        <a-form-item label="管理员回复?:">
          <a-select v-model:value="formReplay.isAdmin" style="width: 300px">
            <a-select-option v-for="item in replayAdminList" :key="item.label" :value="item.value">{{ item.label }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="您的昵称">
          <a-input v-model:value="formReplay.short_time_name" :disabled="Boolean(formReplay.isAdmin)"></a-input>
        </a-form-item>
        <a-form-item label="您的邮箱">
          <a-input v-model:value="formReplay.comment_email" :disabled="Boolean(formReplay.isAdmin)"></a-input>
        </a-form-item>
        <a-form-item label="您的评论">
          <a-textarea :rows="4" type='textarea' :max-length="50" v-model:value="formReplay.comment_content"></a-textarea>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { message, Modal } from 'ant-design-vue';
import { inject, ref, h } from 'vue';
import service from '../../../lib/fetch/Api';
import type { CommentItem, CommentStatus } from '@/lib/commenType/comment';
import { commentstatusList as statusList } from '@/lib/commonData/index';
import { commonSelects as replayAdminList } from '@/lib/commonData/index';
import { formatTimeDayjs } from '../../../lib/timeFormat';
import { useUserStore } from '@/stores/user';

const { userIdp } = useUserStore();

import dayjs from 'dayjs';
const props = defineProps(['row']) as { row: CommentItem };

const updateTable = inject('updateTable') as (v?: boolean) => void;

const statusEditOpen = ref(false);
const statusReplayOpen = ref(false);
const rowDetailComments = ref<CommentItem[]>([]);

const formEdit = ref<{
  status: CommentStatus;
  like_count: number;
}>({
  status: 1,
  like_count: 0,
});

const initReplayForm = () => {
  formReplay.value = {
    isAdmin: 0,
    replay_comment_id: 0,
    comment_email: '',
    short_time_name: '',
    comment_content: '',
  };
};

const formReplay = ref<{
  isAdmin: 0 | 1;
  replay_comment_id: number; // 回复的评论id
  comment_email: string; // 回复的邮箱
  short_time_name: string; // 回复的昵称
  comment_content: string; // 回复的内容
}>({
  isAdmin: 0,
  replay_comment_id: 0,
  comment_email: '',
  short_time_name: '',
  comment_content: '',
});




const deleteComment = async (id: number) => {
  const { code } = await service.deleteComment(id);
  if (code !== 200) return;
  message.success('删除成功');
  updateTable(true);
};

const handleDelte = () => {
  Modal.confirm({
    title: '删除',
    content: `确定删除评论  ${props.row.comment_content}  吗？`,
    onOk() {
      deleteComment(props.row.comment_id);
    },
  });
};

const handleEditStatus = () => {
  formEdit.value = {
    status: props.row.status,
    like_count: props.row.like_count,
  };
  statusEditOpen.value = true;
};

const getShowRowH = (item: CommentItem, index: number) =>
  `${index + 1} 楼(昵称:${item.short_time_name}, 邮箱:${item.comment_email}): ${item.comment_content}`;

const getShowH = (list: CommentItem[]) => {
  console.log(list);
  return list.map((item, index) => {
    return h('p', {
      innerHTML: getShowRowH(item, index),
      style: { color: item.comment_id === props.row.comment_id ? 'green' : 'black', marginBottom: '10px' },
    });
  });
};

const getDetailRowComment = async () => {
  const { code, data } = await service.getArticleComment(props.row.article_id);
  if (code !== 200) {
    message.error('获取评论详情失败');
    return;
  }
  rowDetailComments.value = data;
  return data;
};

const handleLookDetail = async () => {
  const { code, data: articleDetailData } = await service.getArticleDetail(`${props.row.article_id}` as string);
  if (code !== 200) {
    message.error('获取失败');
    return;
  }
  if (!articleDetailData || !articleDetailData.article_title) {
    message.error('文章已删除');
    return;
  }

  const data = await getDetailRowComment();
  if (!data) return;
  Modal.info({
    title: `评论详情-文章: ${articleDetailData.article_title}`,
    content: h('div', {}, [...getShowH(data || [])]),
    onOk() {},
    style: {
      width: '1000px',
    },
  });
};

const handleEditOk = async () => {
  const { status, like_count } = formEdit.value;
  const { code } = await service.updateComment(props.row.comment_id, { status, like_count });
  if (code === 200) {
    message.success('更新成功');
    statusEditOpen.value = false;
    updateTable();
  } else {
    message.error('更新失败');
  }
};

const handleReplayComment = async () => {
  await getDetailRowComment();
  initReplayForm();
  formReplay.value.replay_comment_id = props.row.parent_comment_id || props.row.comment_id;
  statusReplayOpen.value = true;
};


const handleReplayCommentOk = async () => {
  const { isAdmin, replay_comment_id, comment_email, short_time_name, comment_content } = formReplay.value;
  if (!comment_content) {
    message.error('回复内容不能为空');
    return;
  }
  if (isAdmin === 0 && (!comment_email || !short_time_name)) {
    message.error('昵称和邮箱不能为空');
    return;
  }


  const body = {
    is_admin: isAdmin,
    parent_comment_id: replay_comment_id,
    comment_email: isAdmin === 0 ? comment_email : 'admin@admin.com',
    short_time_name: isAdmin === 0 ? short_time_name : '作者回复',
    comment_content: comment_content,
    create_time: formatTimeDayjs(dayjs()),
    article_id: props.row.article_id,
    user_idp: isAdmin ? 'admin' : userIdp,
  };

  const { code } = await service.replyComment(body.parent_comment_id, body);

  if (code !== 200 )return;
  message.success('回复成功');
  statusReplayOpen.value = false;
  updateTable();
};
</script>

<style lang="less" scoped>
.mg-10 {
  margin-right: 10px;
  margin-bottom: 10px;
}
.action_select__p {
  width: 280px;
  margin: 0;
  padding: 0;
  p {
    white-space: pre-wrap;
    word-break: break-all;
    text-overflow: clip !important;
  }
}
.ant-select-item-option-content {
  overflow: visible !important;
  text-overflow: clip !important;
  white-space: normal !important;
}

:deep(.selectdrop .ant-select-dropdown-menu .ant-select-dropdown-menu-item) {
  white-space: normal;
  word-break: break-all;
}
</style>
