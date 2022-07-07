import router from '@system.router';
import prompt from '@system.prompt';

import http from '@ohos.net.http';
export default {
    data: {
        title: 'World',
        myResult:{
            "body":[{}],
            "code":100,
            "msg":"街火速成功"
        },
        updateAddressDate:{
            "addressId":1,
            "addressName": "狗蛋",
            "addressPhone": "1669903620",
            "addressMain": "广西百色市右江区三四五街角16号",
            "addressDetail": "桂林电子科技大学花江校区"
        },
    },
    getNameInput(event){
        /* this.addressDate.addressName = event.value;
        console.log("收货人"+event.value);*/
        console.log("改变了名字（复制钱）")
        this.updateAddressDate.addressName = event.value;
        console.info("改变了名字")
    },
    getPhoneInput(event){
        this.updateAddressDate.addressPhone = event.value;
        console.info("手机号码"+event.value);
    },
    getMainInput(event){
        this.updateAddressDate.addressMain = event.value;
        console.info("所在地区"+event.value);
    },
    getDetailInput(event){
        this.updateAddressDate.addressDetail = event.value;
        console.info("详细地址"+event.value);
    },
    deleteAddress(){
        console.info("删除的地址id："+ this.updateAddressDate.addressId)
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/address/"+this.updateAddressDate.addressId,
            {
                method:"DELETE"
            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.myResult = JSON.parse(data.result);

                console.info("接受到的code数据: "+this.myResult.code)
                console.info("接受到的msg数据: "+this.myResult.msg)

                if(this.myResult.code == 2021){
                    router.push({
                        uri:"pages/myAddress/myAddress",
                    })
                    prompt.showToast({
                        message:"删除成功"
                    })
                }else{
                    prompt.showToast({
                        message:"删除失败，请重试"
                    })
                }


            } else {
                console.info('error:' + err.message);
            }
        });
    },
    updateAddress(){
        console.info("修改的地址id："+ this.updateAddressDate.addressId)
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/address",
            {
                method:"PUT",
                extraData: JSON.stringify(this.updateAddressDate),
            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.myResult = JSON.parse(data.result);

                console.info("接受到的code数据: "+this.myResult.code)
                console.info("接受到的msg数据: "+this.myResult.msg)

                if(this.myResult.code == 2031){
                    router.push({
                        uri:"pages/myAddress/myAddress",
                    })
                    prompt.showToast({
                        message:"修改成功"
                    })
                }else{
                    prompt.showToast({
                        message:"修改失败，请重试"
                    })
                }
            } else {
                console.info('error:' + err.message);
            }
        });
    }
}
