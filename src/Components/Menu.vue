<script>
import { styleResolver, style } from '../utils'
import { createTag } from '../mixins'

export default {
  name: 'Menu',
  functional: true,
  mixins: [createTag('aside')],
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { tag } = ctx.props

    return style(
      h(tag, ctx.data, ctx.children), _('menu')
    )
  }
}
</script>

<style lang="scss" module>
@import '../_base.scss';
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/components/menu.sass';
</style>
