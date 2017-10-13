<script>
import { addStyleToVnode } from '../utils'

export default {
  name: 'NavbarBurger',
  functional: true,
  abstract: true,
  render (h, ctx) {
    return addStyleToVnode(
      h('button', ctx.data, [
        h('span'),
        h('span'),
        h('span'),
      ]), [ctx.$style.button, ctx.$style['navbar-burger']])
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/button.sass';
@import '~bulma/sass/components/navbar.sass';
</style>
