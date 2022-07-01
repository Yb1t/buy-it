import prompt from '@system.prompt';
export default {
    data: {
        title: 'World',
        goodsdata:[{},{},{}],
        business:[{},{}]
    },
    onTextClick() {
        this.$element("apiMenu").show({x:380,y:38});
    },
    onMenuSelected(e) {
        prompt.showToast({
            message: e.value
        })
    },
}
