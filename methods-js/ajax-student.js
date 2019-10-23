// 创建 ajax引擎对象
var ajax;
if (window.XMLHttpRequest) {
  ajax = new XMLHttpRequest();  //火狐，谷歌
} else {
  ajax=new ActiveXObject("Msxml2.XMLHTTP");//ie
}
/*
  检查浏览器是否支持 XMLHttpRequest 对象。
  如果支持，则创建 XMLHttpRequest 对象。
  如果不支持，则创建 ActiveXObject
*/  
/* 
  1.Msxml2.XMLHTTP和Microsoft.XMLHTTP的区别？
  Msxml2.XMLHTTP是高版本,受msxml3.dll+支持，支持IE6.0+ ，支持较新的IE版本创建Msxml12.XMLHTTP对象
  Microsoft.XMLHTTP是低本,一般是msxml2.6以下版本使用，支持IE5.5+ （很多老外写的编程书籍都是用这个，比较严谨）
*/ 

// 声明ajax监听函数
ajax.onreadystatechange = function(){ 
    //3.3判断数据状态码(readyState值)，4表示响应数据成功接收
    if(ajax.readyState==4){
        //3.4判断响应状态码(Http状态码)，200表示请求成功
        if(ajax.status==200){ 
          /*
          *3.5获取响应数据 
          *普通文本为
          *var data=ajax.responseText; 
          *json格式数据(重点)
          *其实就是讲述数据按照json的格式拼接好的字符串，方便使用eval方法
          *将接受的字符串数据直接转换为js的对象
          */
          var data=ajax.responseText; 
          /*
          *xml数据 
          *var doc=ajax.responseXML; 
          *3.6处理响应数据(js的DOM操作) 
          */
          var showdiv=document.getElementById("showdiv"); 
          showdiv.innerHTML=data; 
    }else if(ajax.status==404){
      var showdiv=document.getElementById("showdiv");
      showdiv.innerHTML="404--请求资源未找到";
    }else if(ajax.status==500){ 
      var showdiv=document.getElementById("showdiv");
      showdiv.innerHTML="500--服务器繁忙，内部服务器错误"; } 
    }
};
//创建并发送请求
ajax.open(method,url,async);
ajax.send("请求数据");

var result=ajax.responseText;
//利用eval函数在客户端(jsp端)将返回的文本转化成js对象
//相对应去客户端【Servlet端的话 可以用gson(json一种格式)：
response.getWriter().write(new Gson().toJson(u));
//在ajax.responseText下面加上eval这句
eval("var obj="+result);//这里的obj可以换成任何都行 
//只要方便下面（处理响应内容的时候）取用就好


// method : 表示请求的方式，值为 get/post
// url : 表示请求地址， 一般为要请求的servlet的别名
// async : 表示 异步/同步请求，true为异步请求，false为同步请求。 默认为异步请求

/*
  1.如果请求方式是get方式，则请求数据需要拼接在url的后面， 以？隔开，键值对。并且send中要写null
    ajax.open("get","user?uname="+uname,true); 
    ajax.send(null);
  2.如果是post请求方式，则在send方法中书写请求数据即可。 且要声明数据的提交格式为键值对。
    ajax.open("post","user", true);
    //设置请求数据的格式
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded ");
    ajax.send("un="+uname);
  3.ajax状态码：readyState，值：0,1,2,3,4
    1-表示XMLHttpRrquest已建立，但还未初始化，尚未调用open方法
    2-open方法已调用，但未调用send方法，(已创建，未发生)
    3-请求已成功发送，正在接受数据
    4-数据接受成功
  4.http状态码：值：200,404,500
*/ 











// 创建 ajax引擎对象
var xmlhttp;
if (window.XMLHttpRequest){
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
};
// 声明ajax监听函数
xmlhttp.onreadystatechange=function() {
  // 判断数据状态码(**即ajax.readyState**)，4表示响应数据成功接收
  // 判断响应状态码(**即ajax.status**)，200表示请求成功
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
  }else if (ajax.status==404) {
    var showdiv=document.getElementById("showdiv");
    showdiv.innerHTML="404--请求资源未找到";
  }else if (ajax.status==500) { 
    var showdiv=document.getElementById("showdiv");
    showdiv.innerHTML="500--服务器繁忙"; 
  }
};
//创建并发送请求
ajax.open(method,url,async);
ajax.send("请求数据");