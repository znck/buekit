<script>
import { isString } from 'lodash-es'
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'

export default {
  name: 'Box',
  functional: true,
  mixins: [createTag('div', true)],
  render (h, ctx) {
    const { tag } = ctx.props
    const _ = styleResolver(ctx.$style)

    if (isString(tag)) return style(h(tag, ctx.data, ctx.children), _('box'))

    if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
      console.warn('Box is an abstract component. It requires exactly one child.')

      return null
    }

    return style(ctx.children[0], _('box'))
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/box.sass';
</style>
