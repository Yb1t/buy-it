export default {
    data: {
        title: "",
        defaultIndex:0,
        menudata:[
            {icon:"/common/icons/home.png", title:"主页", iconActive:"/common/icons/home_active.png"},
            {icon:"/common/icons/find.png", title:"发现", iconActive:"/common/icons/find_active.png"},
            {icon:"/common/icons/message.png", title:"消息", iconActive:"/common/icons/message_active.png"},
            {icon:"/common/icons/cart.png", title:"购物车", iconActive:"/common/icons/cart_active.png"},
            {icon:"/common/icons/mine.png", title:"我的", iconActive:"/common/icons/mine_active.png"}
        ],

    },
    changeMenu(idx){
        this.$emit('onChangeMenu', {index: idx})
        console.log(idx)
        this.defaultIndex = idx
    },

}
