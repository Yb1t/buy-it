import http from '@ohos.net.http';

export default {
    data: {

        addressDate:{
            "addressName": "狗蛋",
            "addressPhone": "1669903620",
            "addressMain": "广西百色市右江区三四五街角16号",
            "userAccount": 123456,
            "addressDetail": "桂林电子科技大学花江校区"
        },
    },

    getNameInput(event){
       /* this.addressDate.addressName = event.value;
        console.log("收货人"+event.value);*/
        console.log("改变了名字（复制钱）")
        this.addressDate.addressName = event.value;
        console.info("改变了名字")
    },
    getPhoneInput(event){
        this.addressDate.addressPhone = event.value;
        console.info("手机号码"+event.value);
    },
    getMainInput(event){
        this.addressDate.addressMain = event.value;
        console.info("所在地区"+event.value);
    },
    getDetailInput(event){
        this.addressDate.addressDetail = event.value;
        console.info("详细地址"+event.value);
    },

    addAddress(){
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();

        console.info("添加的信息："+this.addressDate);

        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/address",
            {
                method:'POST', // 可选，默认为http.RequestMethod.GET
                // 当使用POST请求时此字段用于传递内容
                extraData: JSON.stringify(this.addressDate),

            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + JSON.stringify(data.header));
                console.info('cookies:' + data.cookies); // 8+

            } else {
                console.info('error:' + JSON.stringify(err));
                // 当该请求使用完毕时，调用destroy方法主动销毁。
                httpRequest.destroy();
            }
        }
        );
    }
}
