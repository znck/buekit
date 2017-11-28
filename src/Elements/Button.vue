<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'
import { colors } from '../shared'

export default {
  name: 'Button',
  functional: true,
  mixins: [createTag('button')],
  props: {
    color: PropTypes.oneOf(colors),
    outlined: PropTypes.bool.value(false),
    inverted: PropTypes.bool.value(false),
    hovered: PropTypes.bool.value(false),
    focused: PropTypes.bool.value(false),
    active: PropTypes.bool.value(false),
    loading: PropTypes.bool.value(false),
    static: PropTypes.bool.value(false),
    disabled: PropTypes.bool.value(false),
  },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { tag, color, outlined, inverted, hovered, focused, active, loading, disabled } = ctx.props

    return style(
      h(tag, ctx.data, ctx.children),
      _('button'),
      color && _(`is-${color}`),
      outlined && _('is-outlined'),
      inverted && _('is-inverted'),
      hovered && _('is-hovered'),
      focused && _('is-focused'),
      active && _('is-active'),
      loading && _('is-loading'),
      ctx.props.static && _('is-static'),
      disabled && _('is-disabled')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/button.sass';
</style>
