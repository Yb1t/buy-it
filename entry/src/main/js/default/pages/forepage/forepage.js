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
            {"image1":"https://gd-hbimg.huaban.com/eeca39478a091f3bacaec3403cea7179b5e9a9eb155d2f-rmxSLW_fw658","image2":"https://gd-hbimg.huaban.com/2d234db9f8bd01d6628af69fb5fbaae33716448d4dd3b-EkQwla_fw658","label":"聚划算","tip":"限时抢"},
            {"image1":"https://gd-hbimg.huaban.com/7fed667eafaf45440612b6efe54b83b433a683857e1c8-6H2iO6_fw658","image2":"https://gd-hbimg.huaban.com/5cb6183df05de3a10e256cb2f6ae98388f774e251b302-udOTmN_fw658","label":"有好货","tip":"1元抢"},
            {"image1":"https://gd-hbimg.huaban.com/0b990e23b437a874a9650cb9867715148e67b9fd4fb0f-QW3CBk_fw658","image2":"https://gd-hbimg.huaban.com/e4653a4ff7ebb6158aba426bf453aed672473452e5fb-esEMfU_fw658","label":"直播区","tip":"直播中"},
            {"image1":"https://gd-hbimg.huaban.com/40f712e1ab6625c4984066d4e5bcc67361eef4bcd1a4-9lnoHM_fw658","image2":"https://gd-hbimg.huaban.com/17d6cefbf2a4d692e26abc8ee8f1191b8248ffff7879-WZ92t4_fw658","label":"特卖区","tip":"好口碑"},
        ],
        imagebar0:[
            {"icon":"common/icons/tianmao.png",tips:"天猫新品"},
            {"icon":"common/icons/juhuasuan.png",tips:"聚划算"},
            {"icon":"common/icons/farm.png",tips:"芭芭农场"},
            {"icon":"common/icons/eleme.png",tips:"饿了么"},
            {"icon":"common/icons/supermarket.png",tips:"天猫超市"},
            {"icon":"common/icons/chongzhi.png",tips:"充值中心"},
            {"icon":"common/icons/chips.png",tips:"淘宝吃货"},
            {"icon":"common/icons/jinbi.png",tips:"领淘金币"},
            {"icon":"common/icons/paimai.png",tips:"阿里拍卖"},
            {"icon":"common/icons/fnelei.png",tips:"分类"},
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
