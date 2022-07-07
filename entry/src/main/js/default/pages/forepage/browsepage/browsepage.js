import http from '@ohos.net.http';
import router from '@system.router';
export default {
    data: {
        result:{
          "body": [{}],
            "code":100,
            "msg":"没啥问题"
        },
        contents:"",
        title: 'World',
        product:[
            {"image":"https://gd-hbimg.huaban.com/89cfea577753e8b64ca52e4ce7ad9d615357809aeb28e-8ZduTw_fw658","context":"手指压直器手指损伤固定器","price":"￥20.93"},
            {"image":"https://gd-hbimg.huaban.com/123fe5c2bdc271eaa9fb0491f1344a2cf36903ad758845-wblId1_fw658","context":"Kracie沐浴露","price":"￥80.68"},
            {"image":"https://gd-hbimg.huaban.com/624a9ef662dc86714848d1d10e7632fc9003fde062186-6bHwnZ_fw658","context":"冷冻水蜜桃","price":"￥12.68"},
            {"image":"https://gd-hbimg.huaban.com/03087fdef68cf9df9e9f27c016a429fa1d2ffa9e788a1-TASJfC_fw658","context":"黄桃苹果水果溶豆","price":"￥10.01"},
            {"image":"https://gd-hbimg.huaban.com/169cd3d1842a868c30b2c34fa56758a0c62851d08698-7LMWro_fw658","context":"商品名","price":"￥90.22"},
            {"image":"https://gd-hbimg.huaban.com/0c307bde0c217f66574dd1ab122b48190afaaa83c7c9c-lJbHKW_fw658","context":"稿定胶原蛋白","price":"￥169.9"},
            {"image":"","context":"商品名"},
            {"image":"","context":"商品名"},
        ],
        icons:[
            {"src":"common/icons/application.png","context":"店铺"},
            {"src":"common/icons/stars.png","context":"收藏"},
            {"src":"common/icons/comments.png","context":"评论"},
            {"src":"common/icons/share.png","context":"分享"},
        ],
        products:[
            {"proId":1,
                      "proType":"数码产品",
                      "proName":"Sony a6400",
                      "price":7299.0,
                      "stock":15266,
                      "proMainPicture":"http://huangrui.vaiwan.comddhjf113543.4",
                      "proPicture":null,
                      "pictures":[{"picId":1,
                                      "picUrl":"http://huangrui.vaiwan.com123456ghghd",
                                      "proId":1},
                                  {"picId":2,
                                      "picUrl":"http://huangrui.vaiwan.com546784ddfff",
                                      "proId":1}],
                      "business":{"businessId":1,
                          "businessName":"鱼龙混杂",
                          "businessAccount":123,
                          "businessPassword":"123"},
                      "buyer":null,
                      "proCreatetime":"2022-06-30T11:37:52.000+00:00",
                      "proBuytime":null,
                      "proStatus":"在售",
                      "introduce":"该商品没有任何介绍"}
        ],
    },

    trip(id){
        router.push(
            {
                uri:"pages/productinfo/productinfo",
                params:{
                product:this.products[id]
                }

            }
        )
    },

    onInit() {
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/products",
            {

            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.result = JSON.parse(data.result);
                this.products = this.result.body;

                console.info("接受到的code数据: "+this.result.code)
                console.info("接受到的msg数据: "+this.result.msg)
                console.info("接受到的order数据: "+data.result)

            } else {
                console.info('error:' + err.message);
            }
        });

    }
}
