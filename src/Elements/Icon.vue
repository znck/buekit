<script>
import { cssModule, mergeData } from '../utils'
import { sizes } from '../mixins'

export default {
  name: 'Icon',
  functional: true,
  mixins: [sizes],
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { size } = ctx.props
    const styles = [
      s('icon'),
      size && s('is-' + size)
    ]

    return h('span', mergeData({ class: styles }, ctx.data), ctx.children)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/icon.sass';
</style>
