export default {
    data: {
        title: 'World',
        voiceSrc: '/common/icons/volume-notice.png',
        mute: 'false',
        textData: [{
                       'likeNum': '1222',
                       'saveNum': '14',
                       'commentNum': '45',
                       'shareNum': '44',
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@跑酷达人',
                       'title': '今日一小伙在街头跑酷',
                       'video': '/common/video/video2.mp4'
                   }, {
                       'likeNum': '12.1万',
                       'saveNum': '14555',
                       'commentNum': '455',
                       'shareNum': '442',
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@烟花达人',
                       'title': '今日一小伙在街头放烟花',
                       'video': '/common/video/video1.mp4'
                   }, {
                       'likeNum': '17777',
                       'saveNum': '577',
                       'commentNum': '144',
                       'shareNum': '44',
                       'likeSrc': '/common/icons/like1.png',
                       'saveSrc': '/common/icons/star1.png',
                       'name': '@玩具达人',
                       'title': '今日一小伙在街头穿玩偶套装',
                       'video': '/common/video/video0.mp4'
                   }]
    },
    onfinish() {

    },
    likeClick(e) {
        if (this.textData[e].likeSrc == this.$t('/common/icons/like1.png')) {
            this.textData[e].likeSrc  = this.$t('/common/icons/like2.png')
        } else {
            this.textData[e].likeSrc  = this.$t('/common/icons/like1.png')
        }
    },
    saveClick(e) {
        if (this.textData[e].saveSrc == this.$t('/common/icons/star1.png')) {
            this.textData[e].saveSrc= this.$t('/common/icons/star2.png')
        } else {
            this.textData[e].saveSrc = this.$t('/common/icons/star1.png')
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
    }
}
