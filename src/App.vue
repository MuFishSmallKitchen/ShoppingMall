<template>
  <div id="app">
    <router-view/>
    <tabbar-box></tabbar-box>
    
  </div>
</template>

<script>
import tabbarBox from './components/tabbar/TabbarBox.vue'
export default {
  components:{
    tabbarBox
  },
  
}
</script>
<style scoped>
  @import './assets/css/common.css';

</style>
