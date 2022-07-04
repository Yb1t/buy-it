export default {
    data: {
        title: 'World',
        videoData:["/common/video/video2.mp4","/common/video/video1.mp4","/common/video/video0.mp4"],
        likeSrc:'/common/icons/like1.png',
        saveSrc:'/common/icons/star1.png'
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

    }

}
