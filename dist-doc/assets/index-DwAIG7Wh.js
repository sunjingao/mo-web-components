import{C as j}from"./vue-IUGgBgo5.js";import{f as d,g,h as v,o as i,c as o,d as n,r as C,w as h,u,b as a,a as m,e as s}from"./index-FF7sC9ng.js";/* empty css                                                            */const B=d({__name:"index.md.Virtualf1ac39f1",setup(A){const c=[{value:"zhongwen",label:"中文",children:[{value:"zhongwen1",label:"中文1",children:[{value:"zhongwen11",label:"中文11"},{value:"zhongwen111",label:"中文111"}]}]},{value:"yingwen",label:"英文",children:[{value:"yingwen1",label:"英文1",children:[{value:"yingwen11",label:"英文11"}]}]}],l=g([]);return v(l,e=>{console.log(111,e)}),(e,t)=>{const r=C("m-cascader");return i(),o("div",null,[n(r,{value:l.value,"onUpdate:value":t[0]||(t[0]=p=>l.value=p),options:c,placeholder:"Please select"},null,8,["value"])])}}}),b=d({__name:"index.md.Virtual767ab1d9",setup(A){const c=[{value:"zhejiang",label:"中文",children:[{value:"hangzhou",label:"中文1",children:[{value:"xihu",label:"中文11"},{value:"xihu2",label:"中文111"}]}]},{value:"jiangsu",label:"英文",children:[{value:"nanjing",label:"英文1",children:[{value:"zhonghuamen",label:"英文11"}]}]}],l=g([]);return v(l,e=>{console.log(111,e)}),(e,t)=>{const r=C("m-cascader");return i(),o("div",null,[n(r,{value:l.value,"onUpdate:value":t[0]||(t[0]=p=>l.value=p),options:c,multiple:"",placeholder:"Please select"},null,8,["value"])])}}}),D={class:"marked-body"},_=a("h2",{id:"cascader"},"Cascader",-1),E=a("h3",{id:"搜索功能"},"搜索功能",-1),w=a("ul",null,[a("li",null,"默认开启搜索功能"),a("li",null,"搜索时，支持拼音搜索中文")],-1),f=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model:value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please select"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"const"),s(` options = [
    {
      `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'zhongwen'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'中文'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'zhongwen1'"),s(`,
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'中文1'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'zhongwen11'"),s(`,
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'中文11'"),s(`,
            },
            {
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'zhongwen111'"),s(`,
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'中文111'"),s(`,
            },
          ],
        },
      ],
    },
    {
      `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'yingwen'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'英文'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'yingwen1'"),s(`,
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'英文1'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'yingwen11'"),s(`,
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'英文11'"),s(`,
            },
          ],
        },
      ],
    },
  ];
  `),a("span",{class:"hljs-keyword"},"const"),s(` value = ref<string[]>([]);
  `),a("span",{class:"hljs-title function_"},"watch"),s(`(
    value,
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"val"),s(" =>")]),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-number"},"111"),s(`, val);
    }
  )
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),z=a("h3",{id:"全选"},"全选",-1),y=a("ul",null,[a("li",null,"多选时，自动开启全选功能")],-1),x=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model:value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},"multiple"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please select"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"const"),s(` options = [
    {
      `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'zhejiang'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'中文'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'hangzhou'"),s(`,
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'中文1'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'xihu'"),s(`,
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'中文11'"),s(`,
            },
            {
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'xihu2'"),s(`,
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'中文111'"),s(`,
            },
          ],
        },
      ],
    },
    {
      `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'jiangsu'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'英文'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'nanjing'"),s(`,
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'英文1'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'zhonghuamen'"),s(`,
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'英文11'"),s(`,
            },
          ],
        },
      ],
    },
  ];
  `),a("span",{class:"hljs-keyword"},"const"),s(` value = ref<string[]>([]);
  `),a("span",{class:"hljs-title function_"},"watch"),s(`(
    value,
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"val"),s(" =>")]),s(` {
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-number"},"111"),s(`, val);
    }
  )
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),k=m('<h3 id="注意">注意</h3><ul><li>如果option中的文字字段不是label，要手动传入filter，否则搜索不准确</li></ul><h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>enableSelectAll</td><td>多选时，是否开启全选</td><td>Boolean</td><td>-</td><td>true</td><td>否</td></tr></tbody></table>',4),N={__name:"index",setup(A){return(c,l)=>(i(),o("div",D,[_,E,w,n(u(j),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cm-cascader%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20placeholder%3D%22Please%20select%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0A%20%20const%20options%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'zhongwen'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'zhongwen1'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhongwen11'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhongwen111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'yingwen'%2C%0A%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'yingwen1'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'yingwen11'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%20%20const%20value%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%20%20watch(%0A%20%20%20%20value%2C%0A%20%20%20%20val%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(111%2C%20val)%3B%0A%20%20%20%20%7D%0A%20%20)%0A%3C%2Fscript%3E"},{code:h(()=>[f]),default:h(()=>[n(B)]),_:1}),z,y,n(u(j),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cm-cascader%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%20%20placeholder%3D%22Please%20select%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0A%20%20const%20options%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'zhejiang'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'hangzhou'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'xihu'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'xihu2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'jiangsu'%2C%0A%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'nanjing'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhonghuamen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%20%20const%20value%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%20%20watch(%0A%20%20%20%20value%2C%0A%20%20%20%20val%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(111%2C%20val)%3B%0A%20%20%20%20%7D%0A%20%20)%0A%3C%2Fscript%3E"},{code:h(()=>[x]),default:h(()=>[n(b)]),_:1}),k]))}};export{N as default};
