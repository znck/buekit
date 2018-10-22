<script>
import PropTypes from '@znck/prop-types'
import { styleResolver, style } from '../utils'
import { createTag } from '../mixins'

export default {
  name: 'Container',
  functional: true,
  mixins: [createTag()],
  props: {
    type: PropTypes.oneOf('fluid', 'widescreen', 'fullhd')
  },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { type, tag } = ctx.props

    return style(
      h(tag, ctx.data, ctx.children),
      _('container'),
      type && _(`is-${type}`)
    )
  }
}
</script>

<style lang="scss" module>
@import '../_base.scss';
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/elements/container.sass';
</style>
