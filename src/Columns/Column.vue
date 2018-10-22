<script>
import PropTypes, { normalize } from '@znck/prop-types'
import { styleResolver, style } from '../utils'
import { devices, additionalDevices, columns as sizes } from '../shared'
import { createTag } from '../mixins'

const sizeType = (name, extras = []) => PropTypes.oneOfType(
  PropTypes.number.validate(v => 1 <= v && v <= 12),
  PropTypes.string.validate(v => (x => 1 <= x && x <= 12)(Number(x))),
  PropTypes.oneOf(sizes)
).modifiers(name, [].concat(devices, extras))

let normalizer
const props = (props, _) => {
  normalizer = normalizer || normalize(props, (name, value) => {
      switch (name) {
        case 'size': return [_(`is-${value}`)]
        case 'offset': return [_(`is-${name}-${value}`)]
        case 'narrow': return value && [_(`is-${name}`)]
        default: return value
      }
    }, (name, suffix, value) => {
      switch (name) {
        case 'size': return _(`is-${value}-${suffix}`)
        case 'narrow': return value && _(`is-${name}-${suffix}`)
        case 'offset': return _(`is-${name}-${value}-${suffix}`)
      }
    }
  )

  return normalizer(props)
}

export default {
  name: 'Column',
  functional: true,
  mixins: [createTag()],
  props: {
    /**
     * Take only the space it needs.
     * @name narrow
     * @version 0.0.0
     * @since Version 0.0.0
     * @modifiers mobile tablet desktop
     */
    ...PropTypes.bool.value(false).modifiers('narrow', devices),
    /**
     * Horizontal space before a column element.
     * @name offset
     * @version 0.0.0
     * @since Version 0.0.0
     * @modifiers mobile tablet desktop
     */
    ...sizeType('offset'),
    /**
     * Width of column element in 12 point grid system.
     * @name size
     * @version 0.0.0
     * @since Version 0.0.0
     * @modifiers mobile tablet desktop
     */
    ...sizeType('size', additionalDevices)
  },

  render (h, ctx) {
    const _ = styleResolver(ctx.$style)
    const { tag, ...rest } = props(ctx.props, _)

    return style(h(tag, ctx.data, ctx.children), _('column'), Object.values(rest))
  }
}
</script>

<style lang="scss" src="./columns.scss" module></style>
