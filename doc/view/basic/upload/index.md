## Upload

### 类型及尺寸
+ fileType支持的类型及尺寸

> 1：图片  
> const IMG = {  
>   maxSize: 5242880, // 5m  
>   errorTip: '图片大小不能大于5M；仅支持image/png、image/jpeg格式！',  
>   content: ['image/png', 'image/jpeg']  
> };  
> 2：文档    
> const DOC = {  
>   maxSize: 52428800, // 50m  
>   errorTip: '文档大小不能大于50M；仅支持msword、document、excel、sheet、powerpoint、pdf格式！  
>   content: [  
>     'application/msword',  
>     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',  
>     'application/vnd.ms-excel',  
>     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',  
>     'application/vnd.ms-powerpoint',  
>     'application/vnd.openxmlformats-officedocument.presentationml.presentation',  
>     'application/pdf'  
>   ]  
> };  
> 3：视频    
> const VIDEO = {  
>   maxSize: 157286400, // 150m  
>   errorTip: '视频大小不能大于150M；仅支持mp4格式！  
>   content: ['video/mp4']  
> };  
> 4：压缩包    
> const PACK = {  
>   maxSize: 209715200, // 200m  
>   errorTip: '资源文件大小不能大于500M；仅支持zip、rar、7z、tar、gzip格式！  
>   content: [  
>     'application/x-zip-compressed',  
>     'application/x-rar-compressed',  
>     'application/zip',  
>     'application/x-7z-compressed',  
>     'application/vnd.ms-cab-compressed',  
>     'application/x-unix-archive',  
>     'application/x-tar',  
>     'application/gzip'  
>   ]  
> };

+ 如果需要定制化组件接收的类型，需要设置customFileType字段，fileType字段失效

```vue preview
<template>
  <div>
    <div>fileType控制</div>
     <m-upload 
        v-model:fileList="fileList1"
         :fileType="['1']" 
         :uploadAsync="uploadAsync"
     >
     </m-upload>
     <div>customFileType控制</div>
     <m-upload 
        v-model:fileList="fileList2" 
        :customFileType="customFileType" 
        :uploadAsync="uploadAsync"
     >
     </m-upload>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';

const fileList1 = ref([
    {
        name: '测试1',
        url: 'https://www.runoob.com/try/demo_source/pineapple.jpg'
    },
]);

const fileList2 = ref([
    {
        name: '测试1',
        url: 'https://www.runoob.com/try/demo_source/pineapple.jpg'
    },
]);

const customFileType = ref([
    {
      maxSize: 5242880, // 5m
      errorTip: '图片大小不能大于5M，仅支持image/png, image/jpeg！',
      content: ['image/png', 'image/jpeg']
    },
    {
      maxSize: 52, // 52kb
      errorTip: '视频大小不能大于52kb，仅支持video/mp4！',
      content: ['video/mp4']
    }
])

function uploadAsync(formData) {
    return new Promise(
        resolve => {
            setTimeout(
                () => {
                    resolve({
                        name: '测试1',
                        url: 'https://www.runoob.com/try/demo_source/pineapple.jpg'
                    })
                },
            )
        }
    )
}

watch(
    fileList2,
    () => {
        console.log('fileList2', fileList2.value)
    },
    {
        deep: true
    }
)
</script>
```


### 删除及下载
+ 删除会触发deleteFileAsync异步函数
+ 下载会触发downloadAsync异步函数

```vue preview
<template>
  <div>
     <m-upload 
        v-model:fileList="fileList"
        :uploadAsync="uploadAsync"
         :showUploadList="showUploadList"
         :deleteFileAsync="deleteFileAsync"
         :downloadAsync="downloadAsync"
     >
     </m-upload>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
const fileList = ref([
    {
        name: '测试1',
        url: 'https://www.runoob.com/try/demo_source/pineapple.jpg'
    },
]);

const showUploadList = ref({
        showPreviewIcon: true,
        showRemoveIcon: true,
        showDownloadIcon: true
})

function deleteFileAsync() {
    console.log('deleteFileAsync', arguments)
    return Promise.resolve()
}

async function downloadAsync() {
    console.log('downloadAsync', arguments)
}

function uploadAsync(formData) {
    return new Promise(
        resolve => {
            setTimeout(
                () => {
                    resolve({
                        name: '测试1',
                        url: 'https://www.runoob.com/try/demo_source/pineapple.jpg'
                    })
                },
            )
        }
    )
}

watch(
    fileList,
    () => {
        console.log('fileList', fileList.value)
    },
    {
        deep: true
    }
)
</script>
```

### antd弃用属性
accept、listType、action、beforeUpload、customRequest、data、directory、headers、method、name、
openFileDialogOnClick、showUploadList、withCredentials

### antd弃用事件
download、remove

### Props

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| fileList | 文件列表 | Array | - | [] | 是 |
| [fileType](#类型及尺寸) | 文件类型及尺寸配置 | Array | '1'、'2'、'3'、'4' | ['1', '2', '3', '4'] | 否 |
| [customFileType](#类型及尺寸) | 自定义文件 | Array | [custom-file-type-item[]](#custom-file-type-item) | - | 否 |
| uploadAsync | 上传异步函数 | Function | 文件 | - | 是 |
| deleteFileAsync | 删除异步函数 | Function | 文件 | - | 否 |
| downloadAsync | 下载异步函数 | Function | 文件 | - | 否 |

### custom-file-type-item

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| maxSize | 最大bit数 | Number | - | - | 是 |
| errorTip | 错误提示 | String | - | - | 是 |
| content | 支持文件内容 | Array | - | - | 是 |

