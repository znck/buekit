<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver, call } from '../utils'
import { colors, sizes } from '../shared'

import Delete from '../Elements/Delete.vue'

export default {
  name: 'Message',
  functional: true,
  props: {
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(sizes),
    tag: PropTypes.string.value('span'),
    title: PropTypes.string,
    clearable: PropTypes.bool.value(true)
  },
  render (h, ctx) {
    const s = styleResolver(ctx.$style)
    const { color, size, tag, title, clearable } = ctx.props
    const { header, default: body } = ctx.slots()
    const needsHeader = header || title
    let del // required only if omit is false.

    if (clearable) {
      del = {
        on: { click: () => call(ctx.data && ctx.data.on && ctx.data.on.delete) }
      }
    }

    if (header && clearable) {
      header.push(
        h(Delete, del)
      )
    }

    return style(
      h(tag, ctx.data, [
        /* Header */
        needsHeader && h('div', { class: s('message-header') }, header || [
          h('p', {}, title),
          !omit && h(Delete, del)
        ]),
        /* Body */
        h('div', { class: s('message-body') }, body)
      ]),
      s('message'),
      color && s('is-' + color),
      size && s('is-' + size)
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/message.sass';
</style>
