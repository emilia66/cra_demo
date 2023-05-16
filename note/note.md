# 1.webpack 配置
## 1.将sass修改为less
![image]("./modifySaccToLess.jpg")

## 2.修改dev环境的端口和域名
### 方式一 直接修改script/start.js
修改 DEFAULT_PORT和HOST变量即可
### 方式二
通过修改process.env的形式进行修改

cross-env可以修改环境变量
首先安装cross-env
然后修改packagejson 中的script对象

    "start": "cross-env PORT=8080 node scripts/start.js",

## 3.浏览器兼容性处理

## 4.跨域代理处理
proxy
## 5.修改别名alies

# 2.mvc和mvvm模式
前端主流框架 react、vue、angela
数据驱动页面渲染
改变了之前操作dom才能渲染页面的形式

操作dom的弊端：
主要就是比较消耗性能，比如会频繁的操作dom导致重排（回流）、重绘，使浏览器渲染性能下降，因为重排和重绘会比较耗时间
操作dom也会比较麻烦；

数据驱动页面渲染的优势：
通过操作数据驱动页面渲染
避免操作真实dom
底层也是依赖于操作dom来完成的，不同的是数据驱动页面渲染构建了一套虚拟dom->真实dom的渲染体系
能够有效的避免dom的重排重绘

最终可以提高开发效率，页面性能也更好，用户体验更快，页面不卡顿


# 3.虚拟dom到底是什么？









