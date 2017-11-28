<script>
import { style, styleResolver, isIgnoredVnode } from '../utils'

export default {
  name: 'MenuList',
  functional: true,
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { tag } = ctx.props

    return style(
      h('ul', ctx.data, (ctx.children || []).map(
        node => isIgnoredVnode(node) || node.tag === 'li' ? node : h('li', {}, [node])
      )),  _('menu-list')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/menu.sass';
</style>

