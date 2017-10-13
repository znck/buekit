<script>
import { addStyleToVnode } from '../utils'

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
    return addStyleToVnode(ctx.children[0], ctx.props.active && ctx.$style['is-active'])
  }
}
</script>

<style module>
.is-active {}
</style>
