window.onload=function(){
    var Lis = document.getElementsByTagName("li");
    for(var i = 0; i < Lis.length; i++) {
        Lis[i].onmouseover  = function () {
            this.className="lihover";
        };
        Lis[i].onmouseout = function () {
            this.className="";
        }
    }
}