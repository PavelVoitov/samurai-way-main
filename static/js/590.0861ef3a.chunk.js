"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[590],{590:function(e,s,r){r.r(s),r.d(s,{default:function(){return G}});var n=r(1413),a=r(5671),t=r(3144),i=r(136),o=r(5716),u=r(2791),c="Dialogs_dialogs__xsgwP",d="Dialogs_dialogsItems__cRRxT",m="Dialogs_dialog__wIOk+",l="Dialogs_active__mtErk",_="Dialogs_users__37043",g="Dialogs_messagesAndInput__lLU1e",f="Dialogs_message__noMVn",x=r(1523),h=r(184),j=function(e){var s=e.name,r="/dialogs/"+e.id;return(0,h.jsx)("div",{className:m+" "+l,children:(0,h.jsx)(x.OL,{to:r,className:"Andrew"===s?l:"",children:s})})},v="MessageItem_messageBlock__NPLLw",Z="MessageItem_messageBlockUser__tOZwh",p="MessageItem_messageUser__S83vO",N="MessageItem_messageImg__bU4tu",I="MessageItem_corner__ta+x5",M="MessageItem_cornerUser__FvFwb",C="MessageItem_time__lGbhw",b="MessageItem_textMessage__xCNya",w=function(e){var s=e.message,r=e.id,n=e.sender;return(0,h.jsxs)("div",{className:"I"===n?v:"".concat(Z," ").concat(v),children:[(0,h.jsx)("div",{className:"I"===n?I:M}),(0,h.jsxs)("div",{className:"I"===n?N:p,children:[(0,h.jsx)("div",{className:b,children:s}),(0,h.jsx)("div",{className:C,children:"10:30"})]},r)]})},S=r(6139),D=r(704),k=r(1117),y=r(5298),F="AddMessageForm_form__4ExmI",A=(0,y.D)(300),E=(0,D.Z)({form:"dialogAddMessageForm"})((function(e){return(0,h.jsxs)("form",{onSubmit:e.handleSubmit,className:F,children:[(0,h.jsx)(S.Z,{component:k.g,validate:[y.C,A],placeholder:"Enter your message...",name:"message"}),(0,h.jsx)("button",{children:"Send"})]})})),U=function(e){return(0,h.jsx)("div",{children:(0,h.jsx)(E,{onSubmit:function(s){e.addMessage(s.message)}})})},L=function(e){var s=e.state;return(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("div",{className:d,children:s.dialogs.map((function(e){return(0,h.jsxs)("div",{className:_,children:[(0,h.jsx)("img",{src:e.avatar,alt:"user"}),(0,h.jsx)(j,{name:e.name,id:e.id})]},e.id)}))}),(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)("div",{className:f,children:s.messages.map((function(e){return(0,h.jsx)(w,{message:e.message,id:e.id,sender:e.sender},e.id)}))}),(0,h.jsx)(U,{addMessage:e.addMessage,state:s})]}),(0,h.jsx)("div",{})]})},O=r(4546),P=r(8687),q=r(7781),B=r(9271),R=r(5987),V=["isAuth"],$=function(e){return{isAuth:e.auth.isAuth}};var z=function(e){(0,i.Z)(r,e);var s=(0,o.Z)(r);function r(){return(0,a.Z)(this,r),s.apply(this,arguments)}return(0,t.Z)(r,[{key:"render",value:function(){return(0,h.jsx)("div",{children:(0,h.jsx)(L,(0,n.Z)({},this.props))})}}]),r}(u.Component),G=(0,q.qC)((0,P.$j)((function(e){return{state:e.messagesPage}}),(function(e){return{addMessage:function(s){e((0,O.d)(s))}}})),B.EN,(function(e){return(0,P.$j)($)((function(s){var r=s.isAuth,a=(0,R.Z)(s,V);return r?(0,h.jsx)(e,(0,n.Z)({},a)):(0,h.jsx)(B.l_,{to:"/login"})}))}))(z)},1117:function(e,s,r){r.d(s,{g:function(){return d},I:function(){return m}});var n=r(1413),a=r(5987),t=r(232),i=(r(2791),r(184)),o=["input","meta"],u=["input","meta"],c=function(e){var s=e.meta,r=s.touched,n=s.error,a=e.children,o=r&&n;return(0,i.jsxs)("div",{className:t.Z.formControl+" "+(o?t.Z.error:""),children:[(0,i.jsx)("div",{className:t.Z.errorSpan,children:o&&(0,i.jsx)("span",{children:n})}),(0,i.jsx)("div",{children:a})]})},d=function(e){var s=e.input,r=(e.meta,(0,a.Z)(e,o));return(0,i.jsx)(c,(0,n.Z)((0,n.Z)({},e),{},{children:(0,i.jsx)("textarea",(0,n.Z)((0,n.Z)({},s),r))}))},m=function(e){var s=e.input,r=(e.meta,(0,a.Z)(e,u));return(0,i.jsx)(c,(0,n.Z)((0,n.Z)({},e),{},{children:(0,i.jsx)("input",(0,n.Z)((0,n.Z)({},s),r))}))}},5298:function(e,s,r){r.d(s,{C:function(){return n},D:function(){return a}});var n=function(e){if(!e)return"Field is required"},a=function(e){return function(s){if(s&&s.length>e)return"Max length is ".concat(e," symbols")}}},232:function(e,s){s.Z={formControl:"FormControls_formControl__NSDV3",error:"FormControls_error__eWZI7",formSummaryError:"FormControls_formSummaryError__zQsfM",errorSpan:"FormControls_errorSpan__b6o4K"}}}]);
//# sourceMappingURL=590.0861ef3a.chunk.js.map