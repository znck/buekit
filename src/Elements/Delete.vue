<script>
import { cssModule, mergeData } from '../utils'
import { sizes, tag } from '../mixins'

export default {
  name: 'Delete',
  functional: true,
  mixins: [sizes, tag],
  props: {
    tag: { default: 'a' }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { size, tag } = ctx.props
    const styles = [
      s('delete'),
      size && s('is-' + size)
    ]

    if (process.env.NODE_ENV !== 'production' && ctx.children && ctx.children.length) {
      console.warn('Delete component should not have any child nodes.')
    }

    return h(tag, mergeData({ class: styles }, ctx.data), [])
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/other.sass';
</style>
