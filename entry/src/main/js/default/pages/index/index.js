export default {
    data: {
        title: "",
        selectedPage:0
    },
    changePage(e){
        console.log(e.detail.index)
        this.selectedPage = e.detail.index
    }
}
