import http from '@ohos.net.http';
export default {
    data: {
        title: 'World',
        modeFlag:'half',
        voiceSrc: '/common/icons/volume-notice.png',
        mute: 'false',
        message:'',
        content:'',
        myResult:{
            "body":[{}],
            "code":100,
            "msg":"街火速成功"
        },
        textData: [{
                       'likeNum': 1222,
                       'saveNum': 14,
                       'commentNum': '',
                       'shareNum': 44,
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@跑酷达人',
                       'title': '今日一小伙在街头跑酷',
                       'video': '/common/video/video2.mp4',
                   },
                   {
                       'likeNum': 1222,
                       'saveNum': 14,
                       'commentNum': '',
                       'shareNum': 44,
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@跑酷达人',
                       'title': '今日一小伙在街头跑酷',
                       'video': '/common/video/video2.mp4',
                   },
                   {
                       'likeNum': 1222,
                       'saveNum': 14,
                       'commentNum': '',
                       'shareNum': 44,
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@跑酷达人',
                       'title': '今日一小伙在街头跑酷',
                       'video': '/common/video/video2.mp4',
                   },
                   {
                       'likeNum': 1222,
                       'saveNum': 14,
                       'commentNum': '',
                       'shareNum': 44,
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@跑酷达人',
                       'title': '今日一小伙在街头跑酷',
                       'video': '/common/video/video2.mp4',
                   },
                   {
                       'likeNum': 1222,
                       'saveNum': 14,
                       'commentNum': '',
                       'shareNum': 44,
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@跑酷达人',
                       'title': '今日一小伙在街头跑酷',
                       'video': '/common/video/video2.mp4',
                   },
                   {
                       'likeNum': 1222,
                       'saveNum': 14,
                       'commentNum': '',
                       'shareNum': 44,
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@跑酷达人',
                       'title': '今日一小伙在街头跑酷',
                       'video': '/common/video/video2.mp4',
                   },
                   {
                       'likeNum': 1222,
                       'saveNum': 14,
                       'commentNum': '',
                       'shareNum': 44,
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@跑酷达人',
                       'title': '今日一小伙在街头跑酷',
                       'video': '/common/video/video2.mp4',
                   },
                   {
                       'likeNum': 1222,
                       'saveNum': 14,
                       'commentNum': '',
                       'shareNum': 44,
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@跑酷达人',
                       'title': '今日一小伙在街头跑酷',
                       'video': '/common/video/video2.mp4',
                   },


        ],
        commentData:[{'name':'李四','comment':'好看'}],
        commentData1:[{'name':'王五','comment':'瞧一瞧'}],
        commentData2:[{'name':'赵七','comment':'路过'}],
    },
    onInit() {
        // 每一个httpRequest对应一个http请求任务，不可复用
        let httpRequest = http.createHttp();
        httpRequest.request(
        // 填写http请求的url地址，可以带参数也可以不带参数。URL地址需要开发者自定义。GET请求的参数可以在extraData中指定
            "http://huangrui.vaiwan.com/video",
            {

            }, (err, data) => {
            if (!err) {
                // data.result为http响应内容，可根据业务需要进行解析
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                // data.header为http响应头，可根据业务需要进行解析
                console.info('header:' + data.header);

                this.myResult = JSON.parse(data.result);
                this.textData = this.myResult.body;

                console.info("接受到的code数据: "+this.myResult.code)
                console.info("接受到的msg数据: "+this.myResult.msg)
                console.info("接受到的order数据: "+this.textData)


            } else {
                console.info('error:' + err.message);
            }
        });

    },
    onfinish() {
    },
    likeClick(e) {
        if (this.textData[e].likeSrc == this.$t('/common/icons/like1.png')) {
            this.textData[e].likeSrc  = this.$t('/common/icons/like2.png')
            this.textData[e].likeNum=this.textData[e].likeNum+1
        } else {
            this.textData[e].likeSrc  = this.$t('/common/icons/like1.png')
            this.textData[e].likeNum=this.textData[e].likeNum-1
        }
    },
    saveClick(e) {
        if (this.textData[e].saveSrc == this.$t('/common/icons/star1.png')) {
            this.textData[e].saveSrc= this.$t('/common/icons/star2.png')
            this.textData[e].saveNum=this.textData[e].saveNum+1
        } else {
            this.textData[e].saveSrc = this.$t('/common/icons/star1.png')
            this.textData[e].saveNum=this.textData[e].saveNum-1
        }
    },
    shareClick() {
    },
    voiceClick() {
        if (this.voiceSrc == this.$t('/common/icons/volume-notice.png')) {
            this.voiceSrc = this.$t('/common/icons/volume-mute.png')
            this.mute = this.$t('true')
        } else {
            this.voiceSrc = this.$t('/common/icons/volume-notice.png')
            this.mute = this.$t('false')
        }
    },
//    打开评论区
    commentAdd(e){
        console.log(e)
        if (e==0) {
            this.$element('commentPanel').show()
        }else if (e==1) {
            this.$element('commentPanel1').show()
        }else{
            this.$element('commentPanel2').show()
        }

    },
    panelClose(){
        this.$element('commentPanel').close()
        this.$element('commentPanel1').close()
        this.$element('commentPanel2').close()
    },
//    评论区范围
    changeMode(e){
        this.modeFlag=e.mode
    },
//    获取输入的信息
    inputChange(e){
        this.message = e.value
        console.log("评论区内容："+e.value)
    },
//    评论发布
    sentComment(){
        this.commentData.push({
            name:'张三',
            comment:this.message
        })
        this.content=''
        this.message=''

    },
    sentComment1(){
        this.commentData1.push({
            name:'张三',
            comment:this.message
        })
        this.content=''
        this.message=''

    },
    sentComment2(){
        this.commentData2.push({
            name:'张三',
            comment:this.message
        })
        this.content=''
        this.message=''

    }
}
