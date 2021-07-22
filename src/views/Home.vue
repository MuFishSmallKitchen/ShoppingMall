<template>
    <div>
        <h2 ref="hello">首页</h2>
        <div>
            {{$store.state.age}}
            {{$store.state.name}}
            {{$store.state.msg}}
        </div>

        <div>
            {{$store.state.modulesA.moduleAge}}
            {{$store.state.modulesA.name}}
            <button @click="setMoudelA">修改模块</button>
        </div>

        <div class="bigBox">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="bigBox2">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div class="buttons">
            <button @click="setAge">修改数据</button>
            <button @click="addName">增加数据</button>
            <button @click="syncAddName">异步增加</button>
        </div>

    </div>
    
</template>

<script>
import {request} from '../request/request'
export default {
    name: 'home',
    data(){
        return{
            // name:'',
            name: '张三'
        }
    },
    created(){
        console.log(this.$store.state.modulesA.moduleAge)
        // console.log(this.$route.query)
        request({
            url: 'login',
            method: 'post',
            params: {
                username: 'admin',
                password: 123456
            }
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },
    methods:{
        setAge(){
            this.$store.commit('setAge', 10)
        },
        addName(){
            this.$store.commit('addName', '张三')
            // this.$nextTick(()=>{
            //     // this.name = this.$refs['hello']t
            //     console.log(this.$refs['hello'])
            //     // this.$store.commit('addName', this.name)
            //     this.$store.dispatch('asyncAddName', '张三')
            // })
        },
        syncAddName(){
            this.$store.dispatch('asyncAddName', '李四').then(res=>{
                console.log(res)
            })
        },
        setMoudelA(){
            this.$store.commit('modulesA/setStateWw', '老六')
        }
    }
}
</script>

<style lang='less' scoped>
    .bigBox{
        display: -webkit-flex;
        display: flex;
        justify-content: space-around;
        div:first-child {
            width: 100px;
            height: 100px;
            background: blue;
        }
        div:nth-child(2) {
            flex: 1;
            height: 100px;
            background: yellow;
            
        }
        div:last-child{
            width: 100px;
            height: 100px;
            background: red;
        }
    }

    .bigBox2{
        display: -webkit-flex;
        display: flex;
        justify-content:space-between;
        margin-top: 30px;
        div:first-child {
            flex: 1;
            height: 100px;
            background: blue;
        }
        div:nth-child(2) {
            flex: 1;
            height: 100px;
            background: yellow;
            
        }
        div:last-child{
            flex: 1;
            height: 100px;
            background: red;
        }
    }

    .buttons{
        margin-top: 30px;
    }

</style>