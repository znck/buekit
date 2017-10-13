<script>
import { validate, isNumber, isBoolean, isResponsiveType, toArray, toMap, mergeData, cssModule } from '../utils'
import { tag } from '../mixins'

const horizontally = toMap(['horizontally', 'both'])
const vertically = toMap(['vertically', 'both'])
const _isGap = /^[0-8]$/

export default {
  name: 'Columns',
  functional: true,
  mixins: [tag],
  props: {
    centered: {
      default: false,
      type: [Boolean, String],
      validate: value => isBoolean(value) || (value in horizontally || value in vertically)
    },

    device: {
      default: '',
      type: String,
      validate: value => value === '' || isResponsiveType(value)
    },

    gap: {
      default: true,
      type: [Boolean, Number],
      validate (value) {
        return _isGap.match(value) || isBoolean(value)
      }
    },

    multiline: {
      default: false,
      type: Boolean
    }
  },
  
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const styles = [s('columns')]

    const { gap, multiline, device, centered, tag } = ctx.props

    // multiline
    if (multiline) styles.push(s('is-multiline'))

    // responsiveness
    if (device) styles.push(s('is-' + device))
    
    // gap
    if (gap === false) {
      styles.push(s('is-gapless'))
    } else if (gap !== true) {
      styles.push(s('is-variable'))
      styles.push(s('is-' + gap))
    }

    // centered
    if (centered in horizontally || centered === true || centered === '') styles.push(s('is-centered'))
    if (centered in vertically) styles.push(s('is-vcentered'))
    
    return h(tag, mergeData({ class: styles }, ctx.data), ctx.children)
  }
}
</script>

<style lang="scss" src="./columns.scss" module></style>
