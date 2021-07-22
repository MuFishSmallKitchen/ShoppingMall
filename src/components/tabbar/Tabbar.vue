<template>
    <div id="tabbarBox">
        <div class="tabbar">
            <slot></slot>
        </div>
    </div>
        
    
</template>

<script>
// import tabbarItem from './TabbarItem.vue'
export default {
    // components:{
    //     tabbarItem
    // }
}
</script>

<style scoped>
    /* #tabbarBox{
       
    } */
    .tabbar{
        position: fixed;
        bottom: 0;
        display: flex;
        display: -webkit-flex;
        width: 100%;
        border-top: 1px solid #808080;
        padding: 10px 0;
    }
    
</style>