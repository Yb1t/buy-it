export default {
    data: {
        title: 'World',
        topHeight: "100px",
        menudata:[
            {icon:"/common/icons/message.png", title:"消息", iconActive:"/common/icons/message_active.png"},
            {icon:"/common/icons/message.png", title:"消息", iconActive:"/common/icons/message_active.png"},
            {icon:"/common/icons/message.png", title:"消息", iconActive:"/common/icons/message_active.png"},
            {icon:"/common/icons/message.png", title:"消息", iconActive:"/common/icons/message_active.png"},
            {icon:"/common/icons/message.png", title:"消息", iconActive:"/common/icons/message_active.png"}
        ],
        array: [
            {avatar:"/common/icons/user.png", username: "阿猫", msg:"你好你好你好",msgCount:"1", date:"22/06/29"},
            {avatar:"/common/icons/user.png", username: "阿狗", msg:"你好你好你好",msgCount:"10", date:"22/06/29"},
            {avatar:"/common/icons/user.png", username: "张三", msg:"你好你好你好",msgCount:"2", date:"22/06/29"},
            {avatar:"/common/icons/user.png", username: "李四", msg:"你好你好你好",msgCount:"0", date:"22/06/29"},
            {avatar:"/common/icons/user.png", username: "王五", msg:"你好你好你好",msgCount:"1", date:"22/06/29"}
        ],
    },
    search(event){
        console.log(event.text)
    },
    clear(){
        console.log("清除未读")
    }
}
