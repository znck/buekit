<script>
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'

export default {
  name: 'Panel',
  functional: true,
  mixins: [createTag('nav')],
  props: {
    title: { type: String }
  },
  render (h, ctx) {
    const s = styleResolver(ctx.$style)
    const { tag, title } = ctx.props
    const { title: slot, default: content = [] } = ctx.slots()

    return style(
      h(tag, ctx.data, [
        h('p', { class: s('panel-heading') }, slot || title),
        ...content
      ]),
      s('panel')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/panel.sass';
</style>
