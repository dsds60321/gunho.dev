import{ak as h,r as p,l as e,al as j,q as g,W as t}from"./index-gSRf0sVc.js";import{T as l,B as r}from"./TextField-BZpt9On8.js";const y=()=>{const{login:n}=h(),[s,u]=p.useState({username:"",password:""}),i=a=>{const{name:c,value:m}=a.target;u(x=>({...x,[c]:m}))},o=a=>{a.preventDefault(),n.mutate(s)},d=()=>{n.mutate({username:"guest",password:"guest123"})};return e.jsxs(j,{maxWidth:"sm",sx:{mt:5},children:[e.jsx(g,{variant:"h4",gutterBottom:!0,children:"로그인"}),e.jsx("form",{onSubmit:o,children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,label:"아이디",name:"username",value:s.username,onChange:i,variant:"outlined",required:!0})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,label:"비밀번호",name:"password",type:"password",value:s.password,onChange:i,variant:"outlined",required:!0})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(r,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"로그인"})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(r,{variant:"outlined",color:"secondary",fullWidth:!0,onClick:d,children:"게스트로 로그인"})}),e.jsx(t,{item:!0,xs:6,children:e.jsx(r,{variant:"text",color:"primary",fullWidth:!0,children:"회원가입"})}),e.jsx(t,{item:!0,xs:6,children:e.jsx(r,{variant:"text",color:"primary",fullWidth:!0,children:"아이디 찾기"})})]})})]})};export{y as default};
