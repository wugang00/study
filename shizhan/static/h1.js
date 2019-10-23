import axios from 'axios'
export function http(_this,config) {
    let params = {
        url : config.url,
        data : config.data || {},   //默认需要
        timeOut : config.timeOut || 7000,   //请求时间，默认7秒
        handlesTimeout : config.handlesTimeout || true,     //是否处理超时，默认处理
        headeersType : config.headeersType === 0 ? config.headeersType :1,  //登录态 0不是不需要
        tsStatus : config.tsStatus || null,
        // needLogin : config.neddLogin || 1,  //-1不需要登录态
    };
    return new Promise( (resolve,reject)=>{
        // if(_this[params.loadingController] == false) {
        //     _this[params.loadingController] = true;
        // }

        axios({
            url : params.url,
            method : params.method || 'POST',
            data : _this.$qs.stringfy(params.data),
            headers : _this.Base.initAjaxheader(params.headeersType, params.data),
            timeout : params.timeOut,
        }).then(res=>{
            if(_this[params.loadingController]) {
                _this[params.loadingController] = false;
            }
            // console.log(res);
            if(res.status == 200) {
                let data = params.data;
                switch(String(data.status)){
                    case '0':
                    case params.tsStatus:
                        resolve(data.result);
                    break;

                    case '-9':
                    case '-100':
                        resolve(dara);

                    case '10112':
                        _this
                }
            }
        },err=>{

        });
    })
}