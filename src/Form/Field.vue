<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { sizes, colors } from '../shared'

export default {
  name: 'Field',
  functional: true,
  props: {
    size: PropTypes.oneOf(sizes),
    color: PropTypes.oneOf(colors),
    label: PropTypes.string,
    help: PropTypes.string
  },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { color, size, label, help } = ctx.props
    const { label: slotLABEL, help: slotHELP, default: content = [] } = ctx.slots()

    return style(
      h('div', ctx.data, [
        (label || slotLABEL) && h('label', {class: [_('label'), size && _(`is-${size}`)]}, slotLABEL || label),
        ...content,
        (help || slotHELP) && h('p', {class: [_('help'), color && _(`is-${color}`)]}, slotHELP || help)
      ]),
      _('field')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/form.sass';
</style>
