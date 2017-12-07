<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver, isIgnoredVnode } from '../utils'
import { sizes } from '../mixins'

export default {
  name: 'Tabs',
  functional: true,
  props: {
    active: PropTypes.number.isRequired,
    centered: PropTypes.bool.value(false),
    right: PropTypes.bool.value(false),
    type: PropTypes.oneOf('boxed', 'toggle', 'fullwidth')
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { active, type, size, centered, right } = ctx.props
    let i = -1

    return addStyleToVnode(
      h('div', ctx.data, [
        h('ul', {}, ctx.children.map(
          node => {
            if (isIgnoredVnode(node)) return node

            ++i

            return h('li', { class: i === active && s('is-active') }, [node])
          }
        ))
      ]), [
        s('tabs'),
        type && s('is-' + type),
        size && s('is-' + size),
        centered && s('is-centered'),
        right && s('is-right')
      ]
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/tabs.sass';
</style>
