<template>
    <div>
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <img src="images/logo.png" />
                    </div>
                    <div class="user_zone">
                        <Poptip trigger="click">
                            <Avatar v-if="avatar!=''" :src="'http://127.0.0.1:3000/' + avatar" />
                            <span>
                                {{nickname}}
                            </span>
                            <ul slot="content">
                                <li>
                                    <a href="javascript:;" @click="show">更改头像</a>
                                </li>
                                <li>
                                    <a href="">我的信息</a>
                                </li>
                                <li>
                                    <a href="">充值</a>
                                </li>
                                <li>
                                    <a href="">站内信</a>
                                </li>
                                <li>
                                    <a href="">退出登陆</a>
                                </li>
                            </ul>
                        </Poptip>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                    </div>
                   
                </Menu>
            </Header>
            <router-view></router-view>
            <Footer class="layout-footer-center">
                2019-2019 &copy; 考拉软件
            </Footer>
        </Layout>
    </div>
</template>

<script>
export default {
    computed: {
        nickname(){
            return this.$store.state.me.nickname;
        },
        avatar(){
            return this.$store.state.me.avatar;
        }
    },
    methods:{
        show(){
            this.$changeAvatar.show()
        }
    }
};
</script>

<style lang="less" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .ivu-layout-header{
        background:-webkit-linear-gradient(left, #3de1b4, #41f695 20%, #21d5dd);
        .ivu-menu-dark{
            background:none;
        }
    }
    .layout-logo{
        width: 300px;
        height: 30px;
        
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        img{
            width:100%;
        }
    }
    .layout-nav{
        width: 420px;
        float:right;
    }
    .user_zone{
        float:right;
        width:120px;
        cursor: pointer;
        span{
            color:white;
        }
        ul{
            list-style:none;
            li{
                font-size:16px;
                line-height: 24px;
                border-bottom:1px dotted #eee;
                padding:10px 0;
                a{
                    color:#333;
                }
            }
        }
        
    }
    .layout-footer-center{
        text-align: center;
    }
</style>