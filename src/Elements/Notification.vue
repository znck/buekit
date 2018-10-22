<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'
import { colors } from '../shared'

export default {
  name: 'Notification',
  functional: true,
  mixins: [createTag('div', true)],
  props: { color: PropTypes.oneOf(colors) },
  render (h, ctx) {
    const { abstract, color, tag } = ctx.props
    const _ = styleResolver(ctx.$style)

    const styles = [
      _('notification'),
      color && _('is-' + color)
    ]

    if (!ctx.children || ctx.children.length !== 1 || !ctx.children[0].tag) {
      return style(h('div', ctx.data, ctx.children), styles)
    }

    return style(ctx.children[0], styles)
  }
}
</script>

<style lang="scss" module>
@import '../_base.scss';
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/elements/notification.sass';
</style>
