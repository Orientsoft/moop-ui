# 财大金融学院

## 使用

- 启动调试服务: `npm start`
- 构建 dist: `npm run build`

## 部署
0、先运行`npm run dll`，生成`manifests`目录

1、运行`npm run build`，生成`build`目录

2、用`nginx`或`caddy`代理`build`目录

3、配置服务器代理`/api/v1`路径到后端地址

## 目录结构

- react-router @4.x 默认采用 hashHistory 的单页应用
- 入口文件: `src/index.js`
- 导航配置: `src/menuConfig.js`
- 路由配置: `src/routerConfig.js`
- 路由入口: `src/router.jsx`
- 布局文件: `src/layouts`
- 通用组件: `src/components`
- 页面文件: `src/pages`