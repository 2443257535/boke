<template>
    <div class="author-message">
        <div class="img">
            <img class="author" src="../assets/personal_author.png" alt="">
            <img src="../assets/personal_bg.jpg" alt="">
        </div>
        <div class="personal-msg">
            <img class="personal-img" src="../assets/main_bg.jpg" alt="">
            <p class="author-name">刘某某(共{{ num }}篇文章)</p>
            <p class="description">
                <i>“</i>前行的道路，多少会有磕磕绊绊，坚持自己的内心，勇敢的踏出那一步，风雨过后，便是美丽的彩虹。<i>”</i>		
            </p>
            <el-row class="icons">
                <el-col :span="6">
                    <img src="../assets/icon_github.png" alt="">
                    <p>github</p>
                </el-col>
                <el-col :span="6">
                    <img src="../assets/icon_github.png" alt="">
                    <p>wx</p>
                </el-col>
                <el-col :span="6">
                    <img src="../assets/icon_github.png" alt="">
                    <p>qq</p>
                </el-col>
                <el-col :span="6">
                    <img src="../assets/icon_github.png" alt="">
                    <p>新浪微博</p>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num: 18
        }
    }
}
</script>

<style scoped lang="scss">
.author-message{
    background-color: #fff;
    margin-bottom: 20px;
    position: relative;
    .img{
        .author{
            width: 50px;
            position: absolute;
            left: 30px;
        }
    }
    .personal-msg{
        text-align: center;
        .personal-img{
            width: 128px;
            border-radius: 50%;
            margin: 0 auto;
            display: block;
            margin-top: -64px;
        }
        .author-name{
            font-size: 1.2rem;
            font-weight: bold;
            margin: 10px 0;
        }
        .description{
            text-align: left;
            background: #dfdbdb;
            color: #888;
            font-size: .8rem;
            line-height: 24px;
            padding: 5px 10px;
            margin: 10px 0 20px;
            i{
                margin: 0 5px;
                font-size: 1.2rem;
                color: #888888;
            }
        }
        .icons{
            padding-bottom: 20px;
            .el-col{
                padding: 0 10px;
                p{
                    font-size: .8rem;
                    margin-top: 5px;
                    color: #747f8c;
                }
            }
        }
    }
}
</style>
