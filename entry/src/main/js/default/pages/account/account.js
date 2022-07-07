import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';

export default {
    data: {
        username: "名字",
        number: 21345789,
        address: "桂林",
        selall: "/common/images/white.png",
        businessImages: [],
        selectGoods: [{}],
        carResult: {
            "body": [{}],
            "code": 100,
            "msg": "街火速成功"
        },
        shoppingCar: {},
        totalNum: 0,
        account: "",
        money: 0,
        businessImagesNum: 0,
    },
    onInit() {
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/car/" + this.$app.$def.globalData.loginUser.userAccount,
            {}, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.carResult = JSON.parse(data.result)
                this.shoppingCar = this.carResult.body
                this.address = this.shoppingCar[0].carUser.userAddress
                this.number = this.shoppingCar[0].carUser.userPhone
                this.username = this.shoppingCar[0].carUser.userName
                this.account = this.shoppingCar[0].carUser.userAccount
                this.money = this.shoppingCar[0].carUser.money
                console.info("message" + this.shoppingCar.toString())
            } else {
                console.info('error:' + err.message);
            }
        });
    },
    selectall() {
        if (this.selall == "/common/images/white.png") {
            this.selall = "/common/images/check.png"
        } else {
            this.selall = "/common/images/white.png"
        }
    },
    reBack() {

    },

    showPanel() {
        this.$element('simplepanel').show()
    },
    closePanel() {
        this.$element('simplepanel').close()
    },
    changeMode(e) {
        this.modeFlag = e.mode
    },
    onRouter() {
        console.info("123")
    },
    confirm() {
        for (var index = 0; index < this.businessImagesNum; index++) {
            if (this.businessImages[index].images == "/common/images/check.png") {
                console.info("select$$ " + index)
                // 每一个httpRequest对应一个http请求任务，不可复用
                let httpRequest = http.createHttp();

                console.info("添加的信息：" + this.addressDate);

                httpRequest.request(
                // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。请求的参数可以在extraData中指定
                    "http://huangrui.vaiwan.com/order",
                    {
                        method: 'PUT', // 可选，默认为http.RequestMethod.GET
                        // 当使用POST请求时此字段用于传递内容
                        extraData: {
                            "orderId": this.shoppingCar[index].carPro.proId,
                            "orderStatus": "待发货"
                        },
                    }, (err, data) => {
                    if (!err) {
                        // data.result为http响应内容，可根据业务需要进行解析
                        console.info('Result:' + data.result);
                        console.info('code:' + data.responseCode);
                        // data.header为http响应头，可根据业务需要进行解析
                        console.info('header:' + JSON.stringify(data.header));
                    } else {
                        console.info('error:' + JSON.stringify(err));
                        // 当该请求使用完毕时，调用destroy方法主动销毁。
                        httpRequest.destroy();
                    }
                }
                );

            }
            console.info(index)
        }
        console.info(this.businessImagesNum)
        console.info("189")
        prompt.showToast({
            message: "支付成功"
        })
        router.push({
            uri: "pages/index/index"
        })
    },
    waive() {

        console.info("123")
    }
}
