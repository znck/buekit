<script>
import { cssModule, mergeData } from '../utils'
import { sizes, tag } from '../mixins'

export default {
  name: 'Section',
  functional: true,
  mixins: [sizes, tag],
  props: {
    tag: { default: 'section' }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { size, tag } = ctx.props
    const classes = [s('section')]

    if (size != '') classes.push(s('is-' + size))

    return h(tag, mergeData({ class: classes }, ctx.data), ctx.children)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/layout/section.sass';
</style>

