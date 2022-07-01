import http from '@ohos.net.http';
export default {
    data: {
        topHeight: "200px",
        level: 2,
        user: {
            username: "username",
            quote: "简介",
            phone: "12312341234",
            email: "xxx@xxx.com"
        }
    },
    onInit(){
//        let httpRequest = http.createHttp();
//        httpRequest.request("http://xdw.vaiwan.com/api/userinfo?id=1", (err, data) => {
//            if (!err) {
////                this.user = JSON.parse(data.result); //预览器出错 SyntaxError: unexpected token: 'PC'
//                console.info('Result:' + data.result);
//                console.info('code:' + data.responseCode);
//                console.info('header:' + data.header);
//            } else {
//                console.info('error:' + err.data);
//            }
//        });

    }
}
