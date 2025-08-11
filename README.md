## 一：组件库实现的三种方式：

### 1：全部自研。

### 2：将开源组件库下载到本地，直接调整源码。

### 3：将开源组件库作为node\_modules依赖包进行二次开发。本组件库使用此方式。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/meonaA1yee2znXxj/img/2568a0ac-1d91-4202-8520-61a5b3b7e630.png)

## 二：摩捷组件库优点：

### 1：下载方式

组件库部署在公共平台上，项目通过npm直接下载，当组件库调整或扩展时，项目通过命令行可直接安装，不需要在项目中调整代码。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/meonaA1yee2znXxj/img/7a8a870b-ec52-4c46-89c4-223bd0288831.png)

### 2：代码的各个部分都已按照个人能想到的最好的方式进行设计实现，如扩展性、易用性、可维护性等等。

     扩展性如：Page组件的操作区，虽然都是按钮，可直接使用数组来控制，但考虑到后期可能会对按钮进行统一控制，如对齐方式等情况。最后使用对象，将数组作为items属性。无论组件如何扩展，整体结构不变，不会出现不合理或需要调整结构的情况。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/meonaA1yee2znXxj/img/505ed599-f45f-4f1a-a037-105c09639a02.png)

     易用性如：针对回调，分为同步和异步的情况，异步函数均以Async结尾，方便开发人员快速识别，不符合条件的情况会抛出异常，方便后续扩展。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/meonaA1yee2znXxj/img/f0c6ca45-252a-4998-b64e-6bddaccbb07d.png)

     可维护性：关于开源组件库中组件的配置项，均以常量的方式进行配置，增减时代码会自动识别，方便维护。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/meonaA1yee2znXxj/img/63c1774d-4777-40cd-b496-633da3d30103.png)

### 3：组件库中的组件均可根据公司风格、业务进行封装，方便业务人员使用。

### 4：内部组件库已在出行管理平台的项目中进行了使用，完全按照预期进行展示。

