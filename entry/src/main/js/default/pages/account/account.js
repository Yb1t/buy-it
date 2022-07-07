import router from '@system.router';
import http from '@ohos.net.http';

export default {
    data: {
        username: "名字",
        number: 21345789,
        address:"桂林",
        selall: "/common/images/white.png",
        businessImages:[],
        selectGoods:[{}],
        carResult: {
            "body": [{}],
            "code": 100,
            "msg": "街火速成功"
        },
        shoppingCar: {},
        totalNum:0,
    },
    onInit(){
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/car/123456",
            {}, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.carResult = JSON.parse(data.result)
                this.shoppingCar = this.carResult.body
                this.address=this.shoppingCar[0].carUser.userAddress
                this.number=this.shoppingCar[0].carUser.userPhone
                this.username=this.shoppingCar[0].carUser.userName
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
        router.push({
            uri: "pages/shoppingcar/shoppingcar"
        })
    }
}
