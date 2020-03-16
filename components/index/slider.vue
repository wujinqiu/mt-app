<!-- 轮播图 -->
<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item, idx) in list" :key="idx">
        <img :src="item.img" />
      </el-carousel-item>
    </el-carousel>
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
      list: [
        {
          url: 'https://www.baidu.com,',
          img: 'http://p0.meituan.net/codeman/00c8bc1c25fbcc6d0651b29a2057a8c1560658.png',
        },
        {
          url: 'https://www.baidu.com',
          img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        },
        {
          url: 'https://www.baidu.com',
          img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
        },
        {
          url: 'https://www.baidu.com',
          img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
        },
        {
          url: 'https://www.baidu.com',
          img: 'http://p1.meituan.net/codeman/bb0abb3435a60c44d87e90ed4237b61039329.jpg',
        },
      ],
    }
  },
}
</script>