<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'
import { colors, sizes } from '../shared'

export default {
  name: 'Tag',
  functional: true,
  mixins: [ createTag('span') ],
  props: {
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(sizes),
    rounded: PropTypes.bool.value(false),
    delete: PropTypes.bool.value(false)
  },
  render (h, ctx) {
    const s = styleResolver(ctx.$style)
    const { color, size, rounded, tag } = ctx.props

    const styles = [
      s('tag'),
      color && s('is-' + color),
      size && s('is-' + size),
      rounded && s('is-rounded'),
      ctx.props.delete && s('is-delete')
    ]

    return style(h(tag, ctx.data, ctx.children), styles)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/tag.sass';
</style>
