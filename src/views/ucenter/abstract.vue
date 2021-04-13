<template>
    <div class="abstract">
        <div class="head">
                    <h2>添加作品摘要</h2>
        </div>
        <div class="clearfix">
            <div class="form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form-horizontal" label-width="80px" label-position="left">
                    <el-form-item label="作品名称" prop="email" required>
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="摘要内容" prop="password" required class="txtForm">
                        <el-input class="txt" type="textarea" v-model="ruleForm.password" ></el-input>
                    </el-form-item>
                    <div class="tip">摘要只能为100-300字之间</div>
                    <el-form-item>
                        <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">保  存</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                ruleForm: {
                    email:"面包a爱的发声范德萨范德萨",
                    password:"三大范德萨发生的方式发生所发生的发送阿道夫是的发送到发送到三大范德萨发生的是的发送到发送到的方式去玩儿晴儿围绕区委而为人企鹅无染色的发生嘎嘎是的委屈额我去分为非范德萨发生gas发二维废弃物的范德萨发生的个人啊啊大射大部分的故事ADGADGAHQERGFD黑色和奋斗过去国风大赏噶的高大哥确认该奋斗水污染哈代发货挖的是哈等等哈给对方"
                },
                rules:{}
            }
        },
        methods: {
            submitForm() {
                this.$refs.ruleForm.validate(valid=>{
                    if(valid){
                        this.getData("/team/login","post",this.ruleForm).then(res=>{
                            console.log(res)
                            if(res.data.code==200){
                                console.log("zou ")
                                // this.$router.push("/ucenter")
                            }
                        })
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .form-input {
        float: left;
    }
    .txtForm{
        margin-bottom: 6px;
    }
    .txt{
        width: 700px;
        height: 300px;
        /deep/.el-textarea__inner{
            width: 700px;
            height: 300px;
            outline: none;
            resize: none;
        }
    }
    .tip{
        margin-left: 80px;
        margin-bottom: 20px;
    }
    .ucenter-main .form .abstract .error{
        position: absolute;
        top: 0;
        bottom: -20px;
        left: 80px;
        right: 0;
        line-height: 24px;
        height: 24px;
        color: #f01414;
        font-size: 12px;
    }
</style>