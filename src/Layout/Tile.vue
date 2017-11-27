<script>
import { style, styleResolver } from '../utils'
import PropTypes from '@znck/prop-types'

const _isInt = /^[\d]+$/

export default {
  name: 'Tile',
  functional: true,
  props: {
    size: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
      .validate(
        value => (size => 0 < size && size <= 12)(Number(value))
      ),
    ancestor: PropTypes.bool.value(false),
    parent: PropTypes.bool.value(false),
    child: PropTypes.bool.value(false),
    vertical: PropTypes.bool.value(false)
  },
  render (h, ctx = {}) {
    const s = styleResolver(ctx.$style)
    const { size, tag, ancestor, parent, child, vertical } = ctx.props

    return style(
      h(tag, ctx.data, ctx.children),
      s('tile'),
      size !== '' && s('is-' + size),
      ancestor && s('is-ancestor'),
      parent && s('is-parent'),
      child && s('is-child'),
      vertical && s('is-vertical')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/grid/tiles.sass';
</style>

