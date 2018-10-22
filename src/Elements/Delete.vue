<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'
import { sizes } from '../shared'

export default {
  name: 'Delete',
  functional: true,
  mixins: [createTag('a')],
  props: { size: PropTypes.oneOf(sizes) },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { size, tag } = ctx.props
    const styles = [
      _('delete'),
      size && _('is-' + size)
    ]

    if (process.env.NODE_ENV !== 'production' && ctx.children && ctx.children.length) {
      console.warn('Delete component should not have any child nodes.')
    }

    return style(h(tag, ctx.data, []), styles)
  }
}
</script>

<style lang="scss" module>
@import '../_base.scss';
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/elements/other.sass';
</style>
