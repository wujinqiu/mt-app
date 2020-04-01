<!--  -->
<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="search" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input" />
          <button class="el-button el-button--primary"><i class="el-icon-search" /></button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, idx) in $store.state.home.hotPlace.slice(0, 5)" :key="idx">
              <a :href="'/products?keyword=' + encodeURIComponent(item.name)">
              <!-- <nuxt-link :to="'/products?keyword=' + encodeURIComponent(item.name)"> -->
                {{ item.name }}
              <!-- </nuxt-link> -->
              </a>
            </dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(item, idx) in searchList" :key="idx">
              <nuxt-link  :to="'/products?keyword=' + encodeURIComponent(item.name)">
                {{ item.name }}
              </nuxt-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <nuxt-link v-for="(item, idx) in $store.state.home.hotPlace.slice(0, 5)" :key="idx" :to="'/products?keyword=' + encodeURIComponent(item.name)">{{ item.name }}</nuxt-link>
        </p>
        <ul class="nav">
          <li><nuxt-link to="/" class="takeout">美团外卖</nuxt-link></li>
          <li><nuxt-link to="/" class="movie">猫眼电影</nuxt-link></li>
          <li><nuxt-link to="/" class="hotel">美团酒店</nuxt-link></li>
          <li><nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link></li>
          <li><nuxt-link to="/" class="business">商家入驻</nuxt-link></li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund" />
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single" />
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue" />
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import _ from 'lodash'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      search: '',
      isFocus: false,
      hotPlace: [],
      searchList: [],
    }
  },
  //监听属性 类似于data概念
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.search
    },
    isSearchList: function() {
      return this.isFocus && this.search
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    focus() {
      this.isFocus = true
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input: _.debounce(async function() {
      let self = this
      let city = self.$store.state.geo.position.city.replace('市', '')
      self.searchList = []
      let {
        status,
        data: { top },
      } = await self.$axios.get('/search/top', {
        params: {
          input: self.search,
          city,
        },
      })
      self.searchList = top.slice(0, 10)
    }, 300),
  },
}
</script>
<style lang="scss">
//@import url(); 引入公共css类
</style>
