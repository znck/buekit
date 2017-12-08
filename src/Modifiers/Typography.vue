<script>
import PropTypes, { normalize } from '@znck/prop-types'
import {style, styleResolver} from '../utils'
import {colors, devices} from '../shared'

let normalizer = null
const styles = (props, _) => {
  if (!normalizer) {
    normalizer = normalize(
      props,
      (prop, value) => {
        switch (prop) {
          case 'align':
          case 'color': return _(`has-text-${value}`)
          case 'size': return _(`is-size-${value}`)
          case 'transform': return _(`is-${value}`)
          case 'weight': return _(`has-text-weight-${value}`)
        }
      },
      (prop, modifier, value) => {
        switch (prop) {
          case 'align': return _(`has-text-${value}-${modifier}`)
          case 'size': return _(`is-size-${value}-${modifier}`)
        }
      }
    )
  }

  return Object.values(normalizer(props))
}
export default {
  name: 'TypographyHelper',
  abstract: true,
  functional: true,
  props: {
    color: PropTypes.oneOf(colors, 'black-bis', 'black-ter', 'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter', 'white-ter', 'white-bis', 'white'),
    ...PropTypes.oneOfType(
      PropTypes.oneOf('1','2','3','4','5','6','7'),
      PropTypes.number.validate(v => 1 <= v && v <= 7)
    ).modifiers('size', ...devices, 'touch', 'fullhd', 'widescreen'),
    ...PropTypes.oneOf('centered', 'justified', 'left', 'right').modifiers('align', ...devices, 'widescreen', 'fullhd'),
    transform: PropTypes.oneOf('capitalized', 'lowercase', 'uppercase', 'italic'),
    weight: PropTypes.oneOf('light', 'normal', 'semibold', 'bold')
  },
  render (h, ctx) {
    const _ = styleResolver(ctx.$style)

    return style(ctx.children[0], styles(ctx.props, _))
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/base/helpers.sass';
</style>
