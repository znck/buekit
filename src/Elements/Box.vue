<script>
import { createTag, abstract } from '../mixins'
import AbstractBox from './AbstractBox.vue'

export default {
  name: 'Box',
  functional: true,
  mixins: [abstract, createTag()],
  render (h, ctx) {
    const { abstract, tag } = ctx.props

    if (abstract) return h(AbstractBox, ctx.data, ctx.children)

    return h(AbstractBox, {}, [h(tag, ctx.data, ctx.children)])
  }
}
</script>
