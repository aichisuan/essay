<template>
  <div>
    <a-button type="primary" danger @click="handleDelte" size="small" class="mg-10"> 删除 </a-button>
    <a-button type="primary" @click="handleEditText" size="small" class="mg-10"> 编辑文章</a-button>
    <a-button type="default" @click="handleEditStatus" size="small"> 更新状态 </a-button>
    <a-modal v-model:open="statusEditOpen" title="修改状态" @ok="handleEditOk">
      <a-form>
        <a-form-item label="文章类型">
          <a-select v-model:value="formEdit.type_id" placeholder="请选择文章类型">
            <a-select-option v-for="item in articleTypes" :key="item.id" :value="item.id">{{ item.type_name }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="文章状态">
          <a-select v-model:value="formEdit.is_dfat" placeholder="请选择文章状态">
            <a-select-option :value="1">草稿</a-select-option>
            <a-select-option :value="0">已发布</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { message, Modal } from "ant-design-vue";
import { inject, ref } from "vue"
import { useRouter } from "vue-router";
import type { ArticleItem, ArticleType } from "../../../lib/commenType/article";
import service from "../../../lib/fetch/Api";
const { row } = defineProps(['row']) as { row: ArticleItem };
const articleTypes = inject('articleTypes') as ArticleType[];
const updateTable = inject('updateTable') as (v?: boolean) => void;

const statusEditOpen = ref(false);

const router = useRouter();

const formEdit = ref({
  type_id: row.type_id,
  is_dfat: row.is_dfat,
})

const deleteArticle = async (id: number) => {
  const { code }  = await service.deleteArticle(id);
  if (code !== 200 ) return;
  message.success('删除成功');
  updateTable(true);
}

const handleDelte = () => {
  console.log(row)
  Modal.confirm({
    title: '删除',
    content: `确定删除文章  ${row.article_title}  吗？`,
    onOk() {
      deleteArticle(row.article_id)
    }
  })
}

const handleEditStatus = () => {
  formEdit.value = {
    type_id: row.type_id,
    is_dfat: row.is_dfat,
  }
  statusEditOpen.value = true;
  updateTable();
}


const handleEditText = () => {
  router.push({
    path: `/layout/article-update/${row.article_id}`,
  })
}

const handleEditOk = async () => {
  const { type_id, is_dfat } = formEdit.value;
  const { code } = await service.updateArticle(row.article_id, { type_id, is_dfat });
  if (code === 200) {
    message.success('更新成功');
    statusEditOpen.value = false;
    updateTable();
    console.log(111111)
  } else {
    message.error('更新失败');
  }
}

</script>

<style lang="less" scoped>
.mg-10 {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
