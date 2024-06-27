"use strict";
// 分页查询
const pageQuery = `SELECT id title create_time update_time  FROM article order by id desc limit %s offset %s where type=%d;`;
// 详情查询
const detailQuery = `SELECT {...} from article where id=%s;`;
// 阅读数增加
const readAdd = `UPDATE article SET read_count=read_count+1 WHERE id=%s;`;
// 点赞 踩这里不使用用户，只使用本地存储生成的uuid作为唯一id，实际是ip + user-agent + 加密
// 点赞数增加
const likeAdd = `UPDATE article SET like_count=like_count+1 WHERE id=%s;`;
// 插入点赞记录
const likeInsert = `INSERT INTO like_record (article_id, uuid) VALUES (%s, %s);`;
// 踩数增加
const dislikeAdd = `UPDATE article SET dislike_count=dislike_count+1 WHERE id=%s;`;
// 插入踩记录
const dislikeInsert = `INSERT INTO dislike_record (article_id, uuid) VALUES (%s, %s);`;
// 获取评论
const commentQuery = `SELECT {...} from comment where article_id=%s;`;
// 评论上传 // 评论使用uuid作为唯一id，实际是ip + user-agent + 加密
const commentInsert = `INSERT INTO comment (article_id, uuid, content) VALUES (%s, %s, %s);`;
// 采用svg + img sheng
