<template>
    <div class="index">
        <div class="banners">
            <el-carousel indicator-position="none" arrow="always">
                <el-carousel-item >
                    <img src="../assets/banner_1.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item >
                    <img src="../assets/banner_2.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item >
                    <img src="../assets/banner_3.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item >
                    <img src="../assets/banner_4.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item >
                    <img src="../assets/banner_5.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="fl">
            <div class="main-content">
                <ul>
                    <li v-for="i in 10" :key="i">
                        <p class="date">2019/07/10</p>
                        <el-row>
                            <el-col :span="8">
                                <img src="../assets/about.jpg" alt="">
                            </el-col>
                            <el-col :span="16" class="msg">
                                <h3 class="title">被忽视的QQ群流量和公众号当前的价值</h3>
                                <p class="description">
                                    分享一下微信私域流量闭门会的笔记，超级牛逼！ 1、年轻人流量还可以在 QQ 群      QQ 群有一个好处，尚德教育当时试了一个方式，QQ 搜索对应大专学校的 QQ 群，加群主，直接 QQ 号转微信，会有 70% 左右的添加率。适合代理业...
                                </p>
                                <p class="relevant">
                                    <span>100人看过</span>
                                    <span>6个人评论过</span>
                                </p>
                            </el-col>
                        </el-row>   
                    </li>
                </ul>
            </div>
        </div>
        <div class="fr">
            <!-- <SearchInput></SearchInput> -->
            <NewArticle></NewArticle>
            <HotArticle></HotArticle>
            <Tag></Tag>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb.vue';
// import Search from '@/components/search.vue';
import NewArticle from '@/components/newarticle.vue';
import HotArticle from '@/components/hotarticle.vue';
import TagCloud from '@/components/tagcloud.vue';
export default {
    components:{
        "Breadcrumb": Breadcrumb,
        // "SearchInput": Search,
        "NewArticle": NewArticle,
        "HotArticle": HotArticle,
        "Tag": TagCloud
    },
    data(){
        return {
            imgUrl:[
                {url: '../assets/banner_1.jpg'},
                {url: '/static/img/banner_2.e5f37c3.jpg'},
                {url: '/static/img/banner_3.52c838e.jpg'},
                {url: '/static/img/banner_4.d7ef462.jpg'},
                {url: '/static/img/banner_5.037479e.jpg'}
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.banners {
    margin-bottom: 20px;
}


.main-content{
    li{
        background-color: #fff;
        padding: 20px 10px;
        position: relative;
        margin-bottom: 20px;
        
        .date{
            position: absolute;
            top: -9px;
            left: 20px;
            background-color: red;
            color: #fff;
            line-height: 18px;
            padding: 3px 10px;
            &:before{
                content: '';
                position: absolute;
                left:-10px;
                top: 0;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 0 10px 10px;
                border-color: transparent transparent rgba(255,0,0,.8) transparent;
            }
        }
        .el-row{display:flex;}
        .msg{
            padding-left: 10px;
            position: relative;
            .title{
                font-size: 1.2rem;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .description{
                line-height: 20px;
                font-size: .8rem;
                color: #888;
                margin-bottom: 10px;
                text-indent: 2em;
            }
            .relevant{
                position: absolute;
                bottom: 0;
                left: 10px;
                line-height: 20px;
                font-size: .8rem;
                color: #888;
                span{
                    margin-right: 10px;
                }
            }
        }
        &:hover{
            cursor: pointer;
            .title{
                color: #f40;
                &:hover{
                    text-indent: 1em;
                }
            }
        }    
    }
}
</style>
