<template>
    <div class="new-article">
        <h3>最新文章</h3>
        <ul>
            <li v-for="(list,i) in articleList" :key="i" v-show="i<10">
                <span :class="'num num'+(i+1)">{{ (i+1) }}</span>
                <span class="text">{{ list.title }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            articleList:[]
        }
    },
    created(){
        this.initAxios();
    },
    methods:{
        initAxios: async function(){
            let parmary = {}
            let res = await this.http.get('/newarticle',parmary);
            this.articleList = res.data.list;
        }
    }
}
</script>

<style scoped lang="scss">
.new-article{
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
    ul{
        padding-top: 10px;
        border-top: 3px solid #37ced7;
        li{
            width: 100%;
            height: 32px;
            line-height: 32px;
            border-bottom: 1px dotted #ccc;
            font-size: 14px;
            color: #333333;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .num{
                display: inline-block;
                margin: 0 10px 0 5px;
                width: 20px;
                height: 20px;
                line-height: 20px;
                background: #515151;
                border-radius: 3px;
                font-size: 12px;
                font-style: normal;
                color: #ffffff;
                text-align: center;
            }
            .num1{
                background: #37ced7;
            }
            .text{
                cursor: pointer;
                &:hover{
                    color: #37ced7;
                }
            }
        }
    }
}
</style>
