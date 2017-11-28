<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver, toObject } from '../utils'
import { colors, sizes } from '../shared'

export default {
  name: 'Progress',
  functional: true,
  props: {
    max: PropTypes.number.value(100),
    value: PropTypes.number.isRequired,
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(sizes)
  },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { color, size, value, max } = ctx.props

    ctx.data = ctx.data || {}
    ctx.data.attrs = {
      ...toObject(ctx.data.attrs),
      value, max
    }

    return style(
      h('progress', ctx.data, [value + '%']),
      _('progress'),
      color && _(`is-${color}`),
      size && _(`is-${size}`)
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/progress.sass';
</style>
