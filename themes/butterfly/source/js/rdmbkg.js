//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
  "url(https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/src/index_img2.jpg)",
  "url(https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/src/index_img3.jpg)",
  "url(https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/src/index_img4.jpg)",
  "url(https://cdn.jsdelivr.net/gh/SuburbiaXX/ImageBed@main/src/index_img.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex = Math.floor(Math.random() * backimg.length);
//重设背景图片
if(document.getElementsByClassName("full_page")[0]!=null){
  document.getElementsByClassName("full_page")[0].style.backgroundImage=backimg[bgindex];
  document.getElementById("footer").style.backgroundImage=backimg[bgindex];
}