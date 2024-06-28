<template>
  <a-table
    :row-key="(record : ArticleItem) => record.article_id"
    :data-source="articleList"
    :pagination="false"
    :columns="columns"
    :scroll="{
      scrollToFirstRowOnChange: true,
      y: tableHeight,
    }"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.key === 'article_content_preview'">
        <a-popover title="预览">
          <template #content>
            <div style="width: 300px">
              <p class="preview-p">{{ text }}</p>
            </div>
          </template>
          <p>{{ text ? text.slice(0, 20) : '' }}</p>
        </a-popover>
      </template>
      <template v-if="column.key === 'article_cover'">
        <a-image :src="fixImgTable(text)" :height="100" v-if="text"/>
      </template>
      <template v-if="column.key === 'action'">
        <TableAction @update="$emit('update')" :row="record"/>
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { Dayjs } from 'dayjs';
import { ref, inject, type Ref } from 'vue';
import type { ArticleItem, ArticleType } from '../../../lib/commenType/article';
import { formatTime } from '../../../lib/timeFormat';
import TableAction from './TableAction.vue';
import { fixImgTable } from '../../../lib/imgFix';


const articleTypes = inject('articleTypes') as Ref<ArticleType[]>;
defineProps({
  articleList: {
    type: Array,
    required: true,
    immutable: true,
  },
});

defineEmits(['update']);

const tableHeight = 'calc(100vh - 320px)';

const columns = ref([
  {
    title: 'id',
    dataIndex: 'article_id',
    key: 'article_id',
    width: 50,
  },
  {
    title: '文章类型',
    dataIndex: 'type_id',
    key: 'type_id',
    width: 90,
    customRender({ text }: { text: number }) {
      return articleTypes.value.find((item) => item.id === text)?.type_name;
    },
  },
  {
    title: '文章标题',
    dataIndex: 'article_title',
    key: 'article_title',
  },
  // 封面
  {
    title: '封面',
    dataIndex: 'article_cover',
    key: 'article_cover',
  },
  {
    title: '文章内容(预览）',
    dataIndex: 'article_content_preview',
    key: 'article_content_preview',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
    customRender({ text }: { text: Dayjs }) {
      return formatTime(text);
    },
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
  },
  {
    title: '状态',
    dataIndex: 'is_dfat',
    key: 'is_dfat',
    customRender: ({ text }: { text: number }) => {
      return text === 1 ? '草稿' : '已发布';
    },
  },
  // 阅读量
  {
    title: '阅读量',
    dataIndex: 'article_read_count',
    key: 'article_read_count',
  },
  // 喜欢量
  {
    title: '喜欢量',
    dataIndex: 'article_like_count',
    key: 'article_like_count',
  },
  // 权重
  {
    title: '权重',
    dataIndex: 'article_weight',
    key: 'article_weight',
  },

  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  },
]);
</script>

<style lang="less" scoped>
.preview-p {
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
