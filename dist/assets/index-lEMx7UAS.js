import{C as i}from"./vue-Mp1MOeSU.js";import{f as j,g as n,o,i as C,r as f,c as B,d as A,w as m,u as d,b as s,a as N,e as a}from"./index-CCTlWAJG.js";/* empty css                                                            */const E=j({__name:"index.md.Virtual7faf7ee9",setup(u){const c=n({items:[{componentName:"mInput",uploadKey:"1Input",formItemProps:{label:"条件1"}},{componentName:"mInput",uploadKey:"2Input",formItemProps:{label:"条件2"}},{componentName:"mInput",uploadKey:"3Input",formItemProps:{label:"条件3"}}]}),p=n([{title:"车型",dataIndex:"fullName",width:200},{title:"车型1",dataIndex:"fullName1",width:200},{title:"车型2",dataIndex:"fullName2"}]);function h(r){return console.log(r),new Promise(l=>{l({data:[{fullName:"大众1",fullName1:"一汽大众1",fullName2:"CC1"},{fullName:"大众2",fullName1:"一汽大众2",fullName2:"CC2"},{fullName:"大众3",fullName1:"一汽大众3",fullName2:"CC3"},{fullName:"大众4",fullName1:"一汽大众4",fullName2:"CC4"},{fullName:"大众5",fullName1:"一汽大众5",fullName2:"CC5"},{fullName:"大众6",fullName1:"一汽大众6",fullName2:"CC6"},{fullName:"大众7",fullName1:"一汽大众7",fullName2:"CC7"},{fullName:"大众8",fullName1:"一汽大众8",fullName2:"CC8"},{fullName:"大众9",fullName1:"一汽大众9",fullName2:"CC9"},{fullName:"大众10",fullName1:"一汽大众10",fullName2:"CC10"}],pageable:{totalElements:28}})})}return(r,l)=>{const t=f("m-page");return o(),C(t,{condition:c.value,getTableDataAsync:h,columns:p.value},null,8,["condition","columns"])}}}),b=j({__name:"index.md.Virtualdd88eddd",setup(u){const c=n({items:[{componentName:"mInput",uploadKey:"1Input",formItemProps:{label:"条件1"}},{componentName:"mInput",uploadKey:"2Input",enableQuery:!0,formItemProps:{label:"条件2"}},{componentName:"mInput",uploadKey:"3Input",formItemProps:{label:"条件3"}}]}),p=n([{title:"车型",dataIndex:"fullName",width:200},{title:"车型1",dataIndex:"fullName1",width:200},{title:"车型2",dataIndex:"fullName2"}]);function h(){return new Promise(t=>{setTimeout(()=>{t()},1e3*3)})}function r(t){return console.log("getTableDataExtraParamsAsync",t),new Promise(e=>{e({aa:11})})}function l(t){return console.log("getData",t),new Promise(e=>{e({data:[{fullName:"大众1",fullName1:"一汽大众1",fullName2:"CC1"},{fullName:"大众2",fullName1:"一汽大众2",fullName2:"CC2"},{fullName:"大众3",fullName1:"一汽大众3",fullName2:"CC3"},{fullName:"大众4",fullName1:"一汽大众4",fullName2:"CC4"},{fullName:"大众5",fullName1:"一汽大众5",fullName2:"CC5"},{fullName:"大众6",fullName1:"一汽大众6",fullName2:"CC6"},{fullName:"大众7",fullName1:"一汽大众7",fullName2:"CC7"},{fullName:"大众8",fullName1:"一汽大众8",fullName2:"CC8"},{fullName:"大众9",fullName1:"一汽大众9",fullName2:"CC9"},{fullName:"大众10",fullName1:"一汽大众10",fullName2:"CC10"}],pageable:{totalElements:28}})})}return(t,e)=>{const g=f("m-page");return o(),C(g,{condition:c.value,getTableDataAsync:l,columns:p.value,delayFirstAsync:h,getTableDataExtraParamsAsync:r},null,8,["condition","columns"])}}}),D=j({__name:"index.md.Virtual841671a5",setup(u){const c=n({items:[{componentName:"mInput",uploadKey:"1Input",formItemProps:{label:"条件1"}},{componentName:"mInput",uploadKey:"2Input",formItemProps:{label:"条件2"}},{componentName:"mInput",uploadKey:"3Input",formItemProps:{label:"条件3"}}]}),p=n([{title:"车型",dataIndex:"fullName",width:200},{title:"车型1",dataIndex:"fullName1",width:200},{title:"车型2",dataIndex:"fullName2"}]);function h(t){return console.log(t),new Promise(e=>{e({data:[{fullName:"大众1",fullName1:"一汽大众1",fullName2:"CC1"},{fullName:"大众2",fullName1:"一汽大众2",fullName2:"CC2"},{fullName:"大众3",fullName1:"一汽大众3",fullName2:"CC3"},{fullName:"大众4",fullName1:"一汽大众4",fullName2:"CC4"},{fullName:"大众5",fullName1:"一汽大众5",fullName2:"CC5"},{fullName:"大众6",fullName1:"一汽大众6",fullName2:"CC6"},{fullName:"大众7",fullName1:"一汽大众7",fullName2:"CC7"},{fullName:"大众8",fullName1:"一汽大众8",fullName2:"CC8"},{fullName:"大众9",fullName1:"一汽大众9",fullName2:"CC9"},{fullName:"大众10",fullName1:"一汽大众10",fullName2:"CC10"}],pageable:{totalElements:28}})})}const r=n({uploadKey:"pageTopKey",items:[{tab:"one top",key:"oneValue top"},{tab:"two top",key:"twoValue top"}]}),l=n({uploadKey:"tableAboveKey",defaultValue:"twoValue above",items:[{tab:"one above",key:"oneValue above"},{tab:"two above",key:"twoValue above"}]});return(t,e)=>{const g=f("m-page");return o(),C(g,{condition:c.value,getTableDataAsync:h,columns:p.value,pageTopTabs:r.value,tableAboveTabs:l.value},null,8,["condition","columns","pageTopTabs","tableAboveTabs"])}}}),y=j({__name:"index.md.Virtual1bfb3520",setup(u){const c=n({items:[{componentName:"mInput",uploadKey:"1Input",formItemProps:{label:"条件1"}},{componentName:"mInput",uploadKey:"2Input",formItemProps:{label:"条件2"}},{componentName:"mInput",uploadKey:"3Input",formItemProps:{label:"条件3"}}]}),p=n([{title:"车型",dataIndex:"fullName",width:200},{title:"车型1",dataIndex:"fullName1",width:200},{title:"车型2",dataIndex:"fullName2"}]),h=n({download:{enable:!0,getBlobAsync(l){return console.log("api",l),Promise.resolve()}},items:[{label:"按钮1",async confirmAsync(l){console.log("按钮1 confirmAsync",l)}},{label:"按钮2",async confirmAsync(l){console.log("按钮2 confirmAsync",l)}},{type:"multiple",items:[{label:"批量操作1",items:[{label:"驳回1",mode:"fail",async confirmAsync(...l){console.log("驳回1",l)}},{label:"允许通过1",mode:"success",async confirmAsync(...l){console.log("允许通过1",l)}}]}]}]});function r(l){return console.log(l),new Promise(t=>{t({data:[{fullName:"大众1",fullName1:"一汽大众1",fullName2:"CC1"},{fullName:"大众2",fullName1:"一汽大众2",fullName2:"CC2"},{fullName:"大众3",fullName1:"一汽大众3",fullName2:"CC3"},{fullName:"大众4",fullName1:"一汽大众4",fullName2:"CC4"},{fullName:"大众5",fullName1:"一汽大众5",fullName2:"CC5"},{fullName:"大众6",fullName1:"一汽大众6",fullName2:"CC6"},{fullName:"大众7",fullName1:"一汽大众7",fullName2:"CC7"},{fullName:"大众8",fullName1:"一汽大众8",fullName2:"CC8"},{fullName:"大众9",fullName1:"一汽大众9",fullName2:"CC9"},{fullName:"大众10",fullName1:"一汽大众10",fullName2:"CC10"}],pageable:{totalElements:28}})})}return(l,t)=>{const e=f("m-page");return o(),C(e,{condition:c.value,getTableDataAsync:r,columns:p.value,ability:h.value},null,8,["condition","columns","ability"])}}}),I={class:"marked-body"},_=s("h2",{id:"page"},"Page",-1),w=s("h3",{id:"简单操作"},"简单操作",-1),v=s("ul",null,[s("li",null,"作用在m-page组件上的属性都会传递到m-table上"),s("li",null,"condition为搜索条件，内置的是m-form，相关配置相同"),s("li",null,"条件改变时会调用getTableDataAsync进行接口请求")],-1),P=s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"m-page"),a(`
        `),s("span",{class:"hljs-attr"},":condition"),a("="),s("span",{class:"hljs-string"},'"condition"'),a(`
        `),s("span",{class:"hljs-attr"},":getTableDataAsync"),a("="),s("span",{class:"hljs-string"},'"getTableDataAsync"'),a(`
        `),s("span",{class:"hljs-attr"},":columns"),a("="),s("span",{class:"hljs-string"},'"columns"'),a(`
    >`)]),a(`
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"m-page"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(),s("span",{class:"hljs-attr"},"lang"),a("="),s("span",{class:"hljs-string"},'"ts"'),a(">")]),s("span",{class:"language-javascript"},[a(`
 `),s("span",{class:"hljs-keyword"},"import"),a(" {ref} "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},'"vue"'),a(`;

`),s("span",{class:"hljs-keyword"},"const"),a(" condition = "),s("span",{class:"hljs-title function_"},"ref"),a(`({
  `),s("span",{class:"hljs-attr"},"items"),a(`: [
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'1Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件1'"),a(`
      }
    },
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'2Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件2'"),a(`
      }
    },
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'3Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件3'"),a(`
      }
    },
  ]
})

`),s("span",{class:"hljs-keyword"},"const"),a(" columns = "),s("span",{class:"hljs-title function_"},"ref"),a(`([
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName'"),a(`,
    `),s("span",{class:"hljs-attr"},"width"),a(": "),s("span",{class:"hljs-number"},"200"),a(`,
  },
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型1'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName1'"),a(`,
    `),s("span",{class:"hljs-attr"},"width"),a(": "),s("span",{class:"hljs-number"},"200"),a(`,
  },
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型2'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName2'"),a(`,
  },
])

`),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"getTableDataAsync"),a("("),s("span",{class:"hljs-params"},"params"),a(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(params);
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Promise"),a(`(
      `),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"resolve"),a(") =>")]),a(` {
        `),s("span",{class:"hljs-title function_"},"resolve"),a(`({
          `),s("span",{class:"hljs-attr"},"data"),a(`: [
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众1'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众1'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC1'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众2'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众2'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC2'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众3'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众3'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC3'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众4'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众4'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC4'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众5'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众5'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC5'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众6'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众6'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC6'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众7'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众7'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC7'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众8'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众8'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC8'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众9'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众9'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC9'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众10'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众10'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC10'"),a(` },
          ],
          `),s("span",{class:"hljs-attr"},"pageable"),a(`: {
            `),s("span",{class:"hljs-attr"},"totalElements"),a(": "),s("span",{class:"hljs-number"},"28"),a(`,
          }
        })
      }
  )
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")])])],-1),T=s("h3",{id:"请求"},"请求",-1),x=s("ul",null,[s("li",null,"当进行首次请求前，可能需要进行一些其他操作，传入 delayFirstAsync 异步可实现"),s("li",null,"如需要对上传的参数进行处理，传入 getTableDataExtraParamsAsync 异步函数，处理后的对象会作为请求参数"),s("li",null,"支持某个查询条件变化后直接触发查询")],-1),k=s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"m-page"),a(`
        `),s("span",{class:"hljs-attr"},":condition"),a("="),s("span",{class:"hljs-string"},'"condition"'),a(`
        `),s("span",{class:"hljs-attr"},":getTableDataAsync"),a("="),s("span",{class:"hljs-string"},'"getDataAsync"'),a(`
        `),s("span",{class:"hljs-attr"},":columns"),a("="),s("span",{class:"hljs-string"},'"columns"'),a(`
        `),s("span",{class:"hljs-attr"},":delayFirstAsync"),a("="),s("span",{class:"hljs-string"},'"delayFirstAsync"'),a(`
        `),s("span",{class:"hljs-attr"},":getTableDataExtraParamsAsync"),a("="),s("span",{class:"hljs-string"},'"getTableDataExtraParamsAsync"'),a(`
    >`)]),a(`
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"m-page"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(),s("span",{class:"hljs-attr"},"lang"),a("="),s("span",{class:"hljs-string"},'"ts"'),a(">")]),s("span",{class:"language-javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" {ref} "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},'"vue"'),a(`;

`),s("span",{class:"hljs-keyword"},"const"),a(" condition = "),s("span",{class:"hljs-title function_"},"ref"),a(`({
  `),s("span",{class:"hljs-attr"},"items"),a(`: [
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'1Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件1'"),a(`
      }
    },
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'2Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"enableQuery"),a(": "),s("span",{class:"hljs-literal"},"true"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件2'"),a(`
      }
    },
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'3Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件3'"),a(`
      }
    },
  ]
})

`),s("span",{class:"hljs-keyword"},"const"),a(" columns = "),s("span",{class:"hljs-title function_"},"ref"),a(`([
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName'"),a(`,
    `),s("span",{class:"hljs-attr"},"width"),a(": "),s("span",{class:"hljs-number"},"200"),a(`,
  },
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型1'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName1'"),a(`,
    `),s("span",{class:"hljs-attr"},"width"),a(": "),s("span",{class:"hljs-number"},"200"),a(`,
  },
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型2'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName2'"),a(`,
  },
])

`),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"delayFirstAsync"),a("("),s("span",{class:"hljs-params"}),a(`) {
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Promise"),a(`(
      `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"resolve"),a(" =>")]),a(` {
        `),s("span",{class:"hljs-built_in"},"setTimeout"),a(`(
            `),s("span",{class:"hljs-function"},"() =>"),a(` {
              `),s("span",{class:"hljs-title function_"},"resolve"),a(`()
            },
            `),s("span",{class:"hljs-number"},"1000"),a(" * "),s("span",{class:"hljs-number"},"3"),a(`
        )
      }
  )
}

`),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"getTableDataExtraParamsAsync"),a("("),s("span",{class:"hljs-params"},"params"),a(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'getTableDataExtraParamsAsync'"),a(`, params)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Promise"),a(`(
      `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"resolve"),a(" =>")]),a(` {
        `),s("span",{class:"hljs-title function_"},"resolve"),a(`({
          `),s("span",{class:"hljs-attr"},"aa"),a(": "),s("span",{class:"hljs-number"},"11"),a(`
        })
      }
  )
}

`),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"getDataAsync"),a("("),s("span",{class:"hljs-params"},"params"),a(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'getData'"),a(`, params);
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Promise"),a(`(
      `),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"resolve"),a(") =>")]),a(` {
        `),s("span",{class:"hljs-title function_"},"resolve"),a(`({
          `),s("span",{class:"hljs-attr"},"data"),a(`: [
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众1'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众1'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC1'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众2'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众2'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC2'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众3'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众3'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC3'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众4'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众4'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC4'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众5'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众5'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC5'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众6'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众6'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC6'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众7'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众7'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC7'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众8'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众8'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC8'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众9'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众9'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC9'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众10'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众10'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC10'"),a(` },
          ],
          `),s("span",{class:"hljs-attr"},"pageable"),a(`: {
            `),s("span",{class:"hljs-attr"},"totalElements"),a(": "),s("span",{class:"hljs-number"},"28"),a(`,
          }
        })
      }
  )
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")])])],-1),K=s("h3",{id:"切换"},"切换",-1),F=s("ul",null,[s("li",null,"支持配置顶部切换"),s("li",null,"支持配置table上方的切换"),s("li",null,"切换的内容会作为参数传入")],-1),V=s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"m-page"),a(`
        `),s("span",{class:"hljs-attr"},":condition"),a("="),s("span",{class:"hljs-string"},'"condition"'),a(`
        `),s("span",{class:"hljs-attr"},":getTableDataAsync"),a("="),s("span",{class:"hljs-string"},'"getData"'),a(`
        `),s("span",{class:"hljs-attr"},":columns"),a("="),s("span",{class:"hljs-string"},'"columns"'),a(`
        `),s("span",{class:"hljs-attr"},":pageTopTabs"),a("="),s("span",{class:"hljs-string"},'"pageTopTabs"'),a(`
        `),s("span",{class:"hljs-attr"},":tableAboveTabs"),a("="),s("span",{class:"hljs-string"},'"tableAboveTabs"'),a(`
    >`)]),a(`
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"m-page"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(),s("span",{class:"hljs-attr"},"lang"),a("="),s("span",{class:"hljs-string"},'"ts"'),a(">")]),s("span",{class:"language-javascript"},[a(`
 `),s("span",{class:"hljs-keyword"},"import"),a(" {ref} "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},'"vue"'),a(`;

`),s("span",{class:"hljs-keyword"},"const"),a(" condition = "),s("span",{class:"hljs-title function_"},"ref"),a(`({
  `),s("span",{class:"hljs-attr"},"items"),a(`: [
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'1Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件1'"),a(`
      }
    },
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'2Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件2'"),a(`
      }
    },
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'3Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件3'"),a(`
      }
    },
  ]
})

`),s("span",{class:"hljs-keyword"},"const"),a(" columns = "),s("span",{class:"hljs-title function_"},"ref"),a(`([
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName'"),a(`,
    `),s("span",{class:"hljs-attr"},"width"),a(": "),s("span",{class:"hljs-number"},"200"),a(`,
  },
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型1'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName1'"),a(`,
    `),s("span",{class:"hljs-attr"},"width"),a(": "),s("span",{class:"hljs-number"},"200"),a(`,
  },
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型2'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName2'"),a(`,
  },
])

`),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"getData"),a("("),s("span",{class:"hljs-params"},"params"),a(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(params);
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Promise"),a(`(
      `),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"resolve"),a(") =>")]),a(` {
        `),s("span",{class:"hljs-title function_"},"resolve"),a(`({
          `),s("span",{class:"hljs-attr"},"data"),a(`: [
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众1'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众1'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC1'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众2'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众2'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC2'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众3'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众3'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC3'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众4'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众4'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC4'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众5'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众5'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC5'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众6'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众6'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC6'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众7'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众7'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC7'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众8'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众8'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC8'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众9'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众9'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC9'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众10'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众10'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC10'"),a(` },
          ],
          `),s("span",{class:"hljs-attr"},"pageable"),a(`: {
            `),s("span",{class:"hljs-attr"},"totalElements"),a(": "),s("span",{class:"hljs-number"},"28"),a(`,
          }
        })
      }
  )
}

`),s("span",{class:"hljs-keyword"},"const"),a(" pageTopTabs = "),s("span",{class:"hljs-title function_"},"ref"),a(`({
  `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'pageTopKey'"),a(`,
  `),s("span",{class:"hljs-attr"},"items"),a(`: [
    {
      `),s("span",{class:"hljs-attr"},"tab"),a(": "),s("span",{class:"hljs-string"},"'one top'"),a(`,
      `),s("span",{class:"hljs-attr"},"key"),a(": "),s("span",{class:"hljs-string"},"'oneValue top'"),a(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"tab"),a(": "),s("span",{class:"hljs-string"},"'two top'"),a(`,
      `),s("span",{class:"hljs-attr"},"key"),a(": "),s("span",{class:"hljs-string"},"'twoValue top'"),a(`,
    }
  ]
});

`),s("span",{class:"hljs-keyword"},"const"),a(" tableAboveTabs = "),s("span",{class:"hljs-title function_"},"ref"),a(`({
  `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'tableAboveKey'"),a(`,
  `),s("span",{class:"hljs-attr"},"defaultValue"),a(": "),s("span",{class:"hljs-string"},"'twoValue above'"),a(`,
  `),s("span",{class:"hljs-attr"},"items"),a(`: [
    {
      `),s("span",{class:"hljs-attr"},"tab"),a(": "),s("span",{class:"hljs-string"},"'one above'"),a(`,
      `),s("span",{class:"hljs-attr"},"key"),a(": "),s("span",{class:"hljs-string"},"'oneValue above'"),a(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"tab"),a(": "),s("span",{class:"hljs-string"},"'two above'"),a(`,
      `),s("span",{class:"hljs-attr"},"key"),a(": "),s("span",{class:"hljs-string"},"'twoValue above'"),a(`,
    }
  ]
});

`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")])])],-1),S=s("h3",{id:"功能区"},"功能区",-1),Q=s("ul",null,[s("li",null,"默认展示全屏 及 自定义列"),s("li",null,"下载按钮可配置"),s("li",null,"支持常规按钮及多选按钮配置")],-1),$=s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"m-page"),a(`
        `),s("span",{class:"hljs-attr"},":condition"),a("="),s("span",{class:"hljs-string"},'"condition"'),a(`
        `),s("span",{class:"hljs-attr"},":getTableDataAsync"),a("="),s("span",{class:"hljs-string"},'"getData"'),a(`
        `),s("span",{class:"hljs-attr"},":columns"),a("="),s("span",{class:"hljs-string"},'"columns"'),a(`
        `),s("span",{class:"hljs-attr"},":ability"),a("="),s("span",{class:"hljs-string"},'"ability"'),a(`
    >`)]),a(`
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"m-page"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(),s("span",{class:"hljs-attr"},"lang"),a("="),s("span",{class:"hljs-string"},'"ts"'),a(">")]),s("span",{class:"language-javascript"},[a(`
 `),s("span",{class:"hljs-keyword"},"import"),a(" {ref} "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},'"vue"'),a(`;

`),s("span",{class:"hljs-keyword"},"const"),a(" condition = "),s("span",{class:"hljs-title function_"},"ref"),a(`({
  `),s("span",{class:"hljs-attr"},"items"),a(`: [
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'1Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件1'"),a(`
      }
    },
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'2Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件2'"),a(`
      }
    },
    {
      `),s("span",{class:"hljs-attr"},"componentName"),a(": "),s("span",{class:"hljs-string"},"'mInput'"),a(`,
      `),s("span",{class:"hljs-attr"},"uploadKey"),a(": "),s("span",{class:"hljs-string"},"'3Input'"),a(`,
      `),s("span",{class:"hljs-attr"},"formItemProps"),a(`: {
        `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'条件3'"),a(`
      }
    },
  ]
})

`),s("span",{class:"hljs-keyword"},"const"),a(" columns = "),s("span",{class:"hljs-title function_"},"ref"),a(`([
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName'"),a(`,
    `),s("span",{class:"hljs-attr"},"width"),a(": "),s("span",{class:"hljs-number"},"200"),a(`,
  },
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型1'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName1'"),a(`,
    `),s("span",{class:"hljs-attr"},"width"),a(": "),s("span",{class:"hljs-number"},"200"),a(`,
  },
  {
    `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'车型2'"),a(`,
    `),s("span",{class:"hljs-attr"},"dataIndex"),a(": "),s("span",{class:"hljs-string"},"'fullName2'"),a(`,
  },
])

`),s("span",{class:"hljs-keyword"},"const"),a(" ability = "),s("span",{class:"hljs-title function_"},"ref"),a(`({
  `),s("span",{class:"hljs-attr"},"download"),a(`: {
    `),s("span",{class:"hljs-attr"},"enable"),a(": "),s("span",{class:"hljs-literal"},"true"),a(`,
    `),s("span",{class:"hljs-title function_"},"getBlobAsync"),a("("),s("span",{class:"hljs-params"},"params"),a(`) {
        `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'api'"),a(`, params)
        `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a(`()
    }
  },
  `),s("span",{class:"hljs-attr"},"items"),a(`: [
    {
      `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'按钮1'"),a(`,
      `),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"confirmAsync"),a("("),s("span",{class:"hljs-params"},"param1"),a(`) {
        `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'按钮1 confirmAsync'"),a(`, param1);
      }
    },
    {
      `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'按钮2'"),a(`,
      `),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"confirmAsync"),a("("),s("span",{class:"hljs-params"},"param1"),a(`) {
        `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'按钮2 confirmAsync'"),a(`, param1);
      }
    },
    {
      `),s("span",{class:"hljs-attr"},"type"),a(": "),s("span",{class:"hljs-string"},"'multiple'"),a(`,
      `),s("span",{class:"hljs-attr"},"items"),a(`: [
        {
          `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'批量操作1'"),a(`,
          `),s("span",{class:"hljs-attr"},"items"),a(`: [
            {
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'驳回1'"),a(`,
              `),s("span",{class:"hljs-attr"},"mode"),a(": "),s("span",{class:"hljs-string"},"'fail'"),a(`,
              `),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"confirmAsync"),a("("),s("span",{class:"hljs-params"},"...params"),a(`) {
                `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'驳回1'"),a(`, params);
              }
            },
            {
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'允许通过1'"),a(`,
              `),s("span",{class:"hljs-attr"},"mode"),a(": "),s("span",{class:"hljs-string"},"'success'"),a(`,
              `),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"confirmAsync"),a("("),s("span",{class:"hljs-params"},"...params"),a(`) {
                `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'允许通过1'"),a(`, params);
              }
            }
          ]
        },
      ]
    }
  ]
});

`),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"getData"),a("("),s("span",{class:"hljs-params"},"params"),a(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(params);
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Promise"),a(`(
      `),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"resolve"),a(") =>")]),a(` {
        `),s("span",{class:"hljs-title function_"},"resolve"),a(`({
          `),s("span",{class:"hljs-attr"},"data"),a(`: [
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众1'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众1'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC1'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众2'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众2'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC2'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众3'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众3'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC3'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众4'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众4'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC4'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众5'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众5'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC5'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众6'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众6'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC6'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众7'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众7'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC7'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众8'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众8'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC8'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众9'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众9'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC9'"),a(` },
            { `),s("span",{class:"hljs-attr"},"fullName"),a(": "),s("span",{class:"hljs-string"},"'大众10'"),a(", "),s("span",{class:"hljs-attr"},"fullName1"),a(": "),s("span",{class:"hljs-string"},"'一汽大众10'"),a(", "),s("span",{class:"hljs-attr"},"fullName2"),a(": "),s("span",{class:"hljs-string"},"'CC10'"),a(` },
          ],
          `),s("span",{class:"hljs-attr"},"pageable"),a(`: {
            `),s("span",{class:"hljs-attr"},"totalElements"),a(": "),s("span",{class:"hljs-number"},"28"),a(`,
          }
        })
      }
  )
}

`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")])])],-1),O=N('<h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>getTableDataAsync</td><td>获取接口数据</td><td>Function</td><td>{ form搜索条件，分页, 顶部切换， table上方切换}</td><td>-</td><td>是</td></tr><tr><td>delayFirstAsync</td><td>首次接口请求前的延时</td><td>Function</td><td>-</td><td>-</td><td>否</td></tr><tr><td>getTableDataExtraParamsAsync</td><td>请求参数调整</td><td>Function</td><td>{ form搜索条件，分页, 顶部切换， table上方切换}</td><td>-</td><td>否</td></tr><tr><td>pageTopTabs、tableAboveTabs</td><td>标签配置</td><td><a href="#tabs">Object</a></td><td>-</td><td>-</td><td>否</td></tr><tr><td>ability</td><td>标签配置</td><td><a href="#ability">Object</a></td><td>-</td><td>-</td><td>否</td></tr><tr><td>condition，同form组件配置</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>其它，同m-table配置</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h3 id="ability">ability</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>config</td><td>配置</td><td>{download: { enable: true, getBlobAsync({ form搜索条件，分页, 顶部切换， table上方切换}){ return {blob, name} } }}</td><td>-</td><td>-</td><td>否</td></tr><tr><td>items</td><td>操作数组</td><td>Array</td><td><a href="#ability-normal">normal[]</a>、<a href="#ability-multiple">multiple[]</a></td><td>-</td><td>否</td></tr></tbody></table><h3 id="ability-normal">ability-normal</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>label</td><td>展示文字</td><td>String</td><td>-</td><td>-</td><td>是</td></tr><tr><td>disabled</td><td>是否禁止操作</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>hidden</td><td>是否隐藏</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>confirmAsync</td><td>点击回调</td><td>Function</td><td></td><td>-</td><td>是</td></tr></tbody></table><h3 id="ability-multiple">ability-multiple</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>String</td><td>multiple</td><td>multiple</td><td>是</td></tr><tr><td>items</td><td>配置项</td><td>Array</td><td><a href="#ability-multiple-item">ability-multiple-item[]</a></td><td>-</td><td>是</td></tr></tbody></table><h3 id="ability-multiple-item">ability-multiple-item</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>label</td><td>展示文字</td><td>String</td><td>-</td><td>-</td><td>是</td></tr><tr><td>disabled</td><td>是否禁止操作</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>hidden</td><td>是否隐藏</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>enableCrossPage</td><td>跨页面是否包含之前内容</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>getCheckboxProps</td><td>多选是否禁止操作函数</td><td>Function</td><td>record</td><td>()=&gt;{}</td><td>否</td></tr><tr><td>items</td><td>顶部按钮配置</td><td>Array</td><td><a href="#ability-multiple-item-item">ability-multiple-item-item[]</a></td><td>-</td><td>是</td></tr></tbody></table><h3 id="ability-multiple-item-item">ability-multiple-item-item</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>label</td><td>展示文字</td><td>String</td><td>-</td><td>-</td><td>是</td></tr><tr><td>confirmAsync</td><td>点击回调</td><td>Function</td><td></td><td>-</td><td>是</td></tr><tr><td>disabled</td><td>是否禁止操作</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>hidden</td><td>是否隐藏</td><td>Boolean</td><td>-</td><td>false</td><td>否</td></tr><tr><td>mode，同m-table的mode</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h3 id="tabs">tabs</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>items</td><td>配置数组</td><td>Array</td><td><a href="#tabs-item">tabs-item</a></td><td>-</td><td>是</td></tr></tbody></table><h3 id="tabs-item">tabs-item</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>同m-tab-pane属性</td><td>-</td><td>-</td><td></td><td>-</td><td>-</td></tr></tbody></table><h3 id="expose">Expose</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>antFormComponent</td><td>form实例</td></tr><tr><td>antTableComponent</td><td>table实例子</td></tr><tr><td>getTableData</td><td>获取数据接口</td></tr><tr><td>handleFormQuery</td><td>点击搜索进行查询</td></tr></tbody></table>',18),H={__name:"index",setup(u){return(c,p)=>(o(),B("div",I,[_,w,v,A(d(i),{code:"%3Ctemplate%3E%0A%20%20%20%20%3Cm-page%0A%20%20%20%20%20%20%20%20%3Acondition%3D%22condition%22%0A%20%20%20%20%20%20%20%20%3AgetTableDataAsync%3D%22getTableDataAsync%22%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%3E%0A%20%20%20%20%3C%2Fm-page%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20import%20%7Bref%7D%20from%20%22vue%22%3B%0A%0Aconst%20condition%20%3D%20ref(%7B%0A%20%20items%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'1Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B61'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'2Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B62'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'3Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B63'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%5D%0A%7D)%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B'%2C%0A%20%20%20%20dataIndex%3A%20'fullName'%2C%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B1'%2C%0A%20%20%20%20dataIndex%3A%20'fullName1'%2C%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B2'%2C%0A%20%20%20%20dataIndex%3A%20'fullName2'%2C%0A%20%20%7D%2C%0A%5D)%0A%0Afunction%20getTableDataAsync(params)%20%7B%0A%20%20console.log(params)%3B%0A%20%20return%20new%20Promise(%0A%20%20%20%20%20%20(resolve)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20resolve(%7B%0A%20%20%20%20%20%20%20%20%20%20data%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%971'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%971'%2C%20fullName2%3A%20'CC1'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%972'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%972'%2C%20fullName2%3A%20'CC2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%973'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%973'%2C%20fullName2%3A%20'CC3'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%974'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%974'%2C%20fullName2%3A%20'CC4'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%975'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%975'%2C%20fullName2%3A%20'CC5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%976'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%976'%2C%20fullName2%3A%20'CC6'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%977'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%977'%2C%20fullName2%3A%20'CC7'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%978'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%978'%2C%20fullName2%3A%20'CC8'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%979'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%979'%2C%20fullName2%3A%20'CC9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%9710'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%9710'%2C%20fullName2%3A%20'CC10'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20pageable%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20totalElements%3A%2028%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20)%0A%7D%0A%3C%2Fscript%3E"},{code:m(()=>[P]),default:m(()=>[A(E)]),_:1}),T,x,A(d(i),{code:"%3Ctemplate%3E%0A%20%20%20%20%3Cm-page%0A%20%20%20%20%20%20%20%20%3Acondition%3D%22condition%22%0A%20%20%20%20%20%20%20%20%3AgetTableDataAsync%3D%22getDataAsync%22%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%20%20%3AdelayFirstAsync%3D%22delayFirstAsync%22%0A%20%20%20%20%20%20%20%20%3AgetTableDataExtraParamsAsync%3D%22getTableDataExtraParamsAsync%22%0A%20%20%20%20%3E%0A%20%20%20%20%3C%2Fm-page%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7Bref%7D%20from%20%22vue%22%3B%0A%0Aconst%20condition%20%3D%20ref(%7B%0A%20%20items%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'1Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B61'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'2Input'%2C%0A%20%20%20%20%20%20enableQuery%3A%20true%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B62'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'3Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B63'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%5D%0A%7D)%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B'%2C%0A%20%20%20%20dataIndex%3A%20'fullName'%2C%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B1'%2C%0A%20%20%20%20dataIndex%3A%20'fullName1'%2C%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B2'%2C%0A%20%20%20%20dataIndex%3A%20'fullName2'%2C%0A%20%20%7D%2C%0A%5D)%0A%0Afunction%20delayFirstAsync()%20%7B%0A%20%20return%20new%20Promise(%0A%20%20%20%20%20%20resolve%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setTimeout(%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve()%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%201000%20*%203%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20)%0A%7D%0A%0Afunction%20getTableDataExtraParamsAsync(params)%20%7B%0A%20%20console.log('getTableDataExtraParamsAsync'%2C%20params)%0A%20%20return%20new%20Promise(%0A%20%20%20%20%20%20resolve%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20resolve(%7B%0A%20%20%20%20%20%20%20%20%20%20aa%3A%2011%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20)%0A%7D%0A%0Afunction%20getDataAsync(params)%20%7B%0A%20%20console.log('getData'%2C%20params)%3B%0A%20%20return%20new%20Promise(%0A%20%20%20%20%20%20(resolve)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20resolve(%7B%0A%20%20%20%20%20%20%20%20%20%20data%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%971'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%971'%2C%20fullName2%3A%20'CC1'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%972'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%972'%2C%20fullName2%3A%20'CC2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%973'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%973'%2C%20fullName2%3A%20'CC3'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%974'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%974'%2C%20fullName2%3A%20'CC4'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%975'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%975'%2C%20fullName2%3A%20'CC5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%976'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%976'%2C%20fullName2%3A%20'CC6'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%977'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%977'%2C%20fullName2%3A%20'CC7'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%978'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%978'%2C%20fullName2%3A%20'CC8'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%979'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%979'%2C%20fullName2%3A%20'CC9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%9710'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%9710'%2C%20fullName2%3A%20'CC10'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20pageable%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20totalElements%3A%2028%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20)%0A%7D%0A%3C%2Fscript%3E"},{code:m(()=>[k]),default:m(()=>[A(b)]),_:1}),K,F,A(d(i),{code:"%3Ctemplate%3E%0A%20%20%20%20%3Cm-page%0A%20%20%20%20%20%20%20%20%3Acondition%3D%22condition%22%0A%20%20%20%20%20%20%20%20%3AgetTableDataAsync%3D%22getData%22%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%20%20%3ApageTopTabs%3D%22pageTopTabs%22%0A%20%20%20%20%20%20%20%20%3AtableAboveTabs%3D%22tableAboveTabs%22%0A%20%20%20%20%3E%0A%20%20%20%20%3C%2Fm-page%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20import%20%7Bref%7D%20from%20%22vue%22%3B%0A%0Aconst%20condition%20%3D%20ref(%7B%0A%20%20items%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'1Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B61'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'2Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B62'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'3Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B63'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%5D%0A%7D)%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B'%2C%0A%20%20%20%20dataIndex%3A%20'fullName'%2C%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B1'%2C%0A%20%20%20%20dataIndex%3A%20'fullName1'%2C%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B2'%2C%0A%20%20%20%20dataIndex%3A%20'fullName2'%2C%0A%20%20%7D%2C%0A%5D)%0A%0Afunction%20getData(params)%20%7B%0A%20%20console.log(params)%3B%0A%20%20return%20new%20Promise(%0A%20%20%20%20%20%20(resolve)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20resolve(%7B%0A%20%20%20%20%20%20%20%20%20%20data%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%971'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%971'%2C%20fullName2%3A%20'CC1'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%972'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%972'%2C%20fullName2%3A%20'CC2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%973'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%973'%2C%20fullName2%3A%20'CC3'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%974'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%974'%2C%20fullName2%3A%20'CC4'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%975'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%975'%2C%20fullName2%3A%20'CC5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%976'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%976'%2C%20fullName2%3A%20'CC6'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%977'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%977'%2C%20fullName2%3A%20'CC7'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%978'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%978'%2C%20fullName2%3A%20'CC8'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%979'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%979'%2C%20fullName2%3A%20'CC9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%9710'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%9710'%2C%20fullName2%3A%20'CC10'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20pageable%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20totalElements%3A%2028%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20)%0A%7D%0A%0Aconst%20pageTopTabs%20%3D%20ref(%7B%0A%20%20uploadKey%3A%20'pageTopKey'%2C%0A%20%20items%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20tab%3A%20'one%20top'%2C%0A%20%20%20%20%20%20key%3A%20'oneValue%20top'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20tab%3A%20'two%20top'%2C%0A%20%20%20%20%20%20key%3A%20'twoValue%20top'%2C%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)%3B%0A%0Aconst%20tableAboveTabs%20%3D%20ref(%7B%0A%20%20uploadKey%3A%20'tableAboveKey'%2C%0A%20%20defaultValue%3A%20'twoValue%20above'%2C%0A%20%20items%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20tab%3A%20'one%20above'%2C%0A%20%20%20%20%20%20key%3A%20'oneValue%20above'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20tab%3A%20'two%20above'%2C%0A%20%20%20%20%20%20key%3A%20'twoValue%20above'%2C%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)%3B%0A%0A%3C%2Fscript%3E"},{code:m(()=>[V]),default:m(()=>[A(D)]),_:1}),S,Q,A(d(i),{code:"%3Ctemplate%3E%0A%20%20%20%20%3Cm-page%0A%20%20%20%20%20%20%20%20%3Acondition%3D%22condition%22%0A%20%20%20%20%20%20%20%20%3AgetTableDataAsync%3D%22getData%22%0A%20%20%20%20%20%20%20%20%3Acolumns%3D%22columns%22%0A%20%20%20%20%20%20%20%20%3Aability%3D%22ability%22%0A%20%20%20%20%3E%0A%20%20%20%20%3C%2Fm-page%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20import%20%7Bref%7D%20from%20%22vue%22%3B%0A%0Aconst%20condition%20%3D%20ref(%7B%0A%20%20items%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'1Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B61'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'2Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B62'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20%20%20uploadKey%3A%20'3Input'%2C%0A%20%20%20%20%20%20formItemProps%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E6%9D%A1%E4%BB%B63'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%5D%0A%7D)%0A%0Aconst%20columns%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B'%2C%0A%20%20%20%20dataIndex%3A%20'fullName'%2C%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B1'%2C%0A%20%20%20%20dataIndex%3A%20'fullName1'%2C%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'%E8%BD%A6%E5%9E%8B2'%2C%0A%20%20%20%20dataIndex%3A%20'fullName2'%2C%0A%20%20%7D%2C%0A%5D)%0A%0Aconst%20ability%20%3D%20ref(%7B%0A%20%20download%3A%20%7B%0A%20%20%20%20enable%3A%20true%2C%0A%20%20%20%20getBlobAsync(params)%20%7B%0A%20%20%20%20%20%20%20%20console.log('api'%2C%20params)%0A%20%20%20%20%20%20%20%20return%20Promise.resolve()%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20items%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%8C%89%E9%92%AE1'%2C%0A%20%20%20%20%20%20async%20confirmAsync(param1)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E6%8C%89%E9%92%AE1%20confirmAsync'%2C%20param1)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E6%8C%89%E9%92%AE2'%2C%0A%20%20%20%20%20%20async%20confirmAsync(param1)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E6%8C%89%E9%92%AE2%20confirmAsync'%2C%20param1)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20'multiple'%2C%0A%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%89%B9%E9%87%8F%E6%93%8D%E4%BD%9C1'%2C%0A%20%20%20%20%20%20%20%20%20%20items%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E9%A9%B3%E5%9B%9E1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20mode%3A%20'fail'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20async%20confirmAsync(...params)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('%E9%A9%B3%E5%9B%9E1'%2C%20params)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%85%81%E8%AE%B8%E9%80%9A%E8%BF%871'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20mode%3A%20'success'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20async%20confirmAsync(...params)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('%E5%85%81%E8%AE%B8%E9%80%9A%E8%BF%871'%2C%20params)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)%3B%0A%0Afunction%20getData(params)%20%7B%0A%20%20console.log(params)%3B%0A%20%20return%20new%20Promise(%0A%20%20%20%20%20%20(resolve)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20resolve(%7B%0A%20%20%20%20%20%20%20%20%20%20data%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%971'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%971'%2C%20fullName2%3A%20'CC1'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%972'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%972'%2C%20fullName2%3A%20'CC2'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%973'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%973'%2C%20fullName2%3A%20'CC3'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%974'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%974'%2C%20fullName2%3A%20'CC4'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%975'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%975'%2C%20fullName2%3A%20'CC5'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%976'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%976'%2C%20fullName2%3A%20'CC6'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%977'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%977'%2C%20fullName2%3A%20'CC7'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%978'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%978'%2C%20fullName2%3A%20'CC8'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%979'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%979'%2C%20fullName2%3A%20'CC9'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20fullName%3A%20'%E5%A4%A7%E4%BC%9710'%2C%20fullName1%3A%20'%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%9710'%2C%20fullName2%3A%20'CC10'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20pageable%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20totalElements%3A%2028%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20)%0A%7D%0A%0A%3C%2Fscript%3E"},{code:m(()=>[$]),default:m(()=>[A(y)]),_:1}),O]))}};export{H as default};
