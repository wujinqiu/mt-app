<!--  -->
<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd  :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd  :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,idx) in cur" :key="idx">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.img" class="image">
            <ul class="cbody">
              <li class="title">{{item.title}}</li>
              <li class="pos">{{item.pos}}</li>
              <li class="price">￥<em>{{item.price}}</em><span>/起</span></li>
            </ul>
          </el-card>
      </li>
    </ul>
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
      kind: 'all',
      list: {
        all: [
          {
            img:'https://p1.meituan.net/bbia/7a6c17a0a05cbe21f447bf20fb57b58266917.jpg@368w_208h_1e_1c',
            title:'储缘蛋糕（安兜店）',
            price:148,
            pos:'蛋糕14选1,约6英寸'
          },
           {
            img:'https://p1.meituan.net/bbia/7a6c17a0a05cbe21f447bf20fb57b58266917.jpg@368w_208h_1e_1c',
            title:'储缘蛋糕（安兜店）',
            price:148,
            pos:'蛋糕14选1,约6英寸'
          },
           {
            img:'https://p1.meituan.net/bbia/7a6c17a0a05cbe21f447bf20fb57b58266917.jpg@368w_208h_1e_1c',
            title:'储缘蛋糕（安兜店）',
            price:148,
            pos:'蛋糕14选1,约6英寸'
          },
           {
            img:'https://p1.meituan.net/bbia/7a6c17a0a05cbe21f447bf20fb57b58266917.jpg@368w_208h_1e_1c',
            title:'储缘蛋糕（安兜店）',
            price:148,
            pos:'蛋糕14选1,约6英寸'
          }
          , {
            img:'https://p1.meituan.net/bbia/7a6c17a0a05cbe21f447bf20fb57b58266917.jpg@368w_208h_1e_1c',
            title:'储缘蛋糕（安兜店）',
            price:148,
            pos:'蛋糕14选1,约6英寸'
          }, {
            img:'https://p1.meituan.net/bbia/7a6c17a0a05cbe21f447bf20fb57b58266917.jpg@368w_208h_1e_1c',
            title:'储缘蛋糕（安兜店）',
            price:148,
            pos:'蛋糕14选1,约6英寸'
          }
        ],
        part: [ {
            img:'https://p0.meituan.net/msmerchant/40eef62f5abc62533171e7e6dba17f0a222065.jpg@368w_208h_1e_1c',
            title:'盟重烧烤｜明发美食地标店',
            price:188,
            pos:'盟重3-4人餐，提供免费WiFi'
          },
           {
            img:'https://p0.meituan.net/msmerchant/40eef62f5abc62533171e7e6dba17f0a222065.jpg@368w_208h_1e_1c',
            title:'盟重烧烤｜明发美食地标店',
            price:188,
            pos:'盟重3-4人餐，提供免费WiFi'
          },
           {
            img:'https://p0.meituan.net/msmerchant/40eef62f5abc62533171e7e6dba17f0a222065.jpg@368w_208h_1e_1c',
            title:'盟重烧烤｜明发美食地标店',
            price:188,
            pos:'盟重3-4人餐，提供免费WiFi'
          },
           {
            img:'https://p0.meituan.net/msmerchant/40eef62f5abc62533171e7e6dba17f0a222065.jpg@368w_208h_1e_1c',
            title:'盟重烧烤｜明发美食地标店',
            price:188,
            pos:'盟重3-4人餐，提供免费WiFi'
          },
           {
            img:'https://p0.meituan.net/msmerchant/40eef62f5abc62533171e7e6dba17f0a222065.jpg@368w_208h_1e_1c',
            title:'盟重烧烤｜明发美食地标店',
            price:188,
            pos:'盟重3-4人餐，提供免费WiFi'
          },],
        spa: [{
            img:'https://p0.meituan.net/wedding/42ae0a07a6e3c8263acb79c8814ab0a11024363.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            title:'树一派·美甲美容工房（卧龙店）',
            price:144,
            pos:'树一派·美甲美容工房（卧龙店）'
          },
          {
            img:'https://p0.meituan.net/wedding/42ae0a07a6e3c8263acb79c8814ab0a11024363.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            title:'树一派·美甲美容工房（卧龙店）',
            price:144,
            pos:'树一派·美甲美容工房（卧龙店）'
          },
          {
            img:'https://p0.meituan.net/wedding/42ae0a07a6e3c8263acb79c8814ab0a11024363.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            title:'树一派·美甲美容工房（卧龙店）',
            price:144,
            pos:'树一派·美甲美容工房（卧龙店）'
          },
          {
            img:'https://p0.meituan.net/wedding/42ae0a07a6e3c8263acb79c8814ab0a11024363.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            title:'树一派·美甲美容工房（卧龙店）',
            price:144,
            pos:'树一派·美甲美容工房（卧龙店）'
          },],
        movie: [ ],
        travel: [{
            img:'https://p1.meituan.net/tdchotel/d85589b93b86741da3a728c34282663d755592.jpg@368w_208h_1e_1c',
            title:'厦门威斯汀酒店',
            price:816,
            pos:'网红酒店'
          },{
            img:'https://p1.meituan.net/tdchotel/d85589b93b86741da3a728c34282663d755592.jpg@368w_208h_1e_1c',
            title:'厦门威斯汀酒店',
            price:816,
            pos:'网红酒店'
          },{
            img:'https://p1.meituan.net/tdchotel/d85589b93b86741da3a728c34282663d755592.jpg@368w_208h_1e_1c',
            title:'厦门威斯汀酒店',
            price:816,
            pos:'网红酒店'
          },{
            img:'https://p1.meituan.net/tdchotel/d85589b93b86741da3a728c34282663d755592.jpg@368w_208h_1e_1c',
            title:'厦门威斯汀酒店',
            price:816,
            pos:'网红酒店'
          },],
      },
    }
  },
  //监听属性 类似于data概念
  computed: {
    cur(){
      return this.list[this.kind]?this.list[this.kind].slice(0,6):[]
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    over: async function (e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self = this
      this.kind = dom.getAttribute('kind')
      // if (tag === 'dd') {
      //   this.kind = dom.getAttribute('kind')
      //   let keyword = dom.getAttribute('keyword')
      //   let {status,data:{count,pois}}=await self.$axios.get('/search/resultsByKeywords',{
      //     params:{
      //       keyword,
      //       city:self.$store.state.geo.position.city
      //     }
      //   })
      //   if(status===200&&count>0){
      //     let r= pois.filter(item=>item.photos.length).map(item=>{
      //       return {
      //         title:item.name,
      //         pos:item.type.split(';')[0],
      //         price:item.biz_ext.cost||'暂无',
      //         img:item.photos[0].url,
      //         url:'//abc.com'
      //       }
      //     })
      //     self.list[self.kind]=r.slice(0,9)
      //   }else{
      //     self.list[self.kind]=[]
      //   }
      // }
    }
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
@import '@/assets/css/index/artistic.scss';
</style>
