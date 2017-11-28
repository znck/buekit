<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'

export default {
  name: 'TableRow',
  functional: true,
  abstract: true,
  props: {
    selected: PropTypes.bool.value(false)
  },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { selected } = ctx.props

    const styles = selected && _('is-selected')

    if (!ctx.children || ctx.children.length !== 1 || ctx.children[0].tag !== 'tr') {
      return style(h('tr', ctx.data, ctx.children), styles)
    }

    return style(ctx.children[0], styles)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/table.sass';
</style>
