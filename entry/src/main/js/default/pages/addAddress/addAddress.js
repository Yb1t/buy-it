export default {
    data: {

        addressDate:{
            "addressName": "狗蛋",
            "addressPhone": "1669903620",
            "addressMain": "广西百色市右江区三四五街角16号",
            "addressDetail": "桂林电子科技大学花江校区"
        },

    },
    getNameInput(event){
        this.addressDate.addressName = event.value;
        console.log("收货人"+event.value);
    },
    getPhoneInput(event){
        this.addressDate.addressPhone = event.value;
        console.log("手机号码"+event.value);
    },
    getMainInput(event){
        this.addressDate.addressMain = event.value;
        console.log("所在地区"+event.value);
    },
    getDetailInput(event){
        this.addressDate.addressDetail = event.value;
        console.log("详细地址"+event.value);
    },

}
