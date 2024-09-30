(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[361],{3618:function(e,t,s){Promise.resolve().then(s.bind(s,953))},953:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var r=s(7437),n=s(6463);function a(e){let{tennis:t}=e,s=(0,n.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-4 m-2 cursor-pointer",onClick:function(){localStorage.setItem("tennisData",JSON.stringify(t)),s.push("/tennis/".concat(t.SVCID))},children:[(0,r.jsx)("img",{src:t.IMGURL,alt:t.SVCNM,className:"w-full h-40 object-cover rounded-t-lg"}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsxs)("div",{className:"mt-2",children:[(0,r.jsxs)("p",{className:"text-sm text-gray-600",children:[(0,r.jsx)("strong",{children:"이름:"})," ",t.SVCNM]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:"text-sm text-gray-600",children:"결제 상태: "}),(0,r.jsx)("span",{className:"text-sm ".concat("유료"===t.PAYATNM?"text-red-600":"text-blue-500"),children:t.PAYATNM})]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:"text-sm text-gray-600",children:"예약 상태: "}),(0,r.jsx)("span",{className:"text-sm ".concat("접수중"===t.SVCSTATNM?"text-blue-500":"text-red-600"),children:t.SVCSTATNM})]})]})]})})]})})}s(6648);let l=s(8472).Z.create({baseURL:"http://localhost:8080/api",timeout:1e4,headers:{"Content-Type":"application/json;utf-8"}}),i=async function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return await l.post(e,t,{...s})};async function c(){return await i("/tennis")}var d=s(2265);function o(e){let{message:t}=e;return(0,r.jsx)("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"loader"}),(0,r.jsx)("p",{className:"mt-4 text-lg text-gray-600",children:t})]})})}var u=s(5097);function m(){let[e,t]=(0,d.useState)([]),[s,n]=(0,d.useState)([]);(0,d.useEffect)(()=>{(async()=>{let{data:e}=await c();t(e.result),n(e.result)})()},[]);let l=t=>{let{target:s}=t,r=s.dataset.order,a=s.dataset.click;s.dataset.click="on"===a?"off":"on";let l=[...e];"payment"===r&&l.sort((e,t)=>{if("on"===a){if("무료"===e.PAYATNM&&"무료"!==t.PAYATNM)return -1;if("무료"!==e.PAYATNM&&"무료"===t.PAYATNM)return 1}else{if("무료"!==e.PAYATNM&&"무료"===t.PAYATNM)return -1;if("무료"===e.PAYATNM&&"무료"!==t.PAYATNM)return 1}return 0}),"reservation"===r&&l.sort((e,t)=>{if("on"===a){if("접수중"===e.SVCSTATNM&&"접수중"!==t.SVCSTATNM)return -1;if("접수중"!==e.SVCSTATNM&&"접수중"===t.SVCSTATNM)return 1}else{if("접수중"!==e.SVCSTATNM&&"접수중"===t.SVCSTATNM)return -1;if("접수중"===e.SVCSTATNM&&"접수중"!==t.SVCSTATNM)return 1}return 0}),n(l)};return(0,r.jsxs)("div",{className:"flex flex-col items-center p-4 bg-gray-100 min-h-screen",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mb-8 mt-10 relative z-10",children:"테니스 예약 현황"}),(0,r.jsx)("div",{className:"relative flex w-full flex-col mb-4",children:(0,r.jsxs)("div",{className:"relative flex w-full items-center justify-between rounded-lg border border-trueGray-200 border-opacity-80 p-1.5 sm:rounded-xl sm:p-1",children:[(0,r.jsx)("input",{onInput:t=>{let s=t.target.value.trim().toLowerCase();if(!s){n(e);return}n(e.filter(e=>e.SVCNM.trim().toLowerCase().includes(s)))},id:"tennis",type:"text",placeholder:"이름으로 검색...",className:"border rounded-lg p-2 flex-grow"}),(0,r.jsx)("span",{className:"text-gray-200 m-2",children:"|"}),(0,r.jsx)(u.Lop,{className:"text-gray-400 font-bold mr-2"}),(0,r.jsx)("button",{className:"m-0.5 rounded-md py-1 text-center text-xs font-medium leading-4 transition duration-300 ease-out text-brand-gray-500 bg-white drop-shadow cursor-pointer mr-2","aria-selected":"false","data-order":"payment","data-click":"off",onClick:l,children:"결제"}),(0,r.jsx)("button",{className:"m-0.5 rounded-md py-1 text-center text-xs font-medium leading-4 transition duration-300 ease-out text-brand-gray-500 bg-white drop-shadow cursor-pointer","aria-selected":"false","data-order":"reservation","data-click":"off",onClick:l,children:"예약"})]})}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full",children:(0,r.jsx)(d.Suspense,{fallback:(0,r.jsx)(o,{message:"loading"}),children:s.length>0?s.map(e=>(0,r.jsx)(a,{tennis:e},e.SVCID)):(0,r.jsx)(o,{message:"로딩바 개선 요망"})})})]})}}},function(e){e.O(0,[706,14,971,23,744],function(){return e(e.s=3618)}),_N_E=e.O()}]);