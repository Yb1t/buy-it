import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';
export default {
    data: {
        topHeight: "50px",
        target: {
            userId: null,
            username: "用户名",
            avatar: ""
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
//                    this.isBlackShare = true
                }
            }
        });
        let isblackHttpRequest = http.createHttp();
        isblackHttpRequest.request("http://huangrui.vaiwan.com/unread/isblack/"+this.$app.$def.user.userId+"/"+this.target.userId+"/5", (err, data) => {
            if (!err) {
                let res = data.result;
                if(res=="true"){
                    console.debug("屏蔽全部")
//                    this.isBlack = true
                }
            }
        });

    },
    switchBlackShare(e){
        console.log(e.checked)
        var pram = ""
        if(e.checked){
            pram = "black"
        }else{
            pram = "delblack"
        }
        let blackHttpRequest = http.createHttp();
        blackHttpRequest.request("http://huangrui.vaiwan.com/unread/"+pram+"/"+this.$app.$def.user.userId+"/"+this.target.userId+"/6", (err, data) => {
            if (!err) {
                let res = data.result;
                if(res==true){
                    console.debug("屏蔽/取消屏蔽商品分享成功")
                }
            }
        });
    },
    switchBlack(e){
        console.log(e.checked)
        var pram = ""
        if(e.checked){
            pram = "black"
        }else{
            pram = "delblack"
        }
        let blackHttpRequest = http.createHttp();
        blackHttpRequest.request("http://huangrui.vaiwan.com/unread/"+pram+"/"+this.$app.$def.user.userId+"/"+this.target.userId+"/5", (err, data) => {
            if (!err) {
                let res = data.result;
                if(res==true){
                    console.debug("屏蔽/取消屏蔽全部消息成功")
                }
            }
        });
    },
    clear(){
        let blackHttpRequest = http.createHttp();
        blackHttpRequest.request("http://huangrui.vaiwan.com/unread/dela/"+this.$app.$def.globalData.loginUser.userId+"/"+this.target.userId, (err, data) => {
            if (!err) {
                let res = data.result;
                if(res=="true"){
                    prompt.showToast({message:"已清空全部消息"})
                }
            }
        });
    }
}
