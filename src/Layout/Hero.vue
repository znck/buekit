<script>
import { cssModule, mergeData } from '../utils'
import { colors, sizes, createTag } from '../mixins'

export default {
  name: 'Hero',
  functional: true,
  mixins: [colors, sizes, createTag('section')],
  props: {
    bold: {
      default: false,
      type: Boolean
    }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const classes = [s('hero')]
    const { bold, color, size, tag } = ctx.props
    const slots = ctx.slots()

    if (color) classes.push(s('is-' + color))
    if (size) classes.push(s('is-' + size))
    if (bold) classes.push(s('is-bold'))

    return h(tag, mergeData({ class: classes }, ctx.data), [
      slots.head && slots.head.length && h('div', { class: s('hero-head') }, slots.head),
      h('div', { class: s('hero-body') }, slots.default),
      slots.foot && slots.foot.length && h('div', { class: s('hero-foot') }, slots.foot)
    ])
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/layout/hero.sass';
</style>

