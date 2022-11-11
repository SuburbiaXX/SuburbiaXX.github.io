---
title: Hexo使用文档
tags:
  - Hexo
categories: Hexo
date: 2022-09-4 00:00:00
swiper_index: 3 #置顶轮播图顺序，非负整数，数字越大越靠前
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)

### Create a new draft

```bash
$ hexo new draft xxx	#创建
$ hexo server --draft	#本地预览
$ hexo publish xxx	#发布
```

### Details from Official

#### Page Front-matter

​	写在Markdown页面的开头

```markdown
---
title:
date:
updated:
type:
comments:
description:
keywords:
top_img:
mathjax:
katex:
aside:
aplayer:
highlight_shrink:
---
```

|       写法       |                             解释                             |
| :--------------: | :----------------------------------------------------------: |
|      title       |                       【必需】页面标题                       |
|       date       |                     【必需】页面创建日期                     |
|       type       |         【必需】标签、分类和友情链接三个页面需要配置         |
|     updated      |                     【可选】页面更新日期                     |
|   description    |                       【可选】页面描述                       |
|     keywords     |                      【可选】页面关键字                      |
|     comments     |             【可选】显示页面评论模块(默认 true)              |
|     top_img      |                     【可选】页面顶部图片                     |
|     mathjax      | 【可选】显示mathjax(当设置mathjax的per_page: false时，才需要配置，默认 false) |
|      katex       | 【可选】显示katex(当设置katex的per_page: false时，才需要配置，默认 false) |
|      aside       |                【可选】显示侧边栏 (默认 true)                |
|     aplayer      | 【可选】在需要的页面加载aplayer的js和css,请参考文章下面的 `音乐` 配置 |
| highlight_shrink | 【可选】配置代码框是否展开(true/false)(默认为设置中highlight_shrink的配置 |



##### Post Front-matter

​	写在Markdown文章的开头

```markdown
---
title:
date:
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---
```

|         写法          |                             解释                             |
| :-------------------: | :----------------------------------------------------------: |
|         title         |                       【必需】文章标题                       |
|         date          |                     【必需】文章创建日期                     |
|        updated        |                     【可选】文章更新日期                     |
|         tags          |                       【可选】文章标签                       |
|      categories       |                       【可选】文章分类                       |
|       keywords        |                      【可选】文章关键字                      |
|      description      |                       【可选】文章描述                       |
|        top_img        |                     【可选】文章顶部图片                     |
|         cover         | 【可选】文章缩略图(如果没有设置top_img,文章页顶部将显示缩略图，可设为false/图片地址/留空) |
|       comments        |             【可选】显示文章评论模块(默认 true)              |
|          toc          |       【可选】显示文章TOC(默认为设置中toc的enable配置)       |
|      toc_number       |     【可选】显示toc_number(默认为设置中toc的number配置)      |
|   toc_style_simple    |                  【可选】显示 toc 简洁模式                   |
|       copyright       | 【可选】显示文章版权模块(默认为设置中post_copyright的enable配置) |
|   copyright_author    |                【可选】文章版权模块的文章作者                |
| copyright_author_href |              【可选】文章版权模块的文章作者链接              |
|     copyright_url     |              【可选】文章版权模块的文章连结链接              |
|    copyright_info     |              【可选】文章版权模块的版权声明文字              |
|        mathjax        | 【可选】显示mathjax(当设置mathjax的per_page: false时，才需要配置，默认 false) |
|         katex         | 【可选】显示katex(当设置katex的per_page: false时，才需要配置，默认 false) |
|        aplayer        | 【可选】在需要的页面加载aplayer的js和css,请参考文章下面的 `音乐` 配置 |
|   highlight_shrink    | 【可选】配置代码框是否展开(true/false)(默认为设置中highlight_shrink的配置) |
|         aside         |                【可选】显示侧边栏 (默认 true)                |