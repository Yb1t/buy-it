import router from '@system.router';
export default {
    data: {
        title: 'World',
        checkSrc:'/common/icons/check-one.png'
    },
    checkClick(){
        if (this.checkSrc == '/common/icons/check-one.png') {
            this.checkSrc = '/common/icons/check-two.png'
        }else{
            this.checkSrc = '/common/icons/check-one.png'
        }

    },
    loginClick(){
        router.push({
            uri:'pages/index/index'
        })
    }
}
