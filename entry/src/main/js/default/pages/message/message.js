import router from '@system.router';
import http from '@ohos.net.http';

export default {
    data: {
        topHeight: "100px",
//        msg: '',
        messages: [],//TODO 添加接口改成动态变量
    },
    onInit(){
//        this.msg = this.$app.$def.currentMsg;
        if(this.$app.$def.globalData.loginUser.userId==1){
            this.messages.push(
                {userId:2, avatar:"/common/icons/user.png", username: "",msgCount:0},
            )
        }else{
            this.messages.push(
                {userId:1, avatar:"/common/icons/user.png", username: "",msgCount:0},
            );
        }
            let unreadHttpRequest = http.createHttp();
            unreadHttpRequest.request("http://huangrui.vaiwan.com/unread/"+this.messages[0].userId+"/"+this.$app.$def.globalData.loginUser.userId , (err, data) => {
                if (!err) {
                  let res = data.result;
                  this.messages[0].msgCount=res;
                  console.debug("未读消息数："+this.messages[0].msgCount);
                }
            });
//            获取用户头像
            let userHttpRequest = http.createHttp();
            userHttpRequest.request("http://huangrui.vaiwan.com/users/id/"+this.messages[0].userId, (err, data) => {
                if (!err) {
                    let res = JSON.parse(data.result).body;
                    this.messages[0].avatar = res.headPhoto;
                    this.messages[0].username = res.userName;
                    console.debug("头像："+this.messages[0].avatar);
                }
            });
    },
    search(event){
        console.log(event.text)
    },
    clear(){
        console.log("清除未读")
    },
    goChat(sendTo){
        router.push({
            uri: "pages/chat/chat",
            params: {
                sendTo: {
                    userId: sendTo,
                    username: this.messages[0].username,
                    avatar: "/common/icons/user.png"
                },
            }
        })
    }
}
