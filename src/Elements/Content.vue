<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'
import { sizes } from '../mixins'

export default {
  name: 'Content',
  functional: true,
  mixins: [createTag('div', true)],
  props: { size: PropTypes.oneOf(sizes) },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { size, tag } = ctx.props

    const styles = [
      _('content'),
      size && _('is-' + size)
    ]
    if (tag !== false) {
      return style(h(tag || 'div', ctx.data, ctx.children), styles)
    }

    return style(ctx.children[0], styles)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/content.sass';
</style>

