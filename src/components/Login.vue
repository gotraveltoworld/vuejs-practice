<template>
    <div data-tpl="Login">
        <div class="popup-black"></div>
        <div class="popup-msg">
            <el-form 
                ref="form" 
                :model="form"
                label-position="left"
                label-width="30%"
                class="admin-form">
                <el-form-item label="測試帳號">
                    <el-input v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="選擇登入方式">
                    <el-select v-model="form.loginMethod" placeholder="選擇登入方式" style="width: 100%;">
                    <el-option label="自然人登入" value="naturePersonal"></el-option>
                    <el-option label="工商憑證登入" value="business"></el-option>
                    <el-option label="工商憑證授權自然人登入" value="businessNature"></el-option>
                    </el-select>
                </el-form-item>
                <el-row>
                    <el-col :offset="10">
                        <el-button type="primary"  size="large" @click="onSubmit">登入</el-button>
                        <!--<el-form-item>
                            <el-button type="primary"  size="large" @click="onSubmit">登入</el-button>
                        </el-form-item>-->
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                form : {
                    code : '',
                    loginMethod : ''
                }
            };
        },
        methods : {
            onSubmit () {
                console.log('submit!');
            }
        }
    };
</script>
<style scoped>
    .admin-form {
        padding: 10px;
    }
    .popup-msg {
        background: #eeeeee;
        position: fixed;
        width: 40%;
        left: 30%;
        top: 30%;
        z-index:99;
    }
    .popup-black {
        background: #000000;
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 98;
        opacity: 0.8;
        overflow: scroll;
    }
</style>