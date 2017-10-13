<script>
import { cssModule, mergeData } from '../utils'
import { colors, sizes } from '../mixins'

export default {
  name: 'Progress',
  functional: true,
  mixins: [colors, sizes],
  props: {
    max: {
      default: 100,
      type: Number
    },
    value: {
      required: true,
      type: Number
    }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { color, size, value, max } = ctx.props

    const styles = [
      s('progress'),
      color && s('is-' + color),
      size && s('is-' + size)
    ]

    const attrs = {
      value, max
    }

    return h('progress', mergeData(ctx.data, { class: styles, attrs }), [value + '%'])
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/progress.sass';
</style>
