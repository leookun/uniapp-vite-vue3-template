<template>
  <text class="text-30rpx break-words">
    {{ JSON.stringify(APP_INFO, null, 10) }}
    {{ JSON.stringify(state, null, 10) }}
    {{ JSON.stringify(pages, null, 10) }}
  </text>
  <button @click="state.count++">add</button>
</template>

<script setup lang="ts">
import useContext from '@/hooks/useContext'
const pages = useContext('$pages')
const state = useContext('$state')
const APP_INFO = useContext('$APP_INFO')
</script>
