## Table


### 简单使用
+ table表头有吸顶效果
+ 表头有拉伸功能（必须设置宽度，至少需要1列不设置宽度，不能全设置宽度。不符合规则时会有报错）
+ 文字超过宽度不换行
+ 默认添加序号

```vue preview
<template>
  <m-table
        :columns="columns"
        :dataSource="dataSource" 
    >
</m-table>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const columns = ref([
          {
            title: '姓名',
            dataIndex: 'name',
            width: 200
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 200
          },
          {
            title: '住址',
            dataIndex: 'address',
          },
        ]
)

const dataSource = ref([
          {
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
          },
        ]
)

</script>
```



### 操作列
+ 最多展示两条，超过的内容会在下拉中展示
+ 支持隐藏和禁止操作功能

#### 操作列精简配置
```vue preview
<template>
  <m-table
        :columns="columns"
        :dataSource="dataSource" 
        :operationsColumn="operationsColumn"
    ></m-table>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const columns = ref([
          {
            title: '姓名',
            dataIndex: 'name',
            width: 200
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 200
          },
          {
            title: '住址',
            dataIndex: 'address',
          },
        ]
)

const dataSource = ref([
          {
            name: '赵',
            age: 1,
            address: '西湖区湖底公园1号',
          },
        ]
)

const operationsColumn = ref({
  items: [
    {
      label: '驳驳',
      isShowModal: true,
      async confirmAsync(val) {
        console.log('驳驳 onclick', val);
      }
    },
    {
      label: '通过',
      isShowModal: true,
      modalTitle: '自定义提示',
      getModalContent() {
        return '自定义内容？'
      },
      async confirmAsync(val) {
        console.log('通过 onclick', val);
      }
    },
    {
      label: '拒绝',
      async confirmAsync(val) {
        console.log('拒绝 onclick', val);
      }
    },
    {
      label: '驳回驳回驳回',
      async confirmAsync(val) {
        console.log('驳回驳回驳回 onclick', val);
      }
    }
  ]
});

</script>
```

#### 操作列全部配置
```vue preview
<template>
  <m-table
        :columns="columns"
        :dataSource="dataSource" 
        :operationsColumn="operationsColumn"
    ></m-table>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const columns = ref([
          {
            title: '姓名',
            dataIndex: 'name',
            width: 200
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 200
          },
          {
            title: '住址',
            dataIndex: 'address',
          },
        ]
)

const dataSource = ref([
          {
            name: '赵',
            age: 1,
            address: '西湖区湖底公园1号',
          },
          {
            name: '钱',
            age: 2,
            address: '西湖区湖底公园2号',
          },
          {
            name: '孙',
            age: 3,
            address: '西湖区湖底公园3号',
          },
        ]
)

const operationsColumn = ref({
  items: [
    {
      label: '驳驳',
      async confirmAsync(record) {
        console.log('驳驳 confirmAsync', record);
      },
      getHidden(record) {
        console.log('驳驳 getHidden', record);
        if (record.age === 1) {
            return true
        }
        return false;
      },
      getDisabled(record) {
        console.log('驳驳 getDisabled', record);
        return false;
      }
    },
    {
      label: '通过',
      async confirmAsync(record) {
        console.log('通过 onclick', record);
      },
      getHidden(record) {
        console.log('通过 getHidden', record);
        return false;
      },
      getDisabled(record) {
        console.log('通过 getDisabled', record);
        if (record.age === 2) {
            return true
        }
        return false;
      }
    },
    {
      label: '拒绝',
      async confirmAsync(record) {
        console.log('拒绝 onclick', record);
      },
      getHidden(record) {
        console.log('拒绝 getHidden', record);
        return false;
      },
      getDisabled(record) {
        console.log('拒绝 getDisabled', record);
        return false;
      }
    }
  ]
});

</script>
```



### 多选
+ 最多展示两条，超过的内容会在下拉中展示
+ 支持隐藏和禁止操作功能
+ 没有选中时不允许操作

#### 精简配置

```vue preview
<template>
<div>
  <m-button @click="handleOpenMul" class="mb-8px">开启多选</m-button>
  <m-table
        :columns="columns"
        :dataSource="dataSource" 
         :multiple="multiple"
         @cancelMultiple="handleCancelMultiple"
    ></m-table>
</div>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const columns = ref([
          {
            title: '姓名',
            dataIndex: 'name',
            width: 200
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 200
          },
          {
            title: '住址',
            dataIndex: 'address',
          },
        ]
)

const dataSource = ref([
          {
            name: '赵',
            age: 1,
            address: '西湖区湖底公园1号',
          },
          {
            name: '钱',
            age: 2,
            address: '西湖区湖底公园1号',
          },
          {
            name: '孙',
            age: 3,
            address: '西湖区湖底公园1号',
          },
        ]
)

const multiple = ref({
    visible: true,
    items: [
        {
            label: '操作',
            // 点击回调
            async confirmAsync() {
              console.log('multiple', arguments);
              return Promise.resolve()
            },
        }
    ]
})

function handleOpenMul() {
    multiple.value.visible = true
}

function handleCancelMultiple() {
    multiple.value.visible = false
}

</script>
```

#### 全部配置

```vue preview
<template>
<div>
  <m-button @click="handleOpenMul" class="mb-8px">开启多选</m-button>
  <m-table
        :columns="columns"
        :dataSource="dataSource" 
         :multiple="multiple"
         @cancelMultiple="handleCancelMultiple"
    ></m-table>
</div>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const columns = ref([
          {
            title: '姓名',
            dataIndex: 'name',
            width: 200
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 200
          },
          {
            title: '住址',
            dataIndex: 'address',
          },
        ]
)

const dataSource = ref([
          {
            name: '赵',
            age: 1,
            address: '西湖区湖底公园1号',
          },
          {
            name: '钱',
            age: 2,
            address: '西湖区湖底公园1号',
          },
          {
            name: '孙',
            age: 3,
            address: '西湖区湖底公园1号',
          },
        ]
)

const multiple = ref({
    visible: true,
    items: [
        {
            label: '操作1',
            hidden: true,
            disabled: false,
            mode: 'normal',
            // 点击回调
            async confirmAsync() {
              console.log('multiple', arguments);
            },
        },
       {
            label: '操作2',
            hidden: false,
            disabled: true,
            mode: 'normal',
            // 点击回调
            async confirmAsync() {
              console.log('multiple', arguments);
            },
        },
        {
            label: '操作3',
            hidden: false,
            disabled: false,
            mode: 'success',
            // 点击回调
            async confirmAsync() {
              console.log('multiple', arguments);
            },
        },
    ]
})

function handleOpenMul() {
    multiple.value.visible = true
}

function handleCancelMultiple() {
    multiple.value.visible = false
}

</script>
```



### 分页配置
+ 支持字段映射配置，方便不同后端定义的不同字段处理

```vue preview
<template>
<div>
  <m-table
        :columns="columns"
        :dataSource="dataSource" 
        :pagination="paginationRef"
        :paginationMap="paginationMapRef"
    ></m-table>
</div>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const columns = ref([
          {
            title: '姓名',
            dataIndex: 'name',
            width: 200
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 200
          },
          {
            title: '住址',
            dataIndex: 'address',
          },
        ]
)

const dataSource = ref([
          {
            name: '赵',
            age: 1,
            address: '西湖区湖底公园1号',
          },
          {
            name: '钱',
            age: 2,
            address: '西湖区湖底公园1号',
          },
          {
            name: '孙',
            age: 3,
            address: '西湖区湖底公园1号',
          },
          {
            name: '李',
            age: 4,
            address: '西湖区湖底公园1号',
          },
        ]
)

const paginationRef = ref({
  currentMap: 2, // 当前页数
  sizeMap: 20, // 每页数量
  totalElements: 1000, // 总页数
  currentFromNumber: 0 // current上传的值与实际值的区别，从0开始为-1，从1开始为0
})

const paginationMapRef = ref({
  current: 'currentMap', // 当前页数
  pageSize: 'sizeMap', // 每页数量
  total: 'totalElements', // 总页数
  currentFromNumber: 0 // current上传的值与实际值的区别，从0开始为-1，从1开始为0
})

</script>
```







### 类型
+ 操作类型：用于操作，如打开弹窗等操作，为按钮效果
+ 跳转类型：用于跳转，如改变路由，为link效果
+ 切换类型：用于切换，如改变上架下架类型，为switch效果
+ 状态类型：用于状态展示，效果为文字前面有标识，目前支持 init、process、success、fail 四种状态
+ 预览或下载类型：用于资源文件的展示或下载

#### 精简配置
```vue preview
<template>
<div>
  <m-table
        :dataSource="dataSource" 
        :columns="columns"
    ></m-table>
</div>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const columns = ref([
          {
            title: '姓名',
            dataIndex: 'name',
            width: 200,
            typeConfig: {
              type: 'button',
              click(bindValue) {
                console.log('onclick', bindValue)
              },
            }
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 200,
            typeConfig: {
              type: 'jump',
              click(bindValue) {
                console.log('onclick', bindValue)
              }
            }
          },
          {
            title: '住址',
            dataIndex: 'address',
            width: 200,
            typeConfig: {
              type: 'switch',
              getChecked() {
                return true
              },
              // 点击确定
              async confirmAsync(bindValue) {
                console.log('onOk', bindValue)
              }
            }
          },
         {
            title: '排量',
            width: 200,
            dataIndex: 'displacement',
            typeConfig: {
              type: 'status',
              getStatus(bindValue){
                  return 'init'
              },
            }
          },
          {
            title: '变速箱类型',
            width: 200,
            dataIndex: 'gearboxName',
            typeConfig: {
              type: 'previewDownload',
              getUrl(bindValue){
                 return 'https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png'
              },
            }
          },
          {
              title: '能源类型',
              dataIndex: 'energyName',
           },
        ]
)

const dataSource = ref([
          {
            name: '赵',
            age: 1,
            address: true,
            displacement: '1.0T',
            gearboxName: '自动',
            energyName: '燃油'
          },
        ]
)
</script>
```



#### 全部配置
```vue preview
<template>
<div>
  <m-table
        :dataSource="dataSource" 
        :columns="columns"
    ></m-table>
</div>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const columns = ref([
          {
            title: '姓名',
            dataIndex: 'name',
            width: 200,
            typeConfig: {
              type: 'button',
              getDisabled(bindValue) {
                if (bindValue.index === 1) {
                    return true;
                }
                return false;
              },
              click(bindValue) {
                console.log('onclick', bindValue)
              },
            }
          },
          {
            title: '性别',
            dataIndex: 'sex',
            width: 200,
            typeConfig: {
              type: 'copy',
              getEnable(bindValue) {
                console.log('getEnable', bindValue)
                return true
              },
            }
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 200,
            typeConfig: {
              type: 'jump',
              getDisabled(bindValue) {
               if (bindValue.index === 1) {
                        return true;
                    }
                return false;
              },
              click(bindValue) {
                console.log('onclick', bindValue)
              }
            }
          },
          {
            title: '住址',
            dataIndex: 'address',
            width: 200,
            typeConfig: {
              type: 'switch',
              getChecked(bindValue) {
               if (bindValue.index === 1) {
                        return true;
                    }
                return false;
              },
              getDisabled(bindValue) {
               if (bindValue.index === 1) {
                        return true;
                    }
                return false;
              },
                getLeftLabel(bindValue) {
                  console.log(bindValue);
                  return '下架';
                },
                getRightLabel(bindValue) {
                  console.log(bindValue);
                  return '上架';
                },
                getTitle(bindValue) {
                  console.log(bindValue);
                  return '确定操作switch？';
                },
                getContent(bindValue) {
                  console.log(bindValue);
                  return '内容展示';
                },
              // 点击确定
              confirmAsync(bindValue) {
                console.log('onOk', bindValue)
                return Promise.resolve()
              }
            }
          },
         {
            title: '排量',
            width: 200,
            dataIndex: 'displacement',
            typeConfig: {
              type: 'status',
              getStatus(bindValue){
                if (bindValue.index === 0) {
                  return 'init'
                } else if (bindValue.index === 1) {
                  return 'process'
                } else if (bindValue.index === 2) {
                  return 'success'
                } else {
                  return 'fail'
                }
              },
            }
          },
          {
            title: '变速箱类型',
            width: 200,
            dataIndex: 'gearboxName',
            typeConfig: {
              type: 'previewDownload',
              getEnablePreview: function (bindValue) {
                if (bindValue.index === 0) {
                  return true
                } else if (bindValue.index === 1) {
                  return false
                } else if (bindValue.index === 2)  {
                  return true
                } else {
                  return true
                }
              },
              getEnableDownload: function (bindValue) {
                if (bindValue.index === 0) {
                  return true
                } else if (bindValue.index === 1) {
                  return true
                } else if (bindValue.index === 2)  {
                  return false
                } else {
                  return true
                }
              },
              getUrl(bindValue){
                if (bindValue.index === 0) {
                  return 'https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png'
                } else if (bindValue.index === 1) {
                  return 'https://www.runoob.com/try/demo_source/horse.ogg'
                } else if (bindValue.index === 2) {
                  return 'https://www.runoob.com/try/demo_source/movie.mp4'
                } else if (bindValue.index === 3) {
                  return 'https://static.jyshare.com/download/sites.xlsx'
                }  else {
                  return 'https://www.runoob.com/manual/github-git-cheat-sheet.pdf'
                }
              },
              async downloadAsync() {
                console.log(arguments)
              }
            }
          },
          {
                title: '能源类型',
                dataIndex: 'energyName',
              },
        ]
)

const dataSource = ref([
          {
            name: '赵',
            sex: '男',
            age: 1,
            address: true,
            displacement: '1.0T',
            gearboxName: '自动',
            energyName: '燃油'
          },
          {
            name: '钱',
            sex: '男',
            age: 2,
            address: false,
            displacement: '1.5T',
            gearboxName: '手动',
            energyName: '纯电'
          },
          {
            name: '孙',
            sex: '男',
            age: 3,
            address: false,
            displacement: '2.0T',
            gearboxName: '脚动',
            energyName: '混合'
          },
          {
            name: '李',
            sex: '男',
            age: 4,
            address: false,
            displacement: '2.5T',
            gearboxName: '混动',
            energyName: '燃油'
          },
        ]
)
</script>
```



### antd功能
除弃用属性，其余属性、事件、插槽均支持
```vue preview
<template>
  <m-table
        :columns="columns"
        :dataSource="dataSource" 
    >
       <template #headerCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'">
            <span class="color-red">
              插槽展示 {{ text }}
            </span>
          </template>
        </template>
    
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'age1'"><span class="color-red">插槽</span>{{ text }}</template>
        </template>
    </m-table>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';

const columns = ref([
          {
            title: '姓名',
            dataIndex: 'name',
            width: 200,
            filters: [
              {
                text: '赵山河',
                value: '赵山河',
              },
              {
                text: '赵山海',
                value: '赵山海',
              },
            ],
            filterSearch: true,
            onFilter: (value, record) => record.name.includes(value)
          },
          {
            title: '年龄',
            width: 200,
            children: [
                {
                    title: '年龄1',
                    dataIndex: 'age1',
                    width: 100,
                },
                {
                    title: '年龄2',
                    dataIndex: 'age2',
                    width: 100,
                },
            ]
          },
          {
            title: '住址',
            dataIndex: 'address',
            sorter: (a, b) => a.age - b.age,
          },
        ]
)

const dataSource = ref([
          {
            name: '赵山河',
            address: '西湖区湖底公园1号',
            age1: 31,
            age2: 32,
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
          },
          {
            name: '赵山海',
            address: '西湖区湖底公园2号',
            age1: 33,
            age2: 34,
          },
          {
            name: '赵铁柱',
            address: '西湖区湖底公园4号',
            age1: 35,
            age2: 36,
          },
          {
            name: '赵小蛮',
            address: '西湖区湖底公园3号',
            age1: 37,
            age2: 38,
          },
        ]
)

</script>
```





### antd弃用属性
row-selection、loading、sticky、scroll


### Props
| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| columns | 列配置，新增typeConfig属性，详见下方配置 | [新增的typeConfig](#type-config-button) | - | - | 否 |
| operationsColumn | 操作列配置 | { width?：宽度（如果前两项存在隐藏的时候，建议手动设置宽度），items：[Object](#operations-column)[] } | - | - | 否 |
| multiple | 多选配置 | [multiple](#multiple) | - | - | 否 |
| pagination | 分页配置 | [详见](#分页配置) | - | - | 否 |
| paginationMap | 分页配置映射 | [详见](#分页配置) | - | - | 否 |

### operations-column
| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| label | 展示文字 | String | - | - | 是 |
| confirmAsync | 点击回调；当isShowModal为true时，为提示弹窗的确认回调 | Function | bindValue | () => {} | 是 |
| getHidden | 是否隐藏 | Function | bindValue | () => false | 否 |
| getDisabled | 是否允许操作 | Function | bindValue | () => false | 否 |
| isShowModal | 是否展示确认弹窗 | Boolean | - | false | 否 |
| modalTitle | 确认弹窗标题 | String | - | 提示 | 否 |
| getModalContent | 确认弹窗内容 | Function | bindValue | - | 否 |

### multiple
| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| visible | 是否展示 | Boolean | - | true | 是 |
| enableCrossPage | 是否允许跨页 | Boolean | - | false | 否 |
| getCheckboxProps | 多选是否禁止操作函数 | Function | record | record => {return {disabled: false}} | 否 |
| items | 操作配置项 | Array | [multiple-item[]](#multiple-item) | - | 是 |

### multiple-item
| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| label | 展示文本 | String | - | - | 是 |
| mode | 模式，详见按钮组件 | - | - | - | 否 |
| hidden | 是否隐藏 | Boolean | - | false | 否 |
| disabled | 是否禁止操作 | Boolean | - | false | 否 |
| confirmAsync | 点击点击操作 | Function | - | - | 否 |


### type-config-button
| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| type | 类型 | String | button | - | 是 |
| click | 点击回调 | Function | bindValue | () => {} | 是 |
| getDisabled | 是否禁止操作 | Function | bindValue | () => false | 否 |

### type-config-copy
| 参数      | 说明     | 类型      | 可选值或函数参数  | 默认值        | 是否必填  |
|---------- |--------|---------- |-----------|------------|-------- |
| type | 类型     | String | copy      | -          | 是 |
| getEnable | 是否开启复制 | Function | bindValue | () => true | 否 |

### type-config-jump
| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| type | 类型 | String | jump | - | 是 |
| click | 点击回调 | Function | bindValue | () => {} | 是 |
| getDisabled | 是否禁止操作 | Function | bindValue | () => false | 否 |

### type-config-switch
| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| type | 类型 | String | switch | - | 是 |
| getChecked | 获取状态 | Function | bindValue | - | 是 |
| confirmAsync | 点击弹窗确定 | Function | bindValue | - | 是 |
| getDisabled | 是否禁止操作 | Function | bindValue | () => false | 否 |
| getLeftLabel | 左侧文字 | Function | bindValue | () => '关闭' | 否 |
| getRightLabel | 右侧文字 | Function | bindValue | () => '开启' | 否 |
| getTitle | 弹窗title | Function | bindValue | () => '确定切换？' | 否 |
| getContent | 弹窗content | Function | bindValue | () => '' | 否 |
| onclick | 点击切换回调 | Function | bindValue | () => {} | 否 |


### type-config-status
| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| type | 类型 | String | status | - | 是 |
| getStatus | 获取类型回调 | Function | () => init、process、success、fail | - | 是 |

### type-config-preview-download
| 参数      | 说明          | 类型      | 可选值或函数参数                           | 默认值  | 是否必填  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| type | 类型 | String | previewDownload | - | 是 |
| getUrl | 获取url | Function | bindvalue | - | 是 |
| getEnablePreview | 是否开启预览 | Function | bindvalue | () => true | 否 |
| getEnableDownload | 是否开启下载 | Function | bindvalue | () => true | 否 |
| 其它详见preview-download组件配置 | - | - | - | - | - |

### Expose

| 名称 | 说明 |
|---------- |-------- |
| antTableComponent | table实例 |
| reset | 重置分页及多选 |

