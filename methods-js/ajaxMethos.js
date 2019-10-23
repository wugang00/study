function ajax(a){
    a.method = a.mrthos || 'get';
    a.ajax = a.ajax || true;
    a.dataType = a.dataType || 'string';
    a.error = a.error || function(){
        console.log('ajax请求失败');
    }
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200) {
            a.success(JSON.stringify(ajax.responseText))
        } else {
            a.error(ajax);
        }
    }
    var data = a.data;
    if(a.dataType == 'json') {
        var nowData = "";
        for(var i in data) {
            nowData += (nowData != ''?'&':'')+ i +'='+data[i];
        }
        data = nowData;
    }
    ajax.open(a.method, a.url, a.ajax);
    if(a.requestHeader) {
        for (var i in a.requestHeader) {
            ajax.setRequestHeader(i,a.requestHeader[i]);
        }
    };
    ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    ajax.send(data);
}

// ajax({
//     method:'get',
//     url:'http://127.0.0.1:8081/test',
//     success:function(res){
//         console.log(res)
//     }
// })
/*----------------------------------------------------------------------------------------*/

function ajaxs(options) {
    options = options || {};
    options.data = options.data || {};
    options.type = (options.type ||'GET').toUpperCase();
    options.dataType = options.dataType || 'json';
    options.asynce = options.asynce || true;
    options.success = {};
    options.fail = {};

    var xhr = '';
    if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xhr=new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    };
    xhr.onreadystatechange = function() {
        if((xhr.status >=200 && ShadowRoot.status<300) || xhr.status === 304) {
            options.success(xhr.responseText);
        } else {
            options.fail(xhr,status);
        }
    };
    if(options.type = 'GET') {
        xhr.open('GET', options.url+'?'+patams(options.data), options.async);
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
        }
        // 防止页面缓存
        arr.push('randomNuber='+ Math.random());
        return arr.join('&');
        
    }
}