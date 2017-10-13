<script>
import { cssModule, mergeData, validate, isResponsiveType, toArray, toMap, isString, isNumber, isUndefined } from '../utils'
import { tag } from '../mixins'

const sizes = toMap(['three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter'])

const _isNumber = /^[\d]+$/
function parseIntegerIfPossible (any) {
  if (isString(any) && _isNumber.test(any)) return parseInt(any)

  return any
}

function prepareSize (value) {
  const index = value.lastIndexOf('-')
  const device = value.substring(index + 1)

  if (isResponsiveType(device)) return { device, size: parseIntegerIfPossible(value.substring(0, index)) }

  return { size: parseIntegerIfPossible(value) }
}

function isValidGrid (value) {
  value = parseIntegerIfPossible(value)

  return isNumber(value) && value > 1 && value <= 12
}

function isValidSize (value) {
  value = prepareSize(value)
  
  return (
    (value.size in sizes || isValidGrid(value)) // validate size.
    && (isUndefined(value.device) || isResponsiveType(value.device)) // validate device.
  )
}

function createSizeType () {
  return {
    default: () => [],
    type: [Array, String, Number],
    validate: value => validate(value, isValidSize)
  }
}

export default {
  name: 'Column',
  functional: true,
  mixins: [tag],
  props: {
    narrow: {
      default: false,
      type: Boolean
    },
    /**
     * Take only required space.
     */
    narrowOnDevice: {
      default: () => [],
      type: [Array, String],
      validate: value => validate(value, isResponsiveType)
    },
    /**
     * Offset on left.
     */
    offset: createSizeType(),
    /**
     * Width of the column.
     */
    size: createSizeType(),
  },

  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const classes = [ s('column') ]
    const push = (values, prefix) => toArray(values).forEach(
      value => { classes.push(s(prefix + '-' + value)) }
    )

    const { narrow, narrowOnDevice, size, offset, tag } = ctx.props

    narrow && classes.push(s(`is-narrow`))
    push(narrowOnDevice, 'is-narrow')
    push(size, 'is')
    push(offset, 'is-offset')
    
    return h(tag, mergeData({ class: classes }, ctx.data), ctx.children)
  }
}
</script>

<style lang="scss" src="./columns.scss" module></style>
