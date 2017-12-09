<script>
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'

export default {
  name: 'NavbarItem',
  functional: true,
  mixins: [createTag('div', true)],
  render (h, ctx) {
    const { abstract, tag } = ctx.props
    const _ = styleResolver(ctx.$style)

    const styles = [
      _('navbar-item')
    ]

    if (tag !== false) {
      return style(h(tag || 'div', ctx.data, ctx.children), styles)
    }

    return style(ctx.children[0], styles)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/navbar.sass';
</style>
