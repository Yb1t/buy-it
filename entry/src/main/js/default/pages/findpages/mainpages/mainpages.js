export default {
    data: {
        title: 'World',
        menu:["关注","发现","视频"],
        local:1,
    },
    click(e){
        console.log(e)
        this.local= e
    }

}
