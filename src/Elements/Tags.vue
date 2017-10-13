<script>
import { mergeData, cssModule } from '../utils'
import { colors, sizes, tag } from '../mixins'

export default {
  name: 'Tags',
  functional: true,
  mixins: [tag],
  props: {
    tag: { default: 'span' },
    addons: { default: false, type: Boolean }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { addons, tag } = ctx.props

    const styles = [
      s('tags'),
      addons && s('has-addons')
    ]

    return h(tag, mergeData(ctx.data, { class: styles }), ctx.children)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/tag.sass';
</style>
