import document from '@ohos.document';
export default {
    data: {
        title: 'World',
        dynamic:[{"image":"/common/findImage/image11.png", "content":"好吃的", "imagesrc":"/common/icons/boy.png", "name":"桂电美食家"},
                 {"image":"/common/findImage/image12.png", "content":"超有料的水果桶", "imagesrc":"/common/icons/boy.png", "name":"超能吃大嘴巴"},
                 {"image":"/common/icons/boy.png", "content":"111不谢", "imagesrc":"/common/icons/boy.png", "name":"桂电一号"},
                 {"image":"/common/icons/boy.png", "content":"111不谢", "imagesrc":"/common/icons/boy.png", "name":"桂电一号"},

                 ]
    },
    tabchange(e){
//        console.info("Tab index: " + e.index )

    }
}
