import{k as o,d as r,s as a,o as u,c,a as s,t as i,u as _,F as d}from"./vue-BpQSRVcj.js";const f=o("user",{state:()=>({userInfo:{name:"zangmsan",age:18},token:"usermsse"}),getters:{newName:e=>e.userInfo.name+"vip"},actions:{updatedUseInfo(e){this.userInfo=e},resetToken(e){this.token=e}},persist:!0}),l=s("div",null,"我是首页",-1),m=s("button",null,"点击我",-1),p={class:"bofs"},I=r({__name:"index",setup(e){const t=f(),{userInfo:n}=a(t);return(h,k)=>(u(),c(d,null,[l,m,s("div",p,"我的信息是"+i(_(n)),1)],64))}});export{I as default};
