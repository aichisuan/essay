import type { CommentStatus } from '../commenType/comment';

export const commentstatusList = [
  {
    label: '待审核',
    value: 2 as CommentStatus.NEED_REVIEW,
  },
  {
    label: '显示',
    value: 1 as CommentStatus.SHOW,
  },
  {
    label: '隐藏',
    value: 0 as CommentStatus.HIDDEN,
  },
];


export const commonSelects = [
  {
    label: '是',
    value: 1,
  },
  {
    label: '否',
    value: 0,
  },
];