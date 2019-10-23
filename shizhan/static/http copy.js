import axios from 'axios';
export function http(_this,config) {
    let params = {
        url : config.url,  //接口地址
        data : config.data || {},  //body data
        headersType : config.headersType || 1,  //0不需要登录态 默认需要
        timeout : config.timeout || 7000,  //请求超时时间，默认7秒
        handlerTimeout : config.handlerTimeout || true,  //是否处理超时 默认处理
        loadingController : config.loadingController || 'isShowLoading',  //控制显示全局加载中的组件显示的字段，默认 isShowLoading
        showTips : config.showTips || 'yes',  //是否显示异常提示语
        tsStatus : config.tsStatus || null,
        // needLogin : config.needLogin || 1,  //-1不需要登录态
    };
    return new Promise((resolve,reject)=>{
        if(_this[params.loadingController] == false) {
            _this[params.loadingController] = true;
        }
        axios({
            url : params.url,
            method : params.method || 'POST',
            data : _this.$qs.stringify(params.data),
            headers: _this.Base.initAjaxHeader(params.headersType,params.data),
            timeout : params.timeout
        }).then(res=>{
            //隐藏全局加载中组件
            if(_this[params.loadingController]) {
                _this[params.loadingController] = false;
            }
            
            //请求成功
            if(res.status == 200) {
                let data = res.data;
                switch(String(data.status)) {
                    case '0':
                    case params.tsStatus:
                    resolve(data.result);
                    break;

                    case '-9':  //未实名
                    case '-100':  //登录态失效
                    resolve(data);
                    break;
                    
                    case '10112':
                    _this.imgCode = '';
                    break;

                    default:
                    if(data.msg && data.msg.length > 0) {
                        alert(data.msg);
                        //_this.$msg({ content : data.msg });
                    }                    
                    break;
                }
                
            } else {
                console.log('!=200 请求失败');
            } 
        },err=>{
            // for(let k in err) {
            //     console.log(k);
            // }
            //隐藏全局加载中组件
            if(_this[params.loadingController]) _this[params.loadingController] = false;            
            //请求超时
            if(err.code == 'ECONNABORTED') {
                //跳转超时页面                
                if(params.handlerTimeout == true) {
                    //默认处理超时方式
                    console.log('请求超时，默认处理');
                    //_this.$msg({ content : '请求超时' });
                    alert('请求超时');
                    setTimeout(_=>{
                        _this.$router.push({
                            name : 'Timeout'
                        });   
                    },700);
                    
                } else if(typeof params.handlerTimeout == 'function') {
                    //如果超时处理字段是个函数，则执行
                    params.handlerTimeout();
                }
                return;
            }
            if(err.response.status == 504) {
                //_this.$msg({ content : '[504]请求服务器发送超时' });
                alert('[504]请求服务器发送超时');
            }
            if(err.response.status == 404) {
                //请求地址不存在
                console.log('[error]请求地址不存在');
            }
        });

    });
}