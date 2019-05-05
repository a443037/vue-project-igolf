export default {
    install(Vue){
        Vue.prototype.$changeAvatar = new Vue({
            data: {
                isShow: false
            },
            methods: {
                show(){
                    this.isShow = true;
                },
                hide(){
                    this.isShow = false;
                }
            }
        });
    }
};
