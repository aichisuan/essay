var q=Object.defineProperty;var L=(e,t,s)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var f=(e,t,s)=>(L(e,typeof t!="symbol"?t+"":t,s),s);import{d as U,r as z,x as E,aT as y,aQ as A,v as T,ag as H,_ as b,aG as O,a4 as j,i as u,a7 as x}from"./index-D8gctr5_.js";import{Y as P}from"./_plugin-vue_export-helper-zm96i73Z.js";const W=U({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup(e,t){let{slots:s}=t;const o=z({width:0,height:0,offsetHeight:0,offsetWidth:0});let c=null,a=null;const l=()=>{a&&(a.disconnect(),a=null)},g=i=>{const{onResize:n}=e,d=i[0].target,{width:$,height:R}=d.getBoundingClientRect(),{offsetWidth:p,offsetHeight:_}=d,v=Math.floor($),C=Math.floor(R);if(o.width!==v||o.height!==C||o.offsetWidth!==p||o.offsetHeight!==_){const w={width:v,height:C,offsetWidth:p,offsetHeight:_};b(o,w),n&&Promise.resolve().then(()=>{n(b(b({},w),{offsetWidth:p,offsetHeight:_}),d)})}},h=O(),m=()=>{const{disabled:i}=e;if(i){l();return}const n=H(h);n!==c&&(l(),c=n),!a&&n&&(a=new P(g),a.observe(n))};return E(()=>{m()}),y(()=>{m()}),A(()=>{l()}),T(()=>e.disabled,()=>{m()},{flush:"post"}),()=>{var i;return(i=s.default)===null||i===void 0?void 0:i.call(s)[0]}}});class k{constructor(t){f(this,"baseUrl");f(this,"timeout");f(this,"defaultHeaders");const{baseUrl:s,timeout:o=1e4,defaultHeaders:c={}}=t;this.baseUrl=s,this.timeout=o,this.defaultHeaders=c}async request(t,s,o,c){const a=j("admin-token-auth"),l={method:t,headers:{"Content-Type":"application/json",...this.defaultHeaders,...c}};a&&(l.headers.authorization=`Bearer ${a}`),t.toLocaleLowerCase()==="get"?s+="?"+new URLSearchParams(o).toString():l.body=JSON.stringify(o||{});const g=new AbortController,h=g.signal;l.signal=h;const m=setTimeout(()=>g.abort(),this.timeout);try{const i=await fetch(this.baseUrl+s,l);if(!i.ok){const d=await i.json();return u.error(`Error: ${d.message}`),Promise.reject(()=>({code:500,message:"Request failed response not ok"}))}const n=await i.json();return n.code===1001&&a?(u.error(`Error: ${i.status}`),x("admin-token-auth"),window.location.href="/login",Promise.reject(()=>({code:401,message:"Request failed, login expired"}))):(n.code!==200&&u.error(`Error: ${n.message||"请求失败"}`),n)}catch(i){return i.name==="AbortError"?(u.error("Request failed: timeout"),Promise.reject(()=>({code:500,message:"Request failed: timeout"}))):(u.error(`Request failed: ${i}`),Promise.reject(()=>({code:500,message:"Request failed, catch error"})).finally(()=>{clearTimeout(m)}))}}get(t,s,o){return this.request("GET",t,s,o)}post(t,s,o){return this.request("POST",t,s,o)}put(t,s,o){return this.request("PUT",t,s,o)}delete(t,s){return this.request("DELETE",t,void 0,s)}}const D=`${location.protocol}//${location.hostname}:3000/api/v1/admin`,r=new k({baseUrl:D,timeout:5e3}),B={login:e=>r.post("/login",e),logout:()=>r.post("/logout"),getArticleType:()=>r.get("/article_type"),getArticleList:e=>r.get("/article_list",e),getArticleDetail:e=>r.get(`/article_detail/${e}`),getCommentList:e=>r.get("/comment_list",e),getArticleComment:e=>r.get(`/article_comment_detail/${e}`),getUserLikeList:e=>r.get("/user_list",e),createArticle:e=>r.post("/create_article",e),deleteArticle:e=>r.delete(`/delete_article/${e}`),updateArticle:(e,t)=>r.put(`/update_article/${e}`,t),deleteComment:e=>r.delete(`/delete_comment/${e}`),updateComment:(e,t)=>r.put(`/update_comment/${e}`,t),replyComment:(e,t)=>r.post(`/reply_comment/${e}`,t),createComment:e=>r.post("/create_comment",e),getUserList:e=>r.get("/user_list",e)};export{W as R,B as s};
