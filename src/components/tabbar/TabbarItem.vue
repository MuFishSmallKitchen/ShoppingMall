
<template>
    <div class="tabbarItem" @click="itemClick">
        <slot v-if="!isActives" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :style="classActive">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // isActive: true,
            name:'吃饭',
        }
    },
    props:{
        path:{
            type: String
        },
        colorActive:{
            type: String
        }
    },
    computed:{
       isActives(){
           return this.$route.path.indexOf(this.path) !== -1
       },
       classActive(){
        //    return this.$route.path.indexOf(this.path) !== -1
        return this.isActives ? {color: this.colorActive} : {}
       }
    },
    methods:{
        itemClick(){
            // console.log(this.path)
            this.$router.push({
                path:this.path,
                query:{
                    name:this.name
                }
            })
            this.$emit('itemClick', this.name)
        }
    }
}
</script>

<style scoped>
    .tabbarItem{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
        color: #999;
    }
    .tabbarItem img{
        width: 24px;
        height: 24px;
    }
    .active{
        color: black;
    }
</style>