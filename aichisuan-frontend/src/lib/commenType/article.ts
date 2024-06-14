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

export enum TypeId {
  Selected = 0, // 精选
  Technology = 1, // 技术
  Life = 2, // 生活
  Question = 3, // 问答
  Remark = 4, // 其他
}

export type ArticleType = {
  id: TypeId;
  type_name: string;
  type_name_en: string;
};

export type ArticleListEn = 'selectArticleList' | 'technologyArticleList' | 'lifeArticleList' | 'questionArticleList' | 'remarkArticleList';
