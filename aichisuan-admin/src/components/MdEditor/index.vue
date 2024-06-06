<template>
  <md-editor v-model:value="text" @onUploadImg="onUploadImg" />
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

import { uploadCos, type CosResponse } from '@/lib/cosUpload';
import { fixImgArticle } from '@/lib/imgFix';

const text = defineModel('text', {
  type: String,
  default: '',
});

const onUploadImg = async (files: File[], callback: (arg0: any) => void) => {
  const res = await Promise.all(
    files.map(async (file: File) => {
      const { code, url } = await uploadCos(file, 'img');
      return { code, url };
    })
  );
  callback(res.filter(({code}) => code === 200).map((item: Omit<CosResponse, 'msg'>) => fixImgArticle(`https://${item.url}`)));
};
</script>

<style lang="less" scoped></style>
