<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { sizes } from '../shared'

export default {
  name: 'Table',
  functional: true,
  props: {
    bordered: PropTypes.bool.value(false),
    striped: PropTypes.bool.value(false),
    hoverable: PropTypes.bool.value(false),
    narrow: PropTypes.bool.value(false),
    size: PropTypes.oneOf(sizes)
  },
  render (h, ctx) {
    const { abstract, bordered, hoverable, narrow, size, striped } = ctx.props
    const _ = styleResolver(ctx.$style)

    const styles = [
      _('table'),
      bordered && _('is-bordered'),
      hoverable && _('is-hoverable'),
      narrow && _('is-narrow'),
      size && _('is-' + size),
      striped && _('is-striped')
    ]

    if (!ctx.children || ctx.children.length !== 1 || ctx.children[0].tag !== 'table') {
      return style(h('table', ctx.data, ctx.children), styles)
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
