<script>
import { cssModule, mergeData } from '../utils'
import { abstract, sizes } from '../mixins'

export default {
  name: 'Table',
  functional: true,
  mixins: [abstract, sizes],
  props: {
    bordered: { type: Boolean, default: false },
    striped: { type: Boolean, default: false },
    hoverable: { type: Boolean, default: false },
    narrow: { type: Boolean, default: false }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { abstract, bordered, hoverable, narrow, size, striped } = ctx.props

    const styles = [
      s('table'),
      bordered && s('is-bordered'),
      hoverable && s('is-hoverable'),
      narrow && s('is-narrow'),
      size && s('is-' + size),
      striped && s('is-striped')
    ]

    if (!abstract) return h('table', mergeData({ class: styles }, ctx.data), ctx.children)

    if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
      console.warn('Table is an abstract component. It requires exactly one child.')
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
