import{s as C}from"./Api-B7vETOhA.js";import{d as $,N as O,O as B,o as f,E as I,s as L,a as h,u as te,c as U,b as t,w as l,h as k,I as A,H as q,g as j,i as P,K as E,e as R,Q as M,S as ae,r as N,x as le,n as F}from"./index-D8gctr5_.js";import{_ as oe,a as ie}from"./index-Bd6qioH6.js";import{_ as D,B as H}from"./_plugin-vue_export-helper-zm96i73Z.js";import{f as T,R as ne}from"./index-CXoRKUPg.js";import{M as V}from"./index-UCcfnG2Q.js";import{S as K,a as Q}from"./index-_Mjgpjnj.js";import{_ as G,F as J}from"./index-BXbfQMdS.js";import{f as re}from"./index-CGI-wChe.js";import{_ as se}from"./index-CKtRlflV.js";import{I as de}from"./index-DBw3Gz5N.js";import{I as _e}from"./index-DAaq9sM0.js";import"./css-Bg5AX7vO.js";import"./pickAttrs-BBGk6uJf.js";import"./index-BNvgjLyG.js";import"./shallowequal-ByiV2moS.js";import"./index-riEwGd59.js";const ue=$({__name:"Pagination",props:O({total:{type:Number,required:!0}},{page:{},pageModifiers:{},pageSize:{},pageSizeModifiers:{}}),emits:O(["changePageEmit"],["update:page","update:pageSize"]),setup(w,{emit:u}){const b=u,e=B(w,"page"),n=B(w,"pageSize"),v=(o,p)=>{b("changePageEmit",o,p)};return(o,p)=>{const s=oe;return f(),I(s,{class:"pagination-wrap",current:e.value,"onUpdate:current":p[0]||(p[0]=d=>e.value=d),"page-size":n.value,"onUpdate:pageSize":p[1]||(p[1]=d=>n.value=d),total:w.total,onChange:v,onShowSizeChange:v,"show-total":d=>`总共: ${d} 条`},null,8,["current","page-size","total","show-total"])}}}),pe=D(ue,[["__scopeId","data-v-e7f504b6"]]),ce=$({__name:"TableAction",props:["row"],setup(w){const u=w,b=L("articleTypes"),e=L("updateTable"),n=h(!1),v=te(),o=h({type_id:u.row.type_id,is_dfat:u.row.is_dfat}),p=async c=>{const{code:a}=await C.deleteArticle(c);a===200&&(P.success("删除成功"),e(!0))},s=()=>{V.confirm({title:"删除",content:`确定删除文章  ${u.row.article_title}  吗？`,onOk(){p(u.row.article_id)}})},d=()=>{o.value={type_id:u.row.type_id,is_dfat:u.row.is_dfat},n.value=!0},z=()=>{v.push({path:`/layout/article-update/${u.row.article_id}`})},Y=async()=>{const{type_id:c,is_dfat:a}=o.value,{code:g}=await C.updateArticle(u.row.article_id,{type_id:c,is_dfat:a});g===200?(P.success("更新成功"),n.value=!1,e()):P.error("更新失败")};return(c,a)=>{const g=H,_=K,m=Q,y=G,x=J,S=V;return f(),U("div",null,[t(g,{type:"primary",danger:"",onClick:s,size:"small",class:"mg-10"},{default:l(()=>[k(" 删除 ")]),_:1}),t(g,{type:"primary",onClick:z,size:"small",class:"mg-10"},{default:l(()=>[k(" 编辑文章")]),_:1}),t(g,{type:"default",onClick:d,size:"small"},{default:l(()=>[k("更新状态 ")]),_:1}),t(S,{open:n.value,"onUpdate:open":a[2]||(a[2]=r=>n.value=r),title:"修改状态",onOk:Y},{default:l(()=>[t(x,null,{default:l(()=>[t(y,{label:"文章类型"},{default:l(()=>[t(m,{value:o.value.type_id,"onUpdate:value":a[0]||(a[0]=r=>o.value.type_id=r),placeholder:"请选择文章类型"},{default:l(()=>[(f(!0),U(A,null,q(j(b),r=>(f(),I(_,{key:r.id,value:r.id},{default:l(()=>[k(E(r.type_name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),t(y,{label:"文章状态"},{default:l(()=>[t(m,{value:o.value.is_dfat,"onUpdate:value":a[1]||(a[1]=r=>o.value.is_dfat=r),placeholder:"请选择文章状态"},{default:l(()=>[t(_,{value:1},{default:l(()=>[k("草稿")]),_:1}),t(_,{value:0},{default:l(()=>[k("已发布")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1},8,["open"])])}}}),me=D(ce,[["__scopeId","data-v-0c737b1b"]]),fe={style:{width:"300px"}},ve={class:"preview-p"},ge="calc(100vh - 320px)",ye=$({__name:"Table",props:{articleList:{type:Array,required:!0,immutable:!0}},emits:["update"],setup(w){const u=L("articleTypes"),b=h([{title:"id",dataIndex:"article_id",key:"article_id",width:50},{title:"文章类型",dataIndex:"type_id",key:"type_id",width:90,customRender({text:e}){var n;return(n=u.value.find(v=>v.id===e))==null?void 0:n.type_name}},{title:"文章标题",dataIndex:"article_title",key:"article_title"},{title:"封面",dataIndex:"article_cover",key:"article_cover"},{title:"文章内容(预览）",dataIndex:"article_content_preview",key:"article_content_preview",width:200},{title:"创建时间",dataIndex:"create_time",key:"create_time",customRender({text:e}){return T(e)}},{title:"更新时间",dataIndex:"update_time",key:"update_time"},{title:"状态",dataIndex:"is_dfat",key:"is_dfat",customRender:({text:e})=>e===1?"草稿":"已发布"},{title:"阅读量",dataIndex:"article_read_count",key:"article_read_count"},{title:"喜欢量",dataIndex:"article_like_count",key:"article_like_count"},{title:"权重",dataIndex:"article_weight",key:"article_weight"},{title:"操作",dataIndex:"action",key:"action"}]);return(e,n)=>{const v=se,o=de,p=ie;return f(),I(p,{"row-key":s=>s.article_id,"data-source":w.articleList,pagination:!1,columns:b.value,scroll:{scrollToFirstRowOnChange:!0,y:ge}},{bodyCell:l(({column:s,text:d,record:z})=>[s.key==="article_content_preview"?(f(),I(v,{key:0,title:"预览"},{content:l(()=>[R("div",fe,[R("p",ve,E(d),1)])]),default:l(()=>[R("p",null,E(d?d.slice(0,20):""),1)]),_:2},1024)):M("",!0),s.key==="article_cover"?(f(),U(A,{key:1},[d?(f(),I(o,{key:0,src:j(re)(d),height:100},null,8,["src"])):M("",!0)],64)):M("",!0),s.key==="action"?(f(),I(me,{key:2,onUpdate:n[0]||(n[0]=Y=>e.$emit("update")),row:z},null,8,["row"])):M("",!0)]),_:1},8,["row-key","data-source","columns","scroll"])}}}),ke=D(ye,[["__scopeId","data-v-b2e2e32e"]]),we=$({__name:"index",setup(w){const b=ae().query.id||"",e=N({article_id:b,type_id:void 0,article_title:"",article_content:"",create_time:void 0,update_time:void 0,is_dfat:void 0}),n=h([]),v=h([]),o=N({page:1,pageSize:10,total:0});le(async()=>{await p(),await s(e)});const p=async()=>{const c=await C.getArticleType();c.code===200&&(n.value=c.data)},s=async c=>{c=c||e;const{article_title:a="",article_content:g="",type_id:_="",create_time:m="",update_time:y="",is_dfat:x="",article_id:S=""}=c,r={article_id:S,article_title:a,article_content:g,type_id:_,is_dfat:x===void 0?"":x};m&&m[0]&&m[1]&&(r.create_time_start=T(m[0],"YYYY-MM-DD"),r.create_time_end=T(m[1],"YYYY-MM-DD")),y&&y[0]&&y[1]&&(r.update_time_start=T(y[0],"YYYY-MM-DD"),r.update_time_end=T(y[1],"YYYY-MM-DD"));const{code:i,data:W,pageInfo:{pageSize:X=1,page:Z=1,total:ee=0}}=await C.getArticleList({...r,...o});i===200&&(v.value=W,o.page=Z,o.pageSize=X,o.total=ee)},d=()=>{s({...e})},z=()=>{s({...e})},Y=()=>{e.article_id="",e.type_id=void 0,e.article_title="",e.article_content="",e.create_time=void 0,e.update_time=void 0,e.is_dfat=void 0,o.page=1,o.pageSize=10,s({...e})};return F("articleTypes",n),F("updateTable",s),(c,a)=>{const g=_e,_=G,m=K,y=Q,x=ne,S=H,r=J;return f(),U(A,null,[t(r,{layout:"inline",model:e,class:"article_form"},{default:l(()=>[t(_,null,{default:l(()=>[t(g,{value:e.article_id,"onUpdate:value":a[0]||(a[0]=i=>e.article_id=i),placeholder:"id(搜索)"},null,8,["value"])]),_:1}),t(_,null,{default:l(()=>[t(g,{value:e.article_title,"onUpdate:value":a[1]||(a[1]=i=>e.article_title=i),placeholder:"文章标题(模糊搜索)"},null,8,["value"])]),_:1}),t(_,null,{default:l(()=>[t(g,{value:e.article_content,"onUpdate:value":a[2]||(a[2]=i=>e.article_content=i),type:"text",placeholder:"文章内容(模糊搜索)"},null,8,["value"])]),_:1}),t(_,null,{default:l(()=>[t(y,{value:e.type_id,"onUpdate:value":a[3]||(a[3]=i=>e.type_id=i),style:{width:"200px"},placeholder:"选择文章类型"},{default:l(()=>[(f(!0),U(A,null,q(n.value,i=>(f(),I(m,{key:i.id},{default:l(()=>[k(E(i.type_name),1)]),_:2},1024))),128))]),_:1},8,["value"])]),_:1}),t(_,{label:"发布时间"},{default:l(()=>[t(x,{value:e.create_time,"onUpdate:value":a[4]||(a[4]=i=>e.create_time=i)},null,8,["value"])]),_:1}),t(_,{label:"更新时间"},{default:l(()=>[t(x,{value:e.update_time,"onUpdate:value":a[5]||(a[5]=i=>e.update_time=i)},null,8,["value"])]),_:1}),t(_,{label:"状态"},{default:l(()=>[t(y,{value:e.is_dfat,"onUpdate:value":a[6]||(a[6]=i=>e.is_dfat=i),style:{width:"100px"},placeholder:"全部"},{default:l(()=>[t(m,{value:1},{default:l(()=>[k("草稿")]),_:1}),t(m,{value:0},{default:l(()=>[k("已发布")]),_:1})]),_:1},8,["value"])]),_:1}),t(_,null,{default:l(()=>[t(S,{type:"primary","html-type":"submit",onClick:z},{default:l(()=>[k(" 查询 ")]),_:1})]),_:1}),t(_,null,{default:l(()=>[t(S,{type:"primary","html-type":"submit",onClick:Y},{default:l(()=>[k(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"]),t(ke,{articleList:v.value,onUpdate:a[7]||(a[7]=i=>s(e))},null,8,["articleList"]),t(pe,{onChangePageEmit:d,page:o.page,"onUpdate:page":a[8]||(a[8]=i=>o.page=i),"page-size":o.pageSize,"onUpdate:pageSize":a[9]||(a[9]=i=>o.pageSize=i),total:o.total},null,8,["page","page-size","total"])],64)}}}),Le=D(we,[["__scopeId","data-v-535d68c4"]]);export{Le as default};