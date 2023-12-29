<template>
  <button
    hover-class="scale-98 shadow-md"
    class="w-full h-88rpx center border-none outline-none text-32rpx bg-primary text-white transition"
  >
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
