import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';
export default {
    data: {
        title: 'World',
        checkSrc:'/common/icons/check-one.png',
        username:'',
        password:'',
        userData:[{}]
    },
    checkClick(){
        if (this.checkSrc == '/common/icons/check-one.png') {
            this.checkSrc = '/common/icons/check-two.png'
        }else{
            this.checkSrc = '/common/icons/check-one.png'
        }

    },
    inputAccount(e){
        this.username = e.value
    },
    inputPassword(e){
        this.username = e.value
    },
    loginClick(){
        if(this.checkSrc== '/common/icons/check-one.png'){
            this.$element('popup').show();
            console.log("111")
        }else{
            // 每一个httpRequest对应一个http请求任务，不可复用
            let httpRequest = http.createHttp();
            httpRequest.request(
            // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定12
                "http://huangrui.vaiwan.com/users/account/123456789",
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


                    if(this.username == this.userData.userAccount && this.password == this.userData.userPassword){
                                    router.push({
                                        uri:'pages/index/index'
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
