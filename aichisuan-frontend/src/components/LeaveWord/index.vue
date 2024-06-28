<template>
  <div class="leave-word">
    <h3 class="leave-word__title">
      <span>留言（{{ commentLength }}条）</span>
      <span class="leave-word__add" @click="handleReplay(null)">填写</span>
    </h3>
    <div class="leave-word__li" v-for="item in commentList" :key="item.comment_id">
      <hr class="footer-hr" />
      <div class="leave-word__li-top">
        <img class="avatar" :src="`data:image/svg+xml;utf8,${generateFromString(item.user_idp)}`" />
        <p class="leave-word__li-nickname">{{ item.short_time_name }}</p>
        <p class="leave-word__li-time">{{ getTime(item.create_time as unknown as string) }}</p>
      </div>
      <div class="leave-word__li-content">
        <p>{{ item.comment_content }}</p>
        <p class="leave-word__add" style="text-align: right" @click="handleReplay(item.comment_id)">回复</p>
      </div>
      <div class="leave-word__li-pd" v-for="child in item.children" :key="child.comment_id">
        <hr class="footer-hr" />
        <div class="leave-word__li-top">
          <img class="avatar" :src="`data:image/svg+xml;utf8,${generateFromString(child.user_idp)}`" />
          <p class="leave-word__li-nickname">{{ child.short_time_name }}</p>
          <p class="leave-word__li-time">{{ getTime(child.create_time as unknown as string) }}</p>
        </div>
        <div class="leave-word__li-content">
          <p>{{ child.comment_content }}</p>
        </div>
      </div>
    </div>
    <div class="leave-word__replay">
      <h3 class="leave-word__replay-title">
        <span @click="isShowReplay = !isShowReplay">添加留言</span>
        <span @click="replayId = null" v-if="replayId">点击取消回复</span>
      </h3>
      <hr class="footer-hr" />
      <el-form v-if="isShowReplay && commentLength < 1000" ref="ruleFormRef" :rules="rules" :model="replayForm" class="replay-content">
        <el-form-item class="replay-content__content" required prop="content">
          <el-input placeholder="请输入留言(最多300字)" v-model.trim="replayForm.content" type="textarea" :maxlength="300" :rows="4" style="max-width: 800px"></el-input>
        </el-form-item>
        <el-form-item required prop="nickname">
          <el-input type="input" v-model.trim="replayForm.nickname" class="replay-content__nickname" :maxlength="12" style="max-width: 400px">
            <template #prepend>您的昵称</template>
          </el-input>
        </el-form-item>
        <el-form-item required prop="email">
          <el-input type="email" v-model.trim="replayForm.email" class="replay-content__email" :maxlength="35" style="max-width: 400px">
            <template #prepend>您的邮箱</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 200px" @click="handleSubmitComment" :loading="submitLoading">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import service from '@/lib/fetch/Api';
import type { Dayjs } from 'dayjs';
import { onMounted, reactive, ref, nextTick } from 'vue';
import type { CommentItem } from '../../lib/commonType/comment';
import { formatTime } from '../../lib/timeFormat';
import { generateFromString } from 'generate-avatar';
import { ElMessage, type FormInstance } from 'element-plus';
import { commentsRules as rules, type CommentStatus } from './tips';

type CommentLi = CommentItem & { children?: CommentItem[] };

const replayId = ref<number | null>(null);

const ruleFormRef = ref<FormInstance>();

const isShowReplay = ref(false);

const submitLoading = ref(false);

const replayForm = reactive({
  content: '',
  nickname: '',
  email: '',
});

const { articleId } = defineProps({
  articleId: {
    type: Number,
    required: true,
  },
});

const commentList = reactive<CommentLi[]>([]);
const commentLength = ref(0);

onMounted(() => {
  getCommitList();
});

const getTime = (time: string) => {
  return formatTime(time as unknown as Dayjs, 'YYYY-MM-DD');
};

const getCommitList = async () => {
  // >>>>>>
  const { code, data } = await service.getCommentList(articleId, { status: 1 as CommentStatus});
  if (code !== 200) return;
  commentLength.value = data.length;
  const list = data
    .filter((item: CommentItem) => {
      return !item.parent_comment_id;
    })
    .map((li: CommentLi) => {
      li.children = data.filter((item: CommentItem) => {
        return item.parent_comment_id === li.comment_id;
      });
      return li;
    });
  // 清空和添加
  commentList.splice(0, commentList.length);
  commentList.push(...list);
};

const handleReplay = (id: number | null) => {
  if (commentLength.value > 1000) {
    ElMessage.error('该文章留言数量已达上限');
  }
  isShowReplay.value = true;
  replayId.value = id;
  nextTick(() => {
    try {
      // window滚动到底部
      window.scrollTo(0, document.body.scrollHeight);
    } catch (error) {
      console.log(error);
    }
  });
};

const handleSubmitComment = async () => {
  if (replayForm.nickname === '作者') {
    ElMessage.error('昵称不能为作者');
    return;
  }
  const valid = await ruleFormRef.value?.validate();
  if (!valid) return;
  submitLoading.value = true;
  const { code } = await service.addComment(articleId, {
    parent_comment_id: replayId.value,
    comment_content: replayForm.content,
    short_time_name: replayForm.nickname,
    comment_email: replayForm.email,
    status: 2 as CommentStatus,
  });
  submitLoading.value = false;
  if (code !== 200) return;
  ElMessage.success('留言成功, 作者将尽快审核');
  isShowReplay.value = false;
  replayForm.content = '';
  replayForm.nickname = '';
  replayForm.email = '';
  replayId.value = null;
  getCommitList();
};
</script>

<style lang="less" scoped>
.leave-word {
  cursor: pointer;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 300px 20px 55px;
  box-sizing: border-box;
  .footer-hr {
    height: 1px;
    border: none;
    border-top: 1px solid #ddd;
  }
  &__title {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__add {
    color: #1890ff;
    cursor: pointer;
    font-size: 14px;
  }
  .avatar {
    float: left;
    margin: 1px 10px 0 0;
    border: 1px solid #ddd;
    padding: 1px;
    width: 32px;
    height: 32px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &__li {
    &-pd {
      padding-inline-start: 40px;
    }
    &-top {
      font-size: 14px;
    }
    &-nickname {
      font-size: 14px;
      font-weight: 500;
      margin: 0;
    }
    &-time {
      color: #999;
      margin: 0;
    }
    &-content {
      font-size: 14px;
      margin: 0;
      text-indent: 2px;
      line-height: 1.5;
      word-wrap: break-word;
      padding: 10px 2px 10px 0;
      color: #444;
    }
  }
  &__replay {
    margin-top: 20px;
    &-title {
      font-size: 14px;
      font-weight: 500;
      margin: 0;
      color: #6e7173;
      display: flex;
      justify-content: space-between;
    }
  }
}

@media screen and (max-width: 768px) {
  .leave-word {
    width: 100%;
    padding: 0 20px 20px;
  }
}
</style>
