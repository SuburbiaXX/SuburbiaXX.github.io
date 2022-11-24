---
title: Github图床搭建
tags:
  - 教程
categories: 教程
description: 通过Github+PicGo实现自用图床的搭建，并且用jsdelivr提供的免费CDN加速访问
cover: https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/BuildImageBed/article_cover.jpg
top_img: https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/BuildImageBed/article_cover.jpg
swiper_index: 5	#置顶轮播图顺序，非负整数，数字越大越靠前
date: 2022-11-12 00:00:00
---


本来用着 [聚合图床](https://www.superbed.cn) ，但是有时候会崩掉，整害怕了，遂即连夜改成用 `Github + PicGO` 的方式搭建自己的图床，参照了网上些许教程，记录一下搭建过程，也相当于一个教程

# Github

前提是有一个 `github账号` (这个相信大家都有)

## 新建一个仓库

填写仓库名称，描述可选，一定一定要设为公开仓库

![](https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/BuildImageBed/1.1-1.png)

在创建界面如下选择，仓库名可以个性化

![](https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/BuildImageBed/1.1-2.png)



## 生成token

点右上角头像，选择 `Settings`，进入后找到 `Developer settings`，然后选择新建一个 `token`

<img src="https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/BuildImageBed/1.2-1.png" style="zoom: 30%;" />

生成一个新的token

![](https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/BuildImageBed/1.2-2.png)

注意这里填写无期限的时候会有警告，(无视风险继续安装/狗头)

![](https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/BuildImageBed/1.2-3.png)

获得一个token，这个token一定一定要记住，因为只会出现一次

![](https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/BuildImageBed/1.2-4.png)



# PicGo

## 下载PicGo

直接去往 `PicGo` 的github仓库下载安装即可	====>	[PicGo](https://github.com/Molunerfinn/PicGo)



## 配置PicGo

1. 仓库名的格式是：[github用户名]/[1.1步骤中新建的仓库名称]

2. 分支：最近Github中新建仓库的默认分支是main，`注意这里到底是master分支还是main分支`

3. Token：就填写1.2步骤中生成的token

4. 指定存储路径：如果填入 `src/` 上传的图片就会在仓库中的 `src文件夹下`，若没有这个文件夹会自动创建，可以有效分类

5. 设置自定义域名：
	- github原本的自定义域名应该是：https://raw.githubusercontent.com/[username\]/[仓库名]]
	- 但是因为某种不可抗力，这样访问图片很慢，所以使用了 `jsdelivr` 作为 `cdn` 加速。
	- 故此处只需要填写：https://cdn.jsdelivr.net/gh/[github用户名]/[1.1步骤中新建的仓库名称]@main
	- 通过 `jsdelivr` 提供的免费CDN加速访问
	- 注意，此处的分支一定要填写@main，否则默认使用master分支。而现在github创建的默认分支名为main，如果不指定，则会出现图片不能上传的情况。

![](https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/BuildImageBed/2.2-1.png)



最后设为默认图床，然后点击确定，至此就可以快乐上传图片了




> 以下为 2022.11.21更新

# jsdelivr 缓存刷新方法

​	图床有时候因为个人手欠，上传的图片会出错，然后重新上传，结果图片不更新的情况，这是 `jsdelivr` 的缓存原因，导致不会及时刷新。

​	若要手动刷新，只需要把原来给的链接 `https://cdn.jsdelivr.net/gh/*******` 改成 `https://purge.jsdelivr.net/gh/*******` ，并且用浏览器访问一次链接即可手动刷新。
