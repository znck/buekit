<script>
import { mergeData, cssModule } from '../utils'
import { colors, sizes, tag } from '../mixins'

export default {
  name: 'Tag',
  functional: true,
  mixins: [ colors, sizes, tag ],
  props: {
    tag: { default: 'span' },
    rounded: { default: false, type: Boolean },
    delete: { default: false, type: Boolean }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { color, size, rounded, tag } = ctx.props

    const styles = [
      s('tag'),
      color && s('is-' + color),
      size && s('is-' + size),
      rounded && s('is-rounded'),
      ctx.props.delete && s('is-delete')
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
