var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/joke.ico");
        document.title = ' ,,Ծ‸Ծ,, 别走嘛!!!';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = ' *(๑･∀･๑)* 欢迎回来!!!';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
