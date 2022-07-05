import router from '@system.router';
import webSocket from '@ohos.net.webSocket';
import prompt from '@system.prompt';

export default {
    data: {
        title: 'World',
        topHeight: "100px",
        bottomHeight: "50px",
        ws: null,
        url: "ws://haotest.vaiwan.com/ws/",
        user: {
            userId: 1,
            username: "hao",
            avatar: "/common/icons/user.png"
        },
        sendTo: {
            userId: 2,
            username: "other",
            avatar: "/common/icons/user.png"
        },
        isFriend: false,
        isOnline: false,
        isSending: false,
        input: "",
        array: [
            {type:1, receiver: 1, sender: 2, content:"你好", date: "22/06/29 12:00"},
            {type:1, receiver: 2, sender: 1, content:"balbalba", date:"22/06/29 12:00"},
            {type:1, receiver: 1, sender: 2, content:"你好你好你好", date:"22/06/29 00:00"},
            {type:1, receiver: 2, sender: 1, content:"啦啦啦啦啦", date:"22/06/29 12:00"},
            {type:2, receiver: 1, sender: 2, content: { title:"中文测试我是老六老六老六老六",img:"/common/icons/user.png",}, date:"22/06/29 20:00"},
            {type:2, receiver: 2, sender: 1, content: { title:"中英测试这是一条中eng商品标题测试测试测试shank you shank you",img:"/common/icons/user.png",}, date:"22/06/29 20:00"}
        ],

    },
    onInit(){
        this.url = this.url + this.user.userId;
        this.initWS();
    },
    changInput(e){
        this.input = e.value
    },
    send(){
        this.isSending = true;

        var time = new Date().toLocaleString('zh-CN');
        this.array.push(
            {receiver: this.sendTo.userId, sender: this.user.userId, content: this.input, date: time}
        );

//        var jsonString = JSON.stringify({
//            "type": 1,
////            "sender": this.user.userId,
//            "target": this.sendTo.userId,
//            "content": this.input
//        })

        if(this.ws!=null) {
//            try{
//                this.ws.send(jsonString, (err, value) => {
//                    if (!err) {
//                        console.log("send success");
//                    } else {
//                        console.log("send fail, err:" + JSON.stringify(err));
//                    }
//                });
//            }catch(err){
//                console.log(JSON.stringify(err))
//            }
        }
        this.isSending = false;
        //TODO this.$element('chatList').scrollBottom(true);  //滚动到底部，无效
    },
    goUser(){
        console.log("打开用户页面");
        router.push({
            uri: 'pages/contectUserPage/contectUserPage',
            params: {
                userId: this.sendTo
            }
        })
    },
    initWS(){
        this.ws = webSocket.createWebSocket();
        this.ws.on('open', (err, value) => {
            console.log("on open, status:" + value.status + ", message:" + value.message);
            prompt.showToast("成功连接服务器")
        });
        this.ws.on('message', (err, value) => {
            console.log("on message, message:" + value);
//            var message = JSON.parse(value);
//            if (message.type === 0){
//                prompt.showToast({
//                    message: '对方已屏蔽您的消息'
//                })
//            }else{
//                this.array.push({
//                    sender: message.sender,
//                    receiver: message.target,
//                    content: message.content,
//                    date: new Date().toLocaleString('zh-CN')
//                })
//            }
        });
        this.ws.on('close', (err, value) => {
            console.log("on close, code is " + value.code + ", reason is " + value.reason);
        });
        this.ws.on('error', (err) => {
//            console.log("on error, error:" + JSON.stringify(err));
        });
        this.ws.connect(this.url, (err, value) => {
            if (!err) {
                console.log("connect success");
            } else {
//                console.log("connect fail, err:" + JSON.stringify(err));
            }
        });
    },
    goProduct(){
        console.log("跳转商品页面");
//        TODO 跳转
    }
}


