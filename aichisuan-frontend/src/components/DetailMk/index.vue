<template>
  <div class="detail">
    <MdPreview
      :modelValue="mdData.text"
      class="md-preview-v3"
      :editorId="mdData.id"
      previewOnly
      :preview-theme="previewTheme"
      :code-theme="codeTheme"
      :theme="mainTheme ? 'dark' : 'light'"
    ></MdPreview>
    <MdCatalog :editorId="mdData.id" :scrollElement="scrollElement" />
  </div>
</template>

<script setup lang="ts">
import { staticData } from "@/stores/mdTheme";
import testmd from "./testmd";
import { MdCatalog, MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { storeToRefs } from "pinia";
import { reactive } from "vue"

// 初始化pinia
const staticStore = staticData();

const mdData = reactive({
  text: testmd.content,
  id: "my-editor",
  switch: true,
});

const { codeTheme, previewTheme, mainTheme } = storeToRefs(staticStore);

const scrollElement = document.documentElement;

</script>

<style lang="less" scoped>
.detail {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
  max-width: 1200px;
}
</style>
