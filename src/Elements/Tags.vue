<script>
import { style, styleResolver } from '../utils'
import PropTypes from '@znck/prop-types'

export default {
  name: 'Tags',
  functional: true,
  props: {
    tag: PropTypes.string.value('span'),
    addons: PropTypes.bool.value(false)
  },
  render (h, ctx = {}) {
    const s = styleResolver(ctx.$style)
    const { addons, tag } = ctx.props

    const styles = [
      s('tags'),
      addons && s('has-addons')
    ]

    return style(h(tag, ctx.data, ctx.children), styles)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/tag.sass';
</style>
