<script>
import { style, styleResolver } from '../utils'
import PropTypes from '@znck/prop-types'

export default {
  name: 'Footer',
  functional: true,
  props: {
    tag: PropTypes.string.value('footer')
  },
  render (h, ctx = {}) {
    const _ = styleResolver(ctx.$style)
    const { tag } = ctx.props

    return style(
      h(tag, ctx.data, ctx.children),
      _('footer')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/layout/footer.sass';
</style>

