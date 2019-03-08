# Vue 业务公共组件开发

  针对BG业务开发过程中发现，目前存在一些业务场景相似或一样的需求，对此我们希望能建立一套组件可复用标准及开发规范。按照功能区分，目前我们可以分为基础UI及业务组件。
  
> 组件化方案

- 单文件组件开发（SFC）
- 单元测试编写
- 支持`<script>`及模块化规范引入
- 提交到组件仓库及发布到npm

> 组件工程创建

目前组件开发工程采用种子工程方式，后续将集成到脚手架中，种子工程地址：
- git：
- svn：

下载到本地后，种子工程为test-component，目录结构如下：
<pre>
test-component  
│  .babelrc 
│  package-lock.json
│  package.json
│  README.md
│  
├─build
│      rollup.config.js  //构建配置文件
│      
├─dist                  
│      test-component.esm.js
│      test-component.min.js
│      test-component.umd.js
│      
├─node_modules
├─src
│      index.js            //插件化设置
│      test-component.vue  //组件
│      
└─test
       test-component.spc.js  //单元测试
</pre>

因目前暂时未做成脚手架，所以需要手动来基于组件模版修改，开发自己的组件，需要依次修改相关配置信息，主要在package.json中，比如name、version、main、build相关配置。

> 组件命名规范

关于组件命名规范，整体遵循vue官方相关规范，为了保持一致，暂且统一定义为短横线`-`连接(kebab-case)，针对于发布到npm的名称，我们约定命名空间以及组件格式规范如：

- 业务组件，@edu/app-xxx
- UI组件，@edu/eui-xxx

> 组件开发及调试

组件开发不希望在工程中过多依赖开发服务，所以目前我们采用vue官方cli进行开发调试，如果已经安装了最新脚手架，我们可以直接运行:
<pre>
> cd test-component
> npm install
> vue serve src/test-component.vue --open`
</pre>
如果本地没有安装最新vue cli，可以全局安装后再试。
<pre>
> npm install @vue/cli -g
</pre>
服务启动成功，浏览器打开后显示当前我们开发的组件。

> 组件单元测试

目前组件单元测试引入vue官方提供test-utils工具进行测试，并基于jest运行测试脚本。
组件开发完成，我们需要在test目录下编写单元测试脚本，关于vue组件单元测试，建议大家自主学习官方提供文档，运行测试脚本：

<pre>
> npm run test
</pre>

输出相关测试执行结果。

> 组件打包构建

目前我们完成了组件开发及单元测试，现在我们需要将组件进行构建，你可能会很好奇，为什么我们不能直接分享`.vue`文件呢？当然可以，但是这样你可能会让那些想直接通过js引用的人无法使用，所以我们需要打包构建，这里为了配置简单及打包文件大小等原因，我们选择了`rollup`，目前配置了三种格式，分别是`es`、`iife`、`umd`，运行打包脚本:

<pre>
> npm run build
</pre>

查看dist目录，输出三种格式文件，默认npm包指向umd文件引用。

- test-component.esm.js
- test-component.min.js
- test-component.umd.js

> 组件提交及发布

组件暂时直接发布到npm，整个提交及审核后续会有详细机制，暂不提交到git，同时因公司现有npm组件仓库存在相关问题，经过沟通后决定先使用现有自己搭建npm仓库，添加及切换到npm私服。

<pre>
> npm install nrm -g
> nrm add fly http://172.31.10.36:8090
> nrm use fly
> npm publish
</pre>

打开现有组件私服`http://npm.flyui.cn/`，可以查看到已经发布的组件，若要在项目中使用，直接通过npm install方式安装即可。
