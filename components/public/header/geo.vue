<template>
  <div class="m-geo">
    <i class="el-icon-location"/>{{ $store.state.geo.position.city }}
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>
    [虞城 宁陵 曹县]
  </div>
</template>

<script>
    export default {
        name: "geo"
    }
</script>

<style lang="css">

</style>
