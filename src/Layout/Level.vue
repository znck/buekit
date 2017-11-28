<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'

export default {
  name: 'Level',
  functional: true,
  mixins: [createTag()],
  props: {
    left: PropTypes.bool.value(false),
    right: PropTypes.bool.value(false),
    item: PropTypes.bool.value(false),
    mobile: PropTypes.bool.value(false)
  },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { left, right, item, tag, mobile } = ctx.props

    return style(
      h(tag, ctx.data, ctx.children),
      left && _('level-left'),
      right && _('level-right'),
      item && _('level-item'),
      !(left || right || item) && _('level'),
      mobile && _('is-mobile')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/level.sass';
</style>
