# vue-node-mysql-mavon

## 实现功能

使用 mavonEditor 插件，插件地址：https://github.com/hinesboy/mavonEditor   
实现了富文本编写文章的功能，并且存储到mysql里面，从mysql里读取数据出来并且渲染到页面

------

## 项目部署

### 数据库

数据库表数据类型如下：

title|type|html|md
---|:--:|:---:|---
varchar|varchar|text|text

### 项目初始化
```
npm install
```

### 后端部署和运行
```
cd service
npm install
node index.js
```

### 运行前端项目
```
npm run serve
```
-------

## 使用到的技术

### 前端：

- html
- css
- vue.js
- vue-cli
- vue-router
- mavonEditor

### 后端：

- node.js
- express
- mysql
--------



















