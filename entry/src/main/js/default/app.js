export default {
    onCreate() {
        console.info('AceApplication onCreate');
    },
    onDestroy() {
        console.info('AceApplication onDestroy');
    },
    currentMsg:{
        1: "测试测试全局",
        2: "测试测试全局2",
        3: "测试测试全局3",
        4: "测试测试全局4",
        5: "测试测试全局5",
    },
    user:{
        userId: 1
    },
    globalData:{
        loginUser:{
            "userId": 1,
            "userName": "",
            "userAccount": 0,
            "userPassword": "",
            "userPhone": "110",
            "userEmail": "298505@qq.com",
            "headPhoto": "/images/2022.07.05/2.png",
            "userCreatetime": "2022-06-30T08:35:11.000+00:00",
            "userAddress": "桂林电子科技大学花江校区",
            "userRole": "管理员",
            "userLevel": 100,
            "userIntroduce": null,
            "userStatus": 0,
            "money": 1.0E10
        },

    }
};
