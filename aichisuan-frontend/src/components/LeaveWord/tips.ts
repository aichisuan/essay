
export enum CommentStatus {
  REJECT = 0,
  PASS = 1,
  WAIT = 2,
}


const checkEmail = (rule: any, value: string, callback: Function) => {
  if (!value) {
    callback(new Error('请输入您的邮箱'));
  } else {
    const reg = /^([a-zA-Z0-9]+[_|_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|-|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!reg.test(value)) {
      callback(new Error('请输入正确的邮箱'));
    } else {
      callback();
    }
  }
}

export const commentsRules = {
  nickname: [
    { required: true, message: '请输入您的昵称', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入您的邮箱', trigger: 'blur' },
    { validator: checkEmail, trigger: 'blur' },
  ],
  content: [
    { required: true, message: '请输入您的留言内容', trigger: 'blur' },
  ],
}