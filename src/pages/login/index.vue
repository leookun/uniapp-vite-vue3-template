<template>
  <div class="p-50rpx">
    <div class="text-48rpx">
      <div>欢迎使用</div>
      <div class="mt-8rpx">应收应付管理协同平台</div>
    </div>
    <MFormItem label="账号" label-width="3em" class="px-30rpx py-15rpx bg-#F2F3F5 mt-50rpx">
      <MInput placeholder="请输入账号" />
    </MFormItem>
    <MFormItem label="密码" label-width="3em" class="px-30rpx py-15rpx bg-#F2F3F5 mt-40rpx">
      <MInput placeholder="请输入密码" />
    </MFormItem>
    <MFormItem label="验证码" label-width="3em" class="px-30rpx py-15rpx bg-#F2F3F5 mt-40rpx">
      <MInput placeholder="请输入验证码" />
    </MFormItem>
    <MButton class="mt-50rpx">登陆</MButton>
  </div>
</template>

<script setup lang="ts">
const pages = useContext('$pages')
const state = useContext('$state')
const APP_INFO = useContext('$APP_INFO')
</script>
