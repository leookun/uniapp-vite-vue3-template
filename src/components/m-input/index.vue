<template>
  <input class="py-10rpx w-full px-20rpx h-auto" :placeholder="placeholder" />
</template>

<script setup lang="ts">
defineOptions({
  options: {
    styleIsolation: 'shared',
    virtualHost: true
  }
})
withDefaults(
  defineProps<{
    placeholder?: string
  }>(),
  {
    placeholder: '请输入'
  }
)
</script>
