<script>
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'

export default {
  name: 'Menu',
  functional: true,
  mixins: [createTag('p')],
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { tag } = ctx.props

    return style(
      h(tag, ctx.data, ctx.children), _('menu-label')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/menu.sass';
</style>

