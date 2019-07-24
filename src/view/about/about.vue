<template>
    <div class="about">
        <div class="fl">
            <Breadcrumb></Breadcrumb>
            <div class="main-content">
                <ul>
                    <li v-for="(list,index) in textList" :key="index">
                        <h3>{{ list.title }}</h3>
                        <el-row>
                            <el-col :span="8">
                                <img :src="list.url" alt="">
                            </el-col>
                            <el-col :span="16" class="description">
                                <p>{{ list.description }}</p>
                                <el-button type="danger">阅读全文</el-button>
                            </el-col>
                        </el-row>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div class="fr">
            右侧
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb.vue';
export default {
    components:{
        "Breadcrumb": Breadcrumb
    },
    data(){
        return {
            textList: [
                {
                    title: '富文本编辑器quill.js————采坑指南',
                    imgUrl: '../../assets/about.jpg',
                    description: '最近一段时间，工作中的需求用到了富文本编辑器，刚好用到了quill.js，开发过程中遇到了各种各样的古怪问题，这篇笔记就总结一下。方便其他童鞋参考。由于小呆在开发中使用Vue框架开发。所以采用vue-quill-editor来进行示范。但本…',
                }
            ]
        }
    },
    created(){
        this.initList();
    },
    methods:{
        initList: async function(){
            //this.$loading()
            let parmary = {};
            const res = await this.http.get('/about',parmary)
            this.textList = res.data.list;
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
.main-content{
    background-color: #fff;
    padding: 10px 15px;
    ul li{
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px dashed #ddd;
        h3{
            line-height: 37px;
            font-size: 1.2rem;
            margin-bottom: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .description{
            padding-left: 15px;
            p{
                color: gray;
                font-size: .8rem;
                line-height: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }
            button{
                position: absolute;
                right: 0px;
                bottom: 0px;
            }
        }
    }
}
</style>
