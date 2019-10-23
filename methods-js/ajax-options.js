function ajaxs(options) {
    options = options || {};
    options.data = options.data || {};
    options.type = (options.type ||'GET').toUpperCase();
    options.dataType = options.dataType || 'json';
    options.asynce = options.asynce || true;

    options.success = {};
    options.fail = {};

    // 1创建对象
    var xhr = '';
    if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xhr=new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    };

    // 3接收
    xhr.onreadystatechange = function() {
        if((xhr.status >=200 && ShadowRoot.status<300) || xhr.status === 304) {
            options.success(xhr.responseText);
        } else {
            options.fail(xhr,status);
        }
    };

    // 2连接和发送
    if(options.type = 'GET') {
        xhr.open('GET', options.url+'?'+params(options.data), options.async);
        // 设置超时
        xhr.timeout = 20000;
        xhr.ontimeout = function() {
            console.log('时间超时');
        };
        xhr.send(null);
    } else {
        xhr.open('POST',option.url, options.async);
        xhr.timeout = 20000;
        xhr.ontimeout = function() {
            console.log('时间超时');
        };
        xhr.send(params(options.data));
    }
    // 处理get请求的参数，对其编码
    function params(data) {
        var arr = [];
        for (var param in data) {
            arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(data[param]));
        };
        // 防止页面缓存
        arr.push('randomNuber='+ Math.random());//?
        return arr.join('&'); 
    };
};






















/*js原生Ajax
    ajax：一种请求数据的方式，不需要刷新整个页面；
    ajax的技术核心是 XMLHttpRequest 对象；
    ajax 请求过程：
        创建 XMLHttpRequest 对象、连接服务器、发送请求、接收响应数据
*/
function ajax(options) {
    options = options || {};    //请求地址
    options.type = (options.type ||'GET').toUpperCase();    // 请求方式
    options.data = options.data || {};  //请求参数
    options.dataType = options.dataType || 'json';  //'string'
    options.async = options.async || true;
    /*-------------------------------------------------*/
    options.success = {};   //成功后执行
    options.fail = {};      //失败后执行
    options.error = options.error || function() {
        console.log('ajax请求失败');
    };

    var params = formatParams(options.data);

    // 1创建对象
    var xmlhttp;
    if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    };

    // 3接收
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState==4 && xmlhttp.status==200) {
            options.success(xmlhttp.responseText);
        } else {
            options.fail && options.fail(status)
        };
    };

    // 2连接和发送
    if(options.type == 'GET') {
        xmlhttp.open('GET', options.url+'?'+params, options.async);
        xmlhttp.send(null);
    } else if(options.type == 'POST') {
        xmlhttp.open('POST',options.url, options.async);
        xmlhttp.send(params);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    };
    
    // 格式化参数
    function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
        };
        arr.push(("v=" + Math.random()).replace(".",""));//?
        return arr.join("&");
    };
};



/*
ajax({
    url: "./TestXHR.aspx",              //请求地址
    type: "POST",                       //请求方式
    data: { name: "super", age: 20 },        //请求参数
    dataType: "json",
    success: function (response, xml) {
        // 此处放成功后执行的代码
    },
    fail: function (status) {
        // 此处放失败后执行的代码
    }
})
*/