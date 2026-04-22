# erinmi4.github.io

## 快速新增文章

在仓库根目录运行：

```bash
npm run new:post -- "修考第6天"
```

说明：

- 不要写成 `npm new post--修考第6天`
- 文章标题必须放在 `--` 后面，建议始终用引号包住
- 命令会创建 `src/content/blog/<文章标题>.md`
- 创建后需要补全 `description`、`tags`、`category`，再运行 `npm run check` 或 `npm run build`

这是一个基于 Astro 重建的个人博客源码仓库。

这个仓库原本只剩下一份损坏的 GitHub Pages 静态产物，现在已经迁移成一套可以长期维护的博客工程：文章用 Markdown 编写，页面自动生成，推送后通过 GitHub Actions 发布到 GitHub Pages。

## 这个项目现在能做什么

- 使用 Astro 构建静态博客
- 使用 Markdown 管理博客文章和单页
- 自动生成首页、文章页、标签页、分类页、归档页
- 支持代码高亮
- 支持数学公式渲染
- 自动生成 RSS 和 sitemap
- 推送到 `main` 后自动部署到 GitHub Pages

## 项目结构

```text
src/
  components/        公共组件
  content/
    blog/            博客文章 Markdown
    pages/           关于、项目等单页 Markdown
  layouts/           页面布局
  lib/               工具函数
  pages/             Astro 路由
  styles/            全局样式
public/              静态资源
.github/workflows/   GitHub Pages 自动部署工作流
```

## 第一次使用

### 1. 安装依赖

```bash
npm install
```

### 2. 本地启动开发环境

```bash
npm run dev
```

启动后通常访问：

```text
http://localhost:4321
```

### 3. 本地检查

```bash
npm run check
```

### 4. 本地构建

```bash
npm run build
```

构建完成后，生成结果在 `dist/`。

### 5. 本地预览构建结果

```bash
npm run preview
```

## 日常写文章流程

每次写文章，推荐按下面的顺序来：

1. 在 `src/content/blog/` 新建一篇 Markdown 文件
2. 填写 frontmatter
3. 写正文
4. 如果有图片，把图片放进 `public/` 下合适的目录
5. 本地运行 `npm run dev` 预览
6. 确认无误后运行 `npm run check`
7. 提交并推送到 GitHub

常用命令：

```bash
npm run dev
npm run check
npm run build
git add .
git commit -m "Add new post"
git push origin main
```

## 如何新增博客文章

把文章文件放进：

```text
src/content/blog/
```

例如：

```text
src/content/blog/我的新文章.md
```

推荐 frontmatter 模板：

```md
---
title: 我的新文章
description: 这篇文章的摘要
pubDate: 2026-04-12
updatedDate: 2026-04-12
tags:
  - 标签A
  - 标签B
category: 技术分享
draft: false
heroImage: /images/posts/my-new-post/cover.png
---
```

字段说明：

- `title`: 文章标题
- `description`: 文章摘要，会用于首页卡片和 SEO
- `pubDate`: 发布时间
- `updatedDate`: 更新时间，可选但推荐保留
- `tags`: 标签数组
- `category`: 分类
- `draft`: 是否草稿，`true` 时不会正式出现在站点中
- `heroImage`: 文章头图，可选

## 如何新增单页

单页放在：

```text
src/content/pages/
```

例如：

```text
src/content/pages/about.md
src/content/pages/projects.md
```

frontmatter 结构和文章基本一致。

## 如何写数学公式

当前博客已经支持数学公式。

### 行内公式

```md
$E = mc^2$
```

### 块级公式

```md
$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$
```

## 如何上传图片

图片推荐放在 `public/` 目录下，因为这里的文件会被直接原样发布。

### 推荐目录结构

```text
public/
  images/
    posts/
      article-a/
        cover.png
        figure-1.png
      article-b/
        demo.jpg
```

例如你写一篇文章《毕设总结》，可以这样放：

```text
public/images/posts/毕设总结/cover.png
public/images/posts/毕设总结/figure-1.png
```

### 在 Markdown 中引用图片

如果图片在：

```text
public/images/posts/毕设总结/cover.png
```

那么在文章里这样写：

```md
![封面图](/images/posts/毕设总结/cover.png)
```

再比如：

```md
![系统架构图](/images/posts/毕设总结/figure-1.png)
```

### `heroImage` 如何使用

如果你想让文章卡片或后续扩展用到封面图，可以在 frontmatter 里写：

```md
heroImage: /images/posts/毕设总结/cover.png
```

### 图片使用建议

- 文件名尽量清晰，避免全部叫 `1.png`、`2.png`
- 每篇文章一个独立文件夹，后期更容易维护
- 图片太大时先压缩再上传，避免页面太慢
- 尽量用 `.png`、`.jpg`、`.webp`

## 发布到 GitHub Pages

这个项目使用 GitHub Actions 自动部署。

### 正常发布流程

```bash
git add .
git commit -m "Add new post"
git push origin main
```

推送后：

- GitHub Actions 会自动执行构建
- 构建产物会自动发布到 GitHub Pages

### 必须确认的 GitHub 设置

打开仓库设置：

```text
Settings -> Pages -> Build and deployment -> Source
```

这里必须选择：

```text
GitHub Actions
```

如果这里还是：

- `Deploy from a branch`
- `main /(root)`

那线上就可能不会显示博客，而是显示仓库里的 `README.md`。

## 常见问题

### 1. 为什么打开网站显示 README 而不是博客

说明 GitHub Pages 还在走“从分支直接发布”的模式，而不是走 GitHub Actions。

去 GitHub 仓库里检查：

```text
Settings -> Pages -> Source -> GitHub Actions
```

### 2. 为什么本地写了文章但线上没更新

先确认这几件事：

- 是否已经 `git add .`
- 是否已经 `git commit`
- 是否已经 `git push origin main`
- GitHub Actions 是否成功运行

### 3. 为什么文章没显示出来

检查：

- 文件是否放在 `src/content/blog/`
- `draft` 是否写成了 `true`
- frontmatter 是否缺字段
- 文件名或 slug 是否和别的文章重复

### 4. 为什么图片不显示

检查：

- 图片是否放在 `public/` 目录下
- Markdown 引用路径是否以 `/` 开头
- 文件名是否写错

错误示例：

```md
![图片](images/demo.png)
```

推荐写法：

```md
![图片](/images/demo.png)
```

## 当前内容来源说明

这次博客重建主要依据旧站 Git 历史里还能恢复的内容。正文已经丢失的旧页面没有重新上线，以免把不完整内容继续带回新站。

## 后续可以继续完善的方向

- 补全个人信息与联系方式
- 完善项目页的真实项目内容
- 给文章增加封面图展示
- 加搜索功能
- 接入评论系统或统计服务
