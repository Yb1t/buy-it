import document from '@ohos.document';
export default {
    data: {
        title: 'World',
        dynamic:[{"image":"/common/icons/boy.png", "content":"111不谢", "imagesrc":"/common/icons/boy.png", "name":"桂电一号"},
                 {"image":"/common/icons/boy.png", "content":"111不谢", "imagesrc":"/common/icons/boy.png", "name":"桂电一号"},
                 {"image":"/common/icons/boy.png", "content":"111不谢", "imagesrc":"/common/icons/boy.png", "name":"桂电一号"},
                 {"image":"/common/icons/boy.png", "content":"111不谢", "imagesrc":"/common/icons/boy.png", "name":"桂电一号"},

                 ]
    },
    tabchange(e){
        console.info("Tab index: " + e.index )

    }
}
