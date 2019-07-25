<template>
    <div class="search">
        <div class="">
            <el-input placeholder="请输入内容" v-model="input">
                
            </el-input>
            <el-button type="primary" @click="searchValues">搜索</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            input: ''
        }
    },
    methods:{
        searchValues(){
            console.log(this.input)
        }
    }
}
</script>

<style scoped lang="scss">
.search{
    padding: 20px 10px;
    background-color: #fff;
    margin-bottom: 20px;
    position: relative;
    .el-input{
        input{
            padding-right: 70px;
        }
    }
    .el-button{
        position: absolute;
        right: 10px;
        top: 20px;
    }
}
</style>
