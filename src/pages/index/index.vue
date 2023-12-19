<template>
  <div>
    index
    {{ JSON.stringify(pages) }}
    {{ JSON.stringify(state) }}
    <button @click="state.count++">add</button>
  </div>
</template>

<script setup lang="ts">
import state from "@/state";
import { pages } from 'virtual:uni-pages';

</script>

<style scoped>

</style>