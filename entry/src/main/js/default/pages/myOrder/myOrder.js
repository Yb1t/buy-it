import http from '@ohos.net.http';
export default {
    data: {
        title: 'World',
        myResult:{
            "body":[{}],
            "code":100,
            "msg":"街火速成功"
        },
        myOrder:[
            {
                "orderId":9999,
                "buyer":null,
                "orderBuyer":{
                    "userId":1,
                    "userName":"大帅",
                    "userAccount":123456,
                    "userPassword":"123456",
                    "userPhone":"1234565",
                    "userEmail":"12365dd",
                    "headPhoto":"afafffffff",
                    "userCreatetime":"2022.2.5",
                    "userAddress":"dddddddddddd",
                    'userRole':"管理员",
                    "userLevel":100,
                    "userIntroduce":"再无",
                    'userStatus':1,
                    "money":13214.0,
                },
                "ordeSend":{
                    "businessId":1,
                    "businessName":"玉龙店铺",
                    "businessAccount":123,
                    "businessPassword":"133",
                },
                "orderCreatetime":"203.25",
                "sendAdd":"的点点滴滴多",
                "accpAdd":"啊啊啊啊啊啊啊啊",
                "orderStatus":"待发货",
                "payMoney":500.0,
                "remake":"借记卡发画了个",
                "orderProduct":{
                    "proId":1,
                    "proType":"数码产品",
                    "proName":"超级无敌西乡塘大户赛格",
                    "price":1253.00,
                    "stock":222,
                    "proMainPicture":"http://huangrui.vaiwan.com/images/2022.07.05/xiaomi12s1.jpg",
                    "proPicture":null,
                    "pictures":[
                        {
                            "picId":1,
                            "picUrl":"http://huangrui.vaiwan.com/images/2022.07.05/xiaomi12s5.jpg",
                            "proId":0
                        },
                    ],

                    "proCreatetime":"2022.3.5",
                    "proStatus":"在售",
                    "introduce":"暂无介绍"
                }
            },
        ]
    },
    tabChange(e){

        console.info("Tab index: " + e.index)

    },
    onInit() {
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/order/123456",
            {

            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.myResult = JSON.parse(data.result);
                this.myOrder = this.myResult.body;

                console.info("接受到的code数据: "+this.myResult.code)
                console.info("接受到的msg数据: "+this.myResult.msg)
                console.info("接受到的order数据: "+this.myOrder.toString())

            } else {
                console.info('error:' + err.message);
            }
        });

    }
}
