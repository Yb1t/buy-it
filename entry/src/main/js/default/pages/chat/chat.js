import webSocket from '@ohos.net.webSocket';
export default {
    data: {
        title: 'World',
        topHeight: "100px"
    },
    send(){
//        ws.send("test")
    },
    goUser(){
        console.log("打开用户页面")
    }
}


//var defaultIpAddress = "ws://121.40.165.18:8800";
//let ws = webSocket.createWebSocket();
//ws.on('open', (err, value) => {
//    console.log("on open, status:" + value.status + ", message:" + value.message);
//    // 当收到on('open')事件时，可以通过send()方法与服务器进行通信
//    ws.send("Hello, server!", (err, value) => {
//        if (!err) {
//            console.log("send success");
//        } else {
//            console.log("send fail, err:" + JSON.stringify(err));
//        }
//    });
//});
//ws.on('message', (err, value) => {
//    console.log("on message, message:" + value);
//    // 当收到服务器的`bye`消息时（此消息字段仅为示意，具体字段需要与服务器协商），主动断开连接
//    if (value === 'bye') {
//        ws.close((err, value) => {
//            if (!err) {
//                console.log("close success");
//            } else {
//                console.log("close fail, err is " + JSON.stringify(err));
//            }
//        });
//    }
//});
//ws.on('close', (err, value) => {
//    console.log("on close, code is " + value.code + ", reason is " + value.reason);
//});
//ws.on('error', (err) => {
//    console.log("on error, error:" + JSON.stringify(err));
//});
//ws.connect(defaultIpAddress, (err, value) => {
//    if (!err) {
//        console.log("connect success");
//    } else {
//        console.log("connect fail, err:" + JSON.stringify(err));
//    }
//});