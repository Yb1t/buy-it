import http from '@ohos.net.http';
import router from '@system.router';
export default {
    data: {
        productId:10,
        text:false,
        title: 'World',
        nav:[
            {"image1":"common/icons/star2.png","image":"common/icons/stars.png","context":"收藏"},
            {"image1":"common/icons/peoples.png","image":"common/icons/peoples.png","context":"帮我选"},
            {"image1":"common/icons/share.png","image":"common/icons/share.png","context":"分享"},
        ],
        navigation:[
            {"image1":"common/icons/application.png","image":"common/icons/application.png","text":"店铺"},
            {"image1":"common/icons/customer.png","image":"common/icons/customer.png","text":"客服"},
            {"image1":"common/icons/star2.png","image":"common/icons/stars.png","text":"收藏"},
        ],
        result:{
            "body": [{

                     }],
            "code":100,
            "msg":"没啥问题"
        },
        contents:"",
        product: [{"proId":1,
                      "proType":"数码产品",
                      "proName":"Sony a6400",
                      "price":7299.0,
                      "stock":15266,
                      "proMainPicture":"http://huangrui.vaiwan.comddhjf113543.4",
                      "proPicture":null,
                      "pictures":[{"picId":1,
                                      "picUrl":"http://huangrui.vaiwan.com123456ghghd",
                                      "proId":1},
                                  {"picId":2,
                                      "picUrl":"http://huangrui.vaiwan.com546784ddfff",
                                      "proId":1},
                                  {"picId":2,
                                      "picUrl":"http://huangrui.vaiwan.com546784ddfff",
                                      "proId":1},
                                  {"picId":2,
                                      "picUrl":"http://huangrui.vaiwan.com546784ddfff",
                                      "proId":1},
                                  {"picId":2,
                                      "picUrl":"http://huangrui.vaiwan.com546784ddfff",
                                      "proId":1},
                      ],
                      "business":{"businessId":1,
                          "businessName":"鱼龙混杂",
                          "businessAccount":123,
                          "businessPassword":"123"},
                      "buyer":null,
                      "proCreatetime":"2022-06-30T11:37:52.000+00:00",
                      "proBuytime":null,
                      "proStatus":"在售",
                      "introduce":"该商品没有任何介绍"}]


    },
//
//    onapply(){
//        this.text = !this.text;
//    }
    onapply(){
        this.text = !this.text;
        if (this.text) {
            let httpRequest = http.createHttp();
            httpRequest.request(
            // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
                "http://huangrui.vaiwan.com/collection" ,
                {
                    method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET
                    // 开发者根据自身业务需要添加header字段
                    header: {
                        'Content-Type': 'application/json'
                    },
                    // 当使用POST请求时此字段用于传递内容
                    extraData: {
                        "collectionUserid":this.$app.$def.globalData.loginUser.userAccount,
                        "collectionProid":this.product.proId,
                    },

                }, (err, data) => {
                if (!err) {
                    // data.result为http响应内容，可根据业务需要进行解析
                    console.info('Result:' + data.result);
                    console.info('code:' + data.responseCode);
                    // data.header为http响应头，可根据业务需要进行解析
                    console.info('header:' + data.header);

                    this.result = JSON.parse(data.result);
                    this.products = this.result.body;

                    console.info("接受到的code数据: "+this.result.code)
                    console.info("接受到的msg数据: "+this.result.msg)
                    console.info("接受到的order数据: "+data.result)

                } else {
                    console.info('error:' + err.message);
                }
            });
            router.push(
                {
                    uri:"pages/myCollection/myCollection",
                }
            )
        }
    },
    addshopping(){
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/car" ,
            {
                method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET
                // 开发者根据自身业务需要添加header字段
                header: {
                    'Content-Type': 'application/json'
                },
                // 当使用POST请求时此字段用于传递内容
                extraData: {
                    "carProid":this.product.proId,
                    "carUserid":this.$app.$def.globalData.loginUser.userAccount,
                    "proNum":1,
                     },

            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);
                console.info("接受到的code数据: "+this.result.code)
                console.info("接受到的msg数据: "+this.result.msg)
                console.info("接受到的order数据: "+data.result)

            } else {
                console.info('error:' + err.message);
            }
        });
        router.push({
            uri:'pages/shoppingcar/shoppingcar',
        });

    },
    onInit() {
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/products/id/"+this.productId.toString(),
            {

            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.result = JSON.parse(data.result);
                this.product = this.result.body;

                console.info("接受到的code数据: "+this.result.code)
                console.info("接受到的msg数据: "+this.result.msg)
                console.info("接受到的order数据: "+data.result)

            } else {
                console.info('error:' + err.message);
            }
        });

    },
    share(){
        var sendTo
        if(this.$app.$def.globalData.loginUser.userId==1){
            sendTo = 2
        }else{
            sendTo = 1
        }
        router.push({
            uri: "pages/chat/chat",
            params:{
                productId: this.productId,
                sendTo: {
                    userId: sendTo,
                    username: "",
                    avatar: ""
                },

            }
        })
    }
}
