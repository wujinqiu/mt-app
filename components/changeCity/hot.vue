<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市：</dt>
      <dd v-for="item in list" :key="item.id" @click="handleSelect(item)">{{ item.name === '市辖区' ? item.province : item.name }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {},
  async mounted() {
    let {
      status,
      data: { hots },
    } = await this.$axios.get('/geo/hotCity')
    if (status === 200) {
      this.list = hots
    }
  },
  methods: {
    handleSelect: async function(item) {
      let self = this
      const name=item.name === '市辖区' ? item.province : item.name
      self.$store.dispatch('geo/setPosition', { city: name.replace('市', '') })
      const { status: status1 } = self.$axios.get('/geo/selectCity', {
        params: {
          city: self.$store.state.geo.position.city.replace('市', ''),
        },
      })

      self.$router.push({ path: '/' })
      const {
        status,
        data: { result },
      } = await self.$axios.get('/search/hotPlace', {
        params: {
          city: self.$store.state.geo.position.city.replace('市', ''),
        },
      })
      self.$store.dispatch('home/setHotPlace', status === 200 ? result : [])
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/css/changeCity/hot.scss';
</style>
