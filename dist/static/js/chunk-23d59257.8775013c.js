(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23d59257"],{3003:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pageCommonStyle",attrs:{id:"customerList"}},[a("vc-search",{ref:"child",attrs:{headTitArr:e.headTitArr,pageNum:e.pageNum,pageSize:e.pageSize,requestUrl:e.requestUrl},on:{changeLoading:e.changeLoad,sendData:e.showChildData}}),a("div",{staticClass:"operateBtn"},[a("el-button",{attrs:{size:"small",icon:"el-icon-plus",type:"primary"},on:{click:e.addMenu}},[e._v("新增作者")])],1),a("el-divider"),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中...",data:e.tableData,border:""}},[e._l(e.headTitArrNew,(function(t,s){return a("el-table-column",{key:s,attrs:{"show-overflow-tooltip":"",sortable:"","min-width":e.GLOBAL.minCellWidth,prop:t.fieldKey,label:t.fieldName}})})),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[a("el-button",{staticClass:"editBtnOnly",attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.editCustomerItem(t.row,t.$index)}}})],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("el-button",{staticClass:"delBtnOnly",attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.delCustomerItem(t.row,t.$index)}}})],1)]}}])})],2),a("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[15,20,30],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},i=[],l=a("f6d5"),r={components:{VcSearch:l["a"]},props:{msg:String},data(){return{total:0,pageNum:0,pageSize:15,requestUrl:"",editIndex:null,dynamicParam:[],loading:!0,tableData:[],headTitArr:[]}},created(){this.requestUrl=this.Api.getAuthorInfoList,sessionStorage.headTitString&&-1==sessionStorage.headTitString.indexOf("@")&&(this.headTitArr=JSON.parse(sessionStorage.headTitString)),this.dynamicParam=[{key:"pageNum",value:"1",isTrue:!0,msg:"请确认pageNum"},{key:"pageSize",value:"15",isTrue:!0,msg:"请确认pageSize"}]},computed:{headTitArrNew(){return this.headTitArr.filter(e=>!e.noTableShow)}},mounted(){this.pageNum=1,this.dynamicParam.forEach(e=>{"pageNum"===e.key&&(e.value=this.pageNum)})},activated(){sessionStorage.headTitString&&-1==sessionStorage.headTitString.indexOf("@")&&(this.headTitArr=JSON.parse(sessionStorage.headTitString));const e=this;e.$refs.child.resetSearch(e.dynamicParam,e.pageNum)},watch:{},methods:{editCustomerItem(e,t){this.editIndex=t,this.$router.push({path:"/author/addauthor",query:{item:e}})},delCustomerItem(e,t){this.$confirm("确认删除该作者?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const a=this,s={id:e.id},i=a.GLOBAL.paramJson(s);a.$axios.post(a.Api.deleteAuthorById,i).then(e=>{0===e.data.head.status?(a.tableData.splice(t,1),a.total>0&&(a.total-=1),0===a.tableData.length&&a.total>0&&(a.pageNum-=1,a.dynamicParam.forEach(e=>{"pageNum"===e.key&&(e.value=a.pageNum)}),a.$refs.child.parentMsgs(a.dynamicParam)),a.$message({type:"success",message:"删除成功!"})):a.$message({type:"error",message:e.data.head.msg})})}).catch(()=>{console.log("取消删除")})},changeLoad(e){this.loading=e},showChildData(e,t,a,s){e&&(this.tableData=e),t&&(this.total=t),a&&(this.tableEmptyText=a),s&&(this.pageNum=s)},handleSizeChange(e){this.pageSize=e,this.dynamicParam.forEach(e=>{"pageSize"===e.key&&(e.value=this.pageSize)}),this.$refs.child.parentMsgs(this.dynamicParam)},handleCurrentChange(e){this.pageNum=e,this.dynamicParam.forEach(e=>{"pageNum"===e.key&&(e.value=this.pageNum)}),this.$refs.child.parentMsgs(this.dynamicParam)},addMenu(){this.$router.push({path:"/author/addauthor"})},indexMethod(e){return e+1+(this.pageNum-1)*this.pageSize}}},n=r,o=a("b709"),d=Object(o["a"])(n,s,i,!1,null,null,null);t["default"]=d.exports},"60fd":function(e,t,a){},"72fc":function(e,t,a){"use strict";a("60fd")},f6d5:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"common-search"},[a("div",{ref:"opeSlideBox",staticClass:"operateBox"},[a("div",{staticClass:"searchBox"},[a("div",{staticClass:"itemBox"},e._l(e.headArr,(function(t,s){return a("div",{key:s},[t.noSearchShow?e._e():a("div",{staticClass:"searchItem"},["文本"==t.fieldType?a("div",["文本"==t.fieldType?a("div",{staticClass:"searchTit"},[e._v(e._s(t.fieldName))]):e._e(),"文本"==t.fieldType?a("el-input",{attrs:{placeholder:"请输入搜索内容","prefix-icon":"el-icon-search",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.clickSearch()}},model:{value:t.searchValKey,callback:function(a){e.$set(t,"searchValKey",a)},expression:"item.searchValKey"}}):e._e()],1):e._e(),"值列"==t.fieldType?a("div",["值列"==t.fieldType?a("div",{staticClass:"searchTit"},[e._v(e._s(t.fieldName))]):e._e(),"值列"==t.fieldType?a("el-select",{attrs:{clearable:"",placeholder:"请选择"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.clickSearch()}},model:{value:t.searchValKey,callback:function(a){e.$set(t,"searchValKey",a)},expression:"item.searchValKey"}},e._l(t.fieldAttr,(function(e){return a("el-option",{key:e.optionKey,attrs:{label:e.optionValue,value:e.optionKey}})})),1):e._e()],1):e._e(),"日期"==t.fieldType?a("div",["日期"==t.fieldType?a("div",{staticClass:"searchTit"},[e._v(e._s(t.fieldName))]):e._e(),"日期"==t.fieldType?a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.onChange},model:{value:t.searchValKey,callback:function(a){e.$set(t,"searchValKey",a)},expression:"item.searchValKey"}}):e._e()],1):e._e(),"时间"==t.fieldType?a("div",["时间"==t.fieldType?a("div",{staticClass:"searchTit"},[e._v(e._s(t.fieldName))]):e._e(),"时间"==t.fieldType?a("el-time-picker",{attrs:{"is-range":"","value-format":"HH:mm","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"},model:{value:t.searchValKey,callback:function(a){e.$set(t,"searchValKey",a)},expression:"item.searchValKey"}}):e._e()],1):e._e(),"日期时间"==t.fieldType?a("div",["日期时间"==t.fieldType?a("div",{staticClass:"searchTit"},[e._v(e._s(t.fieldName))]):e._e(),"日期时间"==t.fieldType?a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.searchValKey,callback:function(a){e.$set(t,"searchValKey",a)},expression:"item.searchValKey"}}):e._e()],1):e._e()])])})),0),a("div",{staticClass:"searchBtnBox"},[a("el-button",{attrs:{size:"small",icon:"el-icon-refresh",type:"primary"},on:{click:function(t){return e.clickSearch()}}},[e._v("查询")]),a("el-button",{attrs:{size:"small",icon:"el-icon-close",type:"info"},on:{click:function(t){return e.clearSearch()}}},[e._v("清空")])],1),e.foldFlag?a("div",{staticClass:"moreBtn",on:{click:e.clickMore}},[e.foldFlag?a("i",{staticClass:"el-icon-caret-bottom"}):e._e()]):a("div",{staticClass:"newMoreBtn",on:{click:e.clickMore}},[a("i",{staticClass:"el-icon-caret-top"})])])])])},i=[],l={name:"CommonSearch",props:{headTitArr:Array,pageNum:Number,pageSize:Number,OtherData:Object,serverName:String,requestUrl:String,cmdVal:Number},data(){return{height:"180px",searchName:"",foldFlag:!0,headArr:"",tableEmptyText:"",total:"",tableData:"",pMsg:[{key:"pageNum",value:"1",isTrue:!0,msg:"请确认pageNum"},{key:"pageSize",value:"10",isTrue:!0,msg:"请确认pageSize"}]}},created(){this.headArr=this.headTitArr,this.curRequestUrl=this.requestUrl,this.headArr.forEach(e=>{"值列"===e.fieldType&&e.fieldAttr&&"string"===typeof e.fieldAttr&&(e.fieldAttr=JSON.parse(e.fieldAttr))})},mounted(){},activated(){},methods:{onChange(){},clickMore(){this.foldFlag=!this.foldFlag,this.foldFlag?(this.$refs.opeSlideBox.style.height="60px",this.$refs.opeSlideBox.style.overflow="hidden"):(this.$refs.opeSlideBox.style.height=this.height,this.$refs.opeSlideBox.style.overflow="auto")},parentMsgs(e){this.pMsg=e,this.searchList()},parentMsg(){},getRequestUrl(e,t){},parentHeadArr(e){},sendOptions(e){},handleChangeBand(e){},resetSearch(e,t){this.pMsg=e;let a=null;t&&(a=t),this.clearSearch(a)},clickSearch(){this.searchList(1)},searchList(e){e&&this.pMsg.forEach(t=>{"pageNum"===t.key&&(t.value=e)}),this.$emit("changeLoading",!0);let t="";this.headArr.forEach(e=>{e.searchValKey&&("日期"===e.fieldType?t+=`"start${e.fieldKey}":"${e.searchValKey[0]}","end${e.fieldKey}":"${e.searchValKey[1]}",`:t+=`"${e.fieldKey}":"${e.searchValKey}",`)});let a="";for(let d=0;d<this.pMsg.length;d++)this.pMsg[d].isTrue&&!this.pMsg[d].value?(this.$message({message:this.pMsg[d].msg,type:"warning"}),this.$emit("changeLoading",!1)):a+=`"${this.pMsg[d].key}":"${this.pMsg[d].value}",`;for(let d in this.OtherData)a+=`"${d}":"${this.OtherData[d]}",`;const s=null;let i="",l="",r="";l+=s?`{${t}${a}${s}}`:`{${t}${a}}`;const n=l.slice(0,l.length-2),o=l.substr(l.length-1,1);if(i=n+o,r=JSON.parse(i),this.curRequestUrl){const t=this,a=t.GLOBAL.paramJson(r);t.$axios.post(t.curRequestUrl,a).then(a=>{t.$emit("changeLoading",!1),0===a.data.head.status&&(a.data.body.result?t.tableData=a.data.body.result:a.data.body.resultList?t.tableData=a.data.body.resultList:a.data.body.usersList?t.tableData=a.data.body.usersList:a.data.body.allResultList&&(t.tableData=a.data.body.allResultList),0===t.tableData.length&&(t.tableEmptyText="暂无数据",t.$message({message:"请求成功，暂无数据",type:"success"})),a.data.body.totalCount?t.total=a.data.body.totalCount:a.data.body.count&&(t.total=a.data.body.count),t.$emit("sendData",t.tableData,t.total,t.tableEmptyText,e,r))})}},clearSearch(e){const t=e||1;this.$emit("changeLoading",!0),this.pMsg.forEach(e=>{"pageNum"===e.key&&(e.value=t)});let a="";this.headArr.forEach(e=>{e.searchValKey&&(this.$set(e,"searchValKey",""),"日期"===e.fieldType?a+=`"start${e.fieldKey}":"${e.searchValKey[0]}","end${e.fieldKey}":"${e.searchValKey[1]}",`:a+=`"${e.fieldKey}":"${e.searchValKey}",`)});let s="";for(let h=0;h<this.pMsg.length;h++)this.pMsg[h].isTrue&&!this.pMsg[h].value?(this.$message({message:this.pMsg[h].msg,type:"warning"}),this.$emit("changeLoading",!1)):s+=`"${this.pMsg[h].key}":"${this.pMsg[h].value}",`;let i="",l="";l+=`{${a}${s}}`;const r=l.slice(0,i.length-2),n=l.substr(i.length-1,1);i=r+n;const o=JSON.parse(i),d=this,c=d.GLOBAL.paramJson(o);d.$axios.post(d.curRequestUrl,c).then(e=>{d.$emit("changeLoading",!1),0===e.data.head.status&&(e.data.body.result?d.tableData=e.data.body.result:e.data.body.resultList?d.tableData=e.data.body.resultList:e.data.body.usersList?d.tableData=e.data.body.usersList:e.data.body.allResultList&&(d.tableData=e.data.body.allResultList),0===d.tableData.length&&(d.tableEmptyText="暂无数据",d.$message({message:"请求成功，暂无数据",type:"success"})),e.data.body.totalCount?d.total=e.data.body.totalCount:e.data.body.count&&(d.total=e.data.body.count),d.$emit("sendData",d.tableData,d.total,d.tableEmptyText,t))})}}},r=l,n=(a("72fc"),a("b709")),o=Object(n["a"])(r,s,i,!1,null,"1aad5c45",null);t["a"]=o.exports}}]);