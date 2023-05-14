<template>
    <div style="display:flex">
    <el-input
            v-model="input"
            type="password"
            placeholder="请输入口令"
            show-password
            v-on:keyup.enter="onLogin"
    />
    <el-button 
            type = "primary" 
            v-on:click="onLogin"
            class = "login-button"
           >登录</el-button>
    </div>

</template>

<script lang="ts">
import { getCurrentInstance } from 'vue';
import {Vue} from 'vue-class-component';
import {JSEncrypt} from 'jsencrypt';
import { ElMessage } from 'element-plus'
import axios from 'axios';

axios.defaults.withCredentials = true; 
export default class extends Vue {
    input:string = "";
    private encrypt:JSEncrypt = new JSEncrypt();
    backend:string = "";
    onLogin(){
        let encrypted = this.encrypt.encrypt(this.input);
        console.log(encrypted);
        axios.post(
             this.backend + '/auth',
            {
                token: encrypted
            }
        ).then(res=>{
            if (res.data.status == "0") {
                window.location.href = this.backend + "/home.html";
            } else {
                ElMessage.error(res.data.message);
            }
        }).catch(err=>{
            console.log(err);
            ElMessage.error("登录请求异常");
        })
    }
    mounted(){
        this.backend = getCurrentInstance()?.appContext.config.globalProperties.$backend;
        axios.get(this.backend + '/preauth').then(res=>{
            if (res.data.status == "0") {
                switch (res.data.backend) {
                    case "baidupan": window.location.href = res.data.auth_url; break;
                    case "local": this.encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + res.data.message + '-----END PUBLIC KEY-----'); break;
                    default: ElMessage.error("未知的后端类型"); break;
                }
                
            } else if (res.data.status == "1") {
                window.location.href = this.backend + "/home.html";
            }
        }).catch(err=>{
            console.log(err);
            ElMessage.error("拉取预验证异常");
        })
    }
}
</script>

<style>
    .el-input__wrapper{
        height: 50px!important; 
         font-size: 15pt!important;
        border-top-right-radius: 0px!important;
        border-bottom-right-radius: 0px!important;
        border-top-left-radius: 10px!important;
        border-bottom-left-radius: 10px!important;
    }
    .login-button {
        height: 50px!important; 
        width: 120px!important; 
        font-size: 15pt!important;
        border-top-left-radius: 0px!important;
        border-bottom-left-radius: 0px!important;
        border-top-right-radius: 10px!important;
        border-bottom-right-radius: 10px!important;
    }
</style>
