/*
 * 	method :请求方式，值为get或者post
	url:请求地址
	data:没有值的话需要传入null
		 有值的话得传入字符串，格式为 例"name='zhangsan'&pwd=123"
	deal200:
		接收一个有一个形参的js函数对象，形参接收的实参是ajax引擎对象。用于处理网页正常情况
	deal404:同上，但是用于处理网页资源找不到的情况
	deal500:同上，但是用于服务器繁忙的情况
 */
function myAjax(method,url,data,deal200,deal404,deal500,async){		
    var ajax=getAjax();
        //复写onreadystatechange函数//（死代码）
        
        ajax.onreadystatechange=function(){
            //var ajax=getAjax();//当时学习的时候出错 调试半天 导致ajaxData.jsp里的GetData2()的alert(rs)一直出不来
                    //是因为上面 已经创建过了 在创建 下面使用ajax 系统不知道是哪个ajax
            //判断Ajax状态吗
            if(ajax.readyState==4){
                //判断响应状态吗
                if(ajax.status==200){
                    if(deal200){
                        deal200(ajax);
                    }
                }else if(ajax.status==404){
                    if(deal404){
                        deal404(ajax);
                    }	
                }else if(ajax.status==500){
                    if(deal500){
                        deal500(ajax);
                    }
                }
            }
        }
            
    //发送请求
    if("get"==method){
        ajax.open("get",url+(data==null?"":"?"+data),//该方法的第二个参数是url-mapping（即url地址的别名）
                async);//true代表异步 （默认为true）
        ajax.send(null);
    }else if("post"==method){
    //以上为get传参 若为Post方式传参
        ajax.open("post",url,async);
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(data);  //send里的是传参来的data
    }

    //alert("哈哈");//测试异步
}

function getAjax(){
    //创建ajax引擎对象		//（死代码）
    var ajax;
    if(window.XMLHttpRequest){//火狐
        ajax=new XMLHttpRequest();
    }else if(window.ActiveXObject){//ie
        ajax=new ActiveXObject("Msxml2.XMLHTTP");
    }
    return ajax;
}



function getData2(){
    var name=document.getElementById("uname").value;
    var data="name="+name;
    myAjax("get","user",data,function(a){
        //获取响应数据
        var rs=a.responseText;
        //处理响应数据
       alert(rs);
    });
}