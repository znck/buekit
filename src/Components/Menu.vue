<script>
import { cssModule, mergeData, addStyleToVnode } from '../utils'
import { tag } from '../mixins'

export default {
  name: 'Menu',
  functional: true,
  mixins: [tag],
  props: { tag: { default: 'aside' } },
  render (h, ctx) {
    const { tag } = ctx.props

    return addStyleToVnode(
      h(tag, ctx.data, ctx.children), ctx.$style['menu']
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/menu.sass';
</style>
