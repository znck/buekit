<script>
import { cssModule, mergeData, toMap } from '../utils'
import { abstract } from '../mixins'

const levels = toMap(['1', '2', '3', '4', '5', '6'])

export default {
  name: 'Subtitle',
  functional: true,
  mixins: [abstract],
  props: {
    level: { type: [String, Number], validage: level => level === undefined || `${level}` in levels },
    spaced: { type: Boolean, default: false },
    tag: { type: String }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { abstract, level, spaced } = ctx.props
    const tag = ctx.props.tag || (level ? 'h' + level : 'h2') 

    const styles = [
      s('subtitle'),
      spaced && s('is-spaced'),
      level && s('is-' + level)
    ]

    if (!abstract) return h(tag, mergeData({ class: styles }, ctx.data), ctx.children)

    if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
      console.warn('Title is an abstract component. It requires exactly one child.')
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
@import '~bulma/sass/elements/title.sass';
</style>
