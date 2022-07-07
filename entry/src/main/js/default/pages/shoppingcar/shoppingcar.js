import router from '@system.router';
import prompt from '@system.prompt';
import http from '@ohos.net.http';

export default {
    data: {
        menuNum: 0,
        menu: [{
                   name: "购物车",
                   size: 25,
                   weight: 600,
               }, {
                   name: "降价",
                   size: 20,
                   weight: 400,
               }, {
                   name: "常购",
                   size: 20,
                   weight: 400,
               },
        ],

        goodsdata: [{}],
        business: [{}],

        selectAllImages: "/common/images/white.png",
        MaybeLike: [{
                        images: "/common/images/sp1.jpg",
                        name: "帅气的男士工装裤",
                        money: 45,
                        payNum: "1000+",
                        collection: "收藏上万"
                    }, {
                        images: "/common/images/sp2.jpg",
                        name: "欧美艺术印花短袖T恤男",
                        money: 48,
                        payNum: "300+",
                        collection: "爆款好货,买到即赚到"
                    }, {
                        images: "/common/images/sp3.jpg",
                        name: "男士休闲套装夏季ins港",
                        money: 55,
                        payNum: "800+",
                        collection: "店铺回头率远超同行"
                    }, {
                        images: "/common/images/sp4.jpg",
                        name: "ZOROHOM国潮满印写",
                        money: 45,
                        payNum: "1000+",
                        collection: "收藏上万"
                    },
        ],

        carResult: {
            "body": [{}],
            "code": 100,
            "msg": "街火速成功"
        },
        shoppingCar: {},
        total: 0,
        businessImages: [{
                             images: "/common/images/white.png"
                         }, {
                             images: "/common/images/white.png"
                         }, {
                             images: "/common/images/white.png"
                         },],

    },
    onInit() {

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
                console.info("message" + this.shoppingCar.toString())
            } else {
                console.info('error:' + err.message);
            }
        }
        );
        console.log(this.menuNum)
    },
    onTextClick() {
        this.$element("apiMenu").show({
            x: 380, y: 38
        });
    },
    changeMenu(data) {
        this.menuNum = data
        for (var index = 0; index < this.menu.length; index++) {
            if (index == data) {
                this.menu[index].size = 25
                this.menu[index].weight = 600
            } else {
                this.menu[index].size = 20
                this.menu[index].weight = 400
            }
        }

        console.log(data)

    },
    MenuSelected(e) {
        prompt.showToast({
            message: e.value
        })
    },
    selectAll() {
        if (this.selectAllImages == "/common/images/white.png") {
            this.selectAllImages = "/common/images/check.png"
            this.total=0
            for (var index = 0; index < this.shoppingCar.length; index++) {
               this.total= this.shoppingCar[index].carPro.price+this.total
                this.businessImages[index].images="/common/images/check.png"
            }
        } else {
            for (index = 0; index < this.shoppingCar.length; index++) {
                this.businessImages[index].images="/common/images/white.png"
            }
            this.selectAllImages = "/common/images/white.png"
            this.total=0
        }
    },
    selectBusiness(temp) {
        if (this.businessImages[temp].images == "/common/images/check.png") {
            this.businessImages[temp].images = "/common/images/white.png"
            this.total=this.total-this.shoppingCar[temp].carPro.price
        } else {
            this.businessImages[temp].images = "/common/images/check.png"
            this.total=this.total+this.shoppingCar[temp].carPro.price
        }
        var r=0
        for (var index = 0; index < this.shoppingCar.length; index++) {
            if(this.businessImages[index].images=="/common/images/check.png"){
                r=r+1
            }
        }
        console.info("r"+r)
        if(r==this.shoppingCar.length){
            this.selectAllImages = "/common/images/check.png"
        }else{
            this.selectAllImages = "/common/images/white.png"
        }
    },
    onRouter() {
        router.push({
            uri: "pages/account/account"
        })
    }
}
