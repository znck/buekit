<script>
import { style, styleResolver } from '../utils'

export default {
  name: 'Active',
  functional: true,
  abstract: true,
  props: {
    active: {
      default: true,
      type: Boolean
    },
  },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    
    return style(ctx.children[0], _('active'))
  }
}
</script>

<style module>
.is-active {
  /* This is a placeholder selector. */
}
</style>
