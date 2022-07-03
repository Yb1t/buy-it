import router from '@system.router';
import webSocket from '@ohos.net.webSocket';
import prompt from '@system.prompt';
import dataRdb from '@ohos.data.rdb'
const STORE_CONFIG = { name: "RdbTest.db" }
const SQL_CREATE_TABLE = "CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)"
dataRdb.getRdbStore(STORE_CONFIG, 1, function (err, rdbStore) {
    rdbStore.executeSql(SQL_CREATE_TABLE, null)
    console.info('create table done.')
})
export default {
    data: {
        title: 'World',
        topHeight: "100px",
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
            {receiver: 1, sender: 2, content:"你好", date: "22/06/29 12:00"},
            {receiver: 2, sender: 1, content:"balbalba", date:"22/06/29 12:00"},
            {receiver: 1, sender: 2, content:"你好你好你好", date:"22/06/29 00:00"},
            {receiver: 2, sender: 1, content:"啦啦啦啦啦", date:"22/06/29 12:00"},
            {receiver: 1, sender: 2, content:"哈哈哈哈哈", date:"22/06/29 20:00"}
        ],

    },
    onInit(){
        this.url = this.url + this.user.userId;
        this.initWs();
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

        var jsonString = JSON.stringify({
            "type": 1,
//            "sender": this.user.userId,
            "target": this.sendTo.userId,
            "content": this.input
        })

        if(this.ws!=null) {
            try{
                this.ws.send(jsonString, (err, value) => {
                    if (!err) {
                        console.log("send success");
                    } else {
                        console.log("send fail, err:" + JSON.stringify(err));
                    }
                });
            }catch(err){
                console.log(JSON.stringify(err))
            }
        }
        this.isSending = false;
        // TODO this.$element('chatList').scrollBottom(true);  //滚动到底部，无效
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
            prompt.showToast("成功连接服务器")
        });
        this.ws.on('message', (err, value) => {
            console.log("on message, message:" + value);
            var message = JSON.parse(value);
            if (message.type === 0){
                prompt.showToast({
                    message: '对方已屏蔽您的消息'
                })
            }else{
                this.array.push({
                    sender: message.sender,
                    receiver: message.target,
                    content: message.content,
                    date: new Date().toLocaleString('zh-CN')
                })
            }
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


