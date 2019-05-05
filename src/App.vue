<template>
    <div>
        <router-view></router-view>
        <changeavatar />
    </div>
</template>

<script>
import changeavatar from  './components/changeavatar/ChangeAvatar.vue';
export default {
    components:{
        changeavatar
    }
};
</script>

<style lang="less" scoped>
    h1{
        color:red;
    }
</style>