import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';

export default {
    data: {
        title: 'World',
        checkSrc: '/common/icons/check-one.png',
        userData: {
            "userId": 14,
            "userName": "",
            "userAccount": 1,
            "userPassword": "",
            "userPhone": "",
            "userEmail": "",
            "headPhoto": "",
            "userCreatetime": "2022-06-30T08:35:11.000+00:00",
            "userAddress": "桂林电子科技大学花江校区",
            "userRole": "管理员",
            "userLevel": 100,
            "userIntroduce": null,
            "userStatus": 0,
            "money": 1.0E10
        }
    },
    checkClick() {
        if (this.checkSrc == '/common/icons/check-one.png') {
            this.checkSrc = '/common/icons/check-two.png'
        } else {
            this.checkSrc = '/common/icons/check-one.png'
        }

    },
    inputAccount(e) {
        this.userData.userAccount = e.value
    },
    inputPassword(e) {
        this.userData.userPassword = e.value
    },
    inputEmail(e) {
        this.userData.userEmail = e.value
    },
    inputPhone(e) {
        this.userData.userPhone = e.value
    },
    loginClick() {
        if (this.checkSrc == '/common/icons/check-one.png') {
            this.$element('popup').show();
            console.log("111")
        } else {
            // 每一个httpRequest对应一个http请求任务，不可复用
            let httpRequest = http.createHttp();
            httpRequest.request(
            // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定12
                "http://huangrui.vaiwan.com/users/register",
                {
                    method: 'POST',
                    extraData: JSON.stringify(this.userData)
                }, (err, data) => {
                if (!err) {
                    // data.result为http响应内容，可根据业务需要进行解析
                    console.info('Result:' + data.result);
                    console.info('code:' + data.responseCode);
                    // data.header为http响应头，可根据业务需要进行解析
                    console.info('header:' + JSON.stringify(data.header));
                    console.info('cookies:' + data.cookies); // 8+

                    this.myResult = JSON.parse(data.result);

                    console.info("接受到的code数据: " + this.myResult.code)
                    console.info("接受到的msg数据: " + this.myResult.msg)

                    console.info("输入的账号" + this.userData.userAccount)
                    console.info("输入的密码" + this.userData.userPassword)
                    console.info("输入的邮箱" + this.userData.userEmail)
                    console.info("输入的手机号" + this.userData.headPhoto)

                    if (this.myResult.code == 2011) {
                        prompt.showToast({
                            message: '注册成功'
                        }),
                        router.push({
                            uri: "pages/LoginPage/LoginPage"
                        })

                    } else {
                        prompt.showToast({
                            message: "注册失败"
                        })
                    }

                } else {
                    console.info('error:' + JSON.stringify(err));
                    // 当该请求使用完毕时，调用destroy方法主动销毁。
                    httpRequest.destroy();
                }
            });
            //            router.push({
            //                uri:'pages/index/index'
            //            })
        }

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
