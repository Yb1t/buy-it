import router from '@system.router';
import webSocket from '@ohos.net.webSocket';
import prompt from '@system.prompt';
import http from '@ohos.net.http';

export default {
    data: {
        productId: "",
        product: {},
        topHeight: "50px",
        bottomHeight: "50px",
        ws: null,
        url: "ws://huangrui.vaiwan.com/ws/",
        user: {
            userId: 1,
            username: "",
            avatar: "/common/icons/user.png"
        },
        sendTo: {
            userId: 2,
            username: "",
            avatar: "/common/icons/user.png"
        },
        isFriend: false,
        isOnline: false,
        isSending: false,
        input: "",
        array: [
//            {type:1, receiver: 1, sender: 2, content:"你好"},//, date: "22/06/29 12:00"},
//            {type:1, receiver: 2, sender: 1, content:"你好"},// date:"22/06/29 12:00"},
//            {type:1, receiver: 1, sender: 2, content:"给你分享一个好东西"},// date:"22/06/29 00:00"},
//            {type:1, receiver: 2, sender: 1, content:"好的"},// date:"22/06/29 12:00"},
//            {type:2, receiver: 1, sender: 2,
//                content: {
//                    title:"源氏木语全实木床现代简约橡木大床",
//                    proId: "https://item.taobao.com/item.htm?spm=a21bo.jianhua.201876.6.5af911d9JMzA3P&id=599695626728&scm=1007.40986.275655.0&pvid=27c7e238-02a6-400c-a907-92c0767cc23e",
//                    imgUrl: "https://gw.alicdn.com/bao/uploaded/i3/34255570/O1CN01HCtjGE1r16pm4cMO3_!!0-saturn_solar.jpg_300x300q90.jpg_.webp",
//                    }
//            },
//            {type:2, receiver: 2, sender: 1,
//                content: {
//                    title:"青稞G7R华为智卡认证触控屏密码指纹锁家用防盗门智能锁",
//                    proId: "https://item.taobao.com/item.htm?spm=a21bo.jianhua.201876.6.5af911d9JMzA3P&id=599695626728&scm=1007.40986.275655.0&pvid=27c7e238-02a6-400c-a907-92c0767cc23e",
//                    imgUrl: "https://gw.alicdn.com/bao/uploaded/i2/322940141/O1CN01PuDPhV1CucbmypVBU_!!0-saturn_solar.jpg_300x300q90.jpg_.webp",
//                },
//            },
//            {type: 3},
//            {type: 4}
        ],

    },

    onInit(){
        this.user.userId = this.$app.$def.globalData.loginUser.userId
        this.url = this.url + this.$app.$def.globalData.loginUser.userId +"/"+this.sendTo.userId;
        this.initUsers();
        if (this.productId!='') {
            this.initProduct();
        }
        this.initWS();
    },
    initUsers(){
        let userHttpRequest = http.createHttp();
        userHttpRequest.request("http://huangrui.vaiwan.com/users/id/"+this.user.userId, (err, data) => {
            if (!err) {
                let user = JSON.parse(data.result).body;
                this.user.username = user.userName;
                this.user.avatar = user.headPhoto;
            }
        });
        let sendToHttpRequest = http.createHttp();
        sendToHttpRequest.request("http://huangrui.vaiwan.com/users/id/"+this.sendTo.userId, (err, data) => {
            if (!err) {
                let sendTo = JSON.parse(data.result).body;
                this.sendTo.username = sendTo.userName;
                this.sendTo.avatar = sendTo.headPhoto;
            }
        });
    },
    changInput(e){
        this.input = e.value
    },
    sendMessage(){
        this.send({
            sender: this.user.userId,
            target: this.sendTo.userId,
            type: 1,
            content: this.input
        });
    },
    sendProduct(){
        this.send({
            type: 2,
            sender: this.user.userId,
            target: this.sendTo.userId,
            content: {
                title:this.product.proName,
                proId: this.product.proId,
                imgUrl: this.product.proMainPicture
            },
        });
    },
    send(object){
        this.isSending = true;
//        object.set({name: 'sender'}, this.user.userId);
//        object.set({name:'receiver'}, this.sendTo.userId);
        let sendObject = {}
        if (object.type == 0 || object.type == 1){
            sendObject = object
        }else if(object.type == 2){
            sendObject = {
                type: object.type,
                sender: object.sender,
                target: object.target,
                content: JSON.stringify(object.content)
            }
        }
        let jsonString = JSON.stringify(sendObject);
        console.debug(jsonString);
        if(this.ws!=null) {
            this.ws.send(jsonString, (err, value) => {
                if (!err) {
                    if (object.type!=0){
                        this.array.push(object);
                    }
                    console.log("send success");
                } else {
                    console.log("send fail, err:" + JSON.stringify(err));
                }
            });
        }

        this.isSending = false;
        //TODO this.$element('chatList').scrollBottom(true);  //滚动到底部，无效
    },
    goUser(){
        console.log("打开用户页面");
        router.push({
            uri: 'pages/contectUserPage/contectUserPage',
            params: {
                target: {
                    userId: this.sendTo.userId,
                    username: this.sendTo.username,
                    avatar: this.sendTo.avatar
                },
            }
        })
    },
    initProduct(){
        let httpRequest = http.createHttp();
        httpRequest.request("http://huangrui.vaiwan.com/products/id/"+this.productId, (err, data) => {
            if (!err) {
                this.product = JSON.parse(data.result).body;
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                console.info('header:' + data.header);
                prompt.showDialog({
                    title: '分享商品',
                    message: this.product.proName,
                    buttons: [
                        {
                            text: '取消',
                            color: '#666666',
                        },
                        {
                            text: '发送',
                            color: '#FFA500',
                        }
                    ],
                    success: (data)=>{
                        if(data.index == 1){
                            this.sendProduct();
                        }
                    },
                    cancel: function() {
                        console.log('dialog cancel callback');
                    },
                });
            } else {
                console.info('error:' + err.message);
            }
        });
    },
    initWS(){
        this.ws = webSocket.createWebSocket();
        this.ws.on('open', (err, value) => {
            console.log("on open, status:" + value.status + ", message:" + value.message);
            prompt.showToast({message: "成功连接websocket服务器"});
        });
        this.ws.on('message', (err, value) => {
            console.log("on message, message:" + value);
            var object = JSON.parse(value);
            if (object.type == 3){
                prompt.showToast({message: '对方已屏蔽您的消息'});
            }else if(object.type == 2) {
                object.content = JSON.parse(object.content);
            }else if(object.type == 1){
            }
            this.array.push(object);
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
    },
    goProduct(productId){
        console.log("跳转商品页面"+productId);
        router.push(
            {
                uri:"pages/productinfo/productinfo",
                params:{
                    productId:productId
                }

            }
        )
    }

}


