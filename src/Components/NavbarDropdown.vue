<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'
import NavbarItem from './NavbarItem.vue'

export default {
  name: 'NavbarDropdown',
  functional: true,
  props: {
    active: PropTypes.bool.value(false),
    boxed: { default: false, type: Boolean },
    hoverable: { default: false, type: Boolean },
    right: { default: false, type: Boolean },
    title: { type: String, required: true }
  },
  render (h, ctx) {
    const { active, boxed, hoverable, right, title } = ctx.props
    const s = styleResolver(ctx.$style)

    return style(
      h(NavbarItem, ctx.data, [
        h('a', { class: s('navbar-link') }, title),
        h('div', { class: [
          s('navbar-dropdown'),
          boxed && s('is-boxed'),
          right && s('is-right')
        ] }, ctx.children.map(
          node => node && node.tag === 'hr' ? style(
            node, s('navbar-divider')
          ) : node
        ) )
      ]), [
        s('has-dropdown'),
        active && s('is-active'),
        hoverable && s('is-hoverable')
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
