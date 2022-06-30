export default {
    data: {
        title: "",
        selectedPage: 2
    },
    changePage(e){
        console.log(e.detail.index)
        this.selectedPage = e.detail.index
    }
}
