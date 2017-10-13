<script>
import { cssModule, mergeData } from '../utils'
import { tag } from '../mixins'

// TODO: Merge with Box.vue
export default {
  name: 'AbstractBox',
  abstract: true,
  functional: true,
  render (h, ctx) {
    const s = cssModule(ctx.$style)

    if (process.env.NODE_ENV !== 'production' && ctx.children.length !== 1) {
      console.warn('Box is an abstract component. It requires exactly one child.')
    }

    const vnode = ctx.children[0]

    vnode.data = mergeData({ class: s('box') }, ctx.data, vnode.data)

    return vnode
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/box.sass';
</style>

