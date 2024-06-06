<template>
  <div class="login">
    <a-row>
      <a-col :span="16"></a-col>
      <a-col :span="6">
        <div class="login__form">
          <div class="login__hello">您好!</div>
          <br>
          <div class="login__title">欢迎登陆aichisuan 管理后台</div>
          <a-form
            ref="formRef"
            :model="form"
            :rules="rules"
            @keyup.enter="handleSubmit"
          >
            <a-form-item name="name">
              <a-input
                v-model:value="form.name"
                autocomplete="off"
                placeholder="请输入账号"
              >
                <template v-slot:prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="password">
              <a-input-password
                v-model:value="form.password"
                autocomplete="off"
                placeholder="请输入密码"
              >
                <template v-slot:prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" @click="handleSubmit()"> 登录 </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useUserStore, type LoginFrom } from '@/stores/user';

const form = reactive<LoginFrom>({
  name: '',
  password: '',
});

const rules = reactive({
  name: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'change',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change',
    },
  ],
});

const formRef = ref();

const { login } = useUserStore();
const router = useRouter();

const handleSubmit = async () => {
  try {
    await formRef.value.validate();
  } catch (error) {
    message.error('请检查输入项');
    return;
  }

  const res = await login(form);
  if (res) {
    message.success('登录成功');
    console.log(23213123)
    router.push({path: '/layout/home'});
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/images/bg.png);
  background-size: cover;
  overflow: hidden;
  &__form {
    width: calc(100% - 40px);
    height: 400px;
    padding: 4vh;
    margin-top: calc((100vh - 380px) / 2);
    margin-right: 20px;
    margin-left: 20px;
    background: url('../../assets/images/form_bg.png');
    background-size: 100% 100%;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    :deep(.ant-col) {
      width: 100%;
      padding: 0 10px 0 10px;
    }
    :deep(.ant-input) {
      height: 35px;
    }
    :deep(.ant-btn) {
      width: 100%;
      height: 45px;
      border-radius: 99px;
    }
  }
  &__hello {
    font-size: 32px;
    color: #fff;
  }
  &__title {
    margin-bottom: 30px;
    font-size: 20px;
    color: #fff;
  }
}
</style>
