<template>
    <tabbar class="tabbarBox">
      <tabbar-item path='/home' @itemClick='itemClicks' colorActive="black">
        <img slot="item-icon-active" src="@/assets/image/home_xuanzhong_icon.png" alt="">
        <img slot="item-icon" src="@/assets/image/home_meixuanzhong_icon.png" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path='/classification' @itemClick='itemClicks' colorActive="black">
        <img slot="item-icon-active" src="@/assets/image/diary_xuanzhong_icon.png" alt="">
        <img slot="item-icon" src="@/assets/image/diary_meixuanzhong_icon.png" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path='/cart' @itemClick='itemClicks' colorActive="black">
        <img slot="item-icon-active" src="@/assets/image/home_xuanzhong_icon.png" alt="">
        <img slot="item-icon" src="@/assets/image/home_meixuanzhong_icon.png" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path='core' @itemClick='itemClicks' colorActive="black">
        <img slot="item-icon-active" src="@/assets/image/my_xuanzhong_icon.png" alt="">
        <img slot="item-icon" src="@/assets/image/my_meixuanzhong_icon.png" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
</template>

<script>
import tabbar from './Tabbar.vue'
import tabbarItem from './TabbarItem.vue'
export default {
    components:{
        tabbar,
        tabbarItem
    },
    methods:{
        itemClicks(itemClick){
            console.log(itemClick)
        }
  }
}
</script>

<style lang='less' scoped>

</style>