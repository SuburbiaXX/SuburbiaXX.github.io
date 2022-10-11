---
title: 多端实现Hexo文章发布
tags:
  - Hexo
categories: Hexo
description: 实现在win和mac上都可以写文章
cover: https://pic1.imgdb.cn/item/6344c1b816f2c2beb18101d2.jpg
top_img: https://pic1.imgdb.cn/item/6344c1b816f2c2beb18101d2.jpg
date: 2022-10-09 00:00:00
---




​	起初只在自己的windows上部署了hexo，但是发现背着mac去外面玩耍(bushi)的时候，碰到一些想记录到博客的东西，只能先在mac上写好然后回宿舍传到win上再发布，巨麻烦，故查阅网上一大堆资料，实现在mac上也能直接发布。

## 大体思路

​	同步两个端代码的思路和Github推拉源码思路差不多，发布的时候只需要保证当前在使用的端的文件最新就行。

​	需要在仓库新建一个分支，让后把它重新作为默认分支。原来部署hexo在github上的分支是master(好像现在很多变成了main)，这时候应该是有且只有一个分支，那么就再新建一个hexo分支(名字随便)，并且设置其为默认分支。

-   这里需要解释一下，这个hexo分支就是我们以后存放博客源文件的分支，只需要在其上更新内容就行，原来的master分支会因为 `hexo d -g` 指令编译hexo后自动更新。

## 操作

​	接下来讲讲具体操作。

​	首先，在win上的本地博客根目录里面执行代码。

```bash
# 执行代码前，需要删除根目录下和主题目录(theme)下隐藏的 `.git` 文件夹
# 执行代码前，需要删除根目录下和主题目录(theme)下隐藏的 `.git` 文件夹
# 执行代码前，需要删除根目录下和主题目录(theme)下隐藏的 `.git` 文件夹
git init	# 初始化
git remote add origin https://github.com/用户名/仓库名.git	# 添加仓库
git checkout -b hexo	# 新建一个分支hexo并且切换到该分支
git add .	# 添加所有本地文件到 git
git commit -m "blog源文件"
git push origin hexo	# 文件推到hexo分支
```

​	执行完后，此时博客的源文件应该同步到github博客仓库的hexo分支上了。

​	(这里记得在仓库把新的hexo分支作为默认分支)



​	接着在mac上选个文件夹先把仓库克隆下来。(需要克隆的是hexo分支，所以上面要设置成默认分支)

```bash
git clone xxx(仓库的地址)
```

​	在这个选好的文件夹下重新安装hexo，因为 `.gitignore` 中过滤了 `node_modules\` 所以需要重新部署hexo获取其必要组件。

```bash
# 没安装homebrew的话执行下面代码安装
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
# 安装成功会有提示

brew install node	# mac上如果安装了homebrew直接安装node
npm -v	# 可以通过此代码查看当前npm是否安装成功

# 使用npm安装组件
npm install -g hexo
npm install
npm install hexo-deployer-git --save
```

​	最后在mac上做一些修改，调整版本冲突后的合并策略，执行下面代码

```bash
# 添加源文件
git add .
# git 提交
git commit -m ""
# 先拉原来 GitHub 分支上的源文件到本地，进行合并
# 分支名后面的"--allow-unrelated-histories"是为了弹出"fatal: refusing to merge unrelated histories."的错误
git pull origin hexo --allow-unrelated-histories
# 比较解决前后版本冲突后，push 源文件到 GitHub 的分支
git push origin hexo
```

​	此时，依次执行 `hexo clean` / `hexo g` / `hexo d -g` 更新博客，无报错就是成功了





尽量以后要更新博客前先 `git pull` 一下，然后在 `hexo d -g` 之前，用 `git push` 把修改的推送到仓库

