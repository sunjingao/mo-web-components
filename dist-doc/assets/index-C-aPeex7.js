import{C as u}from"./vue-DUoEhpaI.js";import{f as g,g as d,h as v,o,c as A,d as n,r as C,u as i,C as m,w as h,b as s,a as B,e as a}from"./index-B6A3-maN.js";/* empty css                                                            */const D=g({__name:"index.md.Virtualf1ac39f1",setup(j){const c=[{value:"zhongwen",label:"中文",children:[{value:"zhongwen1",label:"中文1",children:[{value:"zhongwen11",label:"中文11"},{value:"zhongwen111",label:"中文111"}]}]},{value:"yingwen",label:"英文",children:[{value:"yingwen1",label:"英文1",children:[{value:"yingwen11",label:"英文11"}]}]}],l=d([]);return v(l,e=>{console.log(111,e)}),(e,t)=>{const r=C("m-cascader");return o(),A("div",null,[n(r,{value:l.value,"onUpdate:value":t[0]||(t[0]=p=>l.value=p),options:c,placeholder:"Please select"},null,8,["value"])])}}}),b=g({__name:"index.md.Virtual767ab1d9",setup(j){const c=[{value:"zhejiang",label:"中文",children:[{value:"hangzhou",label:"中文1",children:[{value:"xihu",label:"中文11"},{value:"xihu2",label:"中文111"}]}]},{value:"jiangsu",label:"英文",children:[{value:"nanjing",label:"英文1",children:[{value:"zhonghuamen",label:"英文11"}]}]}],l=d([]);return v(l,e=>{console.log(111,e)}),(e,t)=>{const r=C("m-cascader");return o(),A("div",null,[n(r,{value:l.value,"onUpdate:value":t[0]||(t[0]=p=>l.value=p),options:c,multiple:"",placeholder:"Please select"},null,8,["value"])])}}}),_=g({__name:"index.md.Virtuala42e6c10",setup(j){const c=[{value:"zhejiang",label:"中文",children:[{value:"hangzhou",label:"中文1",children:[{value:"xihu",label:"中文11"},{value:"xihu2",label:"中文111"}]}]},{value:"jiangsu",label:"英文",children:[{value:"nanjing",label:"英文1",children:[{value:"zhonghuamen",label:"英文11"}]}]}],l=d([]);return v(l,e=>{console.log(222,e)}),(e,t)=>{const r=C("m-cascader");return o(),A("div",null,[n(r,{value:l.value,"onUpdate:value":t[0]||(t[0]=p=>l.value=p),options:c,multiple:"",placeholder:"Please select","show-checked-strategy":i(m).SHOW_CHILD},null,8,["value","show-checked-strategy"])])}}}),E={class:"marked-body"},w=s("h2",{id:"cascader"},"Cascader",-1),f=s("h3",{id:"搜索功能"},"搜索功能",-1),y=s("ul",null,[s("li",null,"默认开启搜索功能"),s("li",null,"搜索时，支持拼音搜索中文")],-1),z=s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"m-cascader"),a(`
      `),s("span",{class:"hljs-attr"},"v-model:value"),a("="),s("span",{class:"hljs-string"},'"value"'),a(`
      `),s("span",{class:"hljs-attr"},":options"),a("="),s("span",{class:"hljs-string"},'"options"'),a(`
      `),s("span",{class:"hljs-attr"},"placeholder"),a("="),s("span",{class:"hljs-string"},'"Please select"'),a(`
    />`)]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"lang"),a("="),s("span",{class:"hljs-string"},'"ts"'),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"language-javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"import"),a(" {ref, watch} "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`;

  `),s("span",{class:"hljs-keyword"},"const"),a(` options = [
    {
      `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'zhongwen'"),a(`,
      `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文'"),a(`,
      `),s("span",{class:"hljs-attr"},"children"),a(`: [
        {
          `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'zhongwen1'"),a(`,
          `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文1'"),a(`,
          `),s("span",{class:"hljs-attr"},"children"),a(`: [
            {
              `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'zhongwen11'"),a(`,
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文11'"),a(`,
            },
            {
              `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'zhongwen111'"),a(`,
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文111'"),a(`,
            },
          ],
        },
      ],
    },
    {
      `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'yingwen'"),a(`,
      `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'英文'"),a(`,
      `),s("span",{class:"hljs-attr"},"children"),a(`: [
        {
          `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'yingwen1'"),a(`,
          `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'英文1'"),a(`,
          `),s("span",{class:"hljs-attr"},"children"),a(`: [
            {
              `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'yingwen11'"),a(`,
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'英文11'"),a(`,
            },
          ],
        },
      ],
    },
  ];
  `),s("span",{class:"hljs-keyword"},"const"),a(` value = ref<string[]>([]);
  `),s("span",{class:"hljs-title function_"},"watch"),a(`(
    value,
    `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"val"),a(" =>")]),a(` {
      `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-number"},"111"),a(`, val);
    }
  )
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")])])],-1),x=s("h3",{id:"全选"},"全选",-1),k=s("ul",null,[s("li",null,"多选时，自动开启全选功能"),s("li",null,"未开启show-checked-strategy=Cascader.SHOW_CHILD时")],-1),F=s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"m-cascader"),a(`
      `),s("span",{class:"hljs-attr"},"v-model:value"),a("="),s("span",{class:"hljs-string"},'"value"'),a(`
      `),s("span",{class:"hljs-attr"},":options"),a("="),s("span",{class:"hljs-string"},'"options"'),a(`
      `),s("span",{class:"hljs-attr"},"multiple"),a(`
      `),s("span",{class:"hljs-attr"},"placeholder"),a("="),s("span",{class:"hljs-string"},'"Please select"'),a(`
    />`)]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"lang"),a("="),s("span",{class:"hljs-string"},'"ts"'),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"language-javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"import"),a(" {ref, watch} "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`;

  `),s("span",{class:"hljs-keyword"},"const"),a(` options = [
    {
      `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'zhejiang'"),a(`,
      `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文'"),a(`,
      `),s("span",{class:"hljs-attr"},"children"),a(`: [
        {
          `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'hangzhou'"),a(`,
          `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文1'"),a(`,
          `),s("span",{class:"hljs-attr"},"children"),a(`: [
            {
              `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'xihu'"),a(`,
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文11'"),a(`,
            },
            {
              `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'xihu2'"),a(`,
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文111'"),a(`,
            },
          ],
        },
      ],
    },
    {
      `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'jiangsu'"),a(`,
      `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'英文'"),a(`,
      `),s("span",{class:"hljs-attr"},"children"),a(`: [
        {
          `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'nanjing'"),a(`,
          `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'英文1'"),a(`,
          `),s("span",{class:"hljs-attr"},"children"),a(`: [
            {
              `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'zhonghuamen'"),a(`,
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'英文11'"),a(`,
            },
          ],
        },
      ],
    },
  ];
  `),s("span",{class:"hljs-keyword"},"const"),a(` value = ref<string[]>([]);
  `),s("span",{class:"hljs-title function_"},"watch"),a(`(
    value,
    `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"val"),a(" =>")]),a(` {
      `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-number"},"111"),a(`, val);
    }
  )
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")])])],-1),P=s("h3",{id:"全选-1"},"全选",-1),H=s("ul",null,[s("li",null,"多选时，自动开启全选功能"),s("li",null,"开启show-checked-strategy=Cascader.SHOW_CHILD时")],-1),S=s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"m-cascader"),a(`
      `),s("span",{class:"hljs-attr"},"v-model:value"),a("="),s("span",{class:"hljs-string"},'"value"'),a(`
      `),s("span",{class:"hljs-attr"},":options"),a("="),s("span",{class:"hljs-string"},'"options"'),a(`
      `),s("span",{class:"hljs-attr"},"multiple"),a(`
      `),s("span",{class:"hljs-attr"},"placeholder"),a("="),s("span",{class:"hljs-string"},'"Please select"'),a(`
      `),s("span",{class:"hljs-attr"},":show-checked-strategy"),a("="),s("span",{class:"hljs-string"},'"Cascader.SHOW_CHILD"'),a(`
    />`)]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"lang"),a("="),s("span",{class:"hljs-string"},'"ts"'),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"language-javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"import"),a(" {ref, watch} "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`;
  `),s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"Cascader"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'ant-design-vue'"),a(`;
  
  `),s("span",{class:"hljs-keyword"},"const"),a(` options = [
    {
      `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'zhejiang'"),a(`,
      `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文'"),a(`,
      `),s("span",{class:"hljs-attr"},"children"),a(`: [
        {
          `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'hangzhou'"),a(`,
          `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文1'"),a(`,
          `),s("span",{class:"hljs-attr"},"children"),a(`: [
            {
              `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'xihu'"),a(`,
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文11'"),a(`,
            },
            {
              `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'xihu2'"),a(`,
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'中文111'"),a(`,
            },
          ],
        },
      ],
    },
    {
      `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'jiangsu'"),a(`,
      `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'英文'"),a(`,
      `),s("span",{class:"hljs-attr"},"children"),a(`: [
        {
          `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'nanjing'"),a(`,
          `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'英文1'"),a(`,
          `),s("span",{class:"hljs-attr"},"children"),a(`: [
            {
              `),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'zhonghuamen'"),a(`,
              `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'英文11'"),a(`,
            },
          ],
        },
      ],
    },
  ];
  `),s("span",{class:"hljs-keyword"},"const"),a(` value = ref<string[]>([]);
  `),s("span",{class:"hljs-title function_"},"watch"),a(`(
    value,
    `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"val"),a(" =>")]),a(` {
      `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-number"},"222"),a(`, val);
    }
  )
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")])])],-1),V=B('<h3 id="注意">注意</h3><ul><li>如果option中的文字字段不是label，要手动传入filter，否则搜索不准确</li></ul><h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>enableSelectAll</td><td>多选时，是否开启全选</td><td>Boolean</td><td>-</td><td>true</td><td>否</td></tr></tbody></table>',4),W={__name:"index",setup(j){return(c,l)=>(o(),A("div",E,[w,f,y,n(i(u),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cm-cascader%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20placeholder%3D%22Please%20select%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0A%20%20const%20options%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'zhongwen'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'zhongwen1'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhongwen11'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhongwen111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'yingwen'%2C%0A%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'yingwen1'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'yingwen11'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%20%20const%20value%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%20%20watch(%0A%20%20%20%20value%2C%0A%20%20%20%20val%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(111%2C%20val)%3B%0A%20%20%20%20%7D%0A%20%20)%0A%3C%2Fscript%3E"},{code:h(()=>[z]),default:h(()=>[n(D)]),_:1}),x,k,n(i(u),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cm-cascader%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%20%20placeholder%3D%22Please%20select%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%0A%20%20const%20options%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'zhejiang'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'hangzhou'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'xihu'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'xihu2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'jiangsu'%2C%0A%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'nanjing'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhonghuamen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%20%20const%20value%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%20%20watch(%0A%20%20%20%20value%2C%0A%20%20%20%20val%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(111%2C%20val)%3B%0A%20%20%20%20%7D%0A%20%20)%0A%3C%2Fscript%3E"},{code:h(()=>[F]),default:h(()=>[n(b)]),_:1}),P,H,n(i(u),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cm-cascader%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%20%20placeholder%3D%22Please%20select%22%0A%20%20%20%20%20%20%3Ashow-checked-strategy%3D%22Cascader.SHOW_CHILD%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0A%20%20import%20%7B%20Cascader%20%7D%20from%20'ant-design-vue'%3B%0A%20%20%0A%20%20const%20options%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'zhejiang'%2C%0A%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'hangzhou'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'xihu'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'xihu2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%AD%E6%96%87111'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20value%3A%20'jiangsu'%2C%0A%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%87'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'nanjing'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%871'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20'zhonghuamen'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%8B%B1%E6%96%8711'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%20%20const%20value%20%3D%20ref%3Cstring%5B%5D%3E(%5B%5D)%3B%0A%20%20watch(%0A%20%20%20%20value%2C%0A%20%20%20%20val%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(222%2C%20val)%3B%0A%20%20%20%20%7D%0A%20%20)%0A%3C%2Fscript%3E"},{code:h(()=>[S]),default:h(()=>[n(_)]),_:1}),V]))}};export{W as default};
