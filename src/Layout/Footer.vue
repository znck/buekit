<script>
import { cssModule, mergeData } from '../utils'
import { tag } from '../mixins'

export default {
  name: 'Footer',
  functional: true,
  mixins: [tag],
  props: {
    tag: { default: 'footer' }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { tag } = ctx.props
    const classes = [s('footer')]

    return h(tag, mergeData({ class: classes }, ctx.data), ctx.children)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/layout/footer.sass';
</style>

