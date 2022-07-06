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
        myAddress:[
            {
                "addressId":1,
                "addressName":"龙冰柱",
                "addressPhone":"18844602356",
                "addressMain":"广西壮族自治区桂林市桂林电子科技大学",
            },{
                "addressId":1,
                "addressName":"hhh",
                "addressPhone":"10044602356",
                "addressMain":"广西壮族自治区桂林市桂林电子科技大学花江校区",
            }
        ]
    },
    toUpdate(){
        router.push({
            uri:"pages/updateAddress/updateAddress"
        })
    },
    toAdd(){
        router.push({
            uri:"pages/addAddress/addAddress"
        })
    }
    /*onInit() {
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/address/123456",
            {

            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.myResult = JSON.parse(data.result);
                this.myAddress = this.myResult.body;

                console.info("接受到的code数据: "+this.myResult.code)
                console.info("接受到的msg数据: "+this.myResult.msg)
                console.info("接受到的order数据: "+this.myAddress.toString())

            } else {
                console.info('error:' + err.message);
            }
        });

    }*/
}
