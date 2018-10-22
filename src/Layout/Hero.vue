<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'
import { colors, sizes } from '../shared'

export default {
  name: 'Hero',
  functional: true,
  mixins: [createTag('section')],
  props: {
    bold: PropTypes.bool.value(false),
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(sizes)
  },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { bold, color, size, tag } = ctx.props
    const slots = ctx.slots()

    return style(
      h(tag, ctx.data, [
        slots.head && h('div', { class: _('hero-head') }, slots.head),
        h('div', { class: _('hero-body') }, slots.default),
        slots.foot && h('div', { class: _('hero-foot') }, slots.foot)
      ]),
      _('hero'),
      color && _(`is-${color}`),
      size && _(`is-${size}`),
      bold && _('is-bold')
    )
  }
}
</script>

<style lang="scss" module>
@import '../_base.scss';
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/layout/hero.sass';
</style>

