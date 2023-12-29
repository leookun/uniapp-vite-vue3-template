<template>
  <div :class="`flex flex-row items-center text-32rpx ${ddd}`">
    <div class="text-black font-bold flex-0" :style="{ width: labelWidth }">{{ label }}</div>
    <div class="flex-1 flex flex-row items-center">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  options: {
    styleIsolation: 'shared',
    virtualHost: true
  }
})
defineProps<{ label: string; labelWidth?: string; ddd?: String }>()
</script>
