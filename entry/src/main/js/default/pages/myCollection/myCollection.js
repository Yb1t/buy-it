import http from '@ohos.net.http';
import router from '@system.router';
export default {
    data: {
        title: 'World',
        myResult:{
            "body":[{}],
            "code":100,
            "msg":"街火速成功"
        },
        myCollection:[
            {
                "collectionId":"",
                "collectionCreatetime":"",
                "collectionUser":{
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
                "collectionPro":{
                    "proId": 14,
                    "proType": "护肤化妆",
                    "proName": "花西子浮雕口红",
                    "price": 129.0,
                    "stock": 55555,
                    "proMainPicture": "http://localhost:8080/images/2022.07.05/hxz0.jpg",
                    "proPicture": null,
                    "pictures": [
                        {
                        "picId": 45,
                        "picUrl": "http://localhost:8080/images/2022.07.05/hxz1.jpg",
                        "proId": 14
                        },
                        {
                        "picId": 46,
                        "picUrl": "http://localhost:8080/images/2022.07.05/hxz2.jpg",
                        "proId": 14
                        },
                        {
                        "picId": 47,
                        "picUrl": "http://localhost:8080/images/2022.07.05/hxz3.jpg",
                        "proId": 14
                        },
                        {
                        "picId": 48,
                        "picUrl": "http://localhost:8080/images/2022.07.05/hxz4.jpg",
                        "proId": 14
                        }
                    ],
                },
                "collectionNum":1
            },
        ],
    },

    toProductDetail(index){

        router.push({
            uri:"pages/productinfo/productinfo",
            params:{
                productId:index
            }
        })
        console.info("我的收藏数据:"+this.myCollection[index].collectionPro);

    },

    onInit() {
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/collection/"+this.$app.$def.globalData.loginUser.userAccount,
            {

            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.myResult = JSON.parse(data.result);
                this.myCollection = this.myResult.body;

                console.info("接受到的code数据: "+this.myResult.code)
                console.info("接受到的msg数据: "+this.myResult.msg)
                console.info("接受到的order数据: "+this.myCollection.toString())

            } else {
                console.info('error:' + err.message);
            }
        });

    }
}
