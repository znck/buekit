<script>
import { styleResolver, style } from '../utils'

export default {
  name: 'NavbarBurger',
  functional: true,
  abstract: true,
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)

    return style(
      h('button', ctx.data, [h('span'), h('span'), h('span')]),
      _('button'),
      _('navbar-burger')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/button.sass';
@import '~bulma/sass/components/navbar.sass';
</style>
