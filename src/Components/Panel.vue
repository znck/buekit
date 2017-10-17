<script>
import { addStyleToVnode, cssModule } from '../utils'
import { tag } from '../mixins'

export default {
  name: 'Panel',
  functional: true,
  mixins: [tag],
  props: {
    tag: { default: 'nav' },
    title: { type: String }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { tag, title } = ctx.props
    const { title: slot, default: content } = ctx.slots()

    return addStyleToVnode(
      h(tag, ctx.data, [
        h('p', { class: s('panel-heading') }, slot || title),
        ...content
      ]), s('panel')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/panel.sass';
</style>
