<script>
import { cssModule, mergeData } from '../utils'
import { abstract } from '../mixins'

// TODO: Remove this. Instead use an abstract component.
export default {
  name: 'TableRow',
  functional: true,
  mixins: [abstract],
  props: {
    selected: { default: false, type: Boolean }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { abstract, selected } = ctx.props

    const styles = [
      selected && s('is-selected')
    ]

    if (!abstract) return h('tr', mergeData({ class: styles }, ctx.data), ctx.children)

    if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
      console.warn('TableRow is an abstract component. It requires exactly one child.')
    }

    const vnode = ctx.children[0]

    vnode.data = mergeData({ class: styles }, vnode.data, ctx.data)

    return vnode
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/table.sass';
</style>
