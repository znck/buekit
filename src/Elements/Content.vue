<script>
import { cssModule, mergeData } from '../utils'
import { abstract, sizes, tag } from '../mixins'

export default {
  name: 'Content',
  functional: true,
  mixins: [abstract, sizes, tag],
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { abstract, size, tag } = ctx.props

    const styles = [
      s('content'),
      size && s('is-' + size)
    ]

    if (!abstract) return h(tag, mergeData({ class: styles }, ctx.data), ctx.children)

    // Abstract mode.
    if (process.env.NODE_ENV !== 'production' && ctx.children.length !== 1) {
      console.warn('Content is an abstract component. It requires exactly one child.')
    }

    const vnode = ctx.children[0]

    vnode.data = mergeData({ class: styles }, ctx.data, ctx.children)

    return vnode
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/content.sass';
</style>

