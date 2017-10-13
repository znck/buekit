<script>
import { addStyleToVnode, mergeData, cssModule } from '../utils'
import NavbarItem from './NavbarItem.vue'

export default {
  name: 'NavbarDropdown',
  functional: true,
  props: {
    active: { default: false, type: Boolean },
    boxed: { default: false, type: Boolean },
    hoverable: { default: false, type: Boolean },
    right: { default: false, type: Boolean },
    title: { type: String, required: true }
  },
  render (h, ctx) {
    const { active, boxed, hoverable, right, title } = ctx.props
    const s = cssModule(ctx.$style)

    return addStyleToVnode(
      h(NavbarItem, ctx.data, [
        h('a', { class: s('navbar-link') }, title),
        h('div', { class: [
          s('navbar-dropdown'),
          boxed && s('is-boxed'),
          right && s('is-right')
        ] }, ctx.children.map(
          node => node && node.tag === 'hr' ? addStyleToVnode(
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
