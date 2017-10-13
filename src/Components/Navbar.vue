<script>
import { addStyleToVnode, cssModule } from '../utils'
import { colors, tag } from '../mixins'

import Burger from './NavbarBurger.vue'

export default {
  name: 'Navbar',
  functional: true,
  mixins: [colors, tag],
  model: {
    prop: 'active',
    event: 'activate'
  },
  props: {
    active: { default: false, type: Boolean },
    transparent: { default: false, type: Boolean },
    tag: { default: 'nav' },
    noBurger: { default: false, type: Boolean }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { active, color, transparent, tag, noBurger } = ctx.props
    let { menu, default: brand, start: left, end: right } = ctx.slots()

    if (menu) { // menu goes to left.
      left = menu.concat(left || [])
    }

    const needsBrand = !noBurger || brand
    const needsMenu = left || right

    if (!noBurger) {
      brand = (brand || []).concat([
        h(Burger, { class: active && s('is-active'), on: {
          click () {
            ctx.data && ctx.data.on && ctx.data.on.activate && ctx.data.on.activate(!active)
          }
        } })
      ])
    }

    return addStyleToVnode(
      h(tag, ctx.data, [
        /* Navbar Brand */
        needsBrand && h('div', { class: s('navbar-brand') }, brand),
        /* Navbar Meny */
        needsMenu && h('div', { class: [s('navbar-menu'), active && s('is-active')] }, [
          left && h('div', { class: s('navbar-start') }, left),
          right && h('div', { class: s('navbar-end') }, right)
        ])
      ]), [
        s('navbar'),
        color && s('is-' + color),
        transparent && s('is-transparent')
      ]
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/navbar.sass';
</style>
