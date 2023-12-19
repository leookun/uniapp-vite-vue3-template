<template>
  <div class="text-30rpx">
    {{ JSON.stringify(pages) }}
    {{ JSON.stringify(state) }}
    {{ JSON.stringify(APP_INFO) }}
    <button @click="state.count++">add</button>
  </div>
</template>

<script setup =lang"ts">
const pages = useContext('$pages')
const state = useContext('$state')
const APP_INFO = useContext('$APP_INFO')
</script>

<style scoped></style>
