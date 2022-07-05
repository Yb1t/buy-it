export default {
    data: {
        title: 'World',
        videoData:["/common/video/video2.mp4","/common/video/video1.mp4","/common/video/video0.mp4"],
        likeSrc:'/common/icons/like1.png',
        saveSrc:'/common/icons/star1.png',
        voiceSrc:'/common/icons/volume-notice.png',
        mute:'false'
    },
    onfinish(){

    },
    likeClick(){
        if (this.likeSrc==this.$t('/common/icons/like1.png')) {
            this.likeSrc=this.$t('/common/icons/like2.png')
        }else{
            this.likeSrc=this.$t('/common/icons/like1.png')
        }
    },
    saveClick(){
        if (this.saveSrc==this.$t('/common/icons/star1.png')) {
            this.saveSrc=this.$t('/common/icons/star2.png')
        }else{
            this.saveSrc=this.$t('/common/icons/star1.png')
        }
    },
    shareClick(){

    },
    voiceClick(){
        if (this.voiceSrc==this.$t('/common/icons/volume-notice.png')) {
            this.voiceSrc=this.$t('/common/icons/volume-mute.png')
            this.mute=this.$t('true')
        }else{
            this.voiceSrc=this.$t('/common/icons/volume-notice.png')
            this.mute=this.$t('false')
        }
    }

}
