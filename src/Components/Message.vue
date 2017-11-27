<script>
import PropTypes from '@znck/prop-types'
import { cssModule, addStyleToVnode } from '../utils'
import { colors, sizes } from '../mixins'

import Delete from '../Elements/Delete.vue'

export default {
  name: 'Message',
  functional: true,
  mixins: [colors, sizes],
  props: {
    tag: PropTypes.string.value('span'),
    title: PropTypes.string,
    omit: PropTypes.bool.value(false)
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { color, size, tag, title, omit } = ctx.props
    const styles = [
      s('message'),
      color && s('is-' + color),
      size && s('is-' + size)
    ]
    const { header, default: body } = ctx.slots()
    const needsHeader = header || title
    let del // required only if omit is false.

    if (!omit) {
      del = {
        on: {
          click () {
            ctx.data && ctx.data.on && ctx.data.on.delete && ctx.data.on.delete()
          }
        }
      }
    }

    if (header && !omit) {
      header.push(
        h(Delete, del)
      )
    }

    return addStyleToVnode(
      h(tag, ctx.data, [
        /* Header */
        needsHeader && h('div', { class: s('message-header') }, header || [
          h('p', {}, title),
          !omit && h(Delete, del)
        ].filter(i => i)),
        /* Body */
        h('div', { class: s('message-body') }, body)
      ].filter(i => i)), styles
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/message.sass';
</style>
