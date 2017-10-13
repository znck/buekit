<script>
import { cssModule, mergeData, addStyleToVnode, isIgnoredVnode } from '../utils'

export default {
  name: 'MenuList',
  functional: true,
  render (h, ctx) {
    const { tag } = ctx.props

    return addStyleToVnode(
      h('ul', ctx.data, ctx.children.map(
        node => isIgnoredVnode(node) || node.tag === 'li' ? node : h('li', {}, [node])
      )), ctx.$style['menu-list']
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/menu.sass';
</style>

