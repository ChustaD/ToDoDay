import{_ as p,o as r,c,w as m,v as f,a as s,t as d,F as y,r as T,b,d as v,e as x,f as P,g as _,h as S}from"./index-d80cf2de.js";const w={class:"task"},N={__name:"ToDoTask",props:{task:{type:Object,required:!0}},emits:["deleteTask"],setup(n,{emit:a}){function l(o){a("deleteTask",o)}return(o,t)=>(r(),c("div",w,[m(s("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>n.task.time=u),type:"time"},null,512),[[f,n.task.time]]),m(s("input",{"onUpdate:modelValue":t[1]||(t[1]=u=>n.task.value=u),type:"text"},null,512),[[f,n.task.value]]),s("button",{onClick:t[2]||(t[2]=u=>l(n.task))},"x")]))}},$=p(N,[["__scopeId","data-v-9be22f3b"]]);const O={class:"day"},U={__name:"ToDoDay",props:{day:{type:Object,required:!0}},setup(n){function a(l){l.value.push({time:"",value:""})}return(l,o)=>(r(),c("div",O,[s("header",null,"Day: "+d(n.day.order),1),s("main",null,[s("div",null,[(r(!0),c(y,null,T(n.day.value,t=>(r(),b($,{key:t.value.time,task:t,class:"task",onDeleteTask:o[0]||(o[0]=u=>l.$emit("deleteTask",u))},null,8,["task"]))),128))])]),s("footer",null,[s("button",{class:"button__set-task",onClick:o[1]||(o[1]=t=>a(n.day))},"+")])]))}},I=p(U,[["__scopeId","data-v-caa8ed9e"]]),M={__name:"ToDoDays",props:{days:{type:Object,required:!0}},setup(n){return(a,l)=>(r(),c("div",null,[(r(!0),c(y,null,T(n.days,o=>(r(),b(I,{key:o.order,day:o,class:"day",onDeleteTask:l[0]||(l[0]=t=>a.$emit("deleteTask",t))},null,8,["day"]))),128))]))}};const q=s("br",null,null,-1),C=s("br",null,null,-1),J=s("br",null,null,-1),V=s("br",null,null,-1),j={__name:"ToDo",setup(n){const a=v([{order:1,value:[{time:"06:00",value:"Делать"}]}]);x(()=>a.value,e=>{console.log(e),localStorage.setItem("days",JSON.stringify(e))},{deep:!0}),P(()=>{console.log("the component is now mounted."),localStorage.getItem("days")&&(a.value=JSON.parse(localStorage.getItem("days")))});function l(e){e.value.push({time:"",value:""})}function o(e){a.value[0].value=a.value[0].value.filter(i=>i.time!==e.time)}const t=v(!1);"serviceWorker"in navigator||(t.value=!0);const u=v(!1);"PushManager"in window||(u.value=!0);function g(){return new Promise(function(e,i){const k=Notification.requestPermission(function(h){e(h)});k&&k.then(e,i)}).then(function(e){if(e!=="granted")throw new Error("Permission not granted.")})}function D(){navigator.serviceWorker.ready.then(e=>{const i={userVisibleOnly:!0,applicationServerKey:"BMahIJH-CVUnzzZJQNS9cep6xvulTWkaooUU9I1opx2zhnQA2aYnpn0NRZUJkvifMvX4vyjDRRH10Cp92PfwAAE"};return console.log(e),e.pushManager.subscribe(i)}).then(function(e){return console.log("PushSubscription: ",JSON.stringify(e)),e})}return console.log("self",self),(e,i)=>(r(),c(y,null,[_(d(t.value?"Браузер не поддерживает сервис-воркеры.":"Браузер поддерживает сервис-воркеры.")+" ",1),q,_(" "+d(u.value?"Браузер не поддерживает push-уведомления.":"Браузер поддерживает push-уведомления.")+" ",1),C,s("button",{onClick:g},"requestPermission"),s("button",{onClick:D},"subscribeUserToPush"),J,_(" "+d(a.value)+" ",1),V,S(M,{days:a.value,onSetTask:l,onDeleteTask:o},null,8,["days"])],64))}};export{j as default};