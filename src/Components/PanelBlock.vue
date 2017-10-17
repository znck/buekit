<script>
import { addStyleToVnode, cssModule } from '../utils'
import { abstract, tag } from '../mixins'

export default {
  name: 'PanelBlock',
  functional: true,
  mixins: [abstract, tag],
  props: {
    icon: { default: false, type: Boolean },
    tabs: { default: false, type: Boolean }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { icon, tabs, abstract, tag } = ctx.props
    const styles = [icon && s('panel-icon'), tabs && s('panel-tabs'), !icon && !tabs && s('panel-block')]

    if (abstract) return addStyleToVnode(ctx.children[0], styles)

    return addStyleToVnode(
      h(icon ? 'span' : tag, ctx.data, ctx.children), styles
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/panel.sass';
</style>
