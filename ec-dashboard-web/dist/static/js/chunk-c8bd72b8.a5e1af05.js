(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8bd72b8"],{"120d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"title"},[t._v("节点标签")]),a("div",{staticClass:"edit",on:{click:function(e){t.dialogVisible=!0}}},[a("svg-icon",{attrs:{"icon-class":"edit"}})],1)]),a("div",{staticClass:"card-body"},t._l(t.labelList,(function(e,s){return a("el-tag",{staticClass:"my-tag"},[t._v(t._s(e["key"])+":"+t._s(e["value"]))])})),1),a("el-dialog",{attrs:{title:"节点标签管理",visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t._l(t.labelList,(function(e,s){return a("el-row",{key:s},[a("el-col",{attrs:{span:12}},[a("el-row",{staticStyle:{"text-align":"center"}},[a("el-col",{staticStyle:{"line-height":"30px"},attrs:{span:6}},[t._v(" 标签键： ")]),a("el-col",{attrs:{span:18}},[a("el-input",{attrs:{disabled:e["disabled"]},model:{value:e["key"],callback:function(a){t.$set(e,"key",a)},expression:"item['key']"}})],1)],1)],1),a("el-col",{staticStyle:{"padding-left":"10px","text-align":"center"},attrs:{span:8}},[a("el-row",[a("el-col",{staticStyle:{"line-height":"30px"},attrs:{span:4}},[t._v(" 值： ")]),a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e["value"],callback:function(a){t.$set(e,"value",a)},expression:"item['value']"}})],1)],1)],1),a("el-col",{staticStyle:{"text-align":"center","line-height":"40px"},attrs:{span:4}},["add"==e["status"]?a("i",{staticClass:"el-icon-check",on:{click:function(e){return t.addLabel(s)}}}):a("i",{staticClass:"el-icon-close",on:{click:function(e){return t.deleteLabel(s)}}})])],1)})),a("div",{staticStyle:{margin:"10px 35px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus"},on:{click:function(e){return t.addViewLabel()}}},[t._v("添加标签")])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关 闭")])],1)],2)],1)},i=[],n=(a("a434"),a("ed87"),a("5c96")),r={name:"LabelsCard",props:["labels"],data:function(){return{dialogVisible:!1,labelList:[]}},watch:{labels:function(t){for(var e in t)this.labelList.push({disabled:!0,key:e,value:t[e],status:"del"})}},methods:{addLabel:function(t){var e=this.labelList[t];if(this.labels.hasOwnProperty(e["key"]))Object(n["Message"])({message:"标签键已存在",type:"error",duration:5e3});else if(""!==e["key"]){var a={label_key:e["key"],label_value:e["value"]};this.$store.dispatch("edge-node/createNodeLabel",a),this.labelList[t]["disabled"]="true",this.labelList[t]["status"]="del",Object(n["Message"])({message:"标签添加成功！",type:"success",duration:5e3})}else Object(n["Message"])({message:"标签键不能为空",type:"error",duration:5e3})},addViewLabel:function(){this.labelList.push({disabled:!1,key:"",value:"",status:"add"})},deleteLabel:function(t){var e=this.labelList[t],a={label_key:e["key"]};this.$store.dispatch("edge-node/deleteNodeLabel",a),this.labelList.splice(t,1),Object(n["Message"])({message:"标签删除成功！",type:"success",duration:5e3})}}},l=r,c=(a("1aa2"),a("2877")),o=Object(c["a"])(l,s,i,!1,null,"f7d0bec6",null);e["a"]=o.exports},"1aa2":function(t,e,a){"use strict";a("b0a0")},"2bcd":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-header"},[t._v(" 节点资源使用情况 ")]),a("div",{staticClass:"card-body"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("usage-chart",{attrs:{name:"CPU",unit:"n",scale:1e3,metrics:JSON.stringify(t.metrics.cpu),id:t.chartName1,"class-name":t.chartName1,height:"400px",width:"100%"}})],1)]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("usage-chart",{attrs:{name:"内存",unit:"Mi",scale:1024,metrics:JSON.stringify(t.metrics.memory),id:t.chartName2,"class-name":t.chartName2,height:"400px",width:"100%"}})],1)])],1)],1)])},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},r=[],l=(a("a9e3"),a("b0c0"),a("313e")),c=a.n(l),o=a("f42c"),d={name:"UsageChart",mixins:[o["a"]],props:{scale:{type:Number,default:1},unit:{type:String,default:null},name:{type:String,default:null},metrics:{type:String,default:null},className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},data:function(){return{chart:null,usage:0}},mounted:function(){},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},watch:{metrics:{handler:function(t){this.initChart(t)}}},methods:{initChart:function(t){t=JSON.parse(t);var e=Math.round(t.usage/t.allocatable*1e4)/100+"%";this.chart=c.a.init(document.getElementById(this.id)),console.log(this.scale),this.chart.setOption({title:{text:this.name+": "+Math.round(t.usage/this.scale)+this.unit+" / "+Math.round(t.allocatable/this.scale)+this.unit,x:"center",y:"bottom",textStyle:{color:"#000",fontSize:20,fontWeight:"normal",fontFamily:"Microsoft YaHei"}},grid:{left:"5%",right:"5%"},series:[{name:"资源使用",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,labelLine:{show:!0},label:{normal:{show:!0,position:"center",formatter:function(t){return e},textStyle:{fontSize:"30",color:"#333"}}},data:[{value:t.usage,name:"已使用"},{value:t.allocatable-t.usage,name:"未使用"}],itemStyle:{normal:{color:function(t){return"已使用"===t.name?"#409EFF":"#DCDCDC"}}}}]})}}},u=d,h=a("2877"),m=Object(h["a"])(u,n,r,!1,null,"7ab4fb12",null),p=m.exports,b={name:"NodeUsageCard",components:{UsageChart:p},props:["metrics"],data:function(){return{chartName1:"chart1",chartName2:"chart2"}}},f=b,v=Object(h["a"])(f,s,i,!1,null,"a58d5672",null);e["a"]=v.exports},5149:function(t,e,a){},"77cd":function(t,e,a){"use strict";a("5149")},b0a0:function(t,e,a){},b4e7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("node-card",{attrs:{data:t.nodeInfo}}),a("application-card",{attrs:{apps:t.apps}}),a("device-card",{attrs:{devices:t.devices}}),a("node-usage-card",{attrs:{metrics:t.metrics}}),a("labels-card",{attrs:{labels:t.labels}})],1)},i=[],n=(a("b0c0"),a("d3b7"),a("159b"),a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-header"},[t._v(" "+t._s(t.data.title)+" ")]),a("div",{staticClass:"card-body"},[a("el-row",t._l(t.data.content,(function(e,s){return a("el-col",{key:s,staticStyle:{padding:"15px 0"},attrs:{span:12}},[a("strong",[t._v(t._s(s)+":")]),t._v(" "+t._s(e)+" ")])})),1)],1)])}),r=[],l={name:"NodeCard",props:["data"],data:function(){return{name:"node-01"}}},c=l,o=a("2877"),d=Object(o["a"])(c,n,r,!1,null,"bd55bcce",null),u=d.exports,h=a("2bcd"),m=a("120d"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-header"},[t._v(" "+t._s(t.data.title)+" ")]),a("div",{staticClass:"card-body"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.apps,fit:""}},[a("el-table-column",{attrs:{prop:"name",label:"应用名称",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("svg-icon",{staticStyle:{"margin-right":"10px"},style:{color:0===s.status?"green":"red"},attrs:{"icon-class":"status"}}),t._v(" "+t._s(s.name)+" ")]}}])}),a("el-table-column",{attrs:{label:"镜像",width:"320"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return t._l(s.images,(function(e,s){return a("p",[t._v(t._s(e))])}))}}])}),a("el-table-column",{attrs:{label:"标签"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return t._l(s.labels,(function(e,s,i){return a("el-tag",{staticClass:"my-tag"},[t._v(t._s(s)+":"+t._s(e))])}))}}])}),a("el-table-column",{attrs:{prop:"age",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:s.createTime,placement:"right-start"}},[a("el-button",{staticStyle:{border:"none",outline:"none"}},[t._v(t._s(t.dateTimeFormat(s.createTime))+" "),a("i",{staticClass:"el-icon-info"})])],1)]}}])})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v("删除以后节点无法恢复，确定删除？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)])},b=[],f=a("ed08"),v={name:"ApplicationCard",props:["apps"],data:function(){return{dialogVisible:!1,data:{title:"应用列表"},tableData:null}},methods:{dateTimeFormat:f["b"],handleClose:function(t){this.$confirm("确认删除？").then((function(e){t()})).catch((function(t){}))}}},g=v,_=Object(o["a"])(g,p,b,!1,null,"18109c51",null),y=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-header"},[t._v(" "+t._s(t.data.title)+" ")]),a("div",{staticClass:"card-body"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.devices,fit:""}},[a("el-table-column",{attrs:{prop:"name",label:"设备名称",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("svg-icon",{staticStyle:{color:"green","margin-right":"10px"},attrs:{"icon-class":"status"}}),t._v(" "+t._s(s.name)+" ")]}}])}),a("el-table-column",{attrs:{prop:"age",label:"创建时间",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:s.createTime,placement:"right-start"}},[a("el-button",{staticStyle:{border:"none",outline:"none"}},[t._v(t._s(t.dateTimeFormat(s.createTime))+" "),a("i",{staticClass:"el-icon-info"})])],1)]}}])})],1)],1)])},w=[],k={name:"DeviceCard",props:["devices"],data:function(){return{data:{title:"设备列表"}}},methods:{dateTimeFormat:f["b"]}},$=k,S=Object(o["a"])($,C,w,!1,null,"5d225c05",null),x=S.exports,L={Mi:1048576,Ki:1024},N={name:"Detail",components:{NodeCard:u,NodeUsageCard:h["a"],LabelsCard:m["a"],ApplicationCard:y,DeviceCard:x},data:function(){return{nodeInfo:{title:null,content:null},labels:null,tempRoute:{},metrics:{cpu:{allocatable:0,usage:0},memory:{allocatable:0,usage:0}},devices:[],apps:[]}},created:function(){this.tempRoute=Object.assign({},this.$route),this.getNodeItem(),this.getNodeMetrics(),this.getNodeDevice(),this.getNodeApp(),this.setPageTitle(),this.setTagsViewTitle()},methods:{getNodeItem:function(){var t=this;this.$store.dispatch("edge-node/getNodeItem",this.$route.params.id).then((function(e){var a=e.status.node_info;t.nodeInfo={title:"节点信息",content:{name:e.metadata.name,architecture:a.architecture,container_runtime_version:a.container_runtime_version,kernel_version:a.kernel_version,kube_proxy_version:a.kube_proxy_version,kubelet_version:a.kubelet_version,operating_system:a.operating_system,os_image:a.os_image}},t.labels=e.metadata.labels;var s=e.status.allocatable;t.metrics.cpu.allocatable=parseInt(s.cpu*Math.pow(10,9));var i=s.memory.length,n=s.memory.substring(i-2,i);t.metrics.memory.allocatable=parseInt(s.memory)*L[n]}))},getNodeMetrics:function(){var t=this;this.$store.dispatch("metrics/getNodeMetrics",this.$route.params.id).then((function(e){var a=e.usage,s=a.memory.length,i=a.memory.substring(s-2,s);t.metrics.cpu.usage=parseInt(a.cpu),t.metrics.memory.usage=parseInt(a.memory)*L[i]}))},getNodeDevice:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("edge-device/getDeviceList").then((function(a){var s=[];a.forEach((function(t,a){var i=t.spec.nodeSelector.nodeSelectorTerms[0].matchExpressions[0].values;-1!==i.indexOf(e)&&s.push({name:t.metadata.name,createTime:t.metadata.creationTimestamp})})),t.devices=s}))},getNodeApp:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("edge-app/getAppList").then((function(a){var s=[];a.forEach((function(t,a){var i=t.spec.node_name;if(i===e){var n=[];t.spec.containers.forEach((function(t,e){n.push(t.image)})),s.push({name:t.metadata.name,createTime:t.metadata.creation_timestamp,labels:t.metadata.labels,images:n,node:t.spec.node_name,status:"Running"===t.status.phase?0:1})}})),t.apps=s}))},setPageTitle:function(){var t="节点详情";document.title="".concat(t," - ").concat(this.$route.params.id)},setTagsViewTitle:function(){var t="节点详情",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.$route.params.id)});this.$store.dispatch("tagsView/updateVisitedView",e)}}},E=N,O=(a("77cd"),Object(o["a"])(E,s,i,!1,null,"3ea5a730",null));e["default"]=O.exports},f42c:function(t,e,a){"use strict";var s=a("ed08");e["a"]={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){this.initListener()},activated:function(){this.$_resizeHandler||this.initListener(),this.resize()},beforeDestroy:function(){this.destroyListener()},deactivated:function(){this.destroyListener()},methods:{$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},initListener:function(){var t=this;this.$_resizeHandler=Object(s["c"])((function(){t.resize()}),100),window.addEventListener("resize",this.$_resizeHandler),this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},destroyListener:function(){window.removeEventListener("resize",this.$_resizeHandler),this.$_resizeHandler=null,this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)},resize:function(){var t=this.chart;t&&t.resize()}}}}}]);