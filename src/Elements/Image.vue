<script>
import { cssModule, mergeData, toMap } from '../utils'

const sizes = toMap(['16', '24', '32', '48', '64', '96', '128'])
const ratios = toMap(['square', '1by1', '4by3', '3by2', '16by9', '2by1'])

export default {
  name: 'Image',
  functional: true,
  props: {
    size: {
      type: [String, Number],
      validate: size => size === undefined || `${size}` in sizes
    },
    ratio: {
      type: String,
      validate: ratio => ratio === undefined || ratio in ratios
    },
    src: {
      type: String
    },
    alt: {
      type: String
    }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { size, ratio, src, alt } = ctx.props

    const classes = [
      s('image'),
      size && s('is-' + size + 'x' + size),
      ratio && s('is-' + ratio)
    ]

    return h('figure', mergeData({ class: classes }, ctx.data), ctx.children || [
      h('img', { attrs: { src, alt } })
    ])
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/image.sass';

.image {
  img { 
    height: auto;
    max-width: 100%
  }
}
</style>
