<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/" class="edgegap">
            <el-breadcrumb-item :to="{path: '/index'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in list" :key="index" :to="{path: item.path}">{{ item.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:this.$store.state.breadcrunbList
        }
    },
    created(){
        //console.log(this.$store.state.breadcrunbList)
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
.breadcrumb{
    border-bottom: 1px solid #ddd;
    .el-breadcrumb{
        line-height: 45px;
        background-color: #fff;
    }
}


</style>
