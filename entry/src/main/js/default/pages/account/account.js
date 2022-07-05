export default {
    data: {
        username:"名字",
        number:21345789,
        allnum:0,
        selall:"/common/images/white.png",
    },
    selectall(){
        if(this.allnum==0){
            this.selall="/common/images/check.png"
            this.allnum=1
        }else{
            this.selall="/common/images/white.png"
            this.allnum=0
        }

    }
}
