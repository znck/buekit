<script>
import { style, styleResolver } from '../utils'

// TODO: Merge with Box.vue
export default {
  name: 'AbstractBox',
  abstract: true,
  functional: true,
  render (h, ctx) {
    const s = styleResolver(ctx.$style)

    if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
      console.warn('Box is an abstract component. It requires exactly one child.')

      return null
    }

    return style(ctx.children[0], s('box'), ctx.data && ctx.data.class, ctx.data && ctx.data.staticClass)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/box.sass';
</style>

