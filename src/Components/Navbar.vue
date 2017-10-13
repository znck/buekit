<script>
import { addStyleToVnode, cssModule } from '../utils'
import { colors, tag } from '../mixins'

import Burger from './NavbarBurger.vue'

export default {
  name: 'Navbar',
  mixins: [colors, tag],
  data: () => ({ active: false }),
  props: {
    transparent: { default: false, type: Boolean },
    tag: { default: 'nav' },
    noBurger: { default: false, type: Boolean }
  },
  render (h) {
    const s = cssModule(this.$style)
    const { color, transparent, tag, noBurger } = this.$props
    const active = this.active
    let { menu, default: brand, start: left, end: right } = this.$slots

    if (menu) { // menu goes to left.
      left = menu.concat(left || [])
    }

    const needsBrand = !noBurger || brand
    const needsMenu = left || right

    if (!noBurger) {
      brand = (brand || []).concat([
        h(Burger, { class: active && s('is-active'), on: {
          click: () => {
            this.activate(!active)
            this.$listeners.activate && this.$listeners.activate(!active)
          }
        } })
      ])
    }

    return addStyleToVnode(
      h(tag, { props: this.$attrs, on: this.$listeners }, [
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
  },

  methods: {
    activate (value) {
      this.active = value
    }
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/navbar.sass';
</style>
