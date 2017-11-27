<script>
import { mergeData, cssModule, toMap } from '../utils'
import { createTag } from '../mixins'

const types = toMap(['fluid', 'widescreen', 'fullhd'])

export default {
  name: 'Container',
  functional: true,
  mixins: [createTag()],
  props: {
    type: {
      type: String,
      validate: type => type in types
    }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const classes = [s('container')]
    const { type, tag } = ctx.props

    if (type) classes.push(s('is-' + type))

    return h(tag, mergeData({ class: classes }, ctx.data), ctx.children)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/container.sass';
</style>
