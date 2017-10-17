<script>
import { cssModule, addStyleToVnode } from '../utils'
import { sizes, colors } from '../mixins'

export default {
  name: 'Field',
  functional: true,
  mixins: [sizes, colors],
  props: {
    label: { type: String },
    help: { type: String }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { color, size, label, help } = ctx.props
    const { label: slotLABEL, help: slotHELP, default: content } = ctx.slots()

    return addStyleToVnode(
      h('div', ctx.data, [
        (label || slotLABEL) && h('label', {
          class: [s('label'), s('is-' + size)]
        }, slotLABEL || label),
        ...content,
        (help || slotHELP) && h('p', {
          class: [s('help'), s('is-' + color)]
        }, slotHELP || help)
      ]), s('field')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/form.sass';
</style>
