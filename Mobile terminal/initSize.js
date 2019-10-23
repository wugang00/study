function a(){
    //获取客户端宽度
    var b = document.documentElement.clientWidth;
    b = b > 750 ? 750 : b;
    var c = b/750*100; //42
    document.getElementsByTagName("html")[0].style.fontSize=c+"px"  
}
a();
window.onresize=a;