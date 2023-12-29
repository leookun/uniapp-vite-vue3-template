import transformerDirectives from '@unocss/transformer-directives'
import { presetIcons, type UserConfig } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      platform: 'uniapp',
      whRpx: true
    }),
    // attributify autocomplete
    presetWeappAttributify(),
    presetIcons()
  ],
  theme: {
    colors: {
      primary: 'var(--primary-color)'
    }
  },
  rules: [['shadow-md', { 'box-shadow': `0 0rpx 10rpx 0 var(--shadow-color) ` }]],
  shortcuts: [
    {
      center: 'flex justify-center items-center',
      transition: 'ease-in-out duration-300'
    }
  ],
  transformers: [
    transformerDirectives({
      enforce: 'pre'
    }),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass()
  ]
} as UserConfig
