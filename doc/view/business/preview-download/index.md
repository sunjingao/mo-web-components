## preview-download


### 支持的类型
+ '.png'，'.jpg'，'.jpeg'；
+ '.audio'，'.mp3'，'.ogg'；
+ '.video'，'.mp4'；
+ '.docx'，'.xlsx'，'.ppt'；
+ '.pdf'；

```vue preview
<template>
  <div>
        <div class="inline-block flex items-center">
          <div class="inline-block w-100px">PIC：</div>
          <m-preview-download
                url="https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png"
                >
          </m-preview-download>
        </div>
        <div class="inline-block flex items-center">
          <div class="inline-block w-100px">AUDIO：</div>
           <m-preview-download
                url="https://www.runoob.com/try/demo_source/horse.ogg"
                >
           </m-preview-download>
        </div>
        <div class="inline-block flex items-center">
          <div class="inline-block w-100px">VIDEO：</div>
          <m-preview-download
                url="https://www.runoob.com/try/demo_source/movie.mp4"
                >
          </m-preview-download>
        </div>
        <div class="inline-block flex items-center">
           <div class="inline-block w-100px">OFFICE：</div>
           <m-preview-download
                url="https://static.jyshare.com/download/sites.xlsx"
                >
           </m-preview-download>
        </div>
        <div class="inline-block flex items-center">
          <div class="inline-block w-100px">PDF：</div>
           <m-preview-download
                url="https://www.runoob.com/manual/github-git-cheat-sheet.pdf"
                >
           </m-preview-download>
        </div>
  </div>
</template>
<script lang="ts" setup>
</script>
```


### 展示控制
+ 控制是否展示预览；
+ 控制是否展示下载；

```vue preview
<template>
  <div>
        <div class="inline-block flex items-center">
          <div class="inline-block w-100px">PDF：</div>
           <m-preview-download
                url="https://www.runoob.com/manual/github-git-cheat-sheet.pdf"
                >
           </m-preview-download>
        </div>
        <div class="inline-block flex items-center">
          <div class="inline-block w-100px">PDF：</div>
           <m-preview-download
                url="https://www.runoob.com/manual/github-git-cheat-sheet.pdf"
                :enablePreview="false"
                >
           </m-preview-download>
        </div>
        <div class="inline-block flex items-center">
          <div class="inline-block w-100px">PDF：</div>
           <m-preview-download
                url="https://www.runoob.com/manual/github-git-cheat-sheet.pdf"
                :enableDownload="false"
                >
           </m-preview-download>
        </div>
  </div>
</template>
<script lang="ts" setup>
</script>
```

### 下载
+ 点击下载时，触发回调接口，开发者自行进行下载；

```vue preview
<template>
  <div>
        <div class="inline-block flex items-center">
          <div class="inline-block w-100px">PDF：</div>
           <m-preview-download
                :downloadAsync="downloadAsync"
                url="https://www.runoob.com/manual/github-git-cheat-sheet.pdf"
                >
           </m-preview-download>
        </div>
  </div>
</template>
<script lang="ts" setup>

async function downloadAsync() {
    console.log('进入下载函数', arguments)
}

</script>
```

**Props**

| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| url | 展示地址 | String | - | - | 是 |
| enablePreview | 是否允许预览 | Boolean | - | true | 否 |
| enableDownload | 是否允许下载 | Boolean | - | true | 否 |
| downloadAsync | 下载函数 | Function | url | - | enableDownload为true时必填 |
