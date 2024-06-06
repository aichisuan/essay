export type ArticleItem = {
  article_id: number;
  type_id: number;
  type_name: string;
  article_title: string;
  article_content: string;
  article_comment_count: number | null;
  create_time: Date;
  update_time: Date | null,
  article_like_count: number;
  read_count: number;
  article_weight: number;
  article_cover: string;
  is_dfat: boolean;
};

export type PageInfo = {
  page: number;
  pageSize: number;
  total: number;
};

export type ArticleType = {
  id: number;
  type_name: string;
  type_name_en: string;
};