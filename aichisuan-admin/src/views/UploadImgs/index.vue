<template>
  <div class="upload">
    <a-form>
      <a-form-item label="图片1">
        <UploadImg v-model:img-url="form.picture1"/>
        <p>{{ form.picture1 }} <a-button @click="copy(form.picture1)">复制</a-button></p>
      </a-form-item>
      <a-form-item label="图片2">
        <UploadImg v-model:img-url="form.picture2"/>
        <p>{{ form.picture2 }} <a-button @click="copy(form.picture2)">复制</a-button></p>
      </a-form-item>
      <a-form-item label="图片3">
        <UploadImg v-model:img-url="form.picture3"/>
        <p>{{ form.picture3 }} <a-button @click="copy(form.picture3)">复制</a-button></p>
      </a-form-item>
    </a-form>
    
  </div>
</template>

<script setup lang="ts">
import UploadImg from '@/components/UploadImg/index.vue'
import { message } from 'ant-design-vue'
import { reactive } from 'vue'

const form = reactive({
  picture1: '',
  picture2: '',
  picture3: '',
})

const copy = (v: string) => {
  window.navigator.clipboard.writeText(v)
  message.success('复制成功')
}

</script>

<style lang="less" scoped>
.upload {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
