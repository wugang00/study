import axios from 'axios'
export function http(_this,config) {
    let params = {
        url : config.url,
        data : config.data || {},   //默认需要
        timeOut : config.timeOut || 7000,   //请求时间，默认7秒
        handlersTimeout : config.handlersTimeout || true,   //是否处理超时，默认处理
        headersType : config.headersType === 0 ? config.headersType : 1,//登录态 0表示不需要，可以设置默认需要
        tsStatus : config.tsStatus || null,
        // needLogin : config.needLogin || 1,  //-1不需要登录态
    };
    return new Promise( (resolve,reject)=>{
        // if(_this[params.loadingController] == false) {
        //     _this[params.loadingController] = true;
        // }

        axios({
            url : params.url,
            method : params.method || 'POST',
            data : _this.$qs.stringify(params.data),
            headers : _this.Base.initAjaxHeader(params.headersType, params.data),
            timeout: params.timeOut,
        }).then(res=>{
            //隐藏全局加载中组件
            if(_this[params.loadingController]) {
                _this[params.loadingController] = false;
            }
            //  console.log(res);
            // 请求成功
            if(res.status == 200) {
                let data = params.data;
                switch(String(data.status)){
                    case '0':
                    case params.tsStatus:
                    resolve(data.result);
                    break;

                    case '-9':   //未实名
                    case '-100':   //未实名
                    resolve(data);

                    case '10112':
                    _this.imgCode = '';
                    break;

                    default:
                    if( data.msg && data.msg.length > 0 ){
                        alert(data.msg);
                        // _this.$msg({content : data.msg})
                    }
                    break;
                }
            } else {
                console.log('res.status != 200 请求失败');
            }

        },err=>{
            // for(let k in err) {
            //     console.log(k);
            // }          
            //请求超时
            if(err.code == 'ECONNABORTED') {
                // 跳转超时页面
                //_this.$msg({ content : '请求超时' });
                if(params.handlersTimeout == true){
                    // 默认处理超时方式
                    setTimeout(_=>{
                        // _this.$router.push({
                        //     name: 'Timeout'
                        // });
                        location.href = 'http://www.baidu.com';
                    },700);
                } else if(typeof params.handlersTimeout == 'function'){
                    params.handlersTimeout();
                    // 如果默认处理超时方式是个函数，则执行这个函数
                }
                return;
            }
            console.log(err.response);
            if(err.response.status == 504){
                //_this.$msg({ content : '[504]请求服务器发送超时' });
                alert('[504]请求服务器发送超时');
            }
            if(err.response.status == 404){
                //请求地址不存在
                console.log('[error]请求地址不存在');
            }
        });
    });
}