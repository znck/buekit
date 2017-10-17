<script>
import { cssModule, addStyleToVnode, isIgnoredVnode, toMap } from '../utils'
import { sizes } from '../mixins'

const types = toMap(['boxed', 'toggle', 'fullwidth'])

export default {
  name: 'Tabs',
  functional: true,
  mixins: [sizes],
  props: {
    active: { type: Number, required: true },
    centered: { default: false, type: Boolean },
    right: { default: false, type: Boolean },
    type: { type: String, validator: type => type === undefined || type in types }
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
