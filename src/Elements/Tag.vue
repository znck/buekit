<script>
import { style, styleResolver } from '../utils'
import { colors, sizes, createTag } from '../mixins'

export default {
  name: 'Tag',
  functional: true,
  mixins: [ colors, sizes, createTag('span') ],
  props: {
    rounded: { default: false, type: Boolean },
    delete: { default: false, type: Boolean }
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
