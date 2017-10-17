import colors from './colors'
import sizes from './sizes'

export default {
  mixins: [colors, sizes],
  props: {
    value: { required: true },
    largeText: { default: false, type: Boolean },
    focused: { default: false, type: Boolean },
    hovered: { default: false, type: Boolean },
    static: { default: false, type: Boolean },
  },
  styles (props, $style) {
    return [
      $style['is-' + props.size],
      $style['is-' + props.color],
      props.focused && $style['is-focused'],
      props.hovered && $style['is-hovered'],
      props.static && $style['is-static']
    ]
  }
}