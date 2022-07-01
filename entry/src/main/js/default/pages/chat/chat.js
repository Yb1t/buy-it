import router from '@system.router';
import webSocket from '@ohos.net.webSocket';

export default {
    data: {
        title: 'World',
        topHeight: "100px",
        ws: null,
        url: 'ws://haotest.vaiwan.com/websocket/1',
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
            {to: 1, sender: 2, msg:"你好", date: "22/06/29 12:00"},
            {to: 2, sender: 1, msg:"balbalba", date:"22/06/29 12:00"},
            {to: 1, sender: 2, msg:"你好你好你好", date:"22/06/29 00:00"},
            {to: 2, sender: 1, msg:"啦啦啦啦啦", date:"22/06/29 12:00"},
            {to: 1, sender: 2, msg:"哈哈哈哈哈", date:"22/06/29 20:00"}
        ],

    },
    onInit(){
        this.initWs();
    },
    changInput(e){
        this.input = e.value
    },
    send(){
        this.isSending = true;

        var time = new Date().toLocaleString('zh-CN');
        this.array.push(
            {avatar:"/common/icons/user.png", username: "me", msg: this.input,msgCount:"1", date:time}
        );

        var jsonString = JSON.stringify({
//            "from": this.user.userId,
            "text": this.input,
            "target": this.sendTo
        })

        if(this.ws!=null) {
            this.ws.send(jsonString, (err, value) => {
                if (!err) {
                    console.log("send success");
                } else {
                    console.log("send fail, err:" + JSON.stringify(err));
                }
            });
        }
        this.isSending = false;
//        this.$element('chatList').scrollBottom(true);  //滚动到底部，无效
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
    initWs(){
        this.ws = webSocket.createWebSocket();
        this.ws.on('open', (err, value) => {
            console.log("on open, status:" + value.status + ", message:" + value.message);
            // 当收到on('open')事件时，可以通过send()方法与服务器进行通信
//            this.ws.send("Hello, server!", (err, value) => {
//                if (!err) {
//                    console.log("send success");
//                } else {
//                    console.log("send fail, err:" + JSON.stringify(err));
//                }
//            });
        });
        this.ws.on('message', (err, value) => {
            console.log("on message, message:" + value);
            // 当收到服务器的`bye`消息时（此消息字段仅为示意，具体字段需要与服务器协商），主动断开连接
//            if (value === 'bye') {
//                this.ws.close((err, value) => {
//                    if (!err) {
//                        console.log("close success");
//                    } else {
//                        console.log("close fail, err is " + JSON.stringify(err));
//                    }
//                });
//            }
        });
        this.ws.on('close', (err, value) => {
            console.log("on close, code is " + value.code + ", reason is " + value.reason);
        });
        this.ws.on('error', (err) => {
            console.log("on error, error:" + JSON.stringify(err));
        });
        this.ws.connect(this.url, (err, value) => {
            if (!err) {
                console.log("connect success");
            } else {
                console.log("connect fail, err:" + JSON.stringify(err));
            }
        });
    }
}


