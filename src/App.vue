<script setup lang="ts">
useApplication(
  onRouteEach((to) => {
    console.log('路由跳转拦截', to)
  })
)
</script>
<style lang="less">
@import '@unocss/reset/sanitize/system-ui.css';
@import './uni.less';
</style>
