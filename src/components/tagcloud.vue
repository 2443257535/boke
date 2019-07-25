<template>
    <div class="tag-cloud">
        <h3>标签</h3>
        <div class="btns">
            <el-button type="primary" size="mini">vue.js</el-button>
            <el-button type="primary" size="mini">ES6.js</el-button>
            <el-button type="primary" size="mini">webpack.js</el-button>
            <el-button type="primary" size="mini">node.js</el-button>
            <el-button type="primary" size="mini">jquery.js</el-button>
            <el-button type="primary" size="mini">mui.js</el-button>
            <el-button type="primary" size="mini">vant.js</el-button>
            <el-button type="primary" size="mini">element-ui.js</el-button>
            <el-button type="primary" size="mini">javascript.js</el-button>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.tag-cloud{
    background-color: #fff;
    padding: 20px 10px;
    margin-bottom: 20px;
    h3{
        padding-left: 15px;
        border-left: 5px solid #f40;
        font-weight: bold;
        margin-bottom: 10px;
        font-size: 1.2rem;
        line-height: 25px;
    }
    .btns{
        padding-top: 10px;
        border-top: 3px solid #37ced7;
        .el-button+.el-button {
            margin-left: 0;
            margin-bottom: 11px;
        }
    }
}

</style>
