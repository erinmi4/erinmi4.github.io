# erinmi4.github.io

这是一个已经从旧 GitHub Pages 发布仓库重建出来的个人博客源码项目。仓库里原本只剩下一批损坏的静态 HTML 产物，现在已经迁移为基于 Astro 的可维护博客工程。

## 这个项目是什么

这个项目的目标是把一个“只能看到发布结果、却无法继续维护”的旧博客，升级成一套真正适合长期写作和部署的源码仓库。

当前版本具备这些能力：

- 使用 Astro 构建静态站点
- 用 Markdown 管理博客文章和单页内容
- 自动生成首页、文章页、标签页、分类页和归档页
- 输出 RSS 和 sitemap
- 使用 GitHub Actions 自动部署到 GitHub Pages

## 目录说明

```text
src/
  components/        公共组件
  content/
    blog/            博客文章 Markdown
    pages/           about、projects 等单页 Markdown
  layouts/           页面布局
  lib/               内容与站点工具函数
  pages/             Astro 路由
  styles/            全局样式
public/              站点静态资源
.github/workflows/   GitHub Pages 部署工作流
```

## 如何使用

### 1. 安装依赖

```bash
npm install
```

### 2. 启动本地开发环境

```bash
npm run dev
```

启动后通常可以在 `http://localhost:4321` 访问。

### 3. 构建生产版本

```bash
npm run build
```

构建成功后会生成 `dist/` 目录。

### 4. 本地预览构建结果

```bash
npm run preview
```

### 5. 做类型与项目检查

```bash
npm run check
```

## 如何新增内容

### 新增博客文章

把 Markdown 文件放进 `src/content/blog/`。

示例 frontmatter：

```md
---
title: 文章标题
description: 文章摘要
pubDate: 2026-04-12
updatedDate: 2026-04-12
tags:
  - 标签A
  - 标签B
category: 技术分享
draft: false
heroImage: /images/example.jpg
---
```

### 新增单页

把 Markdown 文件放进 `src/content/pages/`，格式和文章一致。

## 如何部署

仓库已经包含 GitHub Actions 工作流：

- 推送到 `main` 分支时会自动安装依赖并构建
- 构建产物会自动发布到 GitHub Pages

如果 GitHub Pages 还没有配置好，需要在仓库设置中确认：

- `Settings`
- `Pages`
- `Build and deployment`
- `Source` 选择 `GitHub Actions`

## 内容来源说明

这次重建主要依据历史提交中还能恢复的内容，尤其是旧站可确认恢复的页面。已经丢失正文的历史页面没有继续正式发布，以免把不完整内容带回新站。

## 后续可继续做的事

- 补全个人信息与联系方式
- 整理项目页的真实项目内容
- 增加更多博客文章
- 视需要接入评论系统或统计服务
