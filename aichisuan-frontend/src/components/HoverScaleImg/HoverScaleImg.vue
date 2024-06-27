<template>
  <div>
    <el-image :src="props.url">
      <template #error>
        <div class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </template>
    </el-image>
  </div>
</template>

<script setup>

const props = defineProps({
  url: {
    type: String,
    default: () => {
      return '';
    },
  },
});
</script>

<style lang="less" scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>
