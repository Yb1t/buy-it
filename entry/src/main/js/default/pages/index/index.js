export default {
    data: {
        title: "",
        selectedPage:0
    },
    changePage(e){
        /*console.log(e.detail.index)*/
        console.info("页面索引："+e.detail.index)
        this.selectedPage = e.detail.index
    }
}
