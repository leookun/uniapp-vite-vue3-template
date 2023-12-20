import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'
export default defineManifestConfig({
  name: 'ddd',
  appid: '',
  description: '',
  versionName: '1.0.0',
  versionCode: '100',
  transformPx: false,
  uniStatistics: {
    enable: false
  },
  vueVersion: '3'
})
