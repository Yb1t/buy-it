import router from '@system.router';
export default {
    data: {
        title: 'World',
        menu:["关注","发现","视频"],
        local:1,
    },
    click(e){
        this.local= e
    },
    myClick(){
        router.push({
            uri:'pages/personalPage/personalPage'
        })
    }

}
