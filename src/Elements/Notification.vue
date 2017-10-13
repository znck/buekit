<script>
import { cssModule, mergeData } from '../utils'
import { abstract, colors, tag } from '../mixins'

export default {
  name: 'Notification',
  functional: true,
  mixins: [abstract, colors, tag],
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { abstract, color, tag } = ctx.props

    const styles = [
      s('notification'),
      color && s('is-' + color)
    ]

    if (!abstract) return h(tag, mergeData({ class: styles }, ctx.data), ctx.children)

    if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
      console.warn('Notification is an abstract component. It requires exactly one child.')
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
@import '~bulma/sass/elements/notification.sass';
</style>
