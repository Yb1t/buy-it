
import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';
export default {
    data: {
        title: 'World',
        checkSrc:'/common/icons/check-one.png',
        username:'',
        password:'',
        userData:{
            "userId": 1,
            "userName": "测试",
            "userAccount": 569852,
            "userPassword": "123456",
            "userPhone": "110",
            "userEmail": "298505@qq.com",
            "headPhoto": "/images/2022.07.05/2.png",
            "userCreatetime": "2022-06-30T08:35:11.000+00:00",
            "userAddress": "桂林电子科技大学花江校区",
            "userRole": "管理员",
            "userLevel": 100,
            "userIntroduce": null,
            "userStatus": 0,
            "money": 1.0E10
        },
        myResult:{
            "body":{
                "userId": 1,
                "userName": "测试",
                "userAccount": 569852,
                "userPassword": "123456",
                "userPhone": "110",
                "userEmail": "298505@qq.com",
                "headPhoto": "/images/2022.07.05/2.png",
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
    },
    checkClick(){
        if (this.checkSrc == '/common/icons/check-one.png') {
            this.checkSrc = '/common/icons/check-two.png'
        }else{
            this.checkSrc = '/common/icons/check-one.png'
        }

    },
    inputAccount(e){
        this.userData.userAccount = e.value
    },
    inputPassword(e){
        this.userData.userPassword = e.value
    },
    loginClick(){
        if(this.checkSrc== '/common/icons/check-one.png'){
            this.$element('popup').show();
            console.log("111")
        }else{123
            // 每一个httpRequest对应一个http请求任务，不可复用
            let httpRequest = http.createHttp();
            httpRequest.request(
            // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定12
                "http://huangrui.vaiwan.com/users/login",
                {
                    method:'POST', // 可选，默认为http.RequestMethod.GET
                    // 当使用POST请求时此字段用于传递内容
                    extraData: JSON.stringify(this.userData),

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
                    console.info("接受到的order数据: "+this.userData)

                    console.info("账号"+this.userData.userAccount)
                    console.info("账号"+this.userData.userPassword)

                    console.info("输入的账号"+this.username)
                    console.info("输入的账号"+this.password)

                    /*if(this.username == this.userData.userAccount && this.password == this.userData.userPassword){
                                    router.push({
                                        uri:'pages/index/index'
                                    })
                    }*/

                    if(this.myResult.code == 2041){
                        prompt.showToast({
                            message:this.myResult.msg
                        })
                        router.push({
                            uri:'pages/index/index'
                        })
                        this.$app.$def.globalData.loginUser = this.userData;
                    }else{
                        prompt.showToast({
                            message:this.myResult.msg
                        })
                    }

                } else {
                    console.info('error:' + err.message);
                }
            });
//            router.push({
//                uri:'pages/index/index'
//            })
        }

    },

//    忘记密码
    forgetClick(){
        router.push({
            uri:'pages/forgetPage/forgetPage'
        })
    },
    registerClick(){
        router.push({
            uri:'pages/registerPage/registerPage'
        })
    },
    visibilitychange(e) {
        console.log("888")
        prompt.showToast({
            message: 'visibility change visibility: ' + e.visibility,
            duration: 3000,
        });
    },
    hidepopup() {
        this.$element("popup").hide();
    },
}
