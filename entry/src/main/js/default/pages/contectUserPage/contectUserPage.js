import http from '@ohos.net.http';
export default {
    data: {
        topHeight: "50px",
        target: {
            userId: 3,
            username: "用户名",
        },
        isBlackShare: false,
        isBlack: false
    },
    onInit(){
//        let httpRequest = http.createHttp();
//        httpRequest.request("http://xdw.vaiwan.com/api/userinfo?id=1", (err, data) => {
//            if (!err) {
////                this.user = JSON.parse(data.result); //预览器出错 SyntaxError: unexpected token: 'PC'
//                console.info('Result:' + data.result);
//                console.info('code:' + data.responseCode);
//                console.info('header:' + data.header);
//            } else {
//                console.info('error:' + err.data);
//            }
//        });

    },
    switchBlackShare(e){
        console.log(e.checked)
        if(e.checked){
            let blackHttpRequest = http.createHttp();
            blackHttpRequest.request("http://huangrui.vaiwan.com/unread/black/"+this.$app.$def.user.userId+"/"+this.target.userId+"6", (err, data) => {
                if (!err) {
                    let res = JSON.parse(data.result).body;
                    if(res==true){
                        console.debug("已屏蔽商品分享")
                    }
                }
            });
        }
    },
    switchBlack(e){
        console.log(e.checked)
        if(e.checked){
            let blackHttpRequest = http.createHttp();
            blackHttpRequest.request("http://huangrui.vaiwan.com/unread/black/"+this.$app.$def.user.userId+"/"+this.target.userId+"5", (err, data) => {
                if (!err) {
                    let res = JSON.parse(data.result).body;
                    if(res==true){
                        console.debug("已屏蔽全部消息")
                    }
                }
            });
        }
    },
    clear(){
        console.log("清空历史消息")
        let blackHttpRequest = http.createHttp();
        blackHttpRequest.request("http://huangrui.vaiwan.com/unread/delm/"+this.$app.$def.user.userId+"/"+this.target.userId, (err, data) => {
            if (!err) {
                let res = JSON.parse(data.result).body;
                if(res==true){
                    console.debug("已清空全部消息")
                }
            }
        });

    }
}
