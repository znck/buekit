<script>
import { cssModule, mergeData } from '../utils'
import { tag } from '../mixins'

const _isInt = /^[\d]+$/

export default {
  name: 'Tile',
  functional: true,
  mixins: [tag],
  props: {
    size: {
      default: '',
      type: [Number, String],
      validate: size => _isInt.match('' + size) && (0 < Number(size)) && (Number(size) <= 12)
    },
    ancestor: { type: Boolean, default: false },
    parent: { type: Boolean, default: false },
    child: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { size, tag, ancestor, parent, child, vertical } = ctx.props
    const classes = [s('tile')]

    if (size != '') classes.push(s('is-' + size))
    if (ancestor) classes.push(s('is-ancestor'))
    else if (parent) classes.push(s('is-parent'))
    else if (child) classes.push(s('is-child'))
    if (vertical) classes.push(s('is-vertical'))

    return h(tag, mergeData({ class: classes }, ctx.data), ctx.children)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/grid/tiles.sass';
</style>

