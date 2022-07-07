
import router from '@system.router';
import http from '@ohos.net.http';
export default {
    data: {
        title: 'World',
        collectionData:[
            {"collectionDataIcons":"/common/images/icon_star.png","collectionDataName":"收藏"},
            {"collectionDataIcons":"/common/icons/icon_rss.png","collectionDataName":"订阅店铺"},
            {"collectionDataIcons":"/common/icons/icon_history.png","collectionDataName":"足迹"},
            {"collectionDataIcons":"/common/icons/icon_wallet-one.png","collectionDataName":"零钱"}
        ],
        orderDate:[
            {"orderIcons":"/common/icons/icon_bank-card.png","orderName":"待付款"},
            {"orderIcons":"/common/icons/icon_shopping-bag.png","orderName":"待发货"},
            {"orderIcons":"/common/images/icon_transporter.png","orderName":"待收货"},
            {"orderIcons":"/common/icons/icon_comment.png","orderName":"待评价"},
            {"orderIcons":"/common/icons/icon_expenses.png","orderName":"退款/售后"}
        ],
        vipData:[
            {"vipDataIcons":"/common/icons/icon_light-member.png","vipDataName":"会员中心","vipDataDital":"查看权益"},
            {"vipDataIcons":"/common/icons/icon_coupon.png","vipDataName":"领券中心","vipDataDital":"天天领5折券"},
            {"vipDataIcons":"/common/icons/icon_weixin-cards-offers.png","vipDataName":"红包卡券","vipDataDital":"查看可用优惠"},
            {"vipDataIcons":"/common/icons/icon_red-envelope.png","vipDataName":"红包签到","vipDataDital":"点击领取红包"},
        ],
        tryOneData:[
            {"tryOneDataIcons":"/common/icons/icon_local (2).png","tryOneDataName":"收货地址"},
            {"tryOneDataIcons":"/common/icons/icon_robot-one.png","tryOneDataName":"官方客服"},
            {"tryOneDataIcons":"/common/icons/icon_express-delivery.png","tryOneDataName":"我的快递"},
            {"tryOneDataIcons":"/common/icons/icon_comment-one.png","tryOneDataName":"我的评价"}
        ],
        tryTwoData:[
            {"tryOneDataIcons":"/common/icons/icon_ticket.png","tryOneDataName":"领券中心"},
            {"tryOneDataIcons":"/common/icons/icon_financing-one.png","tryOneDataName":"来摇现金"},
            {"tryOneDataIcons":"/common/icons/icon_vip.png","tryOneDataName":"店铺会员"},
            {"tryOneDataIcons":"/common/icons/icon_system.png","tryOneDataName":"更多"}
        ],
        myResult:{
            "body":{
                "userId": 1,
                "userName": "哟壹",
                "userAccount": 123456,
                "userPassword": "123456",
                "userPhone": "110",
                "userEmail": "298505@qq.com",
                "headPhoto": "http://localhost:8080/images/2022.07.05/2.png",
                "userCreatetime": "2022-06-30T08:35:11.000+00:00",
                "userAddress": "桂林电子科技大学花江校区",
                "userRole": "管理员",
                "userLevel": 100,
                "userIntroduce": null,
                "userStatus": 0,
                "money": 1.0E10
            },
            "code":100,
            "msg":"街火速成功"
        },
        userData: {
            "userId": 1,
            "userName": "哟壹",
            "userAccount": 123456,
            "userPassword": "123456",
            "userPhone": "110",
            "userEmail": "298505@qq.com",
            "headPhoto": "http://localhost:8080/images/2022.07.05/2.png",
            "userCreatetime": "2022-06-30T08:35:11.000+00:00",
            "userAddress": "桂林电子科技大学花江校区",
            "userRole": "管理员",
            "userLevel": 100,
            "userIntroduce": null,
            "userStatus": 0,
            "money": 1.0E10
        }

    },
    onInit() {
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/users/account/"+this.$app.$def.globalData.loginUser.userAccount,
            {

            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.myResult = JSON.parse(data.result);
                this.userData = this.myResult.body;

                console.info("接受到的code数据: "+this.myResult.code)
                console.info("接受到的msg数据: "+this.myResult.msg)
                console.info("接受到的order数据: "+this.userData.toString())

            } else {
                console.info('error:' + err.message);
            }
        });

    },
    toMyOrder(){
        router.push({
            uri:"pages/myOrder/myOrder"
        })
    },
    toMyCollection(idx){
        if(idx == 0){
            router.push({
                uri:"pages/myCollection/myCollection"
            })
        }
    },
    toMyAddress(idx){
        if (idx == 0) {
            router.push({
                uri:"pages/myAddress/myAddress"
            })
        }
    },
}
