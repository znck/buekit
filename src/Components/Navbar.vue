<script>
import  { isFunction } from 'lodash-es'
import PropTypes from '@znck/prop-types'

import { createTag } from '../mixins'
import { styleResolver, style } from '../utils'
import { colors } from '../shared'

import Burger from './NavbarBurger.vue'

export default {
  name: 'Navbar',
  data: () => ({ active: false }),
  mixins: [ createTag() ],
  props: {
    /**
     * Background color of navbar.
     * @version 0.0.0
     * @since Version 0.0.0
     */
    color: PropTypes.oneOf('white', ...colors),
    /**
     * Navbar without burger
     * @version 0.0.0
     * @since Version 0.0.0
     */
    noBurger: PropTypes.bool.value(false),
    /**
     * With transparent background
     * @version 0.0.0
     * @since Version 0.0.0
     */
    transparent: PropTypes.bool.value(false)
  },
  render (h) {
    const _ = styleResolver(this.$style)
    const { color, transparent, tag, noBurger } = this.$props
    const active = this.active
    let { menu, default: brand = [], start: left, end: right } = this.$slots

    if (menu) { // menu goes to left.
      left = menu.concat(left || [])
    }

    const needsBrand = !noBurger || brand
    const needsMenu = left || right

    if (!noBurger) {
      brand = [
        ...brand,
        h(Burger, {
          class: active && _('is-active'),
          on: { click: () => this.activate(!active) }
        })
      ]
    }

    return style(
      h(tag, { props: this.$attrs, on: this.$listeners }, [
        /* Navbar Brand */
        needsBrand && h('div', { class: _('navbar-brand') }, brand),
        /* Navbar Menu */
        needsMenu && h('div', { class: [_('navbar-menu'), active && _('is-active')] }, [
          left && h('div', { class: _('navbar-start') }, left),
          right && h('div', { class: _('navbar-end') }, right)
        ])
      ]),
      _('navbar'),
      color && _(`is-${color}`),
      transparent && _('is-transparent')
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
@import '../_base.scss';
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/components/navbar.sass';
</style>
