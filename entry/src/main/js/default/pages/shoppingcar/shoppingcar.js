import prompt from '@system.prompt';
export default {
    data: {
        title: 'World',
        menunum:0,
        menusize:25,
        menuweight:600,
        menusize1:20,
        menuweight1:400,
        menusize2:20,
        menuweight2:400,
        goodsdata:[{},{},{}],
        business:[{}],
        te:["n","1"],
        allnum:0,
        selall:"/common/images/white.png",
        choose:"/common/images/check.png",
    },
    onTextClick() {
        this.$element("apiMenu").show({x:380,y:38});
    },
    changemenu(data){
        this.menunum=data
        if(data==0){
            this.menusize=25
            this.menuweight=600

            this.menusize1=20
            this.menuweight1=400

            this.menusize2=20
            this.menuweight2=400
        }else if(data==1){
            this.menusize=20
            this.menuweight=400

            this.menusize1=25
            this.menuweight1=600

            this.menusize2=20
            this.menuweight2=400
        }else{
            this.menusize=20
            this.menuweight=400

            this.menusize1=20
            this.menuweight1=400

            this.menusize2=25
            this.menuweight2=600
        }
        console.log(data)

    },
    onMenuSelected(e) {
        prompt.showToast({
            message: e.value
        })
    },
    selectall(){
        if(this.allnum==0){
            this.selall="/common/images/check.png"
            this.allnum=1
        }else{
            this.selall="/common/images/white.png"
            this.allnum=0
        }

    }
}
