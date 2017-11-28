<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { sizes } from '../shared'

export default {
  name: 'Icon',
  functional: true,
  props: { size: PropTypes.oneOf(sizes) },
  render (h, ctx) {
    const s = styleResolver(ctx.$style)
    const { size } = ctx.props

    return style(
      h('span', ctx.data, ctx.children),
      s('icon'),
      size && s(`is-${size}`)
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/icon.sass';
</style>
