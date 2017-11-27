<script>
import { style, styleResolver } from '../utils'
import PropTypes from '@znck/prop-types'

export default {
  name: 'Media',
  functional: true,
  props: {
    tag: PropTypes.string.value('div')
  },
  render (h, ctx) {
    const s = styleResolver(ctx.$style)
    const { tag } = ctx.props
    const classes = [s('media')]
    const slots = ctx.slots()

    return style(
        h(tag, ctx.data, [
        slots.left && slots.left.length && h('figure', { class: s('media-left') }, slots.left),
        h('div', { class: s('media-content') }, slots.default),
        slots.right && slots.right.length && h('div', { class: s('media-right') }, slots.right)
      ].filter(el => el)), classes)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/media.sass';
</style>

