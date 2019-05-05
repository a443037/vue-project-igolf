<template>
    <div>
        {{$changeAvatar.isShow}}
        <Modal
            :value="$changeAvatar.isShow"
            title="更改您的头像"
            @on-ok="ok"
            @on-cancel="cancel"
        >
            <Step1 v-if="step == 1"  :changeFile="changeFile" :changeStep="changeStep" ></Step1>
            <Step2 v-if="step == 2" :file="file" :changeStep="changeStep" :changePicname="changePicname"></Step2>
            <Step3 v-if="step == 3" :picname="picname"></Step3>
 
            
            <div slot="footer">
                <Button @click="cancel">取消</Button>
            </div>
        </Modal>
        <button @click="show">按钮</button>
    </div>
</template>

<script>
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";
export default {
    data(){
        return {
            step : 1,
            file:null,
            picname:""
        }
    },
    methods:{
        ok(){
            this.$changeAvatar.hide();
        },
        cancel(){
            this.$changeAvatar.hide();
        },
        show(){
            this.$changeAvatar.show()
        },
        // 改变文件
        changeFile(file){
            this.file = file;
        },
        changeStep(step){
            this.step = step;
        },
        changePicname(picname){
            this.picname= picname;
        },
      
    },
    components:{
        Step1,
        Step2,
        Step3
    }
}
</script>
