import{C as j}from"./vue-DUoEhpaI.js";import{f as g,g as e,o as i,i as E,r as h,c as m,d as t,w as c,e as s,t as f,l as D,F as y,b as a,u,a as w}from"./index-B6A3-maN.js";/* empty css                                                            */const _=g({__name:"index.md.Virtual19bbb8ed",setup(A){const r=e([{title:"姓名",dataIndex:"name",width:200},{title:"年龄",dataIndex:"age",width:200},{title:"住址",dataIndex:"address"}]),d=e([{name:"胡彦斌",age:32,address:"西湖区湖底公园1号"}]);return(n,l)=>{const p=h("m-table");return i(),E(p,{columns:r.value,dataSource:d.value},null,8,["columns","dataSource"])}}}),x=g({__name:"index.md.Virtuald2d51ec2",setup(A){const r=e([{title:"姓名",dataIndex:"name",width:200},{title:"年龄",dataIndex:"age",width:200},{title:"住址",dataIndex:"address"}]),d=e([{name:"赵",age:1,address:"西湖区湖底公园1号"}]),n=e({items:[{label:"驳驳",isShowModal:!0,async confirmAsync(l){console.log("驳驳 onclick",l)}},{label:"通过",isShowModal:!0,modalTitle:"自定义提示",getModalContent(){return"自定义内容？"},async confirmAsync(l){console.log("通过 onclick",l)}},{label:"拒绝",async confirmAsync(l){console.log("拒绝 onclick",l)}},{label:"驳回驳回驳回",async confirmAsync(l){console.log("驳回驳回驳回 onclick",l)}}]});return(l,p)=>{const o=h("m-table");return i(),E(o,{columns:r.value,dataSource:d.value,operationsColumn:n.value},null,8,["columns","dataSource","operationsColumn"])}}}),k=g({__name:"index.md.Virtual3d31a93f",setup(A){const r=e([{title:"姓名",dataIndex:"name",width:200},{title:"年龄",dataIndex:"age",width:200},{title:"住址",dataIndex:"address"}]),d=e([{name:"赵",age:1,address:"西湖区湖底公园1号"},{name:"钱",age:2,address:"西湖区湖底公园2号"},{name:"孙",age:3,address:"西湖区湖底公园3号"}]),n=e({items:[{label:"驳驳",async confirmAsync(l){console.log("驳驳 confirmAsync",l)},getHidden(l){return console.log("驳驳 getHidden",l),l.age===1},getDisabled(l){return console.log("驳驳 getDisabled",l),!1}},{label:"通过",async confirmAsync(l){console.log("通过 onclick",l)},getHidden(l){return console.log("通过 getHidden",l),!1},getDisabled(l){return console.log("通过 getDisabled",l),l.age===2}},{label:"拒绝",async confirmAsync(l){console.log("拒绝 onclick",l)},getHidden(l){return console.log("拒绝 getHidden",l),!1},getDisabled(l){return console.log("拒绝 getDisabled",l),!1}}]});return(l,p)=>{const o=h("m-table");return i(),E(o,{columns:r.value,dataSource:d.value,operationsColumn:n.value},null,8,["columns","dataSource","operationsColumn"])}}}),F=g({__name:"index.md.Virtualbcfb0478",setup(A){const r=e([{title:"姓名",dataIndex:"name",width:200},{title:"年龄",dataIndex:"age",width:200},{title:"住址",dataIndex:"address"}]),d=e([{name:"赵",age:1,address:"西湖区湖底公园1号"},{name:"钱",age:2,address:"西湖区湖底公园1号"},{name:"孙",age:3,address:"西湖区湖底公园1号"}]),n=e({visible:!0,items:[{label:"操作",async confirmAsync(){return console.log("multiple",arguments),Promise.resolve()}}]});function l(){n.value.visible=!0}function p(){n.value.visible=!1}return(o,B)=>{const C=h("m-button"),b=h("m-table");return i(),m("div",null,[t(C,{onClick:l,class:"mb-8px"},{default:c(()=>[s("开启多选")]),_:1}),t(b,{columns:r.value,dataSource:d.value,multiple:n.value,onCancelMultiple:p},null,8,["columns","dataSource","multiple"])])}}}),v=g({__name:"index.md.Virtual005c6f4f",setup(A){const r=e([{title:"姓名",dataIndex:"name",width:200},{title:"年龄",dataIndex:"age",width:200},{title:"住址",dataIndex:"address"}]),d=e([{name:"赵",age:1,address:"西湖区湖底公园1号"},{name:"钱",age:2,address:"西湖区湖底公园1号"},{name:"孙",age:3,address:"西湖区湖底公园1号"}]),n=e({visible:!0,items:[{label:"操作1",hidden:!0,disabled:!1,mode:"normal",async confirmAsync(){console.log("multiple",arguments)}},{label:"操作2",hidden:!1,disabled:!0,mode:"normal",async confirmAsync(){console.log("multiple",arguments)}},{label:"操作3",hidden:!1,disabled:!1,mode:"success",async confirmAsync(){console.log("multiple",arguments)}}]});function l(){n.value.visible=!0}function p(){n.value.visible=!1}return(o,B)=>{const C=h("m-button"),b=h("m-table");return i(),m("div",null,[t(C,{onClick:l,class:"mb-8px"},{default:c(()=>[s("开启多选")]),_:1}),t(b,{columns:r.value,dataSource:d.value,multiple:n.value,onCancelMultiple:p},null,8,["columns","dataSource","multiple"])])}}}),V=g({__name:"index.md.Virtual02d5fd8d",setup(A){const r=e([{title:"姓名",dataIndex:"name",width:200},{title:"年龄",dataIndex:"age",width:200},{title:"住址",dataIndex:"address"}]),d=e([{name:"赵",age:1,address:"西湖区湖底公园1号"},{name:"钱",age:2,address:"西湖区湖底公园1号"},{name:"孙",age:3,address:"西湖区湖底公园1号"},{name:"李",age:4,address:"西湖区湖底公园1号"}]),n=e({currentMap:2,sizeMap:20,totalElements:1e3,currentFromNumber:0}),l=e({current:"currentMap",pageSize:"sizeMap",total:"totalElements",currentFromNumber:0});return(p,o)=>{const B=h("m-table");return i(),m("div",null,[t(B,{columns:r.value,dataSource:d.value,pagination:n.value,paginationMap:l.value},null,8,["columns","dataSource","pagination","paginationMap"])])}}}),I=g({__name:"index.md.Virtual18196185",setup(A){const r=e([{title:"姓名",dataIndex:"name",width:200,typeConfig:{type:"button",click(n){console.log("onclick",n)}}},{title:"年龄",dataIndex:"age",width:200,typeConfig:{type:"jump",click(n){console.log("onclick",n)}}},{title:"住址",dataIndex:"address",width:200,typeConfig:{type:"switch",getChecked(){return!0},async confirmAsync(n){console.log("onOk",n)}}},{title:"排量",width:200,dataIndex:"displacement",typeConfig:{type:"status",getStatus(n){return"init"}}},{title:"变速箱类型",width:200,dataIndex:"gearboxName",typeConfig:{type:"previewDownload",getUrl(n){return"https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png"}}},{title:"能源类型",dataIndex:"energyName"}]),d=e([{name:"赵",age:1,address:!0,displacement:"1.0T",gearboxName:"自动",energyName:"燃油"}]);return(n,l)=>{const p=h("m-table");return i(),m("div",null,[t(p,{dataSource:d.value,columns:r.value},null,8,["dataSource","columns"])])}}}),S=g({__name:"index.md.Virtual67469adf",setup(A){const r=e([{title:"姓名",dataIndex:"name",width:200,typeConfig:{type:"button",getDisabled(n){return n.index===1},click(n){console.log("onclick",n)}}},{title:"性别",dataIndex:"sex",width:200,typeConfig:{type:"copy",getEnable(n){return console.log("getEnable",n),!0}}},{title:"年龄",dataIndex:"age",width:200,typeConfig:{type:"jump",getDisabled(n){return n.index===1},click(n){console.log("onclick",n)}}},{title:"住址",dataIndex:"address",width:200,typeConfig:{type:"switch",getChecked(n){return n.index===1},getDisabled(n){return n.index===1},getLeftLabel(n){return console.log(n),"下架"},getRightLabel(n){return console.log(n),"上架"},getTitle(n){return console.log(n),"确定操作switch？"},getContent(n){return console.log(n),"内容展示"},confirmAsync(n){return console.log("onOk",n),Promise.resolve()}}},{title:"排量",width:200,dataIndex:"displacement",typeConfig:{type:"status",getStatus(n){return n.index===0?"init":n.index===1?"process":n.index===2?"success":"fail"}}},{title:"变速箱类型",width:200,dataIndex:"gearboxName",typeConfig:{type:"previewDownload",getEnablePreview:function(n){return n.index===0?!0:n.index===1?!1:(n.index===2,!0)},getEnableDownload:function(n){return n.index===0||n.index===1?!0:n.index!==2},getUrl(n){return n.index===0?"https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png":n.index===1?"https://www.runoob.com/try/demo_source/horse.ogg":n.index===2?"https://www.runoob.com/try/demo_source/movie.mp4":n.index===3?"https://static.jyshare.com/download/sites.xlsx":"https://www.runoob.com/manual/github-git-cheat-sheet.pdf"},async downloadAsync(){console.log(arguments)}}},{title:"能源类型",dataIndex:"energyName"}]),d=e([{name:"赵",sex:"男",age:1,address:!0,displacement:"1.0T",gearboxName:"自动",energyName:"燃油"},{name:"钱",sex:"男",age:2,address:!1,displacement:"1.5T",gearboxName:"手动",energyName:"纯电"},{name:"孙",sex:"男",age:3,address:!1,displacement:"2.0T",gearboxName:"脚动",energyName:"混合"},{name:"李",sex:"男",age:4,address:!1,displacement:"2.5T",gearboxName:"混动",energyName:"燃油"}]);return(n,l)=>{const p=h("m-table");return i(),m("div",null,[t(p,{dataSource:d.value,columns:r.value},null,8,["dataSource","columns"])])}}}),M={key:0,class:"color-red"},N=a("span",{class:"color-red"},"插槽",-1),T=g({__name:"index.md.Virtual4d14c894",setup(A){const r=e([{title:"姓名",dataIndex:"name",width:200,filters:[{text:"赵山河",value:"赵山河"},{text:"赵山海",value:"赵山海"}],filterSearch:!0,onFilter:(n,l)=>l.name.includes(n)},{title:"年龄",width:200,children:[{title:"年龄1",dataIndex:"age1",width:100},{title:"年龄2",dataIndex:"age2",width:100}]},{title:"住址",dataIndex:"address",sorter:(n,l)=>n.age-l.age}]),d=e([{name:"赵山河",address:"西湖区湖底公园1号",age1:31,age2:32,description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."},{name:"赵山海",address:"西湖区湖底公园2号",age1:33,age2:34},{name:"赵铁柱",address:"西湖区湖底公园4号",age1:35,age2:36},{name:"赵小蛮",address:"西湖区湖底公园3号",age1:37,age2:38}]);return(n,l)=>{const p=h("m-table");return i(),E(p,{columns:r.value,dataSource:d.value},{headerCell:c(({column:o,text:B})=>[o.dataIndex==="name"?(i(),m("span",M," 插槽展示 "+f(B),1)):D("",!0)]),bodyCell:c(({column:o,text:B})=>[o.dataIndex==="age1"?(i(),m(y,{key:0},[N,s(f(B),1)],64)):D("",!0)]),_:1},8,["columns","dataSource"])}}}),H={class:"marked-body"},O=a("h2",{id:"table"},"Table",-1),P=a("h3",{id:"简单使用"},"简单使用",-1),L=a("ul",null,[a("li",null,"table表头有吸顶效果"),a("li",null,"表头有拉伸功能（必须设置宽度，至少需要1列不设置宽度，不能全设置宽度。不符合规则时会有报错）"),a("li",null,"文字超过宽度不换行"),a("li",null,"默认添加序号")],-1),R=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-table"),s(`
        `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
        `),a("span",{class:"hljs-attr"},":dataSource"),s("="),a("span",{class:"hljs-string"},'"dataSource"'),s(` 
    >`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'住址'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" dataSource = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'胡彦斌'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"32"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
        ]
)

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),$=a("h3",{id:"操作列"},"操作列",-1),z=a("ul",null,[a("li",null,"最多展示两条，超过的内容会在下拉中展示"),a("li",null,"支持隐藏和禁止操作功能")],-1),U=a("h4",{id:"操作列精简配置"},"操作列精简配置",-1),J=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-table"),s(`
        `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
        `),a("span",{class:"hljs-attr"},":dataSource"),s("="),a("span",{class:"hljs-string"},'"dataSource"'),s(` 
        `),a("span",{class:"hljs-attr"},":operationsColumn"),s("="),a("span",{class:"hljs-string"},'"operationsColumn"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'住址'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" dataSource = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" operationsColumn = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
  `),a("span",{class:"hljs-attr"},"items"),s(`: [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'驳驳'"),s(`,
      `),a("span",{class:"hljs-attr"},"isShowModal"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
      `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"},"val"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'驳驳 onclick'"),s(`, val);
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'通过'"),s(`,
      `),a("span",{class:"hljs-attr"},"isShowModal"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
      `),a("span",{class:"hljs-attr"},"modalTitle"),s(": "),a("span",{class:"hljs-string"},"'自定义提示'"),s(`,
      `),a("span",{class:"hljs-title function_"},"getModalContent"),s("("),a("span",{class:"hljs-params"}),s(`) {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'自定义内容？'"),s(`
      },
      `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"},"val"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'通过 onclick'"),s(`, val);
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'拒绝'"),s(`,
      `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"},"val"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'拒绝 onclick'"),s(`, val);
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'驳回驳回驳回'"),s(`,
      `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"},"val"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'驳回驳回驳回 onclick'"),s(`, val);
      }
    }
  ]
});

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),Y=a("h4",{id:"操作列全部配置"},"操作列全部配置",-1),q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-table"),s(`
        `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
        `),a("span",{class:"hljs-attr"},":dataSource"),s("="),a("span",{class:"hljs-string"},'"dataSource"'),s(` 
        `),a("span",{class:"hljs-attr"},":operationsColumn"),s("="),a("span",{class:"hljs-string"},'"operationsColumn"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'住址'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" dataSource = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'钱'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园2号'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'孙'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园3号'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" operationsColumn = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
  `),a("span",{class:"hljs-attr"},"items"),s(`: [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'驳驳'"),s(`,
      `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"},"record"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'驳驳 confirmAsync'"),s(`, record);
      },
      `),a("span",{class:"hljs-title function_"},"getHidden"),s("("),a("span",{class:"hljs-params"},"record"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'驳驳 getHidden'"),s(`, record);
        `),a("span",{class:"hljs-keyword"},"if"),s(" (record."),a("span",{class:"hljs-property"},"age"),s(" === "),a("span",{class:"hljs-number"},"1"),s(`) {
            `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
        }
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
      },
      `),a("span",{class:"hljs-title function_"},"getDisabled"),s("("),a("span",{class:"hljs-params"},"record"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'驳驳 getDisabled'"),s(`, record);
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'通过'"),s(`,
      `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"},"record"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'通过 onclick'"),s(`, record);
      },
      `),a("span",{class:"hljs-title function_"},"getHidden"),s("("),a("span",{class:"hljs-params"},"record"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'通过 getHidden'"),s(`, record);
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
      },
      `),a("span",{class:"hljs-title function_"},"getDisabled"),s("("),a("span",{class:"hljs-params"},"record"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'通过 getDisabled'"),s(`, record);
        `),a("span",{class:"hljs-keyword"},"if"),s(" (record."),a("span",{class:"hljs-property"},"age"),s(" === "),a("span",{class:"hljs-number"},"2"),s(`) {
            `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
        }
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
      }
    },
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'拒绝'"),s(`,
      `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"},"record"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'拒绝 onclick'"),s(`, record);
      },
      `),a("span",{class:"hljs-title function_"},"getHidden"),s("("),a("span",{class:"hljs-params"},"record"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'拒绝 getHidden'"),s(`, record);
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
      },
      `),a("span",{class:"hljs-title function_"},"getDisabled"),s("("),a("span",{class:"hljs-params"},"record"),s(`) {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'拒绝 getDisabled'"),s(`, record);
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
      }
    }
  ]
});

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),G=a("h3",{id:"多选"},"多选",-1),K=a("ul",null,[a("li",null,"最多展示两条，超过的内容会在下拉中展示"),a("li",null,"支持隐藏和禁止操作功能"),a("li",null,"没有选中时不允许操作")],-1),Q=a("h4",{id:"精简配置"},"精简配置",-1),W=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleOpenMul"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mb-8px"'),s(">")]),s("开启多选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-table"),s(`
        `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
        `),a("span",{class:"hljs-attr"},":dataSource"),s("="),a("span",{class:"hljs-string"},'"dataSource"'),s(` 
         `),a("span",{class:"hljs-attr"},":multiple"),s("="),a("span",{class:"hljs-string"},'"multiple"'),s(`
         @`),a("span",{class:"hljs-attr"},"cancelMultiple"),s("="),a("span",{class:"hljs-string"},'"handleCancelMultiple"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'住址'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" dataSource = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'钱'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'孙'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" multiple = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
    `),a("span",{class:"hljs-attr"},"visible"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"items"),s(`: [
        {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(`,
            `),a("span",{class:"hljs-comment"},"// 点击回调"),s(`
            `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"}),s(`) {
              `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'multiple'"),s(", "),a("span",{class:"hljs-variable language_"},"arguments"),s(`);
              `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("."),a("span",{class:"hljs-title function_"},"resolve"),s(`()
            },
        }
    ]
})

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleOpenMul"),s("("),a("span",{class:"hljs-params"}),s(`) {
    multiple.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"visible"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`
}

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleCancelMultiple"),s("("),a("span",{class:"hljs-params"}),s(`) {
    multiple.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"visible"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`
}

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),X=a("h4",{id:"全部配置"},"全部配置",-1),Z=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleOpenMul"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mb-8px"'),s(">")]),s("开启多选"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-table"),s(`
        `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
        `),a("span",{class:"hljs-attr"},":dataSource"),s("="),a("span",{class:"hljs-string"},'"dataSource"'),s(` 
         `),a("span",{class:"hljs-attr"},":multiple"),s("="),a("span",{class:"hljs-string"},'"multiple"'),s(`
         @`),a("span",{class:"hljs-attr"},"cancelMultiple"),s("="),a("span",{class:"hljs-string"},'"handleCancelMultiple"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'住址'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" dataSource = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'钱'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'孙'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" multiple = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
    `),a("span",{class:"hljs-attr"},"visible"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"items"),s(`: [
        {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作1'"),s(`,
            `),a("span",{class:"hljs-attr"},"hidden"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
            `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
            `),a("span",{class:"hljs-attr"},"mode"),s(": "),a("span",{class:"hljs-string"},"'normal'"),s(`,
            `),a("span",{class:"hljs-comment"},"// 点击回调"),s(`
            `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"}),s(`) {
              `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'multiple'"),s(", "),a("span",{class:"hljs-variable language_"},"arguments"),s(`);
            },
        },
       {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作2'"),s(`,
            `),a("span",{class:"hljs-attr"},"hidden"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
            `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
            `),a("span",{class:"hljs-attr"},"mode"),s(": "),a("span",{class:"hljs-string"},"'normal'"),s(`,
            `),a("span",{class:"hljs-comment"},"// 点击回调"),s(`
            `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"}),s(`) {
              `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'multiple'"),s(", "),a("span",{class:"hljs-variable language_"},"arguments"),s(`);
            },
        },
        {
            `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'操作3'"),s(`,
            `),a("span",{class:"hljs-attr"},"hidden"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
            `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
            `),a("span",{class:"hljs-attr"},"mode"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`,
            `),a("span",{class:"hljs-comment"},"// 点击回调"),s(`
            `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"}),s(`) {
              `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'multiple'"),s(", "),a("span",{class:"hljs-variable language_"},"arguments"),s(`);
            },
        },
    ]
})

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleOpenMul"),s("("),a("span",{class:"hljs-params"}),s(`) {
    multiple.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"visible"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`
}

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleCancelMultiple"),s("("),a("span",{class:"hljs-params"}),s(`) {
    multiple.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"visible"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`
}

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),s0=a("h3",{id:"分页配置"},"分页配置",-1),a0=a("ul",null,[a("li",null,"支持字段映射配置，方便不同后端定义的不同字段处理")],-1),n0=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-table"),s(`
        `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
        `),a("span",{class:"hljs-attr"},":dataSource"),s("="),a("span",{class:"hljs-string"},'"dataSource"'),s(` 
        `),a("span",{class:"hljs-attr"},":pagination"),s("="),a("span",{class:"hljs-string"},'"paginationRef"'),s(`
        `),a("span",{class:"hljs-attr"},":paginationMap"),s("="),a("span",{class:"hljs-string"},'"paginationMapRef"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'住址'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" dataSource = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'钱'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'孙'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'李'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" paginationRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
  `),a("span",{class:"hljs-attr"},"currentMap"),s(": "),a("span",{class:"hljs-number"},"2"),s(", "),a("span",{class:"hljs-comment"},"// 当前页数"),s(`
  `),a("span",{class:"hljs-attr"},"sizeMap"),s(": "),a("span",{class:"hljs-number"},"20"),s(", "),a("span",{class:"hljs-comment"},"// 每页数量"),s(`
  `),a("span",{class:"hljs-attr"},"totalElements"),s(": "),a("span",{class:"hljs-number"},"1000"),s(", "),a("span",{class:"hljs-comment"},"// 总页数"),s(`
  `),a("span",{class:"hljs-attr"},"currentFromNumber"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-comment"},"// current上传的值与实际值的区别，从0开始为-1，从1开始为0"),s(`
})

`),a("span",{class:"hljs-keyword"},"const"),s(" paginationMapRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
  `),a("span",{class:"hljs-attr"},"current"),s(": "),a("span",{class:"hljs-string"},"'currentMap'"),s(", "),a("span",{class:"hljs-comment"},"// 当前页数"),s(`
  `),a("span",{class:"hljs-attr"},"pageSize"),s(": "),a("span",{class:"hljs-string"},"'sizeMap'"),s(", "),a("span",{class:"hljs-comment"},"// 每页数量"),s(`
  `),a("span",{class:"hljs-attr"},"total"),s(": "),a("span",{class:"hljs-string"},"'totalElements'"),s(", "),a("span",{class:"hljs-comment"},"// 总页数"),s(`
  `),a("span",{class:"hljs-attr"},"currentFromNumber"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-comment"},"// current上传的值与实际值的区别，从0开始为-1，从1开始为0"),s(`
})

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),l0=a("h3",{id:"类型"},"类型",-1),t0=a("ul",null,[a("li",null,"操作类型：用于操作，如打开弹窗等操作，为按钮效果"),a("li",null,"跳转类型：用于跳转，如改变路由，为link效果"),a("li",null,"切换类型：用于切换，如改变上架下架类型，为switch效果"),a("li",null,"状态类型：用于状态展示，效果为文字前面有标识，目前支持 init、process、success、fail 四种状态"),a("li",null,"预览或下载类型：用于资源文件的展示或下载")],-1),e0=a("h4",{id:"精简配置-1"},"精简配置",-1),c0=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-table"),s(`
        `),a("span",{class:"hljs-attr"},":dataSource"),s("="),a("span",{class:"hljs-string"},'"dataSource"'),s(` 
        `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'button'"),s(`,
              `),a("span",{class:"hljs-title function_"},"click"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'onclick'"),s(`, bindValue)
              },
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'jump'"),s(`,
              `),a("span",{class:"hljs-title function_"},"click"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'onclick'"),s(`, bindValue)
              }
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'住址'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'switch'"),s(`,
              `),a("span",{class:"hljs-title function_"},"getChecked"),s("("),a("span",{class:"hljs-params"}),s(`) {
                `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
              },
              `),a("span",{class:"hljs-comment"},"// 点击确定"),s(`
              `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'onOk'"),s(`, bindValue)
              }
            }
          },
         {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'排量'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'displacement'"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'status'"),s(`,
              `),a("span",{class:"hljs-title function_"},"getStatus"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`){
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'init'"),s(`
              },
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'变速箱类型'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'gearboxName'"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'previewDownload'"),s(`,
              `),a("span",{class:"hljs-title function_"},"getUrl"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`){
                 `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png'"),s(`
              },
            }
          },
          {
              `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'能源类型'"),s(`,
              `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'energyName'"),s(`,
           },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" dataSource = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
            `),a("span",{class:"hljs-attr"},"displacement"),s(": "),a("span",{class:"hljs-string"},"'1.0T'"),s(`,
            `),a("span",{class:"hljs-attr"},"gearboxName"),s(": "),a("span",{class:"hljs-string"},"'自动'"),s(`,
            `),a("span",{class:"hljs-attr"},"energyName"),s(": "),a("span",{class:"hljs-string"},"'燃油'"),s(`
          },
        ]
)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),r0=a("h4",{id:"全部配置-1"},"全部配置",-1),d0=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-table"),s(`
        `),a("span",{class:"hljs-attr"},":dataSource"),s("="),a("span",{class:"hljs-string"},'"dataSource"'),s(` 
        `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'button'"),s(`,
              `),a("span",{class:"hljs-title function_"},"getDisabled"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                `),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"1"),s(`) {
                    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`;
                }
                `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
              },
              `),a("span",{class:"hljs-title function_"},"click"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'onclick'"),s(`, bindValue)
              },
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'性别'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'sex'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'copy'"),s(`,
              `),a("span",{class:"hljs-title function_"},"getEnable"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'getEnable'"),s(`, bindValue)
                `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
              },
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'age'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'jump'"),s(`,
              `),a("span",{class:"hljs-title function_"},"getDisabled"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
               `),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"1"),s(`) {
                        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`;
                    }
                `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
              },
              `),a("span",{class:"hljs-title function_"},"click"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'onclick'"),s(`, bindValue)
              }
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'住址'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'switch'"),s(`,
              `),a("span",{class:"hljs-title function_"},"getChecked"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
               `),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"1"),s(`) {
                        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`;
                    }
                `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
              },
              `),a("span",{class:"hljs-title function_"},"getDisabled"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
               `),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"1"),s(`) {
                        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`;
                    }
                `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
              },
                `),a("span",{class:"hljs-title function_"},"getLeftLabel"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(bindValue);
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'下架'"),s(`;
                },
                `),a("span",{class:"hljs-title function_"},"getRightLabel"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(bindValue);
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'上架'"),s(`;
                },
                `),a("span",{class:"hljs-title function_"},"getTitle"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(bindValue);
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'确定操作switch？'"),s(`;
                },
                `),a("span",{class:"hljs-title function_"},"getContent"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(bindValue);
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'内容展示'"),s(`;
                },
              `),a("span",{class:"hljs-comment"},"// 点击确定"),s(`
              `),a("span",{class:"hljs-title function_"},"confirmAsync"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'onOk'"),s(`, bindValue)
                `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("."),a("span",{class:"hljs-title function_"},"resolve"),s(`()
              }
            }
          },
         {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'排量'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'displacement'"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'status'"),s(`,
              `),a("span",{class:"hljs-title function_"},"getStatus"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`){
                `),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'init'"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"1"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'process'"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"2"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'success'"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(` {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'fail'"),s(`
                }
              },
            }
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'变速箱类型'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'gearboxName'"),s(`,
            `),a("span",{class:"hljs-attr"},"typeConfig"),s(`: {
              `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'previewDownload'"),s(`,
              `),a("span",{class:"hljs-attr"},"getEnablePreview"),s(": "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                `),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"1"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"2"),s(`)  {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(` {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
                }
              },
              `),a("span",{class:"hljs-attr"},"getEnableDownload"),s(": "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"bindValue"),s(`) {
                `),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"1"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"2"),s(`)  {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(` {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
                }
              },
              `),a("span",{class:"hljs-title function_"},"getUrl"),s("("),a("span",{class:"hljs-params"},"bindValue"),s(`){
                `),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png'"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"1"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/horse.ogg'"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"2"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/movie.mp4'"),s(`
                } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (bindValue."),a("span",{class:"hljs-property"},"index"),s(" === "),a("span",{class:"hljs-number"},"3"),s(`) {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'https://static.jyshare.com/download/sites.xlsx'"),s(`
                }  `),a("span",{class:"hljs-keyword"},"else"),s(` {
                  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},"'https://www.runoob.com/manual/github-git-cheat-sheet.pdf'"),s(`
                }
              },
              `),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-title function_"},"downloadAsync"),s("("),a("span",{class:"hljs-params"}),s(`) {
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-variable language_"},"arguments"),s(`)
              }
            }
          },
          {
                `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'能源类型'"),s(`,
                `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'energyName'"),s(`,
              },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" dataSource = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
            `),a("span",{class:"hljs-attr"},"displacement"),s(": "),a("span",{class:"hljs-string"},"'1.0T'"),s(`,
            `),a("span",{class:"hljs-attr"},"gearboxName"),s(": "),a("span",{class:"hljs-string"},"'自动'"),s(`,
            `),a("span",{class:"hljs-attr"},"energyName"),s(": "),a("span",{class:"hljs-string"},"'燃油'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'钱'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
            `),a("span",{class:"hljs-attr"},"displacement"),s(": "),a("span",{class:"hljs-string"},"'1.5T'"),s(`,
            `),a("span",{class:"hljs-attr"},"gearboxName"),s(": "),a("span",{class:"hljs-string"},"'手动'"),s(`,
            `),a("span",{class:"hljs-attr"},"energyName"),s(": "),a("span",{class:"hljs-string"},"'纯电'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'孙'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
            `),a("span",{class:"hljs-attr"},"displacement"),s(": "),a("span",{class:"hljs-string"},"'2.0T'"),s(`,
            `),a("span",{class:"hljs-attr"},"gearboxName"),s(": "),a("span",{class:"hljs-string"},"'脚动'"),s(`,
            `),a("span",{class:"hljs-attr"},"energyName"),s(": "),a("span",{class:"hljs-string"},"'混合'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'李'"),s(`,
            `),a("span",{class:"hljs-attr"},"sex"),s(": "),a("span",{class:"hljs-string"},"'男'"),s(`,
            `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
            `),a("span",{class:"hljs-attr"},"displacement"),s(": "),a("span",{class:"hljs-string"},"'2.5T'"),s(`,
            `),a("span",{class:"hljs-attr"},"gearboxName"),s(": "),a("span",{class:"hljs-string"},"'混动'"),s(`,
            `),a("span",{class:"hljs-attr"},"energyName"),s(": "),a("span",{class:"hljs-string"},"'燃油'"),s(`
          },
        ]
)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),p0=a("h3",{id:"antd功能"},"antd功能",-1),i0=a("p",null,"除弃用属性，其余属性、事件、插槽均支持",-1),h0=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-table"),s(`
        `),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(`
        `),a("span",{class:"hljs-attr"},":dataSource"),s("="),a("span",{class:"hljs-string"},'"dataSource"'),s(` 
    >`)]),s(`
       `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"headerCell"),s("="),a("span",{class:"hljs-string"},'"{ column, text }"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},`"column.dataIndex === 'name'"`),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"color-red"'),s(">")]),s(`
              插槽展示 {{ text }}
            `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"bodyCell"),s("="),a("span",{class:"hljs-string"},'"{ column, text }"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},`"column.dataIndex === 'age1'"`),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"color-red"'),s(">")]),s("插槽"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s("{{ text }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'姓名'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"filters"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'赵山河'"),s(`,
                `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'赵山河'"),s(`,
              },
              {
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'赵山海'"),s(`,
                `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'赵山海'"),s(`,
              },
            ],
            `),a("span",{class:"hljs-attr"},"filterSearch"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
            `),a("span",{class:"hljs-attr"},"onFilter"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"value, record"),s(") =>")]),s(" record."),a("span",{class:"hljs-property"},"name"),s("."),a("span",{class:"hljs-title function_"},"includes"),s(`(value)
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄'"),s(`,
            `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"200"),s(`,
            `),a("span",{class:"hljs-attr"},"children"),s(`: [
                {
                    `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄1'"),s(`,
                    `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'age1'"),s(`,
                    `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"100"),s(`,
                },
                {
                    `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'年龄2'"),s(`,
                    `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'age2'"),s(`,
                    `),a("span",{class:"hljs-attr"},"width"),s(": "),a("span",{class:"hljs-number"},"100"),s(`,
                },
            ]
          },
          {
            `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'住址'"),s(`,
            `),a("span",{class:"hljs-attr"},"dataIndex"),s(": "),a("span",{class:"hljs-string"},"'address'"),s(`,
            `),a("span",{class:"hljs-attr"},"sorter"),s(": "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"a, b"),s(") =>")]),s(" a."),a("span",{class:"hljs-property"},"age"),s(" - b."),a("span",{class:"hljs-property"},"age"),s(`,
          },
        ]
)

`),a("span",{class:"hljs-keyword"},"const"),s(" dataSource = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵山河'"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园1号'"),s(`,
            `),a("span",{class:"hljs-attr"},"age1"),s(": "),a("span",{class:"hljs-number"},"31"),s(`,
            `),a("span",{class:"hljs-attr"},"age2"),s(": "),a("span",{class:"hljs-number"},"32"),s(`,
            `),a("span",{class:"hljs-attr"},"description"),s(": "),a("span",{class:"hljs-string"},"'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵山海'"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园2号'"),s(`,
            `),a("span",{class:"hljs-attr"},"age1"),s(": "),a("span",{class:"hljs-number"},"33"),s(`,
            `),a("span",{class:"hljs-attr"},"age2"),s(": "),a("span",{class:"hljs-number"},"34"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵铁柱'"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园4号'"),s(`,
            `),a("span",{class:"hljs-attr"},"age1"),s(": "),a("span",{class:"hljs-number"},"35"),s(`,
            `),a("span",{class:"hljs-attr"},"age2"),s(": "),a("span",{class:"hljs-number"},"36"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'赵小蛮'"),s(`,
            `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"'西湖区湖底公园3号'"),s(`,
            `),a("span",{class:"hljs-attr"},"age1"),s(": "),a("span",{class:"hljs-number"},"37"),s(`,
            `),a("span",{class:"hljs-attr"},"age2"),s(": "),a("span",{class:"hljs-number"},"38"),s(`,
          },
        ]
)

`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),o0=w('<h3 id="antd弃用属性">antd弃用属性</h3><p>row-selection、loading、sticky、scroll</p><h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>columns</td><td>列配置，新增typeConfig属性，详见下方配置</td><td><a href="#type-config-button">新增的typeConfig</a></td><td>-</td><td>-</td><td>否</td></tr><tr><td>operationsColumn</td><td>操作列配置</td><td>{ width?：宽度（如果前两项存在隐藏的时候，建议手动设置宽度），items：<a href="#operations-column">Object</a>[] }</td><td>-</td><td>-</td><td>否</td></tr><tr><td>multiple</td><td>多选配置</td><td><a href="#multiple">multiple</a></td><td>-</td><td>-</td><td>否</td></tr><tr><td>pagination</td><td>分页配置</td><td><a href="#%E5%88%86%E9%A1%B5%E9%85%8D%E7%BD%AE">详见</a></td><td>-</td><td>-</td><td>否</td></tr><tr><td>paginationMap</td><td>分页配置映射</td><td><a href="#%E5%88%86%E9%A1%B5%E9%85%8D%E7%BD%AE">详见</a></td><td>-</td><td>-</td><td>否</td></tr></tbody></table><h3 id="operations-column">operations-column</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>label</td><td>展示文字</td><td>String</td><td>-</td><td>-</td><td>是</td></tr><tr><td>confirmAsync</td><td>点击回调；当isShowModal为true时，为提示弹窗的确认回调</td><td>Function</td><td>bindValue</td><td>() =&gt; {}</td><td>是</td></tr><tr><td>getHidden</td><td>是否隐藏</td><td>Function</td><td>bindValue</td><td>() =&gt; false</td><td>否</td></tr><tr><td>getDisabled</td><td>是否允许操作</td><td>Function</td><td>bindValue</td><td>() =&gt; false</td><td>否</td></tr><tr><td>isShowModal</td><td>是否展示确认弹窗</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>modalTitle</td><td>确认弹窗标题</td><td>String</td><td>-</td><td>提示</td><td>否</td></tr><tr><td>getModalContent</td><td>确认弹窗内容</td><td>Function</td><td>bindValue</td><td>-</td><td>否</td></tr></tbody></table><h3 id="multiple">multiple</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>visible</td><td>是否展示</td><td>Boolean</td><td>-</td><td>true</td><td>是</td></tr><tr><td>enableCrossPage</td><td>是否允许跨页</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>getCheckboxProps</td><td>多选是否禁止操作函数</td><td>Function</td><td>record</td><td>record =&gt; {return {disabled: false}}</td><td>否</td></tr><tr><td>items</td><td>操作配置项</td><td>Array</td><td><a href="#multiple-item">multiple-item[]</a></td><td>-</td><td>是</td></tr></tbody></table><h3 id="multiple-item">multiple-item</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>label</td><td>展示文本</td><td>String</td><td>-</td><td>-</td><td>是</td></tr><tr><td>mode</td><td>模式，详见按钮组件</td><td>-</td><td>-</td><td>-</td><td>否</td></tr><tr><td>hidden</td><td>是否隐藏</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>disabled</td><td>是否禁止操作</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>confirmAsync</td><td>点击点击操作</td><td>Function</td><td>-</td><td>-</td><td>否</td></tr></tbody></table><h3 id="type-config-button">type-config-button</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>String</td><td>button</td><td>-</td><td>是</td></tr><tr><td>click</td><td>点击回调</td><td>Function</td><td>bindValue</td><td>() =&gt; {}</td><td>是</td></tr><tr><td>getDisabled</td><td>是否禁止操作</td><td>Function</td><td>bindValue</td><td>() =&gt; false</td><td>否</td></tr></tbody></table><h3 id="type-config-copy">type-config-copy</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>String</td><td>copy</td><td>-</td><td>是</td></tr><tr><td>getEnable</td><td>是否开启复制</td><td>Function</td><td>bindValue</td><td>() =&gt; true</td><td>否</td></tr></tbody></table><h3 id="type-config-jump">type-config-jump</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>String</td><td>jump</td><td>-</td><td>是</td></tr><tr><td>click</td><td>点击回调</td><td>Function</td><td>bindValue</td><td>() =&gt; {}</td><td>是</td></tr><tr><td>getDisabled</td><td>是否禁止操作</td><td>Function</td><td>bindValue</td><td>() =&gt; false</td><td>否</td></tr></tbody></table><h3 id="type-config-switch">type-config-switch</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>String</td><td>switch</td><td>-</td><td>是</td></tr><tr><td>getChecked</td><td>获取状态</td><td>Function</td><td>bindValue</td><td>-</td><td>是</td></tr><tr><td>confirmAsync</td><td>点击弹窗确定</td><td>Function</td><td>bindValue</td><td>-</td><td>是</td></tr><tr><td>getDisabled</td><td>是否禁止操作</td><td>Function</td><td>bindValue</td><td>() =&gt; false</td><td>否</td></tr><tr><td>getLeftLabel</td><td>左侧文字</td><td>Function</td><td>bindValue</td><td>() =&gt; &#39;关闭&#39;</td><td>否</td></tr><tr><td>getRightLabel</td><td>右侧文字</td><td>Function</td><td>bindValue</td><td>() =&gt; &#39;开启&#39;</td><td>否</td></tr><tr><td>getTitle</td><td>弹窗title</td><td>Function</td><td>bindValue</td><td>() =&gt; &#39;确定切换？&#39;</td><td>否</td></tr><tr><td>getContent</td><td>弹窗content</td><td>Function</td><td>bindValue</td><td>() =&gt; &#39;&#39;</td><td>否</td></tr><tr><td>onclick</td><td>点击切换回调</td><td>Function</td><td>bindValue</td><td>() =&gt; {}</td><td>否</td></tr></tbody></table><h3 id="type-config-status">type-config-status</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>String</td><td>status</td><td>-</td><td>是</td></tr><tr><td>getStatus</td><td>获取类型回调</td><td>Function</td><td>() =&gt; init、process、success、fail</td><td>-</td><td>是</td></tr></tbody></table><h3 id="type-config-preview-download">type-config-preview-download</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>String</td><td>previewDownload</td><td>-</td><td>是</td></tr><tr><td>getUrl</td><td>获取url</td><td>Function</td><td>bindvalue</td><td>-</td><td>是</td></tr><tr><td>getEnablePreview</td><td>是否开启预览</td><td>Function</td><td>bindvalue</td><td>() =&gt; true</td><td>否</td></tr><tr><td>getEnableDownload</td><td>是否开启下载</td><td>Function</td><td>bindvalue</td><td>() =&gt; true</td><td>否</td></tr><tr><td>其它详见preview-download组件配置</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h3 id="expose">Expose</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>antTableComponent</td><td>table实例</td></tr><tr><td>reset</td><td>重置分页及多选</td></tr></tbody></table>',24),g0={__name:"index",setup(A){return(r,d)=>(i(),m("div",H,[O,P,L,t(u(j),{code:"%3Ctemplate%3E%0A%20%20%3Cm-table%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%20%20%3AdataSource%3D%22dataSource%22%20%0A%20%20%20%20%3E%0A%3C%2Fm-table%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'name'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%84'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'age'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E4%BD%8F%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'address'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20dataSource%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%83%A1%E5%BD%A6%E6%96%8C'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%2032%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0A%3C%2Fscript%3E"},{code:c(()=>[R]),default:c(()=>[t(_)]),_:1}),$,z,U,t(u(j),{code:"%3Ctemplate%3E%0A%20%20%3Cm-table%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%20%20%3AdataSource%3D%22dataSource%22%20%0A%20%20%20%20%20%20%20%20%3AoperationsColumn%3D%22operationsColumn%22%0A%20%20%20%20%3E%3C%2Fm-table%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'name'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%84'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'age'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E4%BD%8F%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'address'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20dataSource%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20operationsColumn%20%3D%20ref(%7B%0A%20%20items%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E9%A9%B3%E9%A9%B3'%2C%0A%20%20%20%20%20%20isShowModal%3A%20true%2C%0A%20%20%20%20%20%20async%20confirmAsync(val)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E9%A9%B3%E9%A9%B3%20onclick'%2C%20val)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E9%80%9A%E8%BF%87'%2C%0A%20%20%20%20%20%20isShowModal%3A%20true%2C%0A%20%20%20%20%20%20modalTitle%3A%20'%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%90%E7%A4%BA'%2C%0A%20%20%20%20%20%20getModalContent()%20%7B%0A%20%20%20%20%20%20%20%20return%20'%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9%EF%BC%9F'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20async%20confirmAsync(val)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E9%80%9A%E8%BF%87%20onclick'%2C%20val)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%8B%92%E7%BB%9D'%2C%0A%20%20%20%20%20%20async%20confirmAsync(val)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E6%8B%92%E7%BB%9D%20onclick'%2C%20val)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E9%A9%B3%E5%9B%9E%E9%A9%B3%E5%9B%9E%E9%A9%B3%E5%9B%9E'%2C%0A%20%20%20%20%20%20async%20confirmAsync(val)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E9%A9%B3%E5%9B%9E%E9%A9%B3%E5%9B%9E%E9%A9%B3%E5%9B%9E%20onclick'%2C%20val)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)%3B%0A%0A%3C%2Fscript%3E"},{code:c(()=>[J]),default:c(()=>[t(x)]),_:1}),Y,t(u(j),{code:"%3Ctemplate%3E%0A%20%20%3Cm-table%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%20%20%3AdataSource%3D%22dataSource%22%20%0A%20%20%20%20%20%20%20%20%3AoperationsColumn%3D%22operationsColumn%22%0A%20%20%20%20%3E%3C%2Fm-table%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'name'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%84'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'age'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E4%BD%8F%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'address'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20dataSource%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E9%92%B1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD2%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E5%AD%99'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD3%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20operationsColumn%20%3D%20ref(%7B%0A%20%20items%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E9%A9%B3%E9%A9%B3'%2C%0A%20%20%20%20%20%20async%20confirmAsync(record)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E9%A9%B3%E9%A9%B3%20confirmAsync'%2C%20record)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20getHidden(record)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E9%A9%B3%E9%A9%B3%20getHidden'%2C%20record)%3B%0A%20%20%20%20%20%20%20%20if%20(record.age%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20getDisabled(record)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E9%A9%B3%E9%A9%B3%20getDisabled'%2C%20record)%3B%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E9%80%9A%E8%BF%87'%2C%0A%20%20%20%20%20%20async%20confirmAsync(record)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E9%80%9A%E8%BF%87%20onclick'%2C%20record)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20getHidden(record)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E9%80%9A%E8%BF%87%20getHidden'%2C%20record)%3B%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20getDisabled(record)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E9%80%9A%E8%BF%87%20getDisabled'%2C%20record)%3B%0A%20%20%20%20%20%20%20%20if%20(record.age%20%3D%3D%3D%202)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%8B%92%E7%BB%9D'%2C%0A%20%20%20%20%20%20async%20confirmAsync(record)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E6%8B%92%E7%BB%9D%20onclick'%2C%20record)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20getHidden(record)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E6%8B%92%E7%BB%9D%20getHidden'%2C%20record)%3B%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20getDisabled(record)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E6%8B%92%E7%BB%9D%20getDisabled'%2C%20record)%3B%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)%3B%0A%0A%3C%2Fscript%3E"},{code:c(()=>[q]),default:c(()=>[t(k)]),_:1}),G,K,Q,t(u(j),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%3Cm-button%20%40click%3D%22handleOpenMul%22%20class%3D%22mb-8px%22%3E%E5%BC%80%E5%90%AF%E5%A4%9A%E9%80%89%3C%2Fm-button%3E%0A%20%20%3Cm-table%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%20%20%3AdataSource%3D%22dataSource%22%20%0A%20%20%20%20%20%20%20%20%20%3Amultiple%3D%22multiple%22%0A%20%20%20%20%20%20%20%20%20%40cancelMultiple%3D%22handleCancelMultiple%22%0A%20%20%20%20%3E%3C%2Fm-table%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'name'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%84'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'age'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E4%BD%8F%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'address'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20dataSource%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E9%92%B1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E5%AD%99'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20multiple%20%3D%20ref(%7B%0A%20%20%20%20visible%3A%20true%2C%0A%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%93%8D%E4%BD%9C'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E7%82%B9%E5%87%BB%E5%9B%9E%E8%B0%83%0A%20%20%20%20%20%20%20%20%20%20%20%20async%20confirmAsync()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('multiple'%2C%20arguments)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20Promise.resolve()%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D)%0A%0Afunction%20handleOpenMul()%20%7B%0A%20%20%20%20multiple.value.visible%20%3D%20true%0A%7D%0A%0Afunction%20handleCancelMultiple()%20%7B%0A%20%20%20%20multiple.value.visible%20%3D%20false%0A%7D%0A%0A%3C%2Fscript%3E"},{code:c(()=>[W]),default:c(()=>[t(F)]),_:1}),X,t(u(j),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%3Cm-button%20%40click%3D%22handleOpenMul%22%20class%3D%22mb-8px%22%3E%E5%BC%80%E5%90%AF%E5%A4%9A%E9%80%89%3C%2Fm-button%3E%0A%20%20%3Cm-table%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%20%20%3AdataSource%3D%22dataSource%22%20%0A%20%20%20%20%20%20%20%20%20%3Amultiple%3D%22multiple%22%0A%20%20%20%20%20%20%20%20%20%40cancelMultiple%3D%22handleCancelMultiple%22%0A%20%20%20%20%3E%3C%2Fm-table%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'name'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%84'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'age'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E4%BD%8F%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'address'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20dataSource%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E9%92%B1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E5%AD%99'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20multiple%20%3D%20ref(%7B%0A%20%20%20%20visible%3A%20true%2C%0A%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%93%8D%E4%BD%9C1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20hidden%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20disabled%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20mode%3A%20'normal'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E7%82%B9%E5%87%BB%E5%9B%9E%E8%B0%83%0A%20%20%20%20%20%20%20%20%20%20%20%20async%20confirmAsync()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('multiple'%2C%20arguments)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%93%8D%E4%BD%9C2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20hidden%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20mode%3A%20'normal'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E7%82%B9%E5%87%BB%E5%9B%9E%E8%B0%83%0A%20%20%20%20%20%20%20%20%20%20%20%20async%20confirmAsync()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('multiple'%2C%20arguments)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%93%8D%E4%BD%9C3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20hidden%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20disabled%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20mode%3A%20'success'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E7%82%B9%E5%87%BB%E5%9B%9E%E8%B0%83%0A%20%20%20%20%20%20%20%20%20%20%20%20async%20confirmAsync()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('multiple'%2C%20arguments)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%0A%7D)%0A%0Afunction%20handleOpenMul()%20%7B%0A%20%20%20%20multiple.value.visible%20%3D%20true%0A%7D%0A%0Afunction%20handleCancelMultiple()%20%7B%0A%20%20%20%20multiple.value.visible%20%3D%20false%0A%7D%0A%0A%3C%2Fscript%3E"},{code:c(()=>[Z]),default:c(()=>[t(v)]),_:1}),s0,a0,t(u(j),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%3Cm-table%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%20%20%3AdataSource%3D%22dataSource%22%20%0A%20%20%20%20%20%20%20%20%3Apagination%3D%22paginationRef%22%0A%20%20%20%20%20%20%20%20%3ApaginationMap%3D%22paginationMapRef%22%0A%20%20%20%20%3E%3C%2Fm-table%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'name'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%84'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'age'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E4%BD%8F%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'address'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20dataSource%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E9%92%B1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E5%AD%99'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E6%9D%8E'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%204%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20paginationRef%20%3D%20ref(%7B%0A%20%20currentMap%3A%202%2C%20%2F%2F%20%E5%BD%93%E5%89%8D%E9%A1%B5%E6%95%B0%0A%20%20sizeMap%3A%2020%2C%20%2F%2F%20%E6%AF%8F%E9%A1%B5%E6%95%B0%E9%87%8F%0A%20%20totalElements%3A%201000%2C%20%2F%2F%20%E6%80%BB%E9%A1%B5%E6%95%B0%0A%20%20currentFromNumber%3A%200%20%2F%2F%20current%E4%B8%8A%E4%BC%A0%E7%9A%84%E5%80%BC%E4%B8%8E%E5%AE%9E%E9%99%85%E5%80%BC%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%8C%E4%BB%8E0%E5%BC%80%E5%A7%8B%E4%B8%BA-1%EF%BC%8C%E4%BB%8E1%E5%BC%80%E5%A7%8B%E4%B8%BA0%0A%7D)%0A%0Aconst%20paginationMapRef%20%3D%20ref(%7B%0A%20%20current%3A%20'currentMap'%2C%20%2F%2F%20%E5%BD%93%E5%89%8D%E9%A1%B5%E6%95%B0%0A%20%20pageSize%3A%20'sizeMap'%2C%20%2F%2F%20%E6%AF%8F%E9%A1%B5%E6%95%B0%E9%87%8F%0A%20%20total%3A%20'totalElements'%2C%20%2F%2F%20%E6%80%BB%E9%A1%B5%E6%95%B0%0A%20%20currentFromNumber%3A%200%20%2F%2F%20current%E4%B8%8A%E4%BC%A0%E7%9A%84%E5%80%BC%E4%B8%8E%E5%AE%9E%E9%99%85%E5%80%BC%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%8C%E4%BB%8E0%E5%BC%80%E5%A7%8B%E4%B8%BA-1%EF%BC%8C%E4%BB%8E1%E5%BC%80%E5%A7%8B%E4%B8%BA0%0A%7D)%0A%0A%3C%2Fscript%3E"},{code:c(()=>[n0]),default:c(()=>[t(V)]),_:1}),l0,t0,e0,t(u(j),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%3Cm-table%0A%20%20%20%20%20%20%20%20%3AdataSource%3D%22dataSource%22%20%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%3E%3C%2Fm-table%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'name'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'button'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20click(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('onclick'%2C%20bindValue)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%84'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'age'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'jump'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20click(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('onclick'%2C%20bindValue)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E4%BD%8F%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'address'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'switch'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getChecked()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E7%82%B9%E5%87%BB%E7%A1%AE%E5%AE%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20async%20confirmAsync(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('onOk'%2C%20bindValue)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E6%8E%92%E9%87%8F'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'displacement'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'status'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getStatus(bindValue)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'init'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%8F%98%E9%80%9F%E7%AE%B1%E7%B1%BB%E5%9E%8B'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'gearboxName'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'previewDownload'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getUrl(bindValue)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'https%3A%2F%2Fwww.runoob.com%2Fwp-content%2Fthemes%2Frunoob%2Fassets%2Fimg%2Frunoob-logo.png'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E8%83%BD%E6%BA%90%E7%B1%BB%E5%9E%8B'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'energyName'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20dataSource%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20displacement%3A%20'1.0T'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20gearboxName%3A%20'%E8%87%AA%E5%8A%A8'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20energyName%3A%20'%E7%87%83%E6%B2%B9'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%3C%2Fscript%3E"},{code:c(()=>[c0]),default:c(()=>[t(I)]),_:1}),r0,t(u(j),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%3Cm-table%0A%20%20%20%20%20%20%20%20%3AdataSource%3D%22dataSource%22%20%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%3E%3C%2Fm-table%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'name'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'button'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getDisabled(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(bindValue.index%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20click(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('onclick'%2C%20bindValue)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E6%80%A7%E5%88%AB'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'sex'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'copy'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getEnable(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('getEnable'%2C%20bindValue)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%84'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'age'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'jump'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getDisabled(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(bindValue.index%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20click(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('onclick'%2C%20bindValue)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E4%BD%8F%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'address'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'switch'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getChecked(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(bindValue.index%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getDisabled(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(bindValue.index%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20getLeftLabel(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(bindValue)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'%E4%B8%8B%E6%9E%B6'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20getRightLabel(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(bindValue)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'%E4%B8%8A%E6%9E%B6'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20getTitle(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(bindValue)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'%E7%A1%AE%E5%AE%9A%E6%93%8D%E4%BD%9Cswitch%EF%BC%9F'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20getContent(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(bindValue)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'%E5%86%85%E5%AE%B9%E5%B1%95%E7%A4%BA'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E7%82%B9%E5%87%BB%E7%A1%AE%E5%AE%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20confirmAsync(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('onOk'%2C%20bindValue)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20Promise.resolve()%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E6%8E%92%E9%87%8F'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'displacement'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'status'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getStatus(bindValue)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(bindValue.index%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'init'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(bindValue.index%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'process'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(bindValue.index%20%3D%3D%3D%202)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'success'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'fail'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%8F%98%E9%80%9F%E7%AE%B1%E7%B1%BB%E5%9E%8B'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'gearboxName'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20typeConfig%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'previewDownload'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getEnablePreview%3A%20function%20(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(bindValue.index%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(bindValue.index%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(bindValue.index%20%3D%3D%3D%202)%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getEnableDownload%3A%20function%20(bindValue)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(bindValue.index%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(bindValue.index%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(bindValue.index%20%3D%3D%3D%202)%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20getUrl(bindValue)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(bindValue.index%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'https%3A%2F%2Fwww.runoob.com%2Fwp-content%2Fthemes%2Frunoob%2Fassets%2Fimg%2Frunoob-logo.png'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(bindValue.index%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'https%3A%2F%2Fwww.runoob.com%2Ftry%2Fdemo_source%2Fhorse.ogg'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(bindValue.index%20%3D%3D%3D%202)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'https%3A%2F%2Fwww.runoob.com%2Ftry%2Fdemo_source%2Fmovie.mp4'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(bindValue.index%20%3D%3D%3D%203)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'https%3A%2F%2Fstatic.jyshare.com%2Fdownload%2Fsites.xlsx'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'https%3A%2F%2Fwww.runoob.com%2Fmanual%2Fgithub-git-cheat-sheet.pdf'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20async%20downloadAsync()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(arguments)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E8%83%BD%E6%BA%90%E7%B1%BB%E5%9E%8B'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'energyName'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20dataSource%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20sex%3A%20'%E7%94%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20displacement%3A%20'1.0T'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20gearboxName%3A%20'%E8%87%AA%E5%8A%A8'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20energyName%3A%20'%E7%87%83%E6%B2%B9'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E9%92%B1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20sex%3A%20'%E7%94%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20displacement%3A%20'1.5T'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20gearboxName%3A%20'%E6%89%8B%E5%8A%A8'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20energyName%3A%20'%E7%BA%AF%E7%94%B5'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E5%AD%99'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20sex%3A%20'%E7%94%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20displacement%3A%20'2.0T'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20gearboxName%3A%20'%E8%84%9A%E5%8A%A8'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20energyName%3A%20'%E6%B7%B7%E5%90%88'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E6%9D%8E'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20sex%3A%20'%E7%94%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age%3A%204%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20displacement%3A%20'2.5T'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20gearboxName%3A%20'%E6%B7%B7%E5%8A%A8'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20energyName%3A%20'%E7%87%83%E6%B2%B9'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%3C%2Fscript%3E"},{code:c(()=>[d0]),default:c(()=>[t(S)]),_:1}),p0,i0,t(u(j),{code:"%3Ctemplate%3E%0A%20%20%3Cm-table%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%20%20%3AdataSource%3D%22dataSource%22%20%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%20%3Ctemplate%20%23headerCell%3D%22%7B%20column%2C%20text%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-if%3D%22column.dataIndex%20%3D%3D%3D%20'name'%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22color-red%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E6%8F%92%E6%A7%BD%E5%B1%95%E7%A4%BA%20%7B%7B%20text%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23bodyCell%3D%22%7B%20column%2C%20text%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20v-if%3D%22column.dataIndex%20%3D%3D%3D%20'age1'%22%3E%3Cspan%20class%3D%22color-red%22%3E%E6%8F%92%E6%A7%BD%3C%2Fspan%3E%7B%7B%20text%20%7D%7D%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fm-table%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%A7%93%E5%90%8D'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'name'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20filters%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E8%B5%B5%E5%B1%B1%E6%B2%B3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'%E8%B5%B5%E5%B1%B1%E6%B2%B3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E8%B5%B5%E5%B1%B1%E6%B5%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'%E8%B5%B5%E5%B1%B1%E6%B5%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20filterSearch%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20onFilter%3A%20(value%2C%20record)%20%3D%3E%20record.name.includes(value)%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%84'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%841'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'age1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E5%B9%B4%E9%BE%842'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'age2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'%E4%BD%8F%E5%9D%80'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dataIndex%3A%20'address'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20sorter%3A%20(a%2C%20b)%20%3D%3E%20a.age%20-%20b.age%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0Aconst%20dataSource%20%3D%20ref(%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5%E5%B1%B1%E6%B2%B3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD1%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age1%3A%2031%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age2%3A%2032%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20description%3A%20'My%20name%20is%20John%20Brown%2C%20I%20am%2032%20years%20old%2C%20living%20in%20New%20York%20No.%201%20Lake%20Park.'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5%E5%B1%B1%E6%B5%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD2%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age1%3A%2033%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age2%3A%2034%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5%E9%93%81%E6%9F%B1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD4%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age1%3A%2035%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age2%3A%2036%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E8%B5%B5%E5%B0%8F%E8%9B%AE'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20address%3A%20'%E8%A5%BF%E6%B9%96%E5%8C%BA%E6%B9%96%E5%BA%95%E5%85%AC%E5%9B%AD3%E5%8F%B7'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age1%3A%2037%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20age2%3A%2038%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A)%0A%0A%3C%2Fscript%3E"},{code:c(()=>[h0]),default:c(()=>[t(T)]),_:1}),o0]))}};export{g0 as default};
