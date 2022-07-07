import router from '@system.router'
export default {
    data: {
        title: 'World',
        nav:[
            {"image":"","title":"淘宝"},
            {"image":"","title":"发现"},
            {"image":"","title":"消息"},
            {"image":"","title":"购物车"},
            {"image":"","title":"我的"}
        ],
        midcard:[
            {"image1":"","image2":"","label":"聚划算","tip":"限时抢"},
            {"image1":"","image2":"","label":"有好货","tip":"1元抢"},
            {"image1":"","image2":"","label":"直播区","tip":"直播中"},
            {"image1":"","image2":"","label":"特卖区","tip":"好口碑"},
        ],
        imagebar0:[
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"src/main/resources/base/media/specify.png",tips:""},
        ],
        imagebar1:[
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
            {"icon":"",tips:""},
        ],
        products:[
            {"src":"https://gd-hbimg.huaban.com/fd8fdc25246640dea9ffebc5e996f1f6619ceebc92f4-bfFCje_fw658"},
            {"src":"https://gd-hbimg.huaban.com/a34a47256e2373cda647b9439a2e109ccc358fe983a4-CWizHe_fw658"},
            {"src":"https://gd-hbimg.huaban.com/686314c79eb5af5f7f46f53e4296f1b5b4e4d703aca2-91gqFD_fw658"},
            {"src":"https://gd-hbimg.huaban.com/fd8fdc25246640dea9ffebc5e996f1f6619ceebc92f4-bfFCje_fw658"},
            {"src":"https://gd-hbimg.huaban.com/fd8fdc25246640dea9ffebc5e996f1f6619ceebc92f4-bfFCje_fw658"},
        ]
    },
    launch(){
        router.push({
            uri:'pages/forepage/browsepage/browsepage',
        });
    },

}
