<template>
    <div class="article-detail.vue">
            <div class="fl">
            <Breadcrumb></Breadcrumb>
            <div class="main-content">
                <div class="top">
                    <h3>{{ title }}</h3>
                    <div class="info">
                        <span>作者: {{ author }}</span>
                        <span>发布时间：{{ date }}</span>
                        <span>阅读({{ number }})</span>
                    </div>
                </div>
                <div class="article-text">
                    <p>自6月份本博客改版为情侣博客到现在，也差不多半年的时间了，博客的收录也渐渐多了起来，之前一直有想过设计一款针对移动端的模板，但是由于工作原因等等，一直没能开始。从上周开始到现在，经历了一周的时间，终于算是从设计到写页面再到套成wordpress模板，出了一个1.0.0版本。功能上和页面上还略有所不足，但是小呆已经迫不及待的想把静态页面先分享出来给那些喜欢折腾的小伙伴拿去用了。</p>
                    <p>可能有些小伙伴会问当初为什么不做成自适应的模板呢？作为一个前端，小呆这里还是要说下为什么不做成自适应网站的原因：</p>
                    <hr>
                    <div class="imgs">
                        <h5>图一</h5>
                        <img src="../../assets/main_bg.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="fr">
            <AuthorMessage></AuthorMessage>
            <NewArticle></NewArticle>
            <HotArticle></HotArticle>
            <Tag></Tag>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb.vue';
import AuthorMessage from '@/components/authormessage.vue';
import NewArticle from '@/components/newarticle.vue';
import HotArticle from '@/components/hotarticle.vue';
import TagCloud from '@/components/tagcloud.vue';
export default {
    components:{
        "Breadcrumb": Breadcrumb,
        "AuthorMessage": AuthorMessage,
        "NewArticle": NewArticle,
        "HotArticle": HotArticle,
        "Tag": TagCloud
    },
    data(){
        return {
            title: this.$route.query.title,
            author: '刘某某',
            date: '2019-07-25',
            number: 8834
        }
    },
    created(){
        console.log(this.$route.query.title)
    },
    methods:{
        
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
.main-content{
    background-color: #fff;
    padding: 30px 35px;
    .top{
        text-align: center;
        h3{
            font-size: 1.2rem;
            font-weight: bold;
            margin: 0;
        }
        .info{
            margin: 30px auto;
            border: 1px dashed #ddd;
            line-height: 30px;
            font-size: .8rem;
            color: #888888;
            span{
                margin: 20px;
            }
        }
    }
    .article-text{
        p{
            margin-bottom: 20px;
            text-indent: 2em;
            font-size: .9rem;
            line-height: 24px;
        }
        hr{
            border: 0;
            border-bottom: 1px dashed #cfcfcf;
            margin: 30px 0;
        }
        .imgs{
            text-align: center;
            font-weight: bold;
            h5{
                margin: 20px 0;
            }
        }
    }
}
</style>