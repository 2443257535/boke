<template>
  <div class="header">
    <el-menu
      class="el-menu-demo"
      :default-active="$route.path"
      active-text-color="#f17067"
      text-color="#fff"
      background-color="transparent"
      mode="horizontal"
      @select="selectedNav"
      router 
    >
      <el-menu-item v-for="(item,index) in navList" :index="item.path" :key="index">{{ item.meta.title }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeIndex: "1",
      navList: this.$router.options.routes[0].children,
    }
  },
  created(){
    console.log(this.$route)
    console.log(this.navList)
  },
  methods:{
    selectedNav(key,keyPath){
      console.log(key,keyPath)
    }
  }
}
</script>

<style>
.el-menu-demo{
  float: right;
}
</style>
