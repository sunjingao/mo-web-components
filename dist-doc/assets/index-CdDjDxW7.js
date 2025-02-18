import{C as A}from"./vue-IUGgBgo5.js";import{f as m,g as n,h as g,o as i,c as j,d as t,r as v,w as h,u,b as l,a as _,e as s}from"./index-FF7sC9ng.js";/* empty css                                                            */const C=m({__name:"index.md.Virtualcb19f580",setup(d){n(!1);const p=n([{value:"jack",label:"中1"},{value:"lucy",label:"式12"},{value:"disabled",label:"美123"},{value:"yiminghe",label:"学1234"}]),a=n([]);return g(a,e=>{console.log(e)}),(e,c)=>{const o=v("m-select");return i(),j("div",null,[t(o,{value:a.value,"onUpdate:value":c[0]||(c[0]=r=>a.value=r),style:{width:"100%"},options:p.value},null,8,["value","options"])])}}}),f=m({__name:"index.md.Virtual177572a8",setup(d){n(!1);const p=n([{value:"jack",label:"中1"},{value:"lucy",label:"中12"},{value:"disabled",label:"中123"},{value:"yiminghe",label:"中1234"}]),a=n([]);return g(a,e=>{console.log(e)}),(e,c)=>{const o=v("m-select");return i(),j("div",null,[t(o,{value:a.value,"onUpdate:value":c[0]||(c[0]=r=>a.value=r),style:{width:"100%"},options:p.value,mode:"multiple"},null,8,["value","options"])])}}}),b={class:"marked-body"},D=l("h2",{id:"select"},"Select",-1),B=l("h3",{id:"搜索功能"},"搜索功能",-1),y=l("ul",null,[l("li",null,"单选时也会默认开启搜索功能"),l("li",null,"搜索时，支持拼音搜索中文")],-1),E=l("pre",{class:"language-xml"},[l("code",{class:"hljs"},[s(`
`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"m-select"),s(`
      `),l("span",{class:"hljs-attr"},"v-model:value"),s("="),l("span",{class:"hljs-string"},'"selectedItems"'),s(`
      `),l("span",{class:"hljs-attr"},"style"),s("="),l("span",{class:"hljs-string"},'"width: 100%"'),s(`
      `),l("span",{class:"hljs-attr"},":options"),s("="),l("span",{class:"hljs-string"},'"ops"'),s(`
    >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"m-select"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"lang"),s("="),l("span",{class:"hljs-string"},'"ts"'),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"language-javascript"},[s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

  `),l("span",{class:"hljs-keyword"},"const"),s(" test = "),l("span",{class:"hljs-title function_"},"ref"),s("("),l("span",{class:"hljs-literal"},"false"),s(`)
  `),l("span",{class:"hljs-keyword"},"const"),s(" ops = "),l("span",{class:"hljs-title function_"},"ref"),s(`([
    {
      `),l("span",{class:"hljs-attr"},"value"),s(": "),l("span",{class:"hljs-string"},"'jack'"),s(`,
      `),l("span",{class:"hljs-attr"},"label"),s(": "),l("span",{class:"hljs-string"},"'中1'"),s(`,
    },
    {
      `),l("span",{class:"hljs-attr"},"value"),s(": "),l("span",{class:"hljs-string"},"'lucy'"),s(`,
      `),l("span",{class:"hljs-attr"},"label"),s(": "),l("span",{class:"hljs-string"},"'式12'"),s(`,
    },
    {
      `),l("span",{class:"hljs-attr"},"value"),s(": "),l("span",{class:"hljs-string"},"'disabled'"),s(`,
      `),l("span",{class:"hljs-attr"},"label"),s(": "),l("span",{class:"hljs-string"},"'美123'"),s(`,
    },
    {
      `),l("span",{class:"hljs-attr"},"value"),s(": "),l("span",{class:"hljs-string"},"'yiminghe'"),s(`,
      `),l("span",{class:"hljs-attr"},"label"),s(": "),l("span",{class:"hljs-string"},"'学1234'"),s(`,
    },
  ]);
  `),l("span",{class:"hljs-keyword"},"const"),s(` selectedItems = ref<string[]>([]);

  `),l("span",{class:"hljs-title function_"},"watch"),s(`(
    selectedItems,
    `),l("span",{class:"hljs-function"},[l("span",{class:"hljs-params"},"val"),s(" =>")]),s(` {
      `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s(`(val)
    }
  )
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")])])],-1),w=l("h3",{id:"全选"},"全选",-1),k=l("ul",null,[l("li",null,"多选时，自动开启全选功能")],-1),I=l("pre",{class:"language-xml"},[l("code",{class:"hljs"},[s(`
`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"m-select"),s(`
      `),l("span",{class:"hljs-attr"},"v-model:value"),s("="),l("span",{class:"hljs-string"},'"selectedItems"'),s(`
      `),l("span",{class:"hljs-attr"},"style"),s("="),l("span",{class:"hljs-string"},'"width: 100%"'),s(`
      `),l("span",{class:"hljs-attr"},":options"),s("="),l("span",{class:"hljs-string"},'"ops"'),s(`
      `),l("span",{class:"hljs-attr"},"mode"),s("="),l("span",{class:"hljs-string"},'"multiple"'),s(`
    >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"m-select"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"lang"),s("="),l("span",{class:"hljs-string"},'"ts"'),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"language-javascript"},[s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" {ref, computed, watch} "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

  `),l("span",{class:"hljs-keyword"},"const"),s(" test = "),l("span",{class:"hljs-title function_"},"ref"),s("("),l("span",{class:"hljs-literal"},"false"),s(`)
  `),l("span",{class:"hljs-keyword"},"const"),s(" ops = "),l("span",{class:"hljs-title function_"},"ref"),s(`([
    {
      `),l("span",{class:"hljs-attr"},"value"),s(": "),l("span",{class:"hljs-string"},"'jack'"),s(`,
      `),l("span",{class:"hljs-attr"},"label"),s(": "),l("span",{class:"hljs-string"},"'中1'"),s(`,
    },
    {
      `),l("span",{class:"hljs-attr"},"value"),s(": "),l("span",{class:"hljs-string"},"'lucy'"),s(`,
      `),l("span",{class:"hljs-attr"},"label"),s(": "),l("span",{class:"hljs-string"},"'中12'"),s(`,
    },
    {
      `),l("span",{class:"hljs-attr"},"value"),s(": "),l("span",{class:"hljs-string"},"'disabled'"),s(`,
      `),l("span",{class:"hljs-attr"},"label"),s(": "),l("span",{class:"hljs-string"},"'中123'"),s(`,
    },
    {
      `),l("span",{class:"hljs-attr"},"value"),s(": "),l("span",{class:"hljs-string"},"'yiminghe'"),s(`,
      `),l("span",{class:"hljs-attr"},"label"),s(": "),l("span",{class:"hljs-string"},"'中1234'"),s(`,
    },
  ]);
  `),l("span",{class:"hljs-keyword"},"const"),s(` selectedItems = ref<string[]>([]);

  `),l("span",{class:"hljs-title function_"},"watch"),s(`(
    selectedItems,
    `),l("span",{class:"hljs-function"},[l("span",{class:"hljs-params"},"val"),s(" =>")]),s(` {
      `),l("span",{class:"hljs-variable language_"},"console"),s("."),l("span",{class:"hljs-title function_"},"log"),s(`(val)
    }
  )
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")])])],-1),x=_('<h3 id="注意">注意</h3><ul><li>如果option中的文字字段不是label，要手动传入filterOption，否则搜索不准确</li></ul><h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>enableSelectAll</td><td>多选时，是否开启全选</td><td>Boolean</td><td>-</td><td>true</td><td>否</td></tr></tbody></table>',4),S={__name:"index",setup(d){return(p,a)=>(i(),j("div",b,[D,B,y,t(u(A),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cm-select%0A%20%20%20%20%20%20v-model%3Avalue%3D%22selectedItems%22%0A%20%20%20%20%20%20style%3D%22width%3A%20100%25%22%0A%20%20%20%20%20%20%3Aoptions%3D%22ops%22%0A%20%20%20%20%3E%0A%20%20%20%20%3C%2Fm-select%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7Bref%2C%20watch%7D%20from%20'vue'%0A%0A%20%20const%20test%20%3D%20ref(false)%0A%20%20const%20ops%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'jack'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD1'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'lucy'%2C%0A%20%20%20%20%20%20label%3A%20'%E5%BC%8F12'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'disabled'%2C%0A%20%20%20%20%20%20label%3A%20'%E7%BE%8E123'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'yiminghe'%2C%0A%20%20%20%20%20%20label%3A%20'%E5%AD%A61234'%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D)%3B%0A%20%20const%20selectedItems%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%0A%20%20watch(%0A%20%20%20%20selectedItems%2C%0A%20%20%20%20val%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(val)%0A%20%20%20%20%7D%0A%20%20)%0A%3C%2Fscript%3E"},{code:h(()=>[E]),default:h(()=>[t(C)]),_:1}),w,k,t(u(A),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cm-select%0A%20%20%20%20%20%20v-model%3Avalue%3D%22selectedItems%22%0A%20%20%20%20%20%20style%3D%22width%3A%20100%25%22%0A%20%20%20%20%20%20%3Aoptions%3D%22ops%22%0A%20%20%20%20%20%20mode%3D%22multiple%22%0A%20%20%20%20%3E%0A%20%20%20%20%3C%2Fm-select%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7Bref%2C%20computed%2C%20watch%7D%20from%20'vue'%0A%0A%20%20const%20test%20%3D%20ref(false)%0A%20%20const%20ops%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'jack'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD1'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'lucy'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD12'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'disabled'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD123'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'yiminghe'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD1234'%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D)%3B%0A%20%20const%20selectedItems%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%0A%20%20watch(%0A%20%20%20%20selectedItems%2C%0A%20%20%20%20val%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(val)%0A%20%20%20%20%7D%0A%20%20)%0A%3C%2Fscript%3E"},{code:h(()=>[I]),default:h(()=>[t(f)]),_:1}),x]))}};export{S as default};
