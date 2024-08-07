<template>
  <a-table
    rowKey="comment_id"
    :data-source="commentList"
    :pagination="false"
    :columns="columns"
    :scroll="{
      scrollToFirstRowOnChange: true,
      y: tableHeight,
    }"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.key === 'article_id'">
        <a @click="goArticleDetail(record.article_id)">{{ text }}</a>
      </template>
      <template v-if="column.key === 'action'">
        <TableAction @update="$emit('update')" :row="record" />
      </template>
      <template v-if="column.key === 'comment_content'">
        <a-popover title="预览">
          <template #content>
            <div style="width: 300px">
              <p class="preview-p" v-html="text"></p>
            </div>
          </template>
          <p>{{ text ? text.slice(0, 20) : '' }}</p>
        </a-popover>
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { Dayjs } from 'dayjs';
import { ref, defineProps } from 'vue';
import { formatTime } from '../../../lib/timeFormat';
import TableAction from './TableAction.vue';
import { useRouter } from 'vue-router';

defineProps({
  commentList: {
    type: Array,
    required: true,
  },
});

const router = useRouter();

defineEmits(['update']);

const tableHeight = 'calc(100vh - 320px)';

const columns = ref([
  {
    title: 'id',
    dataIndex: 'comment_id',
    key: 'comment_id',
    width: 50,
  },
  {
    title: '昵称',
    dataIndex: 'short_time_name',
    key: 'short_time_name',
    width: 100,
  },
  {
    title: '内容',
    dataIndex: 'comment_content',
    key: 'comment_content',
    width: 200,
  },
  {
    title: '邮箱',
    dataIndex: 'comment_email',
    key: 'comment_id',
    width: 150,
  },
  {
    title: '文章id',
    dataIndex: 'article_id',
    key: 'article_id',
    width: 90,
  },
  {
    title: '管理员评论',
    dataIndex: 'is_admin',
    key: 'is_admin',
    width: 80,
    customRender: ({ text }: { text: number }) => {
      return text === 1 ? '是' : '否';
    },
  },
  {
    title: '父评论id',
    dataIndex: 'parent_comment_id',
    key: 'parent_comment_id',
    width: 90,
    customRender: ({ text }: { text: number }) => {
      return text ? text : '';
    },
  },
  // 封面
  {
    title: '用户id(已加密)',
    dataIndex: 'user_idp',
    key: 'user_idp',
    width: 200,
  },
  {
    title: '喜欢量',
    dataIndex: 'like_count',
    key: 'like_count',
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
    width: 180,
    customRender({ text }: { text: Dayjs }) {
      return formatTime(text);
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 80,
    customRender: ({ text }: { text: number }) => {
      const mapTexts = {
        1: '显示',
        0: '隐藏',
        2: '待审核'
      }
      return mapTexts[text as 0 | 1 | 2] || '未知';
    },
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  },
]);

const goArticleDetail = (article_id: string) => {
  router.push({
    path: '/layout/article-list',
    query: {
      id: article_id,
    },
  });
};
</script>

<style lang="less" scoped>
.preview-p {
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
