import router from '@system.router';
import http from '@ohos.net.http';

export default {
    data: {
        topHeight: "100px",
        messages: [
            {userId:1, avatar:"/common/icons/user.png", username: "阿猫", msg:"",msgCount:"1",},
            {userId:2, avatar:"/common/icons/user.png", username: "阿狗", msg:"",msgCount:"10"},
            {userId:3, avatar:"/common/icons/user.png", username: "张三", msg:"",msgCount:"2",},
            {userId:4, avatar:"/common/icons/user.png", username: "李四", msg:"",msgCount:"0",},
            {userId:5, avatar:"/common/icons/user.png", username: "王五", msg:"",msgCount:"1",},
        ],
    },
    onInit(){
        for(var idx in this.messages){
            //            查询未读消息条数
            let unreadHttpRequest = http.createHttp();
            unreadHttpRequest.request("http://huangrui.vaiwan.com/unread/"+this.$app.$def.user.userId+"/"+this.messages[idx].userId, (err, data) => {
                if (!err) {
//                  let res = JSON.parse(data.result).body;
//                  this.array[idx].msgCount=res;//TODO 响应
                }
            });
            let userHttpRequest = http.createHttp();
            userHttpRequest.request("http://huangrui.vaiwan.com/users/id/"+this.messages[idx].userId, (err, data) => {
                if (!err) {
//                    let res = JSON.parse(data.result).body;
//                    this.messages[idx].avatar = res.headPhoto;
//                    this.messages[idx].avatar = res.userName;
                }
            });
            this.messages[idx].msg = this.$app.$def.currentMsg[this.messages[idx].userId];
        }
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
                    userId: sendTo
                }
            }
        })
    }
}
