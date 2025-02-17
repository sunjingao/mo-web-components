import{C as j}from"./vue-CM8issi8.js";import{f,g as c,h as w,o as m,c as u,d as o,b as a,r as y,w as r,u as g,a as F,e as s}from"./index-3hIf_dzm.js";/* empty css                                                            */const _=a("div",null,"fileType控制",-1),v=a("div",null,"customFileType控制",-1),E=f({__name:"index.md.Virtual6e3aef37",setup(A){const t=c([{name:"测试1",url:"https://www.runoob.com/try/demo_source/pineapple.jpg"}]),l=c([{name:"测试1",url:"https://www.runoob.com/try/demo_source/pineapple.jpg"}]),d=c([{maxSize:5242880,errorTip:"图片大小不能大于5M，仅支持image/png, image/jpeg！",content:["image/png","image/jpeg"]},{maxSize:52,errorTip:"视频大小不能大于52kb，仅支持video/mp4！",content:["video/mp4"]}]);function i(h){return new Promise(n=>{setTimeout(()=>{n({name:"测试1",url:"https://www.runoob.com/try/demo_source/pineapple.jpg"})})})}return w(l,()=>{console.log("fileList2",l.value)},{deep:!0}),(h,n)=>{const e=y("m-upload");return m(),u("div",null,[_,o(e,{fileList:t.value,"onUpdate:fileList":n[0]||(n[0]=p=>t.value=p),fileType:["1"],uploadAsync:i},null,8,["fileList"]),v,o(e,{fileList:l.value,"onUpdate:fileList":n[1]||(n[1]=p=>l.value=p),customFileType:d.value,uploadAsync:i},null,8,["fileList","customFileType"])])}}}),B=f({__name:"index.md.Virtualbe5fdb96",setup(A){const t=c([{name:"测试1",url:"https://www.runoob.com/try/demo_source/pineapple.jpg"}]),l=c({showPreviewIcon:!0,showRemoveIcon:!0,showDownloadIcon:!0});function d(){return console.log("deleteFileAsync",arguments),Promise.resolve()}async function i(){console.log("downloadAsync",arguments)}function h(n){return new Promise(e=>{setTimeout(()=>{e({name:"测试1",url:"https://www.runoob.com/try/demo_source/pineapple.jpg"})})})}return w(t,()=>{console.log("fileList",t.value)},{deep:!0}),(n,e)=>{const p=y("m-upload");return m(),u("div",null,[o(p,{fileList:t.value,"onUpdate:fileList":e[0]||(e[0]=b=>t.value=b),uploadAsync:h,showUploadList:l.value,deleteFileAsync:d,downloadAsync:i},null,8,["fileList","showUploadList"])])}}}),D={class:"marked-body"},C=F('<h2 id="upload">Upload</h2><h3 id="类型及尺寸">类型及尺寸</h3><ul><li>fileType支持的类型及尺寸</li></ul><blockquote><p>1：图片<br>const IMG = {<br> maxSize: 5242880, // 5m<br> errorTip: &#39;图片大小不能大于5M；仅支持image/png、image/jpeg格式！&#39;,<br> content: [&#39;image/png&#39;, &#39;image/jpeg&#39;]<br>};<br>2：文档<br>const DOC = {<br> maxSize: 52428800, // 50m<br> errorTip: &#39;文档大小不能大于50M；仅支持msword、document、excel、sheet、powerpoint、pdf格式！<br> content: [<br> &#39;application/msword&#39;,<br> &#39;application/vnd.openxmlformats-officedocument.wordprocessingml.document&#39;,<br> &#39;application/vnd.ms-excel&#39;,<br> &#39;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&#39;,<br> &#39;application/vnd.ms-powerpoint&#39;,<br> &#39;application/vnd.openxmlformats-officedocument.presentationml.presentation&#39;,<br> &#39;application/pdf&#39;<br> ]<br>};<br>3：视频<br>const VIDEO = {<br> maxSize: 157286400, // 150m<br> errorTip: &#39;视频大小不能大于150M；仅支持mp4格式！<br> content: [&#39;video/mp4&#39;]<br>};<br>4：压缩包<br>const PACK = {<br> maxSize: 209715200, // 200m<br> errorTip: &#39;资源文件大小不能大于500M；仅支持zip、rar、7z、tar、gzip格式！<br> content: [<br> &#39;application/x-zip-compressed&#39;,<br> &#39;application/x-rar-compressed&#39;,<br> &#39;application/zip&#39;,<br> &#39;application/x-7z-compressed&#39;,<br> &#39;application/vnd.ms-cab-compressed&#39;,<br> &#39;application/x-unix-archive&#39;,<br> &#39;application/x-tar&#39;,<br> &#39;application/gzip&#39;<br> ]<br>};</p></blockquote><ul><li>如果需要定制化组件接收的类型，需要设置customFileType字段，fileType字段失效</li></ul>',5),L=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("fileType控制"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-upload"),s(` 
        `),a("span",{class:"hljs-attr"},"v-model:fileList"),s("="),a("span",{class:"hljs-string"},'"fileList1"'),s(`
         `),a("span",{class:"hljs-attr"},":fileType"),s("="),a("span",{class:"hljs-string"},`"['1']"`),s(` 
         `),a("span",{class:"hljs-attr"},":uploadAsync"),s("="),a("span",{class:"hljs-string"},'"uploadAsync"'),s(`
     >`)]),s(`
     `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-upload"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("customFileType控制"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-upload"),s(` 
        `),a("span",{class:"hljs-attr"},"v-model:fileList"),s("="),a("span",{class:"hljs-string"},'"fileList2"'),s(` 
        `),a("span",{class:"hljs-attr"},":customFileType"),s("="),a("span",{class:"hljs-string"},'"customFileType"'),s(` 
        `),a("span",{class:"hljs-attr"},":uploadAsync"),s("="),a("span",{class:"hljs-string"},'"uploadAsync"'),s(`
     >`)]),s(`
     `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-upload"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, watch } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

`),a("span",{class:"hljs-keyword"},"const"),s(" fileList1 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'测试1'"),s(`,
        `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/pineapple.jpg'"),s(`
    },
]);

`),a("span",{class:"hljs-keyword"},"const"),s(" fileList2 = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'测试1'"),s(`,
        `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/pineapple.jpg'"),s(`
    },
]);

`),a("span",{class:"hljs-keyword"},"const"),s(" customFileType = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
      `),a("span",{class:"hljs-attr"},"maxSize"),s(": "),a("span",{class:"hljs-number"},"5242880"),s(", "),a("span",{class:"hljs-comment"},"// 5m"),s(`
      `),a("span",{class:"hljs-attr"},"errorTip"),s(": "),a("span",{class:"hljs-string"},"'图片大小不能大于5M，仅支持image/png, image/jpeg！'"),s(`,
      `),a("span",{class:"hljs-attr"},"content"),s(": ["),a("span",{class:"hljs-string"},"'image/png'"),s(", "),a("span",{class:"hljs-string"},"'image/jpeg'"),s(`]
    },
    {
      `),a("span",{class:"hljs-attr"},"maxSize"),s(": "),a("span",{class:"hljs-number"},"52"),s(", "),a("span",{class:"hljs-comment"},"// 52kb"),s(`
      `),a("span",{class:"hljs-attr"},"errorTip"),s(": "),a("span",{class:"hljs-string"},"'视频大小不能大于52kb，仅支持video/mp4！'"),s(`,
      `),a("span",{class:"hljs-attr"},"content"),s(": ["),a("span",{class:"hljs-string"},"'video/mp4'"),s(`]
    }
])

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"uploadAsync"),s("("),a("span",{class:"hljs-params"},"formData"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Promise"),s(`(
        `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"resolve"),s(" =>")]),s(` {
            `),a("span",{class:"hljs-built_in"},"setTimeout"),s(`(
                `),a("span",{class:"hljs-function"},"() =>"),s(` {
                    `),a("span",{class:"hljs-title function_"},"resolve"),s(`({
                        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'测试1'"),s(`,
                        `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/pineapple.jpg'"),s(`
                    })
                },
            )
        }
    )
}

`),a("span",{class:"hljs-title function_"},"watch"),s(`(
    fileList2,
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'fileList2'"),s(", fileList2."),a("span",{class:"hljs-property"},"value"),s(`)
    },
    {
        `),a("span",{class:"hljs-attr"},"deep"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),T=a("h3",{id:"删除及下载"},"删除及下载",-1),x=a("ul",null,[a("li",null,"删除会触发deleteFileAsync异步函数"),a("li",null,"下载会触发downloadAsync异步函数")],-1),k=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-upload"),s(` 
        `),a("span",{class:"hljs-attr"},"v-model:fileList"),s("="),a("span",{class:"hljs-string"},'"fileList"'),s(`
        `),a("span",{class:"hljs-attr"},":uploadAsync"),s("="),a("span",{class:"hljs-string"},'"uploadAsync"'),s(`
         `),a("span",{class:"hljs-attr"},":showUploadList"),s("="),a("span",{class:"hljs-string"},'"showUploadList"'),s(`
         `),a("span",{class:"hljs-attr"},":deleteFileAsync"),s("="),a("span",{class:"hljs-string"},'"deleteFileAsync"'),s(`
         `),a("span",{class:"hljs-attr"},":downloadAsync"),s("="),a("span",{class:"hljs-string"},'"downloadAsync"'),s(`
     >`)]),s(`
     `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-upload"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, watch } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" fileList = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
    {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'测试1'"),s(`,
        `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/pineapple.jpg'"),s(`
    },
]);

`),a("span",{class:"hljs-keyword"},"const"),s(" showUploadList = "),a("span",{class:"hljs-title function_"},"ref"),s(`({
        `),a("span",{class:"hljs-attr"},"showPreviewIcon"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
        `),a("span",{class:"hljs-attr"},"showRemoveIcon"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
        `),a("span",{class:"hljs-attr"},"showDownloadIcon"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
})

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"deleteFileAsync"),s("("),a("span",{class:"hljs-params"}),s(`) {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'deleteFileAsync'"),s(", "),a("span",{class:"hljs-variable language_"},"arguments"),s(`)
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("."),a("span",{class:"hljs-title function_"},"resolve"),s(`()
}

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"downloadAsync"),s("("),a("span",{class:"hljs-params"}),s(`) {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'downloadAsync'"),s(", "),a("span",{class:"hljs-variable language_"},"arguments"),s(`)
}

`),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"uploadAsync"),s("("),a("span",{class:"hljs-params"},"formData"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Promise"),s(`(
        `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"resolve"),s(" =>")]),s(` {
            `),a("span",{class:"hljs-built_in"},"setTimeout"),s(`(
                `),a("span",{class:"hljs-function"},"() =>"),s(` {
                    `),a("span",{class:"hljs-title function_"},"resolve"),s(`({
                        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'测试1'"),s(`,
                        `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/pineapple.jpg'"),s(`
                    })
                },
            )
        }
    )
}

`),a("span",{class:"hljs-title function_"},"watch"),s(`(
    fileList,
    `),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'fileList'"),s(", fileList."),a("span",{class:"hljs-property"},"value"),s(`)
    },
    {
        `),a("span",{class:"hljs-attr"},"deep"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
    }
)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),z=F('<h3 id="antd弃用属性">antd弃用属性</h3><p>accept、listType、action、beforeUpload、customRequest、data、directory、headers、method、name、 openFileDialogOnClick、showUploadList、withCredentials</p><h3 id="antd弃用事件">antd弃用事件</h3><p>download、remove</p><h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>fileList</td><td>文件列表</td><td>Array</td><td>-</td><td>[]</td><td>是</td></tr><tr><td><a href="#%E7%B1%BB%E5%9E%8B%E5%8F%8A%E5%B0%BA%E5%AF%B8">fileType</a></td><td>文件类型及尺寸配置</td><td>Array</td><td>&#39;1&#39;、&#39;2&#39;、&#39;3&#39;、&#39;4&#39;</td><td>[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;]</td><td>否</td></tr><tr><td><a href="#%E7%B1%BB%E5%9E%8B%E5%8F%8A%E5%B0%BA%E5%AF%B8">customFileType</a></td><td>自定义文件</td><td>Array</td><td><a href="#custom-file-type-item">custom-file-type-item[]</a></td><td>-</td><td>否</td></tr><tr><td>uploadAsync</td><td>上传异步函数</td><td>Function</td><td>文件</td><td>-</td><td>是</td></tr><tr><td>deleteFileAsync</td><td>删除异步函数</td><td>Function</td><td>文件</td><td>-</td><td>否</td></tr><tr><td>downloadAsync</td><td>下载异步函数</td><td>Function</td><td>文件</td><td>-</td><td>否</td></tr></tbody></table><h3 id="custom-file-type-item">custom-file-type-item</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值或函数参数</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>maxSize</td><td>最大bit数</td><td>Number</td><td>-</td><td>-</td><td>是</td></tr><tr><td>errorTip</td><td>错误提示</td><td>String</td><td>-</td><td>-</td><td>是</td></tr><tr><td>content</td><td>支持文件内容</td><td>Array</td><td>-</td><td>-</td><td>是</td></tr></tbody></table>',8),I={__name:"index",setup(A){return(t,l)=>(m(),u("div",D,[C,o(g(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3EfileType%E6%8E%A7%E5%88%B6%3C%2Fdiv%3E%0A%20%20%20%20%20%3Cm-upload%20%0A%20%20%20%20%20%20%20%20v-model%3AfileList%3D%22fileList1%22%0A%20%20%20%20%20%20%20%20%20%3AfileType%3D%22%5B'1'%5D%22%20%0A%20%20%20%20%20%20%20%20%20%3AuploadAsync%3D%22uploadAsync%22%0A%20%20%20%20%20%3E%0A%20%20%20%20%20%3C%2Fm-upload%3E%0A%20%20%20%20%20%3Cdiv%3EcustomFileType%E6%8E%A7%E5%88%B6%3C%2Fdiv%3E%0A%20%20%20%20%20%3Cm-upload%20%0A%20%20%20%20%20%20%20%20v-model%3AfileList%3D%22fileList2%22%20%0A%20%20%20%20%20%20%20%20%3AcustomFileType%3D%22customFileType%22%20%0A%20%20%20%20%20%20%20%20%3AuploadAsync%3D%22uploadAsync%22%0A%20%20%20%20%20%3E%0A%20%20%20%20%20%3C%2Fm-upload%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%2C%20watch%20%7D%20from%20'vue'%3B%0A%0Aconst%20fileList1%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20'%E6%B5%8B%E8%AF%951'%2C%0A%20%20%20%20%20%20%20%20url%3A%20'https%3A%2F%2Fwww.runoob.com%2Ftry%2Fdemo_source%2Fpineapple.jpg'%0A%20%20%20%20%7D%2C%0A%5D)%3B%0A%0Aconst%20fileList2%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20'%E6%B5%8B%E8%AF%951'%2C%0A%20%20%20%20%20%20%20%20url%3A%20'https%3A%2F%2Fwww.runoob.com%2Ftry%2Fdemo_source%2Fpineapple.jpg'%0A%20%20%20%20%7D%2C%0A%5D)%3B%0A%0Aconst%20customFileType%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20maxSize%3A%205242880%2C%20%2F%2F%205m%0A%20%20%20%20%20%20errorTip%3A%20'%E5%9B%BE%E7%89%87%E5%A4%A7%E5%B0%8F%E4%B8%8D%E8%83%BD%E5%A4%A7%E4%BA%8E5M%EF%BC%8C%E4%BB%85%E6%94%AF%E6%8C%81image%2Fpng%2C%20image%2Fjpeg%EF%BC%81'%2C%0A%20%20%20%20%20%20content%3A%20%5B'image%2Fpng'%2C%20'image%2Fjpeg'%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20maxSize%3A%2052%2C%20%2F%2F%2052kb%0A%20%20%20%20%20%20errorTip%3A%20'%E8%A7%86%E9%A2%91%E5%A4%A7%E5%B0%8F%E4%B8%8D%E8%83%BD%E5%A4%A7%E4%BA%8E52kb%EF%BC%8C%E4%BB%85%E6%94%AF%E6%8C%81video%2Fmp4%EF%BC%81'%2C%0A%20%20%20%20%20%20content%3A%20%5B'video%2Fmp4'%5D%0A%20%20%20%20%7D%0A%5D)%0A%0Afunction%20uploadAsync(formData)%20%7B%0A%20%20%20%20return%20new%20Promise(%0A%20%20%20%20%20%20%20%20resolve%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E6%B5%8B%E8%AF%951'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20url%3A%20'https%3A%2F%2Fwww.runoob.com%2Ftry%2Fdemo_source%2Fpineapple.jpg'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20)%0A%7D%0A%0Awatch(%0A%20%20%20%20fileList2%2C%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20console.log('fileList2'%2C%20fileList2.value)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20deep%3A%20true%0A%20%20%20%20%7D%0A)%0A%3C%2Fscript%3E"},{code:r(()=>[L]),default:r(()=>[o(E)]),_:1}),T,x,o(g(j),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%20%3Cm-upload%20%0A%20%20%20%20%20%20%20%20v-model%3AfileList%3D%22fileList%22%0A%20%20%20%20%20%20%20%20%3AuploadAsync%3D%22uploadAsync%22%0A%20%20%20%20%20%20%20%20%20%3AshowUploadList%3D%22showUploadList%22%0A%20%20%20%20%20%20%20%20%20%3AdeleteFileAsync%3D%22deleteFileAsync%22%0A%20%20%20%20%20%20%20%20%20%3AdownloadAsync%3D%22downloadAsync%22%0A%20%20%20%20%20%3E%0A%20%20%20%20%20%3C%2Fm-upload%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%2C%20watch%20%7D%20from%20'vue'%3B%0Aconst%20fileList%20%3D%20ref(%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20'%E6%B5%8B%E8%AF%951'%2C%0A%20%20%20%20%20%20%20%20url%3A%20'https%3A%2F%2Fwww.runoob.com%2Ftry%2Fdemo_source%2Fpineapple.jpg'%0A%20%20%20%20%7D%2C%0A%5D)%3B%0A%0Aconst%20showUploadList%20%3D%20ref(%7B%0A%20%20%20%20%20%20%20%20showPreviewIcon%3A%20true%2C%0A%20%20%20%20%20%20%20%20showRemoveIcon%3A%20true%2C%0A%20%20%20%20%20%20%20%20showDownloadIcon%3A%20true%0A%7D)%0A%0Afunction%20deleteFileAsync()%20%7B%0A%20%20%20%20console.log('deleteFileAsync'%2C%20arguments)%0A%20%20%20%20return%20Promise.resolve()%0A%7D%0A%0Aasync%20function%20downloadAsync()%20%7B%0A%20%20%20%20console.log('downloadAsync'%2C%20arguments)%0A%7D%0A%0Afunction%20uploadAsync(formData)%20%7B%0A%20%20%20%20return%20new%20Promise(%0A%20%20%20%20%20%20%20%20resolve%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'%E6%B5%8B%E8%AF%951'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20url%3A%20'https%3A%2F%2Fwww.runoob.com%2Ftry%2Fdemo_source%2Fpineapple.jpg'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20)%0A%7D%0A%0Awatch(%0A%20%20%20%20fileList%2C%0A%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20console.log('fileList'%2C%20fileList.value)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20deep%3A%20true%0A%20%20%20%20%7D%0A)%0A%3C%2Fscript%3E"},{code:r(()=>[k]),default:r(()=>[o(B)]),_:1}),z]))}};export{I as default};
