<script>
import { cssModule, mergeData } from '../utils'
import { tag } from '../mixins'

export default {
  name: 'Media',
  functional: true,
  mixins: [tag],
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { tag } = ctx.props
    const classes = [s('media')]
    const slots = ctx.slots()

    return h(tag, mergeData({ class: classes }, ctx.data), [
      slots.left && slots.left.length && h('figure', { class: s('media-left') }, slots.left),
      h('div', { class: s('media-content') }, slots.default),
      slots.right && slots.right.length && h('div', { class: s('media-right') }, slots.right)
    ].filter(el => el))
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/media.sass';
</style>

