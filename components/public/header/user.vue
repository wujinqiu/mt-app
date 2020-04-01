<!--  -->
<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您，<span class="username">{{ user }}</span>
      [<nuxt-link to="/exit">退出</nuxt-link>]
    </template>
    <template v-else>
        <nuxt-link to="/login" class="login">立即登录</nuxt-link>
        <nuxt-link class="register" to="/register">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      user: '',
    }
  },
  async mounted(){
    const {status,data:{user}}=await this.$axios.get('/users/getUser')
    if(status===200){
      this.user=user
    }
  },
}
</script>
<style lang="scss">
//@import url(); 引入公共css类
</style>
