(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25d02429"],{"33e4":function(t,e,a){"use strict";var s=a("7d97"),i=a.n(s);i.a},"51a8":function(t,e,a){t.exports=a.p+"static/img/张楠.0cef8bb8.jpg"},"696c":function(t,e,a){t.exports=a.p+"static/img/火颖杰.52ce3dcc.jpg"},"75c9":function(t,e,a){t.exports=a.p+"static/img/孙磊.10e9183f.jpg"},"7d97":function(t,e,a){},bbf9:function(t,e,a){t.exports=a.p+"static/img/汤晓烨.33ef59c5.jpg"},ce87:function(t,e,a){"use strict";var s=a("16b7"),i=a("f2e7"),n=a("58df"),c=a("d9bd");e["a"]=Object(n["a"])(s["a"],i["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(c["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(c["c"])("v-hover should only contain a single element",this),t)}})},d5ff:function(t,e,a){t.exports=a.p+"static/img/樊申哲.ae676cf1.jpg"},d903:function(t,e,a){"use strict";var s=a("4e82"),i=a("58df"),n=a("d9bd"),c=a("2b0e");const o=c["a"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(n["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(n["c"])("v-item should only contain a single element",this),t)}});e["a"]=Object(i["a"])(o,Object(s["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},ef77:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fill-height warp"},[s("div",{staticClass:"banner-warp"},[s("div",{staticClass:"mask"},[s("v-container",[s("v-row",[s("v-col",[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1200",flat:"",dark:"",color:"transparent"}},[s("v-row",{staticClass:"fill-height flex-column pa-5",attrs:{align:"center",justify:"center"}},[s("img",{staticStyle:{width:"200px"},attrs:{src:a("9d64"),alt:""}}),s("div",{staticClass:"top-decoration"}),s("div",{staticClass:"display-3 my-5 font-weight-black"},[s("span",{staticClass:"main-title"},[t._v("Meet Consultants")])]),s("div",{staticClass:"display-1 mb-5"},[t._v("寻找顾问")]),s("div",{staticClass:"bottom-decoration"})])],1)],1)],1)],1)],1)]),s("div",{staticClass:"mask"},[s("v-container",[s("v-card",{staticClass:"mx-auto pa-5",attrs:{"max-width":"1200",color:"",light:""}},[s("v-data-iterator",{attrs:{items:t.allConsultants,search:t.search,"sort-by":t.sortBy.toLowerCase(),"sort-desc":t.sortDesc,"hide-default-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[s("v-toolbar",{staticClass:"mb-1",attrs:{dark:"",color:"transparent"}},[s("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"",label:"检索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"default",fn:function(e){return[s("v-row",t._l(t.localConsultants,function(e){return s("v-col",{key:e.id,staticClass:"py-12",attrs:{cols:"12",md:"6",lg:"3"}},[s("v-item-group",[s("v-item",{scopedSlots:t._u([{key:"default",fn:function(a){a.active,a.toggle;return[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var i=a.hover;return[s("v-card",{staticClass:"text-center mx-auto pb-5",attrs:{width:"300",elevation:i?12:2},on:{click:function(a){return t.openItem(e)}}},[s("v-avatar",{staticClass:"mt-n6",attrs:{size:"120"}},[s("v-img",{attrs:{src:e.imgUrl,alt:"avatar",height:"120",position:"top center"}})],1),s("h2",{staticClass:"my-3"},[t._v(t._s(e.name))]),s("h4",{staticClass:"mb-2"},[t._v(t._s(e.position))]),s("div",{staticClass:"caption grey--text"},[t._v(t._s(e.keyword1))]),s("div",{staticClass:"caption grey--text"},[t._v(t._s(e.keyword2))]),s("div",{staticClass:"caption grey--text"},[t._v(t._s(e.keyword3))]),s("div",{staticClass:"caption grey--text"},[t._v(t._s(e.keyword4))]),s("div",{staticClass:"text-left"})],1)]}}],null,!0)})]}}],null,!0)})],1)],1)}),1)]}}])})],1)],1),s("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",[s("v-card",{staticClass:"mx-auto",attrs:{width:"1200"}},[s("v-row",[s("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[s("v-card",{attrs:{color:"#232332",height:"100%",dark:""}},[s("div",[s("img",{attrs:{src:t.consultant.imgUrl,alt:"",width:"100%"}}),s("v-btn",{staticClass:"d-flex d-md-none",staticStyle:{position:"absolute",right:"0",top:"0"},attrs:{color:"white darken-1",icon:""},on:{click:function(e){t.dialog=!1}}},[s("v-icon",[t._v("fas fa-times\n                                                ")])],1)],1),s("div",{staticClass:"pa-5"},[s("h1",{staticClass:"display-1 pa-2"},[t._v("\n                                                "+t._s(t.consultant.name)+"\n                                            ")]),s("h2",{staticClass:"title pa-2"},[t._v("\n                                                "+t._s(t.consultant.position)+"\n                                            ")]),s("div",{staticClass:"subtitle-2 pa-2"},[s("i",{staticClass:"fas fa-map-marker-alt mr-2"}),t._v(t._s(t.consultant.location)+"\n                                            ")]),t.consultant.email?s("div",{staticClass:"subtitle-2 pa-2"},[s("i",{staticClass:"far fa-envelope  mr-2"}),t._v(t._s(t.consultant.email)+"\n                                            ")]):t._e()])])],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"8"}},[s("v-card",{attrs:{height:"100%"}},[s("v-card-text",[s("div",[s("div",{staticClass:"pa-2",staticStyle:{overflow:"hidden"},attrs:{width:"100%"}},[s("v-btn",{staticClass:"float-right d-none d-md-flex",attrs:{color:"grey darken-1",icon:""},on:{click:function(e){t.dialog=!1}}},[s("v-icon",[t._v("fas\n                                                            fa-times\n                                                        ")])],1)],1),s("h2",{staticClass:"my-8 black--text"},[s("i",{staticClass:"fas fa-stream mx-3"}),t._v("个人简述\n                                                ")]),t.consultant.description?s("p",{staticClass:"pl-4"},[t._v("\n                                                    "+t._s(t.consultant.description)+"\n                                                ")]):t._e()]),s("div",[s("h2",{staticClass:"my-8 black--text"},[s("i",{staticClass:"fas fa-bolt mx-3"}),t._v("擅长领域\n                                                ")]),t.consultant.field1?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.field1))])]):t._e(),t.consultant.field2?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.field2))])]):t._e(),t.consultant.field3?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.field3))])]):t._e()]),t.consultant.experience1?s("div",[s("h2",{staticClass:"my-8 black--text"},[s("i",{staticClass:"fas fa-book mx-3"}),t._v("个人资历\n                                                ")]),t.consultant.experience1?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.experience1))])]):t._e(),t.consultant.experience2?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.experience2))])]):t._e(),t.consultant.experience3?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.experience3))])]):t._e()]):t._e()])],1)],1)],1)],1)],1)],1)],1)],1)],1)])},i=[],n={data(){return{dialog:!1,search:"",filter:{},sortBy:"姓名",keys:["发布时间","姓名","职位"],consultant:{},localConsultants:[{name:"孙磊",name_en:"TOM SUN",email:"",position:"外包业务负责人",location:"上海",date:"2019-9-16",description:"曾就职于中软，东南融通，文思海辉，佰钧成等国内一流IT外包公司，并担任重要管理职位。同时，在Microsoft，Criteo等国际知名IT企业任职过。拥有丰富的IT，外包全行业的经验。",experience1:"中软，东南融通，文思海辉，佰钧成等国内一流IT外包公司",experience2:"Microsoft，Criteo等国际知名IT企业",experience3:"",field1:"IT",field2:"全行业",field3:"",keyword1:"外包业务负责人",keyword2:"外包全行业",keyword3:"",keyword4:"",education1:"",education2:"",status:"有效",id:7,imgUrl:a("75c9")},{name:"樊申哲",name_en:"LESLIE",email:"",position:"猎头业务合伙人",location:"上海",date:"2019-9-16",description:"拥有十余年德资企业管理层经验，曾任海德堡销售总监，交通大学本科及交通大学工商管理学硕士，CIPC注册国际心理咨询师，五维教练领导力认证讲师，领导力方面颇有建树",experience1:"十余年德资企业管理层经验",experience2:"海德堡销售总监",experience3:"CIPC注册国际心理咨询师",field1:"制造业",field2:"德资",field3:"",keyword1:"销售总监",keyword2:"领导力",keyword3:"",keyword4:"",education1:"交通大学本科",education2:"交通大学工商管理学硕士",status:"有效",id:5,imgUrl:a("d5ff")},{name:"汤晓烨",name_en:"VERA",email:"",position:"猎头业务合伙人",location:"上海",date:"2019-9-16",description:"于14年以管培生身份加入择仕，连续3年百万顾问及公司TOP 1，4年连续晋升。南开大学应用心理学硕士。连续多次季度最佳业绩。斩获公司十多项嘉奖。带领团队成员单产年均75万",experience1:"多次季度最佳业绩",experience2:"连续3年百万顾问及公司TOP 1",experience3:"团队成员单产年均75万",field1:"互联网行业",field2:"",field3:"",keyword1:"资深顾问",keyword2:"百万顾问",keyword3:"",keyword4:"",education1:"南开大学应用心理学硕士",education2:"",status:"有效",id:6,imgUrl:a("bbf9")},{name:"火颖杰",name_en:"JASON",email:"",position:"猎头业务合伙人",location:"上海",date:"2019-9-16",description:"曾就职于瀚德、Michaelpage等大型外资猎头公司，同济大学本科，在瀚德就职期间年最高单产230万，2018年获择仕最高单笔业绩个人佣金60万。团队业绩五百万TeamLeader",experience1:"瀚德、Michaelpage等大型外资猎头公司",experience2:"最高单产230万",experience3:"团队业绩五百万TeamLeader",field1:"消费品行业",field2:"",field3:"",keyword1:"百万级Leader",keyword2:"资深猎头",keyword3:"",keyword4:"",education1:"同济大学本科",education2:"",status:"有效",id:8,imgUrl:a("696c")},{name:"张楠",name_en:"ELLA",email:"",position:"区域合伙人",location:"上海",date:"2019-9-16",description:" 拥有十年人力资源行业从业经验，曾任西北地区独角兽Yeahmobi集团核心高管带领择仕中国西安团队拿下多家北京、西北地区互联网头部客户，巩固择仕中国位于西北板块业务发展。",experience1:"十年人力资源行业从业经验",experience2:"曾任西北地区独角兽Yeahmobi集团核心高管",experience3:"",field1:"互联网行业",field2:"",field3:"",keyword1:"核心高管",keyword2:"十年经验",keyword3:"",keyword4:"",education1:"",education2:"",status:"有效",id:9,imgUrl:a("51a8")}]}},methods:{openItem(t){this.consultant=Object.assign({},t),this.dialog=!0}},computed:{},created(){}},c=n,o=(a("33e4"),a("2877")),l=a("6544"),r=a.n(l),d=a("8212"),u=a("8336"),p=a("b0af"),f=a("99d9"),v=a("62ad"),m=a("a523"),h=a("c377"),g=a("169a"),x=a("ce87"),C=a("132d"),y=a("adda"),_=a("d903"),k=a("604c"),b=a("0fd9"),w=a("8654"),A=a("71d9"),S=Object(o["a"])(c,s,i,!1,null,"025e610c",null);e["default"]=S.exports;r()(S,{VAvatar:d["a"],VBtn:u["a"],VCard:p["a"],VCardText:f["b"],VCol:v["a"],VContainer:m["a"],VDataIterator:h["a"],VDialog:g["a"],VHover:x["a"],VIcon:C["a"],VImg:y["a"],VItem:_["a"],VItemGroup:k["b"],VRow:b["a"],VTextField:w["a"],VToolbar:A["a"]})}}]);
//# sourceMappingURL=chunk-25d02429.9e7179f3.js.map