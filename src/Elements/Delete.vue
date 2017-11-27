<script>
import { style, styleResolver } from '../utils'
import { sizes, createTag } from '../mixins'

export default {
  name: 'Delete',
  functional: true,
  mixins: [sizes, createTag('a')],
  render (h, ctx) {
    const s = styleResolver(ctx.$style)
    const { size, tag } = ctx.props
    const styles = [
      s('delete'),
      size && s('is-' + size)
    ]

    if (process.env.NODE_ENV !== 'production' && ctx.children && ctx.children.length) {
      console.warn('Delete component should not have any child nodes.')
    }

    return style(h(tag, ctx.data, []), styles)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/other.sass';
</style>
