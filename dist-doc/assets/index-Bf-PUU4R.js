import{C as A}from"./vue-CUVwrQGM.js";import{f as _,g as C,o as i,c as u,d as l,w as t,e as s,r as o,u as g,b as a}from"./index-ggtc0h3_.js";/* empty css                                                            */const w=_({__name:"index.md.Virtual6545c27e",setup(d){const n=C(!1),p=()=>{n.value=!0};function r(){n.value=!1}function h(){n.value=!1}return(f,j)=>{const e=o("m-button"),c=o("m-drawer");return i(),u("div",null,[l(e,{onClick:p},{default:t(()=>[s("Open")]),_:1}),l(c,{open:n.value,"onUpdate:open":j[0]||(j[0]=m=>n.value=m),title:"标题"},{extra:t(()=>[l(e,{onClick:r},{default:t(()=>[s("关闭")]),_:1}),l(e,{class:"ml-8px",mode:"success",onClick:h},{default:t(()=>[s("开启")]),_:1})]),_:1},8,["open"])])}}}),E=_({__name:"index.md.Virtualb024203a",setup(d){const n=C(!1),p=()=>{n.value=!0};function r(){n.value=!1}function h(){n.value=!1}function f(){console.log("handleAfterOpenChange")}return(j,e)=>{const c=o("m-button"),m=o("m-drawer");return i(),u("div",null,[l(c,{onClick:p},{default:t(()=>[s("Open")]),_:1}),l(m,{open:n.value,"onUpdate:open":e[0]||(e[0]=D=>n.value=D),title:"标题",placement:"left",onAfterOpenChange:f},{extra:t(()=>[l(c,{onClick:r},{default:t(()=>[s("关闭")]),_:1}),l(c,{class:"ml-8px",mode:"success",onClick:h},{default:t(()=>[s("开启")]),_:1})]),_:1},8,["open"])])}}}),v={class:"marked-body"},b=a("h2",{id:"drawer"},"Drawer",-1),k=a("h3",{id:"展示效果"},"展示效果",-1),B=a("ul",null,[a("li",null,"点击遮罩不会关闭")],-1),x=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showDrawer"'),s(">")]),s("Open"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-drawer"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:open"),s("="),a("span",{class:"hljs-string"},'"open"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"cancel"'),s(">")]),s("关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"ml-8px"'),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("开启"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-drawer"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" open = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);

`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showDrawer"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  open.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
};

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"cancel"),s("("),a("span",{class:"hljs-params"}),s(`) {
    open.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`
}

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"submit"),s("("),a("span",{class:"hljs-params"}),s(`) {
    open.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),y=a("h3",{id:"antd功能"},"antd功能",-1),F=a("ul",null,[a("li",null,"除弃用属性，其余属性、事件、插槽均支持")],-1),O=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showDrawer"'),s(">")]),s("Open"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-drawer"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:open"),s("="),a("span",{class:"hljs-string"},'"open"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(`
    `),a("span",{class:"hljs-attr"},"placement"),s("="),a("span",{class:"hljs-string"},'"left"'),s(`
    @`),a("span",{class:"hljs-attr"},"afterOpenChange"),s("="),a("span",{class:"hljs-string"},'"handleAfterOpenChange"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
       `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"cancel"'),s(">")]),s("关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"ml-8px"'),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("开启"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-drawer"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" open = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);

`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"showDrawer"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  open.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
};

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"cancel"),s("("),a("span",{class:"hljs-params"}),s(`) {
    open.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`
}

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"submit"),s("("),a("span",{class:"hljs-params"}),s(`) {
    open.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`
}

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"handleAfterOpenChange"),s("("),a("span",{class:"hljs-params"}),s(`) {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'handleAfterOpenChange'"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),V=a("h3",{id:"antd弃用属性"},"antd弃用属性",-1),P={__name:"index",setup(d){return(n,p)=>(i(),u("div",v,[b,k,B,l(g(A),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%20%3Cm-button%20%40click%3D%22showDrawer%22%3EOpen%3C%2Fm-button%3E%0A%20%20%20%3Cm-drawer%0A%20%20%20%20v-model%3Aopen%3D%22open%22%0A%20%20%20%20title%3D%22%E6%A0%87%E9%A2%98%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23extra%3E%0A%20%20%20%20%20%20%20%20%3Cm-button%20%40click%3D%22cancel%22%3E%E5%85%B3%E9%97%AD%3C%2Fm-button%3E%0A%20%20%20%20%20%20%20%20%3Cm-button%20class%3D%22ml-8px%22%20mode%3D%22success%22%20%40click%3D%22submit%22%3E%E5%BC%80%E5%90%AF%3C%2Fm-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fm-drawer%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0Aconst%20open%20%3D%20ref(false)%3B%0A%0Aconst%20showDrawer%20%3D%20()%20%3D%3E%20%7B%0A%20%20open.value%20%3D%20true%3B%0A%7D%3B%0A%0Afunction%20cancel()%20%7B%0A%20%20%20%20open.value%20%3D%20false%0A%7D%0A%0Afunction%20submit()%20%7B%0A%20%20%20%20open.value%20%3D%20false%0A%7D%0A%3C%2Fscript%3E"},{code:t(()=>[x]),default:t(()=>[l(w)]),_:1}),y,F,l(g(A),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%20%3Cm-button%20%40click%3D%22showDrawer%22%3EOpen%3C%2Fm-button%3E%0A%20%20%20%3Cm-drawer%0A%20%20%20%20v-model%3Aopen%3D%22open%22%0A%20%20%20%20title%3D%22%E6%A0%87%E9%A2%98%22%0A%20%20%20%20placement%3D%22left%22%0A%20%20%20%20%40afterOpenChange%3D%22handleAfterOpenChange%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23extra%3E%0A%20%20%20%20%20%20%20%3Cm-button%20%40click%3D%22cancel%22%3E%E5%85%B3%E9%97%AD%3C%2Fm-button%3E%0A%20%20%20%20%20%20%3Cm-button%20class%3D%22ml-8px%22%20mode%3D%22success%22%20%40click%3D%22submit%22%3E%E5%BC%80%E5%90%AF%3C%2Fm-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fm-drawer%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0Aconst%20open%20%3D%20ref(false)%3B%0A%0Aconst%20showDrawer%20%3D%20()%20%3D%3E%20%7B%0A%20%20open.value%20%3D%20true%3B%0A%7D%3B%0A%0Afunction%20cancel()%20%7B%0A%20%20%20%20open.value%20%3D%20false%0A%7D%0A%0Afunction%20submit()%20%7B%0A%20%20%20%20open.value%20%3D%20false%0A%7D%0A%0Afunction%20handleAfterOpenChange()%20%7B%0A%20%20%20%20console.log('handleAfterOpenChange')%0A%7D%0A%3C%2Fscript%3E"},{code:t(()=>[O]),default:t(()=>[l(E)]),_:1}),V]))}};export{P as default};
