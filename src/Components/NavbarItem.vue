<script>
import { addStyleToVnode, mergeData, cssModule } from '../utils'
import { abstract, tag } from '../mixins'

export default {
  name: 'NavbarItem',
  functional: true,
  mixins: [abstract, tag],
  render (h, ctx) {
    const { abstract, tag } = ctx.props
    const s = cssModule(ctx.$style)

    const styles = [
      s('navbar-item')
    ]

    if (abstract) {
      return addStyleToVnode(ctx.children[0], styles)
    }

    return addStyleToVnode(
      h(tag, ctx.data, ctx.children), styles
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/navbar.sass';
</style>
