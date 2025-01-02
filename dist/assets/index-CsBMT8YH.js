import{C as D}from"./vue-CElWWfqs.js";import{f,g as e,h as b,o as A,i as I,r as h,c as E,d as n,b as a,e as s,F as k,w as t,j as w,k as K,_ as x,l as P,u as B,a as N}from"./index-jpO2U1d9.js";/* empty css                                                            */const V=f({__name:"index.md.Virtual0860faaf",setup(u){const l=e({}),p=e([{componentName:"mInput",uploadKey:"1mInput",formItemProps:{label:"mInput1"}}]);return b(l,()=>{console.log("formRef.value",l.value)},{deep:!0}),(m,r)=>{const o=h("m-form");return A(),I(o,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c),items:p.value},null,8,["modelValue","items"])}}}),S=f({__name:"index.md.Virtual380a735a",setup(u){const l=e({}),p=e([{componentName:"mInput",uploadKey:"mInput1",defaultValue:"设置的默认值",formItemProps:{label:"mInput1"}},{componentName:"mInput",uploadKey:"mInput2",formItemProps:{label:"Input2",tooltip:"label配置"}},{componentName:"mInput",uploadKey:"mInput3",formItemProps:{label:"mInput3"},componentProps:{label:"mInput3",prefix:"prefix"}},{componentName:"mInput",uploadKey:"mInput4",formItemProps:{label:"mInp4"}}]),m={mInput4:[{required:!0,message:"必填",trigger:"change"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}]};return b(l,()=>{console.log("formRef.value",l.value)},{deep:!0}),(r,o)=>{const c=h("m-form");return A(),E("div",null,[n(c,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=d=>l.value=d),items:p.value,rules:m},null,8,["modelValue","items"])])}}}),T=f({__name:"index.md.Virtualc42c7cfa",setup(u){const l=e({}),p=e([{componentName:"mFormItemDes",uploadKey:"val1",defaultValue:"123321",formItemProps:{label:"mInput1"}},{componentName:"mFormItemDes",uploadKey:"val2",formItemProps:{label:"mInput2"}},{componentName:"mFormItemDes",uploadKey:"val3",defaultValue:"123321",formItemProps:{label:"mInput3"}},{componentName:"mFormItemDes",uploadKey:"val4",defaultValue:"123321",formItemProps:{label:"mInput4"}}]);return b(l,()=>{console.log("formRef.value",l.value)},{deep:!0}),setTimeout(()=>{l.value={val1:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"}},1e3*3),(m,r)=>{const o=h("m-form");return A(),I(o,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c),items:p.value,layout:"vertical"},null,8,["modelValue","items"])}}}),Y={class:"mb-8px flex items-center"},z=f({__name:"index.md.Virtual71b145f7",setup(u){const l=e({}),p=e(!1),m=e([{componentName:"mInput",uploadKey:"mInput1",defaultValue:"默认值",hidden:p,formItemProps:{label:"mInput1"}},{componentName:"mInput",uploadKey:"mInput2",formItemProps:{label:"mInput2"}}]);return b(l,()=>{console.log("formRef.value",l.value)},{deep:!0}),(r,o)=>{const c=h("m-switch"),d=h("m-form");return A(),E(k,null,[a("div",Y,[s("展示"),n(c,{checked:p.value,"onUpdate:checked":o[0]||(o[0]=i=>p.value=i)},null,8,["checked"]),s("隐藏")]),n(d,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=i=>l.value=i),items:m.value},null,8,["modelValue","items"])],64)}}}),M={class:"flex mb-8px"},U=f({__name:"index.md.Virtual696c44cb",setup(u){const l=e({}),p=e(!0),m=e(3),r=e("horizontal"),o=e({span:6}),c=e({span:18}),d=e([{componentName:"mInput",uploadKey:"1mInput",formItemProps:{label:"mInput1"}},{componentName:"mInput",uploadKey:"2mInput",formItemProps:{label:"mInput2"}},{componentName:"mInput",uploadKey:"3mInput",formItemProps:{label:"mInput3"}},{componentName:"mInput",uploadKey:"4mInput",formItemProps:{label:"mInp4"}},{componentName:"mInput",uploadKey:"5mInput",formItemProps:{label:"mInp5"}},{componentName:"mInput",uploadKey:"6mInput",formItemProps:{label:"mInp6"}}]);function i(){r.value==="horizontal"?p.value=!0:p.value=!1}function y(){r.value==="horizontal"&&(c.value.span=24-o.value.span)}return b(l,()=>{console.log("formRef.value",l.value)},{deep:!0}),(_,j)=>{const g=h("m-select-option"),C=h("m-select"),F=h("m-slider"),R=h("m-form");return A(),E("div",null,[a("div",M,[n(C,{value:m.value,"onUpdate:value":j[0]||(j[0]=v=>m.value=v)},{default:t(()=>[n(g,{value:5},{default:t(()=>[s("5列")]),_:1}),n(g,{value:4},{default:t(()=>[s("4列")]),_:1}),n(g,{value:3},{default:t(()=>[s("3列")]),_:1}),n(g,{value:2},{default:t(()=>[s("2列")]),_:1}),n(g,{value:1},{default:t(()=>[s("1列")]),_:1})]),_:1},8,["value"]),n(C,{value:r.value,"onUpdate:value":j[1]||(j[1]=v=>r.value=v),class:"ml-8px",onChange:i},{default:t(()=>[n(g,{value:"horizontal"},{default:t(()=>[s("水平")]),_:1}),n(g,{value:"vertical"},{default:t(()=>[s("竖直")]),_:1})]),_:1},8,["value"]),n(F,{value:o.value.span,"onUpdate:value":j[2]||(j[2]=v=>o.value.span=v),min:1,max:23,onChange:y,class:"w-100px"},null,8,["value"]),n(F,{value:c.value.span,"onUpdate:value":j[3]||(j[3]=v=>c.value.span=v),min:1,max:23,disabled:p.value,class:"w-100px ml-8px"},null,8,["value","disabled"])]),n(R,{modelValue:l.value,"onUpdate:modelValue":j[4]||(j[4]=v=>l.value=v),items:d.value,columnsNumber:m.value,layout:r.value,labelCol:o.value,wrapperCol:c.value},null,8,["modelValue","items","columnsNumber","layout","labelCol","wrapperCol"])])}}}),L=f({__name:"index.md.Virtual5fe27108",setup(u){const l=e({}),p=e([{componentName:"mCascader",uploadKey:"1mCascader",formItemProps:{label:"mCascader"},componentProps:{multiple:!0,options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{componentName:"mDatePicker",uploadKey:"2mDatePicker",formItemProps:{label:"日期"},componentProps:{format:"YYYY/MM/DD"}},{componentName:"mCheckbox",uploadKey:"3mCheckbox",formItemProps:{label:"选择"}},{componentName:"mCheckboxGroup",uploadKey:"4mCheckboxGroup",formItemProps:{label:"多选"},componentProps:{options:[{label:"Apple",value:"AppleValue"},{label:"Pear",value:"Pear"},{label:"Ora",value:"Ora"}]}},{componentName:"mRangePicker",uploadKey:"5mRangePicker",formItemProps:{label:"日期范围"},componentProps:{format:"YYYY/MM/DD"}},{componentName:"mInput",uploadKey:"6mInput",defaultValue:"111",formItemProps:{label:"mInput"}},{componentName:"mInputNumber",uploadKey:"7mInputNumber",formItemProps:{label:"数字输入"},componentProps:{min:1,max:10}},{componentName:"mRadioGroup",uploadKey:"8mRadioGroup",formItemProps:{label:"单选"},componentProps:{options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Ora",value:"Ora",disabled:!0}]}},{componentName:"mRate",uploadKey:"9mRate",formItemProps:{label:"mRate"}},{componentName:"mSelect",uploadKey:"10mSelect",defaultValue:[],formItemProps:{label:"mSelect"},componentProps:{mode:"multiple",options:[{value:"value1",label:"1"},{value:"value2",label:"2"},{value:"value3",label:"3"}]}},{componentName:"mSlider",uploadKey:"11mSlider",formItemProps:{label:"mSlider"}},{componentName:"mSwitch",uploadKey:"12mSwitch",formItemProps:{label:"mSwitch"}},{componentName:"mTimePicker",uploadKey:"13mTimePicker",formItemProps:{label:"时间"}},{componentName:"mTimeRangePicker",uploadKey:"14mTimeRangePicker",formItemProps:{label:"时间范围"}},{componentName:"mTreeSelect",uploadKey:"15mTreeSelect",formItemProps:{label:"树形选择"},componentProps:{treeData:[{label:"root 1",value:"root 1",children:[{label:"parent 1",value:"parent 1",children:[{label:"parent 1-0",value:"parent 1-0",children:[{label:"my leaf",value:"leaf1"},{label:"your leaf",value:"leaf2"}]},{label:"parent 1-1",value:"parent 1-1"}]},{label:"parent 2",value:"parent 2"}]}]}},{componentName:"mUpload",uploadKey:"16mUpload",formItemProps:{label:"mUpload"},defaultValue:[{name:"1",url:"https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png"}],componentProps:{uploadAsync:function(){return Promise.resolve({name:"测试1",url:"https://www.runoob.com/try/demo_source/pineapple.jpg"})}}},{componentName:"mPreviewDownload",uploadKey:"图片",defaultValue:"https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png",formItemProps:{label:"图片"}},{componentName:"mPreviewDownload",uploadKey:"18mPreviewDownload",defaultValue:"https://www.runoob.com/try/demo_source/horse.ogg",formItemProps:{label:"音频"}},{componentName:"mPreviewDownload",uploadKey:"19mPreviewDownload",defaultValue:"https://www.runoob.com/try/demo_source/movie.mp4",formItemProps:{label:"视频"}},{componentName:"mPreviewDownload",uploadKey:"20mPreviewDownload",defaultValue:"https://static.jyshare.com/download/sites.xlsx",formItemProps:{label:"xlsx"}},{componentName:"mPreviewDownload",uploadKey:"21mPreviewDownload",defaultValue:"https://www.runoob.com/manual/github-git-cheat-sheet.pdf",formItemProps:{label:"pdf"}}]);return b(l,()=>{console.log("formRef.value",l.value)},{deep:!0}),(m,r)=>{const o=h("m-form");return A(),I(o,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c),items:p.value},null,8,["modelValue","items"])}}}),$=f({__name:"index.md.Virtual1862b0e5",setup(u){const l=e({}),p=e([{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0"},{title:"parent 1-1",key:"0-0-1"},{title:"parent 1-2",key:"0-0-2"}]}]),m=e([{componentName:"mTree",uploadKey:"menus",formItemProps:{label:"测试"},defaultValue:[],vModelKey:"checkedKeys",componentProps:{checkable:!0,treeData:w(()=>p.value),onCheck(r){l.value.menus=r}}}]);return setTimeout(()=>{l.value.menus=["0-0-1"]},1e3),(r,o)=>{const c=h("m-form");return A(),I(c,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=d=>l.value=d),items:m.value},null,8,["modelValue","items"])}}}),G=f({props:{value:String,columns:Array,data:Array},setup(u,{emit:l}){return{customSelf:K(u,"value",l)}}}),O=a("span",null,"我是自定义组件",-1);function J(u,l,p,m,r,o){const c=h("m-input"),d=h("m-table");return A(),E("div",null,[O,n(c,{value:u.customSelf,"onUpdate:value":l[0]||(l[0]=i=>u.customSelf=i),class:"mt-8px"},null,8,["value"]),n(d,{class:"mt-8px",columns:u.columns,dataSource:u.data,pagination:!1},null,8,["columns","dataSource"])])}const q=x(G,[["render",J]]),H=f({__name:"index.md.Virtual310ef933",setup(u){const l=e({}),p=e([{componentName:q,uploadKey:"custom",defaultValue:"123",formItemProps:{label:"自定义组件"},componentProps:{columns:[{title:"Name",dataIndex:"name",width:200},{title:"Cash Assets",dataIndex:"money",width:200},{title:"Address",dataIndex:"address"}],data:[{name:"John Brown",money:"￥300,000.00",address:"New York No. 1 Lake Park"},{name:"Jim Green",money:"￥1,256,000.00",address:"London No. 1 Lake Park"},{name:"Joe Black",money:"￥120,000.00",address:"Sidney No. 1 Lake Park"}]}}]);return b(l,()=>{console.log("formRef.value",l.value)},{deep:!0}),(m,r)=>{const o=h("m-form");return A(),I(o,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c),items:p.value},null,8,["modelValue","items"])}}}),Z={class:"mb-8px flex items-center"},W={key:0},Q={key:1},X=f({__name:"index.md.Virtual34b5e8ea",setup(u){const l=e(),p=e({}),m=e(!1),r=e([{componentName:"mInput",uploadKey:"mInput1",hidden:m,formItemProps:{label:"mInput1"}},{componentName:"mInput",uploadKey:"mInput2",defaultValue:"默认值",formItemProps:{label:"mInput2"},componentProps:{showCount:!0}},{componentName:"mInput",hidden:m,uploadKey:"mInput3",formItemProps:{label:"mInput3",rules:w(()=>m.value?null:[{required:!0,message:"form-item设置的必填",trigger:"change"}])}}]),o=w(()=>m.value?null:{mInput1:[{required:!0,message:"form设置的必填",trigger:"change"}]}),c=e([{async confirmAsync(){await l.value.antFormComponent.validate(),console.log(111)},label:"通过",mode:"success"}]);return b(p,()=>{console.log("formRef.value",p.value)},{deep:!0}),(d,i)=>{const y=h("m-title"),_=h("m-switch"),j=h("m-form"),g=h("m-footer");return A(),E(k,null,[n(y,null,{default:t(()=>[s("表单标题")]),_:1}),a("div",Z,[s("展示"),n(_,{checked:m.value,"onUpdate:checked":i[0]||(i[0]=C=>m.value=C)},null,8,["checked"]),s("隐藏")]),n(j,{ref_key:"formComRef",ref:l,modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=C=>p.value=C),items:r.value,rules:o.value},{prefix:t(C=>[C.uploadKey==="mInput1"?(A(),E("div",W," 1prefix插槽 ")):P("",!0),C.uploadKey==="mInput2"?(A(),E("div",Q," 2prefix插槽 ")):P("",!0)]),_:1},8,["modelValue","items","rules"]),n(g,{items:c.value},null,8,["items"])],64)}}}),ss={class:"marked-body"},as=N('<h2 id="form表单">Form表单</h2><h3 id="简单使用">简单使用</h3><ul><li>label默认靠右对齐</li><li>label默认自动在结尾加冒号</li><li>在m-form标签上写的内容会直接传递给a-form</li><li>在m-form标签中的插槽会传递给数据录入的各个组件</li><li>items包含：</li><li><ul><li>绑定对象的配置；</li></ul></li><li><ul><li>formItemProps中的内容会传给a-form-item；</li></ul></li><li><ul><li>componentProps的内容会传递给组件；</li></ul></li></ul><h4 id="items精简配置">items精简配置</h4>',4),ls=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-form"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formRef"'),s(`
        `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" formRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});

`),a("span",{class:"hljs-keyword"},"const"),s(" items = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'1mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput1'"),s(` }
  }
]);

`),a("span",{class:"hljs-title function_"},"watch"),s(`(
    formRef,
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'formRef.value'"),s(", formRef."),a("span",{class:"hljs-property"},"value"),s(`);
    },
    {
      `),a("span",{class:"hljs-attr"},"deep"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
);

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),ns=a("h4",{id:"items全部配置"},"items全部配置",-1),ts=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-form"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formRef"'),s(`
        `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" formRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});

`),a("span",{class:"hljs-keyword"},"const"),s(" items = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'mInput1'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'设置的默认值'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput1'"),s(` },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'mInput2'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: { 
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Input2'"),s(`,
        `),a("span",{class:"hljs-attr"},"tooltip"),s(": "),a("span",{class:"hljs-string"},"'label配置'"),s(`
    },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'mInput3'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput3'"),s(` },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput3'"),s(", "),a("span",{class:"hljs-attr"},"prefix"),s(": "),a("span",{class:"hljs-string"},"'prefix'"),s(` },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'mInput4'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: { 
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInp4'"),s(`
    },
  },
]);

`),a("span",{class:"hljs-keyword"},"const"),s(` rules = {
        `),a("span",{class:"hljs-attr"},"mInput4"),s(`: [
            { `),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(", "),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'必填'"),s(", "),a("span",{class:"hljs-attr"},"trigger"),s(": "),a("span",{class:"hljs-string"},"'change'"),s(` },
            { `),a("span",{class:"hljs-attr"},"min"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"max"),s(": "),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'Length should be 3 to 5'"),s(", "),a("span",{class:"hljs-attr"},"trigger"),s(": "),a("span",{class:"hljs-string"},"'blur'"),s(` },
          ]
    }

`),a("span",{class:"hljs-title function_"},"watch"),s(`(
    formRef,
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'formRef.value'"),s(", formRef."),a("span",{class:"hljs-property"},"value"),s(`);
    },
    {
      `),a("span",{class:"hljs-attr"},"deep"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
);

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),es=a("h3",{id:"返显"},"返显",-1),ps=a("ul",null,[a("li",null,"常用语详情页等展示")],-1),os=a("h4",{id:"配置"},"配置",-1),rs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-form"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formRef"'),s(`
        `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
        `),a("span",{class:"hljs-attr"},"layout"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" formRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});

`),a("span",{class:"hljs-keyword"},"const"),s(" items = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mFormItemDes'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'val1'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'123321'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput1'"),s(` },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mFormItemDes'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'val2'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput2'"),s(` },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mFormItemDes'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'val3'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'123321'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput3'"),s(` },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mFormItemDes'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'val4'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'123321'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput4'"),s(` },
  },
]);

`),a("span",{class:"hljs-title function_"},"watch"),s(`(
    formRef,
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'formRef.value'"),s(", formRef."),a("span",{class:"hljs-property"},"value"),s(`);
    },
    {
      `),a("span",{class:"hljs-attr"},"deep"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
);

`),a("span",{class:"hljs-built_in"},"setTimeout"),s(`(
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
        formRef.`),a("span",{class:"hljs-property"},"value"),s(` = {
            `),a("span",{class:"hljs-attr"},"val1"),s(": "),a("span",{class:"hljs-string"},"'这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容'"),s(`
        }
    },
    `),a("span",{class:"hljs-number"},"1000"),s(" * "),a("span",{class:"hljs-number"},"3"),s(`
)

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),cs=a("h3",{id:"隐藏功能"},"隐藏功能",-1),ms=a("ul",null,[a("li",null,"支持某项根据条件进行隐藏")],-1),hs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mb-8px flex items-center"'),s(">")]),s("展示"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-switch"),s(),a("span",{class:"hljs-attr"},"v-model:checked"),s("="),a("span",{class:"hljs-string"},'"hidden"'),s(" />")]),s("隐藏"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-form"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formRef"'),s(`
        `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
    >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" formRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});

`),a("span",{class:"hljs-keyword"},"const"),s(" hidden = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" items = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'mInput1'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'默认值'"),s(`,
    `),a("span",{class:"hljs-attr"},"hidden"),s(`: hidden,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput1'"),s(` }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'mInput2'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput2'"),s(` }
  },
]);

`),a("span",{class:"hljs-title function_"},"watch"),s(`(
    formRef,
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'formRef.value'"),s(", formRef."),a("span",{class:"hljs-property"},"value"),s(`);
    },
    {
      `),a("span",{class:"hljs-attr"},"deep"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
);

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),us=a("h3",{id:"排版"},"排版",-1),As=a("ul",null,[a("li",null,"支持1列、2列、3列（默认）"),a("li",null,"label与组件支持水平（默认）和竖直两种"),a("li",null,"labelCol和wrapperCol的默认值分别是6，18，可以自行调整。水平排列的时候和应为24。竖直排列时不设置labelCol、wrapperCol，默认撑满")],-1),is=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"flex mb-8px"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-select"),s(),a("span",{class:"hljs-attr"},"v-model:value"),s("="),a("span",{class:"hljs-string"},'"columnsNumber"'),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-select-option"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"5"'),s(">")]),s("5列"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-select-option"),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-select-option"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"4"'),s(">")]),s("4列"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-select-option"),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-select-option"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("3列"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-select-option"),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-select-option"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("2列"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-select-option"),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-select-option"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("1列"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-select-option"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-select"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-select"),s(),a("span",{class:"hljs-attr"},"v-model:value"),s("="),a("span",{class:"hljs-string"},'"layout"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"ml-8px"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-select-option"),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"horizontal"'),s(">")]),s("水平"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-select-option"),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-select-option"),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(">")]),s("竖直"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-select-option"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-select"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-slider"),s(),a("span",{class:"hljs-attr"},"v-model:value"),s("="),a("span",{class:"hljs-string"},'"labelCol.span"'),s(),a("span",{class:"hljs-attr"},":min"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":max"),s("="),a("span",{class:"hljs-string"},'"23"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleLabelChange"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"w-100px"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-slider"),s(),a("span",{class:"hljs-attr"},"v-model:value"),s("="),a("span",{class:"hljs-string"},'"wrapperCol.span"'),s(),a("span",{class:"hljs-attr"},":min"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":max"),s("="),a("span",{class:"hljs-string"},'"23"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"sliderDisabled"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"w-100px ml-8px"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-form"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formRef"'),s(`
        `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
        `),a("span",{class:"hljs-attr"},":columnsNumber"),s("="),a("span",{class:"hljs-string"},'"columnsNumber"'),s(`
        `),a("span",{class:"hljs-attr"},":layout"),s("="),a("span",{class:"hljs-string"},'"layout"'),s(`
        `),a("span",{class:"hljs-attr"},":labelCol"),s("="),a("span",{class:"hljs-string"},'"labelCol"'),s(`
        `),a("span",{class:"hljs-attr"},":wrapperCol"),s("="),a("span",{class:"hljs-string"},'"wrapperCol"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" formRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});

`),a("span",{class:"hljs-keyword"},"const"),s(" sliderDisabled = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" columnsNumber = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"3"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" layout = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'horizontal'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" labelCol="),a("span",{class:"hljs-title function_"},"ref"),s(`({
    `),a("span",{class:"hljs-attr"},"span"),s(": "),a("span",{class:"hljs-number"},"6"),s(`
})
`),a("span",{class:"hljs-keyword"},"const"),s(" wrapperCol="),a("span",{class:"hljs-title function_"},"ref"),s(`({
    `),a("span",{class:"hljs-attr"},"span"),s(": "),a("span",{class:"hljs-number"},"18"),s(`
})

`),a("span",{class:"hljs-keyword"},"const"),s(" items = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'1mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput1'"),s(` },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'2mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput2'"),s(` },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'3mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput3'"),s(` },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'4mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: { 
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInp4'"),s(`,
    },
  },
    {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'5mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: { 
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInp5'"),s(`,
    },
  },
    {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'6mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: { 
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInp6'"),s(`,
    },
  },
]);

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleSelect"),s("("),a("span",{class:"hljs-params"}),s(`) {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (layout."),a("span",{class:"hljs-property"},"value"),s(" === "),a("span",{class:"hljs-string"},"'horizontal'"),s(`) {
            sliderDisabled.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`
    } `),a("span",{class:"hljs-keyword"},"else"),s(` {
            sliderDisabled.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`
    }
}

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleLabelChange"),s("("),a("span",{class:"hljs-params"}),s(`) {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (layout."),a("span",{class:"hljs-property"},"value"),s(" === "),a("span",{class:"hljs-string"},"'horizontal'"),s(`) {
            wrapperCol.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"span"),s(" = "),a("span",{class:"hljs-number"},"24"),s(" - labelCol."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"span"),s(`
    }
}

`),a("span",{class:"hljs-title function_"},"watch"),s(`(
    formRef,
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'formRef.value'"),s(", formRef."),a("span",{class:"hljs-property"},"value"),s(`);
    },
    {
      `),a("span",{class:"hljs-attr"},"deep"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
);

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),js=a("h3",{id:"内置组件"},"内置组件",-1),ds=a("ul",null,[a("li",null,"支持ant-design-vue中数据录入部分的所有组件"),a("li",null,"支持preview-download组件"),a("li",null,"以上组件在form中做了以下集成，所以配置中不需要进行设置以下属性"),a("li",null,[a("ul",null,[a("li",null,"v-model对应关系，如v-model:value或v-model:checked的value或者checked")])]),a("li",null,[a("ul",null,[a("li",null,"默认值")])])],-1),fs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-form"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formRef"'),s(`
        `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" formRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});

`),a("span",{class:"hljs-keyword"},"const"),s(" items = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mCascader'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'1mCascader'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mCascader'"),s(`
    },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"multiple"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
      `),a("span",{class:"hljs-attr"},"options"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'zhejiang'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Zhejiang'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'hangzhou'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Hangzhou'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'xihu'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'West Lake'"),s(` }
              ]
            }
          ]
        },
        {
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'jiangsu'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Jiangsu'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'nanjing'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Nanjing'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'zhonghuamen'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Zhong Hua Men'"),s(` }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mDatePicker'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'2mDatePicker'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期'"),s(`
    },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"format"),s(": "),a("span",{class:"hljs-string"},"'YYYY/MM/DD'"),s(`
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mCheckbox'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'3mCheckbox'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'选择'"),s(` }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mCheckboxGroup'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'4mCheckboxGroup'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'多选'"),s(`
    },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"options"),s(`: [
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Apple'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'AppleValue'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Pear'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Pear'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ora'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Ora'"),s(`}
      ]
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mRangePicker'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'5mRangePicker'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'日期范围'"),s(` },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(": { "),a("span",{class:"hljs-attr"},"format"),s(": "),a("span",{class:"hljs-string"},"'YYYY/MM/DD'"),s(` }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'6mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'111'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(` },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInputNumber'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'7mInputNumber'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'数字输入'"),s(` },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(": { "),a("span",{class:"hljs-attr"},"min"),s(": "),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-attr"},"max"),s(": "),a("span",{class:"hljs-number"},"10"),s(` }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mRadioGroup'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'8mRadioGroup'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'单选'"),s(` },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"options"),s(`: [
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Apple'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Apple'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Pear'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Pear'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'Ora'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'Ora'"),s(", "),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`}
      ]
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mRate'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'9mRate'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mRate'"),s(` },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mSelect'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'10mSelect'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(`: [],
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mSelect'"),s(` },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"mode"),s(": "),a("span",{class:"hljs-string"},"'multiple'"),s(`,
      `),a("span",{class:"hljs-attr"},"options"),s(`: [
        { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'value1'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(` },
        { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'value2'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'2'"),s(` },
        { `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'value3'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'3'"),s(` },
      ]
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mSlider'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'11mSlider'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mSlider'"),s(`
    },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mSwitch'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'12mSwitch'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mSwitch'"),s(`
    },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mTimePicker'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'13mTimePicker'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'时间'"),s(`
    },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mTimeRangePicker'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'14mTimeRangePicker'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'时间范围'"),s(`
    },
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mTreeSelect'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'15mTreeSelect'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'树形选择'"),s(`
    },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"treeData"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'root 1'"),s(`,
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'root 1'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'parent 1'"),s(`,
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'parent 1'"),s(`,
              `),a("span",{class:"hljs-attr"},"children"),s(`: [
                {
                  `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'parent 1-0'"),s(`,
                  `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'parent 1-0'"),s(`,
                  `),a("span",{class:"hljs-attr"},"children"),s(`: [
                    {
                      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'my leaf'"),s(`,
                      `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'leaf1'"),s(`
                    },
                    {
                      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'your leaf'"),s(`,
                      `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'leaf2'"),s(`
                    }
                  ]
                },
                {
                  `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'parent 1-1'"),s(`,
                  `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'parent 1-1'"),s(`
                }
              ]
            },
            {
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'parent 2'"),s(`,
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'parent 2'"),s(`
            }
          ]
        }
      ]
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mUpload'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'16mUpload'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mUpload'"),s(`
    },
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'1'"),s(`,
        `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png'"),s(`,
      }
    ],
    `),a("span",{class:"hljs-attr"},"componentProps"),s(`: {
        `),a("span",{class:"hljs-attr"},"uploadAsync"),s(": "),a("span",{class:"hljs-keyword"},"function"),s("("),a("span",{class:"hljs-params"}),s(`) {
           `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("."),a("span",{class:"hljs-title function_"},"resolve"),s(`({
                `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'测试1'"),s(`,
                `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/pineapple.jpg'"),s(`
            })
        }
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mPreviewDownload'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'图片'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'图片'"),s(`
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mPreviewDownload'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'18mPreviewDownload'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/horse.ogg'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'音频'"),s(`
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mPreviewDownload'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'19mPreviewDownload'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/movie.mp4'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'视频'"),s(`
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mPreviewDownload'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'20mPreviewDownload'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'https://static.jyshare.com/download/sites.xlsx'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'xlsx'"),s(`
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mPreviewDownload'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'21mPreviewDownload'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/manual/github-git-cheat-sheet.pdf'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'pdf'"),s(`
    },
  },
]);

`),a("span",{class:"hljs-title function_"},"watch"),s(`(
    formRef,
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'formRef.value'"),s(", formRef."),a("span",{class:"hljs-property"},"value"),s(`);
    },
    {
      `),a("span",{class:"hljs-attr"},"deep"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
);

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),gs=a("h3",{id:"v-modelkey"},"v-model:key",-1),Cs=a("ul",null,[a("li",null,"在ant-design-vue的组件中，v-model绑定的key值不确定时的情况，即非上方文档 内置组件 中的组件，传入 vModelKey")],-1),vs=a("h4",{id:"配置-1"},"配置",-1),Ds=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-form"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formRef"'),s(`
        `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch, computed} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" formRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});

`),a("span",{class:"hljs-keyword"},"const"),s(" menusRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'parent 1'"),s(`,
    `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'0-0'"),s(`,
    `),a("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'parent 1-0'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'0-0-0'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'parent 1-1'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'0-0-1'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'parent 1-2'"),s(`,
        `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-string"},"'0-0-2'"),s(`,
      },
    ],
  },
])

`),a("span",{class:"hljs-keyword"},"const"),s(" items = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
 {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mTree'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'menus'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'测试'"),s(`
    },
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(`: [],
    `),a("span",{class:"hljs-attr"},"vModelKey"),s(": "),a("span",{class:"hljs-string"},"'checkedKeys'"),s(`,
    `),a("span",{class:"hljs-attr"},"componentProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"checkable"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
      `),a("span",{class:"hljs-attr"},"treeData"),s(": "),a("span",{class:"hljs-title function_"},"computed"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-keyword"},"return"),s(" menusRef."),a("span",{class:"hljs-property"},"value"),s(`;
      }),
      `),a("span",{class:"hljs-title function_"},"onCheck"),s("("),a("span",{class:"hljs-params"},"val"),s(`) {
        formRef.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"menus"),s(` = val;
      }
    }
  }
]);

`),a("span",{class:"hljs-built_in"},"setTimeout"),s(`(
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
        formRef.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"menus"),s(" = ["),a("span",{class:"hljs-string"},"'0-0-1'"),s(`]
    },
    `),a("span",{class:"hljs-number"},"1000"),s(`
)

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),Bs=a("h3",{id:"自定义组件"},"自定义组件",-1),Es=a("ul",null,[a("li",null,"当内置组件无法满足需求时，可以进行自定义组件的配置"),a("li",null,[a("ul",null,[a("li",null,"需要注册全局组件")])]),a("li",null,[a("ul",null,[a("li",null,"componentProps中的参数会注入组件")])]),a("li",null,[a("ul",null,[a("li",null,"会传递一个value，这个value的值就是uploadKey，子组件触发update:value，会修改绑定的model对象")])])],-1),bs=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-form"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formRef"'),s(`
        `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"import"),s(" test "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'./component/test/index.vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" formRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});

`),a("span",{class:"hljs-keyword"},"const"),s(" items = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": test, "),a("span",{class:"hljs-comment"},"// 全局注册的组件名称"),s(`
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'custom'"),s(", "),a("span",{class:"hljs-comment"},"// form表单中的key"),s(`
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'123'"),s(", "),a("span",{class:"hljs-comment"},"// 默认值"),s(`
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'自定义组件'"),s(`
    },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(`: {
      `),a("span",{class:"hljs-attr"},"columns"),s(`: [
        { `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'Name'"),s(", "),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(` },
        { `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'Cash Assets'"),s(", "),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'money'"),s(", "),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(` },
        { `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'Address'"),s(", "),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(` },
      ],
      `),a("span",{class:"hljs-attr"},"data"),s(`: [
        { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'John Brown'"),s(", "),a("span",{class:"hljs-attr"},"money"),s(": "),a("span",{class:"hljs-string"},"'￥300,000.00'"),s(", "),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'New York No. 1 Lake Park'"),s(` },
        { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jim Green'"),s(", "),a("span",{class:"hljs-attr"},"money"),s(": "),a("span",{class:"hljs-string"},"'￥1,256,000.00'"),s(", "),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'London No. 1 Lake Park'"),s(` },
        { `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Joe Black'"),s(", "),a("span",{class:"hljs-attr"},"money"),s(": "),a("span",{class:"hljs-string"},"'￥120,000.00'"),s(", "),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'Sidney No. 1 Lake Park'"),s(` }
      ]
    }
  },
]);

`),a("span",{class:"hljs-title function_"},"watch"),s(`(
    formRef,
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'formRef.value'"),s(", formRef."),a("span",{class:"hljs-property"},"value"),s(`);
    },
    {
      `),a("span",{class:"hljs-attr"},"deep"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
);



`),a("span",{class:"hljs-comment"},"// <template>"),s(`
`),a("span",{class:"hljs-comment"},"//   <div>"),s(`
`),a("span",{class:"hljs-comment"},"//     <span>我是自定义组件</span>"),s(`
`),a("span",{class:"hljs-comment"},'//     <m-input v-model:value="customSelf" class="mt-8px" />'),s(`
`),a("span",{class:"hljs-comment"},'//     <m-table class="mt-8px" :columns="columns" :dataSource="data" :pagination="false" />'),s(`
`),a("span",{class:"hljs-comment"},"//   </div>"),s(`
`),a("span",{class:"hljs-comment"},"// </template>"),s(`
`),a("span",{class:"hljs-comment"},"// "),s(`
`),a("span",{class:"hljs-comment"},"// import { defineComponent } from 'vue';"),s(`
`),a("span",{class:"hljs-comment"},"// import { useVModel } from '@vueuse/core/index';"),s(`
`),a("span",{class:"hljs-comment"},"// "),s(`
`),a("span",{class:"hljs-comment"},"// export default defineComponent({"),s(`
`),a("span",{class:"hljs-comment"},"//   props: {"),s(`
`),a("span",{class:"hljs-comment"},"//     value: String,"),s(`
`),a("span",{class:"hljs-comment"},"//     columns: Array,"),s(`
`),a("span",{class:"hljs-comment"},"//     data: Array"),s(`
`),a("span",{class:"hljs-comment"},"//   },"),s(`
`),a("span",{class:"hljs-comment"},"//   setup(props, { emit }) {"),s(`
`),a("span",{class:"hljs-comment"},"//     const customSelf = useVModel(props, 'value', emit);"),s(`
`),a("span",{class:"hljs-comment"},"// "),s(`
`),a("span",{class:"hljs-comment"},"//     return {"),s(`
`),a("span",{class:"hljs-comment"},"//       customSelf"),s(`
`),a("span",{class:"hljs-comment"},"//     };"),s(`
`),a("span",{class:"hljs-comment"},"//   }"),s(`
`),a("span",{class:"hljs-comment"},"// });"),s(`



`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),Is=a("h3",{id:"antd功能"},"antd功能",-1),ys=a("p",null,"除弃用属性，其余属性、事件、插槽均支持",-1),ws=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-title"),s(">")]),s("表单标题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-title"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mb-8px flex items-center"'),s(">")]),s("展示"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-switch"),s(),a("span",{class:"hljs-attr"},"v-model:checked"),s("="),a("span",{class:"hljs-string"},'"hidden"'),s(" />")]),s("隐藏"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-form"),s(`
        `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"formComRef"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formRef"'),s(`
        `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(`
    >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prefix"),s("="),a("span",{class:"hljs-string"},'"bindValue"'),s(">")]),s(`
           `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},`"bindValue.uploadKey === 'mInput1'"`),s(">")]),s(`
             1prefix插槽
           `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
           `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},`"bindValue.uploadKey === 'mInput2'"`),s(">")]),s(`
             2prefix插槽
           `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-form"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-footer"),s(),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"footerItems"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-footer"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch, computed} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" formComRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`()

`),a("span",{class:"hljs-keyword"},"const"),s(" formRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});

`),a("span",{class:"hljs-keyword"},"const"),s(" hidden = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" items = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'mInput1'"),s(`,
    `),a("span",{class:"hljs-attr"},"hidden"),s(`: hidden,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput1'"),s(` }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'mInput2'"),s(`,
    `),a("span",{class:"hljs-attr"},"defaultValue"),s(": "),a("span",{class:"hljs-string"},"'默认值'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(": { "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput2'"),s(` },
    `),a("span",{class:"hljs-attr"},"componentProps"),s(`: {
        `),a("span",{class:"hljs-attr"},"showCount"),s(":"),a("span",{class:"hljs-literal"},"true"),s(`,
    }
  },
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"hidden"),s(`: hidden,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'mInput3'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: { 
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'mInput3'"),s(`,
        `),a("span",{class:"hljs-attr"},"rules"),s(": "),a("span",{class:"hljs-title function_"},"computed"),s(`(
            `),a("span",{class:"hljs-function"},"() =>"),s(` {
                `),a("span",{class:"hljs-keyword"},"return"),s(" hidden."),a("span",{class:"hljs-property"},"value"),s(" ? "),a("span",{class:"hljs-literal"},"null"),s(` : [
                            { `),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(", "),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'form-item设置的必填'"),s(", "),a("span",{class:"hljs-attr"},"trigger"),s(": "),a("span",{class:"hljs-string"},"'change'"),s(` }
                        ]       
            }
        )
    },
  },
]);

`),a("span",{class:"hljs-keyword"},"const"),s(" rules ="),a("span",{class:"hljs-title function_"},"computed"),s(`(
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-keyword"},"return"),s(" hidden."),a("span",{class:"hljs-property"},"value"),s(" ? "),a("span",{class:"hljs-literal"},"null"),s(` : {
            `),a("span",{class:"hljs-attr"},"mInput1"),s(`: [
                { `),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(", "),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'form设置的必填'"),s(", "),a("span",{class:"hljs-attr"},"trigger"),s(": "),a("span",{class:"hljs-string"},"'change'"),s(` },
              ],
        }       
    }
)

`),a("span",{class:"hljs-keyword"},"const"),s(" footerItems = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
      `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"}),s(`) {
        `),a("span",{class:"hljs-keyword"},"await"),s(" formComRef."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"antFormComponent"),s("."),a("span",{class:"hljs-title function_"},"validate"),s(`()
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-number"},"111"),s(`)
      },
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'通过'"),s(`,
      `),a("span",{class:"hljs-attr"},"mode"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`,
    },
])

`),a("span",{class:"hljs-title function_"},"watch"),s(`(
    formRef,
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'formRef.value'"),s(", formRef."),a("span",{class:"hljs-property"},"value"),s(`);
    },
    {
      `),a("span",{class:"hljs-attr"},"deep"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
);

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),_s=N('<h3 id="form弃用属性">form弃用属性</h3><p>model（已在内部设置好，rules校验不受影响）</p><h3 id="form-item弃用">form-item弃用</h3><p>name（已在内部设置好，rules校验不受影响）</p><h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定的对象</td><td>Object</td><td>-</td><td>-</td><td>是</td></tr><tr><td>items</td><td>绑定的对象</td><td>Array</td><td><a href="#item">item[]</a></td><td>[]</td><td>是</td></tr><tr><td>columnsNumber</td><td>列的数量</td><td>Number</td><td>1、2、3、4、5</td><td>3</td><td>否</td></tr><tr><td>layout</td><td>label与input等组件的排列</td><td>String</td><td>horizontal、vertical</td><td>horizontal</td><td>否</td></tr></tbody></table><h3 id="item">item</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>componentName</td><td>组件名称</td><td>String</td><td>-</td><td>-</td><td>是</td></tr><tr><td>uploadKey</td><td>绑定数据对象中的key值</td><td>String</td><td>-</td><td>-</td><td>是</td></tr><tr><td>vModelKey</td><td>绑定组件v-model的key值（非本文档中内置组件中的部分，ant-design-vue其它的组件）</td><td>String</td><td>-</td><td>value</td><td>否</td></tr><tr><td>defaultValue</td><td>组件的默认值，如多选组件的默认值为[]</td><td>-</td><td>-</td><td>false</td><td>否</td></tr><tr><td>hidden</td><td>是否隐藏</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>enableQuery</td><td>此项为Page组件中的功能，开启后当数据改变时会触发查询</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>formItemProps</td><td>form-item组件的props</td><td>-</td><td>-</td><td>-</td><td>否</td></tr><tr><td>componentProps</td><td>组件的props，如a-input的props</td><td>-</td><td>-</td><td>-</td><td>否</td></tr></tbody></table><h3 id="expose">Expose</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>antFormComponent</td><td>form实例</td></tr><tr><td>antFormModel</td><td>v-model绑定的值</td></tr></tbody></table>',10),Ns={__name:"index",setup(u){return(l,p)=>(A(),E("div",ss,[as,n(B(D),{code:"%3Ctemplate%3E%0A%20%20%3Cm-form%0A%20%20%20%20%20%20%20%20v-model%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%3E%3C%2Fm-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20formRef%20%3D%20ref(%7B%7D)%3B%0A%0Aconst%20items%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'1mInput'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput1'%20%7D%0A%20%20%7D%0A%5D)%3B%0A%0Awatch(%0A%20%20%20%20formRef%2C%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('formRef.value'%2C%20formRef.value)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20deep%3A%20true%0A%20%20%20%20%7D%0A)%3B%0A%0A%3C%2Fscript%3E"},{code:t(()=>[ls]),default:t(()=>[n(V)]),_:1}),ns,n(B(D),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%3Cm-form%0A%20%20%20%20%20%20%20%20v-model%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%20%20%20%20%3Arules%3D%22rules%22%0A%20%20%20%20%3E%3C%2Fm-form%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20formRef%20%3D%20ref(%7B%7D)%3B%0A%0Aconst%20items%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'mInput1'%2C%0A%20%20%20%20defaultValue%3A%20'%E8%AE%BE%E7%BD%AE%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput1'%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'mInput2'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20%0A%20%20%20%20%20%20%20%20label%3A%20'Input2'%2C%0A%20%20%20%20%20%20%20%20tooltip%3A%20'label%E9%85%8D%E7%BD%AE'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'mInput3'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput3'%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%20label%3A%20'mInput3'%2C%20prefix%3A%20'prefix'%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'mInput4'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20%0A%20%20%20%20%20%20%20%20label%3A%20'mInp4'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%5D)%3B%0A%0Aconst%20rules%20%3D%20%7B%0A%20%20%20%20%20%20%20%20mInput4%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20required%3A%20true%2C%20message%3A%20'%E5%BF%85%E5%A1%AB'%2C%20trigger%3A%20'change'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20min%3A%203%2C%20max%3A%205%2C%20message%3A%20'Length%20should%20be%203%20to%205'%2C%20trigger%3A%20'blur'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%0Awatch(%0A%20%20%20%20formRef%2C%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('formRef.value'%2C%20formRef.value)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20deep%3A%20true%0A%20%20%20%20%7D%0A)%3B%0A%0A%3C%2Fscript%3E"},{code:t(()=>[ts]),default:t(()=>[n(S)]),_:1}),es,ps,os,n(B(D),{code:"%3Ctemplate%3E%0A%20%20%3Cm-form%0A%20%20%20%20%20%20%20%20v-model%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%20%20%20%20layout%3D%22vertical%22%0A%20%20%3E%3C%2Fm-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20formRef%20%3D%20ref(%7B%7D)%3B%0A%0Aconst%20items%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mFormItemDes'%2C%0A%20%20%20%20uploadKey%3A%20'val1'%2C%0A%20%20%20%20defaultValue%3A%20'123321'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput1'%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mFormItemDes'%2C%0A%20%20%20%20uploadKey%3A%20'val2'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput2'%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mFormItemDes'%2C%0A%20%20%20%20uploadKey%3A%20'val3'%2C%0A%20%20%20%20defaultValue%3A%20'123321'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput3'%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mFormItemDes'%2C%0A%20%20%20%20uploadKey%3A%20'val4'%2C%0A%20%20%20%20defaultValue%3A%20'123321'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput4'%20%7D%2C%0A%20%20%7D%2C%0A%5D)%3B%0A%0Awatch(%0A%20%20%20%20formRef%2C%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('formRef.value'%2C%20formRef.value)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20deep%3A%20true%0A%20%20%20%20%7D%0A)%3B%0A%0AsetTimeout(%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20formRef.value%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20val1%3A%20'%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%201000%20*%203%0A)%0A%0A%3C%2Fscript%3E"},{code:t(()=>[rs]),default:t(()=>[n(T)]),_:1}),cs,ms,n(B(D),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22mb-8px%20flex%20items-center%22%3E%E5%B1%95%E7%A4%BA%3Cm-switch%20v-model%3Achecked%3D%22hidden%22%20%2F%3E%E9%9A%90%E8%97%8F%3C%2Fdiv%3E%0A%20%20%3Cm-form%0A%20%20%20%20%20%20%20%20v-model%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%3E%0A%20%20%3C%2Fm-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20formRef%20%3D%20ref(%7B%7D)%3B%0A%0Aconst%20hidden%20%3D%20ref(false)%0A%0Aconst%20items%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'mInput1'%2C%0A%20%20%20%20defaultValue%3A%20'%E9%BB%98%E8%AE%A4%E5%80%BC'%2C%0A%20%20%20%20hidden%3A%20hidden%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput1'%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'mInput2'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput2'%20%7D%0A%20%20%7D%2C%0A%5D)%3B%0A%0Awatch(%0A%20%20%20%20formRef%2C%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('formRef.value'%2C%20formRef.value)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20deep%3A%20true%0A%20%20%20%20%7D%0A)%3B%0A%0A%3C%2Fscript%3E"},{code:t(()=>[hs]),default:t(()=>[n(z)]),_:1}),us,As,n(B(D),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22flex%20mb-8px%22%3E%0A%20%20%20%20%20%20%20%20%3Cm-select%20v-model%3Avalue%3D%22columnsNumber%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cm-select-option%20%3Avalue%3D%225%22%3E5%E5%88%97%3C%2Fm-select-option%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cm-select-option%20%3Avalue%3D%224%22%3E4%E5%88%97%3C%2Fm-select-option%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cm-select-option%20%3Avalue%3D%223%22%3E3%E5%88%97%3C%2Fm-select-option%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cm-select-option%20%3Avalue%3D%222%22%3E2%E5%88%97%3C%2Fm-select-option%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cm-select-option%20%3Avalue%3D%221%22%3E1%E5%88%97%3C%2Fm-select-option%3E%0A%20%20%20%20%20%20%20%20%3C%2Fm-select%3E%0A%20%20%20%20%20%20%20%20%3Cm-select%20v-model%3Avalue%3D%22layout%22%20class%3D%22ml-8px%22%20%40change%3D%22handleSelect%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cm-select-option%20value%3D%22horizontal%22%3E%E6%B0%B4%E5%B9%B3%3C%2Fm-select-option%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cm-select-option%20value%3D%22vertical%22%3E%E7%AB%96%E7%9B%B4%3C%2Fm-select-option%3E%0A%20%20%20%20%20%20%20%20%3C%2Fm-select%3E%0A%20%20%20%20%20%20%20%20%3Cm-slider%20v-model%3Avalue%3D%22labelCol.span%22%20%3Amin%3D%221%22%20%3Amax%3D%2223%22%20%40change%3D%22handleLabelChange%22%20class%3D%22w-100px%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cm-slider%20v-model%3Avalue%3D%22wrapperCol.span%22%20%3Amin%3D%221%22%20%3Amax%3D%2223%22%20%3Adisabled%3D%22sliderDisabled%22%20class%3D%22w-100px%20ml-8px%22%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3Cm-form%0A%20%20%20%20%20%20%20%20v-model%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%20%20%20%20%3AcolumnsNumber%3D%22columnsNumber%22%0A%20%20%20%20%20%20%20%20%3Alayout%3D%22layout%22%0A%20%20%20%20%20%20%20%20%3AlabelCol%3D%22labelCol%22%0A%20%20%20%20%20%20%20%20%3AwrapperCol%3D%22wrapperCol%22%0A%20%20%20%20%3E%3C%2Fm-form%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20formRef%20%3D%20ref(%7B%7D)%3B%0A%0Aconst%20sliderDisabled%20%3D%20ref(true)%0A%0Aconst%20columnsNumber%20%3D%20ref(3)%0Aconst%20layout%20%3D%20ref('horizontal')%0Aconst%20labelCol%3Dref(%7B%0A%20%20%20%20span%3A%206%0A%7D)%0Aconst%20wrapperCol%3Dref(%7B%0A%20%20%20%20span%3A%2018%0A%7D)%0A%0Aconst%20items%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'1mInput'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput1'%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'2mInput'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput2'%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'3mInput'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput3'%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'4mInput'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20%0A%20%20%20%20%20%20%20%20label%3A%20'mInp4'%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'5mInput'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20%0A%20%20%20%20%20%20%20%20label%3A%20'mInp5'%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'6mInput'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20%0A%20%20%20%20%20%20%20%20label%3A%20'mInp6'%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%5D)%3B%0A%0Afunction%20handleSelect()%20%7B%0A%20%20%20%20if%20(layout.value%20%3D%3D%3D%20'horizontal')%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20sliderDisabled.value%20%3D%20true%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20sliderDisabled.value%20%3D%20false%0A%20%20%20%20%7D%0A%7D%0A%0Afunction%20handleLabelChange()%20%7B%0A%20%20%20%20if%20(layout.value%20%3D%3D%3D%20'horizontal')%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20wrapperCol.value.span%20%3D%2024%20-%20labelCol.value.span%0A%20%20%20%20%7D%0A%7D%0A%0Awatch(%0A%20%20%20%20formRef%2C%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('formRef.value'%2C%20formRef.value)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20deep%3A%20true%0A%20%20%20%20%7D%0A)%3B%0A%0A%3C%2Fscript%3E"},{code:t(()=>[is]),default:t(()=>[n(U)]),_:1}),js,ds,n(B(D),{code:"%3Ctemplate%3E%0A%20%20%3Cm-form%0A%20%20%20%20%20%20%20%20v-model%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%3E%3C%2Fm-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20formRef%20%3D%20ref(%7B%7D)%3B%0A%0Aconst%20items%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mCascader'%2C%0A%20%20%20%20uploadKey%3A%20'1mCascader'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'mCascader'%0A%20%20%20%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%0A%20%20%20%20%20%20multiple%3A%20true%2C%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'zhejiang'%2C%20label%3A%20'Zhejiang'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'hangzhou'%2C%20label%3A%20'Hangzhou'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20value%3A%20'xihu'%2C%20label%3A%20'West%20Lake'%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'jiangsu'%2C%20label%3A%20'Jiangsu'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'nanjing'%2C%20label%3A%20'Nanjing'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20value%3A%20'zhonghuamen'%2C%20label%3A%20'Zhong%20Hua%20Men'%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mDatePicker'%2C%0A%20%20%20%20uploadKey%3A%20'2mDatePicker'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%0A%20%20%20%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%0A%20%20%20%20%20%20format%3A%20'YYYY%2FMM%2FDD'%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mCheckbox'%2C%0A%20%20%20%20uploadKey%3A%20'3mCheckbox'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'%E9%80%89%E6%8B%A9'%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mCheckboxGroup'%2C%0A%20%20%20%20uploadKey%3A%20'4mCheckboxGroup'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%A4%9A%E9%80%89'%0A%20%20%20%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'Apple'%2C%20value%3A%20'AppleValue'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'Pear'%2C%20value%3A%20'Pear'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'Ora'%2C%20value%3A%20'Ora'%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mRangePicker'%2C%0A%20%20%20%20uploadKey%3A%20'5mRangePicker'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4'%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%20format%3A%20'YYYY%2FMM%2FDD'%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'6mInput'%2C%0A%20%20%20%20defaultValue%3A%20'111'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput'%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInputNumber'%2C%0A%20%20%20%20uploadKey%3A%20'7mInputNumber'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'%E6%95%B0%E5%AD%97%E8%BE%93%E5%85%A5'%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%20min%3A%201%2C%20max%3A%2010%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mRadioGroup'%2C%0A%20%20%20%20uploadKey%3A%20'8mRadioGroup'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'%E5%8D%95%E9%80%89'%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'Apple'%2C%20value%3A%20'Apple'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'Pear'%2C%20value%3A%20'Pear'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'Ora'%2C%20value%3A%20'Ora'%2C%20disabled%3A%20true%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mRate'%2C%0A%20%20%20%20uploadKey%3A%20'9mRate'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mRate'%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mSelect'%2C%0A%20%20%20%20uploadKey%3A%20'10mSelect'%2C%0A%20%20%20%20defaultValue%3A%20%5B%5D%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mSelect'%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%0A%20%20%20%20%20%20mode%3A%20'multiple'%2C%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%20value%3A%20'value1'%2C%20label%3A%20'1'%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20value%3A%20'value2'%2C%20label%3A%20'2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20value%3A%20'value3'%2C%20label%3A%20'3'%20%7D%2C%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mSlider'%2C%0A%20%20%20%20uploadKey%3A%20'11mSlider'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'mSlider'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mSwitch'%2C%0A%20%20%20%20uploadKey%3A%20'12mSwitch'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'mSwitch'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mTimePicker'%2C%0A%20%20%20%20uploadKey%3A%20'13mTimePicker'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%97%B6%E9%97%B4'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mTimeRangePicker'%2C%0A%20%20%20%20uploadKey%3A%20'14mTimeRangePicker'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mTreeSelect'%2C%0A%20%20%20%20uploadKey%3A%20'15mTreeSelect'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%A0%91%E5%BD%A2%E9%80%89%E6%8B%A9'%0A%20%20%20%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%0A%20%20%20%20%20%20treeData%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'root%201'%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'root%201'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'parent%201'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'parent%201'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'parent%201-0'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'parent%201-0'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'my%20leaf'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'leaf1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'your%20leaf'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'leaf2'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'parent%201-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'parent%201-1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'parent%202'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'parent%202'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mUpload'%2C%0A%20%20%20%20uploadKey%3A%20'16mUpload'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'mUpload'%0A%20%20%20%20%7D%2C%0A%20%20%20%20defaultValue%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20'1'%2C%0A%20%20%20%20%20%20%20%20url%3A%20'https%3A%2F%2Fwww.runoob.com%2Fwp-content%2Fthemes%2Frunoob%2Fassets%2Fimg%2Frunoob-logo.png'%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20componentProps%3A%20%7B%0A%20%20%20%20%20%20%20%20uploadAsync%3A%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20return%20Promise.resolve(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E6%B5%8B%E8%AF%951'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20url%3A%20'https%3A%2F%2Fwww.runoob.com%2Ftry%2Fdemo_source%2Fpineapple.jpg'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mPreviewDownload'%2C%0A%20%20%20%20uploadKey%3A%20'%E5%9B%BE%E7%89%87'%2C%0A%20%20%20%20defaultValue%3A%20'https%3A%2F%2Fwww.runoob.com%2Fwp-content%2Fthemes%2Frunoob%2Fassets%2Fimg%2Frunoob-logo.png'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%9B%BE%E7%89%87'%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mPreviewDownload'%2C%0A%20%20%20%20uploadKey%3A%20'18mPreviewDownload'%2C%0A%20%20%20%20defaultValue%3A%20'https%3A%2F%2Fwww.runoob.com%2Ftry%2Fdemo_source%2Fhorse.ogg'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'%E9%9F%B3%E9%A2%91'%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mPreviewDownload'%2C%0A%20%20%20%20uploadKey%3A%20'19mPreviewDownload'%2C%0A%20%20%20%20defaultValue%3A%20'https%3A%2F%2Fwww.runoob.com%2Ftry%2Fdemo_source%2Fmovie.mp4'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'%E8%A7%86%E9%A2%91'%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mPreviewDownload'%2C%0A%20%20%20%20uploadKey%3A%20'20mPreviewDownload'%2C%0A%20%20%20%20defaultValue%3A%20'https%3A%2F%2Fstatic.jyshare.com%2Fdownload%2Fsites.xlsx'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'xlsx'%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mPreviewDownload'%2C%0A%20%20%20%20uploadKey%3A%20'21mPreviewDownload'%2C%0A%20%20%20%20defaultValue%3A%20'https%3A%2F%2Fwww.runoob.com%2Fmanual%2Fgithub-git-cheat-sheet.pdf'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'pdf'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%5D)%3B%0A%0Awatch(%0A%20%20%20%20formRef%2C%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('formRef.value'%2C%20formRef.value)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20deep%3A%20true%0A%20%20%20%20%7D%0A)%3B%0A%0A%3C%2Fscript%3E"},{code:t(()=>[fs]),default:t(()=>[n(L)]),_:1}),gs,Cs,vs,n(B(D),{code:"%3Ctemplate%3E%0A%20%20%3Cm-form%0A%20%20%20%20%20%20%20%20v-model%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%3E%3C%2Fm-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%2C%20computed%7D%20from%20'vue'%3B%0A%0Aconst%20formRef%20%3D%20ref(%7B%7D)%3B%0A%0Aconst%20menusRef%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20title%3A%20'parent%201'%2C%0A%20%20%20%20key%3A%20'0-0'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20'parent%201-0'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'0-0-0'%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20'parent%201-1'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'0-0-1'%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20'parent%201-2'%2C%0A%20%20%20%20%20%20%20%20key%3A%20'0-0-2'%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D%2C%0A%5D)%0A%0Aconst%20items%20%3D%20ref(%5B%0A%20%7B%0A%20%20%20%20componentName%3A%20'mTree'%2C%0A%20%20%20%20uploadKey%3A%20'menus'%2C%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%B5%8B%E8%AF%95'%0A%20%20%20%20%7D%2C%0A%20%20%20%20defaultValue%3A%20%5B%5D%2C%0A%20%20%20%20vModelKey%3A%20'checkedKeys'%2C%0A%20%20%20%20componentProps%3A%20%7B%0A%20%20%20%20%20%20checkable%3A%20true%2C%0A%20%20%20%20%20%20treeData%3A%20computed(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20menusRef.value%3B%0A%20%20%20%20%20%20%7D)%2C%0A%20%20%20%20%20%20onCheck(val)%20%7B%0A%20%20%20%20%20%20%20%20formRef.value.menus%20%3D%20val%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%5D)%3B%0A%0AsetTimeout(%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20formRef.value.menus%20%3D%20%5B'0-0-1'%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%201000%0A)%0A%0A%3C%2Fscript%3E"},{code:t(()=>[Ds]),default:t(()=>[n($)]),_:1}),Bs,Es,n(B(D),{code:"%3Ctemplate%3E%0A%20%20%3Cm-form%0A%20%20%20%20%20%20%20%20v-model%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%3E%3C%2Fm-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0Aimport%20test%20from%20'.%2Fcomponent%2Ftest%2Findex.vue'%0A%0Aconst%20formRef%20%3D%20ref(%7B%7D)%3B%0A%0Aconst%20items%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20componentName%3A%20test%2C%20%2F%2F%20%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E7%A7%B0%0A%20%20%20%20uploadKey%3A%20'custom'%2C%20%2F%2F%20form%E8%A1%A8%E5%8D%95%E4%B8%AD%E7%9A%84key%0A%20%20%20%20defaultValue%3A%20'123'%2C%20%2F%2F%20%E9%BB%98%E8%AE%A4%E5%80%BC%0A%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20label%3A%20'%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6'%0A%20%20%20%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%0A%20%20%20%20%20%20columns%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%20title%3A%20'Name'%2C%20dataIndex%3A%20'name'%2C%20width%3A%20200%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20title%3A%20'Cash%20Assets'%2C%20dataIndex%3A%20'money'%2C%20width%3A%20200%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20title%3A%20'Address'%2C%20dataIndex%3A%20'address'%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20data%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'John%20Brown'%2C%20money%3A%20'%EF%BF%A5300%2C000.00'%2C%20address%3A%20'New%20York%20No.%201%20Lake%20Park'%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'Jim%20Green'%2C%20money%3A%20'%EF%BF%A51%2C256%2C000.00'%2C%20address%3A%20'London%20No.%201%20Lake%20Park'%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'Joe%20Black'%2C%20money%3A%20'%EF%BF%A5120%2C000.00'%2C%20address%3A%20'Sidney%20No.%201%20Lake%20Park'%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%5D)%3B%0A%0Awatch(%0A%20%20%20%20formRef%2C%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('formRef.value'%2C%20formRef.value)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20deep%3A%20true%0A%20%20%20%20%7D%0A)%3B%0A%0A%0A%0A%2F%2F%20%3Ctemplate%3E%0A%2F%2F%20%20%20%3Cdiv%3E%0A%2F%2F%20%20%20%20%20%3Cspan%3E%E6%88%91%E6%98%AF%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%3C%2Fspan%3E%0A%2F%2F%20%20%20%20%20%3Cm-input%20v-model%3Avalue%3D%22customSelf%22%20class%3D%22mt-8px%22%20%2F%3E%0A%2F%2F%20%20%20%20%20%3Cm-table%20class%3D%22mt-8px%22%20%3Acolumns%3D%22columns%22%20%3AdataSource%3D%22data%22%20%3Apagination%3D%22false%22%20%2F%3E%0A%2F%2F%20%20%20%3C%2Fdiv%3E%0A%2F%2F%20%3C%2Ftemplate%3E%0A%2F%2F%20%0A%2F%2F%20import%20%7B%20defineComponent%20%7D%20from%20'vue'%3B%0A%2F%2F%20import%20%7B%20useVModel%20%7D%20from%20'%40vueuse%2Fcore%2Findex'%3B%0A%2F%2F%20%0A%2F%2F%20export%20default%20defineComponent(%7B%0A%2F%2F%20%20%20props%3A%20%7B%0A%2F%2F%20%20%20%20%20value%3A%20String%2C%0A%2F%2F%20%20%20%20%20columns%3A%20Array%2C%0A%2F%2F%20%20%20%20%20data%3A%20Array%0A%2F%2F%20%20%20%7D%2C%0A%2F%2F%20%20%20setup(props%2C%20%7B%20emit%20%7D)%20%7B%0A%2F%2F%20%20%20%20%20const%20customSelf%20%3D%20useVModel(props%2C%20'value'%2C%20emit)%3B%0A%2F%2F%20%0A%2F%2F%20%20%20%20%20return%20%7B%0A%2F%2F%20%20%20%20%20%20%20customSelf%0A%2F%2F%20%20%20%20%20%7D%3B%0A%2F%2F%20%20%20%7D%0A%2F%2F%20%7D)%3B%0A%0A%0A%0A%3C%2Fscript%3E"},{code:t(()=>[bs]),default:t(()=>[n(H)]),_:1}),Is,ys,n(B(D),{code:"%3Ctemplate%3E%0A%20%20%3Cm-title%3E%E8%A1%A8%E5%8D%95%E6%A0%87%E9%A2%98%3C%2Fm-title%3E%0A%20%20%3Cdiv%20class%3D%22mb-8px%20flex%20items-center%22%3E%E5%B1%95%E7%A4%BA%3Cm-switch%20v-model%3Achecked%3D%22hidden%22%20%2F%3E%E9%9A%90%E8%97%8F%3C%2Fdiv%3E%0A%20%20%3Cm-form%0A%20%20%20%20%20%20%20%20ref%3D%22formComRef%22%0A%20%20%20%20%20%20%20%20v-model%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%20%20%20%20%3Arules%3D%22rules%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23prefix%3D%22bindValue%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20v-if%3D%22bindValue.uploadKey%20%3D%3D%3D%20'mInput1'%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%201prefix%E6%8F%92%E6%A7%BD%0A%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20v-if%3D%22bindValue.uploadKey%20%3D%3D%3D%20'mInput2'%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%202prefix%E6%8F%92%E6%A7%BD%0A%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fm-form%3E%0A%20%20%20%20%3Cm-footer%20%3Aitems%3D%22footerItems%22%3E%3C%2Fm-footer%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%2C%20computed%7D%20from%20'vue'%3B%0A%0Aconst%20formComRef%20%3D%20ref()%0A%0Aconst%20formRef%20%3D%20ref(%7B%7D)%3B%0A%0Aconst%20hidden%20%3D%20ref(false)%0A%0Aconst%20items%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'mInput1'%2C%0A%20%20%20%20hidden%3A%20hidden%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput1'%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'mInput2'%2C%0A%20%20%20%20defaultValue%3A%20'%E9%BB%98%E8%AE%A4%E5%80%BC'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20label%3A%20'mInput2'%20%7D%2C%0A%20%20%20%20componentProps%3A%20%7B%0A%20%20%20%20%20%20%20%20showCount%3Atrue%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20hidden%3A%20hidden%2C%0A%20%20%20%20uploadKey%3A%20'mInput3'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20%0A%20%20%20%20%20%20%20%20label%3A%20'mInput3'%2C%0A%20%20%20%20%20%20%20%20rules%3A%20computed(%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20hidden.value%20%3F%20null%20%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20required%3A%20true%2C%20message%3A%20'form-item%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%BF%85%E5%A1%AB'%2C%20trigger%3A%20'change'%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%5D)%3B%0A%0Aconst%20rules%20%3Dcomputed(%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20hidden.value%20%3F%20null%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20mInput1%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20required%3A%20true%2C%20message%3A%20'form%E8%AE%BE%E7%BD%AE%E7%9A%84%E5%BF%85%E5%A1%AB'%2C%20trigger%3A%20'change'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%0A%20%20%20%20%7D%0A)%0A%0Aconst%20footerItems%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20async%20confirmAsync()%20%7B%0A%20%20%20%20%20%20%20%20await%20formComRef.value.antFormComponent.validate()%0A%20%20%20%20%20%20%20%20console.log(111)%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20label%3A%20'%E9%80%9A%E8%BF%87'%2C%0A%20%20%20%20%20%20mode%3A%20'success'%2C%0A%20%20%20%20%7D%2C%0A%5D)%0A%0Awatch(%0A%20%20%20%20formRef%2C%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('formRef.value'%2C%20formRef.value)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20deep%3A%20true%0A%20%20%20%20%7D%0A)%3B%0A%0A%3C%2Fscript%3E"},{code:t(()=>[ws]),default:t(()=>[n(X)]),_:1}),_s]))}};export{Ns as default};
