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
        let isblackShareHttpRequest = http.createHttp();
        isblackShareHttpRequest.request("http://huangrui.vaiwan.com/unread/isblack/"+this.$app.$def.user.userId+"/"+this.target.userId+"/6", (err, data) => {
            if (!err) {
                let res = data.result;
                if(res=="true"){
                    console.debug("屏蔽分享")
                    this.isBlackShare = true
                }
            }
        });
        let isblackHttpRequest = http.createHttp();
        isblackHttpRequest.request("http://huangrui.vaiwan.com/unread/isblack/"+this.$app.$def.user.userId+"/"+this.target.userId+"/5", (err, data) => {
            if (!err) {
                let res = data.result;
                if(res=="true"){
                    console.debug("屏蔽全部")
                    this.isBlack = true
                }
            }
        });

    },
    switchBlackShare(e){
        console.log(e.checked)
        if(e.checked){
            let blackHttpRequest = http.createHttp();
            blackHttpRequest.request("http://huangrui.vaiwan.com/unread/black/"+this.$app.$def.user.userId+"/"+this.target.userId+"/6", (err, data) => {
                if (!err) {
                    let res = data.result;
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

            blackHttpRequest.request("http://huangrui.vaiwan.com/unread/black/"+this.$app.$def.user.userId+"/"+this.target.userId+"/5", (err, data) => {
                if (!err) {
                    let res = data.result;
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
        console.debug("http://huangrui.vaiwan.com/unread/dela/"+this.$app.$def.globalData.loginUser.userId+"/"+this.target.userId)
        blackHttpRequest.request("http://huangrui.vaiwan.com/unread/dela/"+this.$app.$def.globalData.loginUser.userId+"/"+this.target.userId, (err, data) => {
            if (!err) {
                let res = data.result;
                if(res=="true"){
                    console.debug("已清空全部消息")
                }
            }
        });

    }
}
