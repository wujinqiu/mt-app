<!--  -->
<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a href="/" class="site-logo"></a>
        <span class="login">
          <em class="bold">已有美团账号？</em>
          <a href="/login">
            <el-button type="primary" size="small">登录</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" />
          <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
          <span class="status">{{ statusMsg }}</span>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" maxlength="4" />
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password" />
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input v-model="ruleForm.cpwd" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">同意以下协议并注册</el-button>
          <div class="error">{{ error }}</div>
        </el-form-item>
        <el-form-item>
          <a href="http://www.meituan.com/about/terms" class="f1" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CryptoJS from 'crypto-js'
export default {
  layout: 'blank',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      statusMsg: '',
      error: '',
      ruleForm: {
        name: '',
        code: '',
        pwd: '',
        cpwd: '',
        email: '',
      },
      rules: {
        name: [
          {
            required: true,
            type: 'string',
            message: '请输入昵称',
            trigger: 'blur',
          },
        ],
        cpwd: [
          {
            required: true,
            message: '确认密码',
            trigger: 'blur',
          },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.ruleForm.pwd) {
                callback(new Error('两次输入密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur',
          },
        ],
        pwd: [
          {
            required: true,
            message: '创建密码',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            type: 'email',
            message: '请输入邮箱',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    sendMsg() {
      const self = this
      let namePass
      let emailPass
      if (self.timerid) {
        return false
      }
      //验证用户名
      this.$refs['ruleForm'].validateField('name', valid => {
        namePass = valid
      })
      self.statusMsg = ''
      if (namePass) {
        return false
      }

      //验证邮箱
      this.$refs['ruleForm'].validateField('email', valid => {
        emailPass = valid
      })
      self.statusMsg = ''
      if (emailPass) {
        return false
      }
      if (!namePass && !emailPass) {
        //$axios 已在nuxt.config.js文件中modules导入
        self.$axios
          .post('/users/verify', {
            username: encodeURIComponent(self.ruleForm.name),
            email: self.ruleForm.email,
          })
          .then(({ status, data }) => {
            if (status === 200 && data && data.code === 0) {
              let count = 60
              self.statusMsg = `验证码已发送，剩余${count--}秒`
              self.timerid = setInterval(function() {
                self.statusMsg = `验证码已发送，剩余${count--}秒`
                if (count === 0) {
                  clearInterval(self.timerid)
                  self.statusMsg = ''
                }
              }, 1000)
            } else {
              self.statusMsg = data.msg
            }
          })
      }
    },
    register() {
      let self = this
      this.$refs['ruleForm'].validate((valid)=>{
        if(valid){
          self.$axios.post('/users/signup',{
            username:encodeURIComponent(self.ruleForm.name),
            password: CryptoJS.MD5(self.ruleForm.pwd).toString(),
            email:self.ruleForm.email,
            code:self.ruleForm.code
          }).then(({status,data})=>{
            if(status===200){
              if(data&&data.code===0){
                location.href='/login'
              }else{
                self.error=dat.msg
              }
            }else{
              self.error=`服务器出错啦，错误码：${status}`
            }
            setTimeout(() => {
              self.error=''
            }, 3000);
          })
        }
      })
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss">
//@import url(); 引入公共css类
@import '@/assets/css/register/index.scss';
</style>
