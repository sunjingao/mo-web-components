import{C as u}from"./vue-BSsZOhFP.js";import{f as g,g as d,h as v,o as A,c as o,d as n,r as C,u as i,C as m,w as h,b as a,a as B,e as s}from"./index-BO9bK19Z.js";/* empty css                                                            */const D=g({__name:"index.md.Virtualf1ac39f1",setup(j){const c=[{value:"zhongwen",label:"中文",children:[{value:"zhongwen1",label:"中文1",children:[{value:"zhongwen11",label:"中文11"},{value:"zhongwen111",label:"中文111"}]}]},{value:"yingwen",label:"英文",children:[{value:"yingwen1",label:"英文1",children:[{value:"yingwen11",label:"英文11"}]}]}],l=d([]);return v(l,e=>{console.log(111,e)}),(e,t)=>{const r=C("m-cascader");return A(),o("div",null,[n(r,{value:l.value,"onUpdate:value":t[0]||(t[0]=p=>l.value=p),options:c,placeholder:"Please select"},null,8,["value"])])}}}),b=g({__name:"index.md.Virtual767ab1d9",setup(j){const c=[{value:"zhejiang",label:"中文",children:[{value:"hangzhou",label:"中文1",children:[{value:"xihu",label:"中文11"},{value:"xihu2",label:"中文111"}]}]},{value:"jiangsu",label:"英文",children:[{value:"nanjing",label:"英文1",children:[{value:"zhonghuamen",label:"英文11"}]}]}],l=d([]);return v(l,e=>{console.log(111,e)}),(e,t)=>{const r=C("m-cascader");return A(),o("div",null,[n(r,{value:l.value,"onUpdate:value":t[0]||(t[0]=p=>l.value=p),options:c,multiple:"",placeholder:"Please select"},null,8,["value"])])}}}),_=g({__name:"index.md.Virtuala42e6c10",setup(j){const c=[{value:"zhejiang",label:"中文",children:[{value:"hangzhou",label:"中文1",children:[{value:"xihu",label:"中文11"},{value:"xihu2",label:"中文111"}]}]},{value:"jiangsu",label:"英文",children:[{value:"nanjing",label:"英文1",children:[{value:"zhonghuamen",label:"英文11"}]}]}],l=d([]);return v(l,e=>{console.log(222,e)}),(e,t)=>{const r=C("m-cascader");return A(),o("div",null,[n(r,{value:l.value,"onUpdate:value":t[0]||(t[0]=p=>l.value=p),options:c,multiple:"",placeholder:"Please select","show-checked-strategy":i(m).SHOW_CHILD},null,8,["value","show-checked-strategy"])])}}}),E={class:"marked-body"},w=a("h2",{id:"cascader"},"Cascader",-1),f=a("h3",{id:"搜索功能"},"搜索功能",-1),y=a("ul",null,[a("li",null,"默认开启搜索功能")],-1),z=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
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
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),x=a("h3",{id:"全选"},"全选",-1),k=a("ul",null,[a("li",null,"多选时，自动开启全选功能"),a("li",null,"未开启show-checked-strategy=Cascader.SHOW_CHILD时")],-1),F=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
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
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),P=a("h3",{id:"全选-1"},"全选",-1),H=a("ul",null,[a("li",null,"多选时，自动开启全选功能"),a("li",null,"开启show-checked-strategy=Cascader.SHOW_CHILD时")],-1),S=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-cascader"),s(`
      `),a("span",{class:"hljs-attr"},"v-model:value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
      `),a("span",{class:"hljs-attr"},"multiple"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please select"'),s(`
      `),a("span",{class:"hljs-attr"},":show-checked-strategy"),s("="),a("span",{class:"hljs-string"},'"Cascader.SHOW_CHILD"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Cascader"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'ant-design-vue'"),s(`;
  
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
      `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-number"},"222"),s(`, val);
    }
  )
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),V=B('<h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>enableSelectAll</td><td>多选时，是否开启全选</td><td>Boolean</td><td>-</td><td>true</td><td>否</td></tr></tbody></table>',2),W={__name:"index",setup(j){return(c,l)=>(A(),o("div",E,[w,f,y,n(i(u),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cm-cascader%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20placeholder%3D%22Please%20select%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0A%20%20const%20options%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'zhongwen'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'zhongwen1'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhongwen11'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhongwen111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'yingwen'%2C%0A%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'yingwen1'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'yingwen11'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%20%20const%20value%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%20%20watch(%0A%20%20%20%20value%2C%0A%20%20%20%20val%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(111%2C%20val)%3B%0A%20%20%20%20%7D%0A%20%20)%0A%3C%2Fscript%3E"},{code:h(()=>[z]),default:h(()=>[n(D)]),_:1}),x,k,n(i(u),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cm-cascader%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%20%20placeholder%3D%22Please%20select%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0A%20%20const%20options%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'zhejiang'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'hangzhou'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'xihu'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'xihu2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'jiangsu'%2C%0A%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'nanjing'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhonghuamen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%20%20const%20value%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%20%20watch(%0A%20%20%20%20value%2C%0A%20%20%20%20val%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(111%2C%20val)%3B%0A%20%20%20%20%7D%0A%20%20)%0A%3C%2Fscript%3E"},{code:h(()=>[F]),default:h(()=>[n(b)]),_:1}),P,H,n(i(u),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cm-cascader%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%20%20placeholder%3D%22Please%20select%22%0A%20%20%20%20%20%20%3Ashow-checked-strategy%3D%22Cascader.SHOW_CHILD%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%20%20import%20%7B%20Cascader%20%7D%20from%20'ant-design-vue'%3B%0A%20%20%0A%20%20const%20options%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'zhejiang'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'hangzhou'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'xihu'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'xihu2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'jiangsu'%2C%0A%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'nanjing'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhonghuamen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%20%20const%20value%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%20%20watch(%0A%20%20%20%20value%2C%0A%20%20%20%20val%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(222%2C%20val)%3B%0A%20%20%20%20%7D%0A%20%20)%0A%3C%2Fscript%3E"},{code:h(()=>[S]),default:h(()=>[n(_)]),_:1}),V]))}};export{W as default};
