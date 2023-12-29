<template>
  <button class="w-full">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({
  options: {
    styleIsolation: 'shared',
    virtualHost: true
  }
})
</script>
