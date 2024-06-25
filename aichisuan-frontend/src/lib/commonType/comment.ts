export enum CommentStatus {
  HIDDEN = 0,
  SHOW = 1,
  NEED_REVIEW = 2, // 待审核  
}

export type CommentItem = {
  is_admin: number;
  comment_id: number;
  short_time_name: string; //  临时名字
  article_id: number;
  user_idp: string;
  comment_content: string;
  parent_comment_id: number;
  create_time: Date;
  like_count: number;
  comment_email: string;
  status: CommentStatus; // 0 隐藏 1 显示
};

