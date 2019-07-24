<template>
    <div class="layout">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <div class="mains">
                    <router-view />
                </div>
            </el-main>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
export default {
    components:{
        "Header": Header,
        "Footer": Footer,
    }
}
</script>

<style>
.el-header{
    background-color: rgba(0,0,0,.7);
}
.el-main{
    background: url('../assets/main_bg.jpg');
}
.header,.mains,.footer{
    width: 1200px;
    margin: 0 auto;
}
.el-footer{
    background-color: rgba(0,0,0,.7);
}
</style>
