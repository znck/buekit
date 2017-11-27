<script>
import PropType, { normalize } from '@znck/prop-types'
import { isBoolean } from 'lodash'

import { styleResolver, style } from '../utils'
import { createTag } from '../mixins'

let normalizer
const props = (props, _) => {
  normalizer = normalizer || normalize(props, (name, value) => {
    switch (name) {
      case 'gap': return value === false ?
        [_('is-gapless')] :
        (value !== true ? [_('is-variable'), _(`is-${value}`)] : [])
      case 'tag': return value
      default: return value && _(`is-${name}`)
    }
  })

  return normalizer(props)
}

export default {
  name: 'Columns',
  functional: true,
  mixins: [createTag()],
  props: {
    /**
     * Put column elements in center horizontally.
     * @version 0.0.0
     * @since Version 0.0.0
     */
    centered: PropType.bool.value(false),
    /**
     * Put column elements in center vertically.
     * @version 0.0.0
     * @since Version 0.0.0
     */
    vcentered: PropType.bool.value(false),
    /**
     * Activate columns from mobile up.
     * @version 0.0.0
     * @since Version 0.0.0
     */
    mobile: PropType.bool.value(false),
    /**
     * Activate columns for desktop only.
     * @version 0.0.0
     * @since Version 0.0.0
     */
    desktop: PropType.bool.value(false),
    /**
     * The space on each side of a column.
     * @version 0.0.0
     * @since Version 0.0.0
     */
    gap: PropType.oneOfType(
      PropType.bool,
      PropType.number.validate(v => 0 <= v && v <= 8),
      PropType.string.validate(v => /^[0-8]$/.test(v))
    ).value(true),
    /**
     * Wrap column elements that would fit in a single row.
     * @version 0.0.0
     * @since Version 0.0.0
     */
    multiline: PropType.bool.value(false),
  },

  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { tag, ...rest } = props(ctx.props, _)

    return style(h(tag, ctx.data, ctx.children), _('columns'), Object.values(rest))
  }
}
</script>

<style lang="scss" src="./columns.scss" module></style>
