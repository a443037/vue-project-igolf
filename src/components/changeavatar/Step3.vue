<template>
    <div>
        <img :src="`/api/uploads/${picname}`" >
    </div>
</template>

<script>
    export default {
        props:['picname']
    }
</script>

<style lang="scss" scoped>

</style>