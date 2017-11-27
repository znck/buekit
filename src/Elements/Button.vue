<script>
import { cssModule, mergeData } from '../utils'
import { colors, createTag } from '../mixins'

export default {
  name: 'Button',
  functional: true,
  mixins: [colors, createTag('button')],
  props: {
    outlined: { type: Boolean, default: false },
    inverted: { type: Boolean, default: false },
    hovered: { type: Boolean, default: false },
    focused: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    static: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { tag, color, outlined, inverted, hovered, focused, active, loading, disabled } = ctx.props

    const classes = [
      s('button'),
      color && s('is-' + color),
      outlined && s('is-outlined'),
      inverted && s('is-inverted'),
      hovered && s('is-hovered'),
      focused && s('is-focused'),
      active && s('is-active'),
      loading && s('is-loading'),
      ctx.props.static && s('is-static'),
      disabled && s('is-disabled'),
    ]

    // TODO: Warn illegal use.

    return h(tag, mergeData({ class: classes }, ctx.data), ctx.children)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/button.sass';
</style>
