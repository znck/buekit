<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver, toArray, toObject } from '../utils'
import { sizes } from '../shared'
import Icon from '../Elements/Icon.vue'
import Input from './Input.vue'

const icon = {
  small: 'small',
  large: 'medium'
}

export default {
  name: 'Control',
  functional: true,
  props: {
    size: PropTypes.oneOf(sizes),
    loading: PropTypes.bool.value(false)
  },
  render (h, ctx) {
    const { $style, props = {}, data = {} } = ctx
    const { left, right, default: content } = ctx.slots()
  
    const _ = styleResolver($style)
    const { size, loading } = props
    
    const styles = [ icon[size] && _('is-' + icon[size]) ]
    
    return style(
      h('div', data, [
        ...toArray(content),
        left && style(h(Icon, {}, left), styles, s('is-left')),
        right && style(h(Icon, {}, right), styles, s('is-right'))
      ]), 
      _('control'),
      loading && _('is-loading'),
      size && _('is-' + size),
      left && _('has-icons-left'),
      right && _('has-icons-right')
    )
  }
}
</script>

<style lang="scss" module>
@import '../_base.scss';
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/elements/form.sass';
</style>
