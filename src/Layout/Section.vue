<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { sizes } from '../shared'
import { createTag } from '../mixins'

export default {
  name: 'Section',
  functional: true,
  mixins: [createTag('section')],
  props: { size: PropTypes.oneOf(sizes) },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { size, tag } = ctx.props

    return style(
      h(tag, ctx.data, ctx.children),
      _('section'),
      size && _(`is-${size}`)
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/layout/section.sass';
</style>

