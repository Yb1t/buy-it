import router from '@system.router';
import webSocket from '@ohos.net.webSocket';
import prompt from '@system.prompt';
import http from '@ohos.net.http';

export default {
    data: {
        productId: "10",//TODO 分享页面传参
        product: {},
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
        isExpand: false,
        maxLine: 2,
        expandText: "展开",
        array: [
            {type:1, receiver: 1, sender: 2, content:"你好", date: "22/06/29 12:00"},
            {type:1, receiver: 2, sender: 1, content:"balbalba", date:"22/06/29 12:00"},
            {type:1, receiver: 1, sender: 2, content:"你好你好你好", date:"22/06/29 00:00"},
            {type:1, receiver: 2, sender: 1, content:"啦啦啦啦啦", date:"22/06/29 12:00"},
            {type:2, receiver: 1, sender: 2,
                content: {
                    title:"中文测试我是老六老六老六老六",
                    link: "https://item.taobao.com/item.htm?spm=a21bo.jianhua.201876.6.5af911d9JMzA3P&id=599695626728&scm=1007.40986.275655.0&pvid=27c7e238-02a6-400c-a907-92c0767cc23e",
                    imgUrl: "https://gw.alicdn.com/bao/uploaded/i1/2261059285/O1CN01bLCsxK2ISa85jthDm_!!0-item_pic.jpg_300x300q90.jpg",
                    },
                date:"22/06/29 20:00"},
            {type:2, receiver: 2, sender: 1,
                content: {
                    title:"中英测试这是一条中eng商品标题测试测试测试shank you shank you",
                    link: "https://item.taobao.com/item.htm?spm=a21bo.jianhua.201876.6.5af911d9JMzA3P&id=599695626728&scm=1007.40986.275655.0&pvid=27c7e238-02a6-400c-a907-92c0767cc23e",
                    imgUrl: "https://gw.alicdn.com/bao/uploaded/i3/1624565934/O1CN01RTTRFy1thoztFTvWl_!!0-item_pic.jpg_300x300q90.jpg",
                },
                date:"22/06/29 20:00"}
        ],

    },
    onInit(){
        this.url = this.url + this.user.userId;
//        if (this.shareProduct!='') {
            this.initProduct();
//        }
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
    initProduct(){
        let httpRequest = http.createHttp();
        httpRequest.request("http://huangrui.vaiwan.com/products/id/"+this.productId, (err, data) => {
            if (!err) {
                this.product = JSON.parse(data.result);
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                console.info('header:' + data.header);
                prompt.showDialog({
                    title: '分享商品',
                    message: this.product.body.proName,
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
                    success: function(data) {
                        if (data.index==1){
                            console.log('发送，，dialog success callback，click button : ' + data.index);
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
    goProduct(url){
        console.log("跳转商品页面"+url);
//        TODO 跳转
    },
    expand(){
        this.isExpand = !this.isExpand
        if (this.isExpand) {
            this.expandText = "收起"
            this.maxLine=1000
        }else{
            this.expandText = "展开"
            this.maxLine=2
        }
    }
}


