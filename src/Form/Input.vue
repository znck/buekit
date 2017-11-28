<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver, toArray, toObject } from '../utils'
import * as input from '../mixins/input'
import InputText from './input/InputText.vue'
import InputTextarea from './input/InputTextarea.vue'

export default {
  name: 'Input',
  functional: true,
  props: {
    ...input.props,
	  textarea: PropTypes.bool.value(false),
  },
  render (h, ctx) {
    const { $style = {}, props = {}, data = {} } = ctx
    const _ = styleResolver($style)
    
    if (!props.textarea) {
      data.attrs = {
        ...toObject(data.attrs),
        type: (data.attrs && data.attrs.type) || 'text'
      }
    }
    
    data.on = data.on || {}
    data.on.input = [
      value => { value = value.target ? value.target.value : value },
      ...toArray(data.on && data.on.input)
    ]

    return style(
      h(props.textarea ? InputTextarea : InputText, data),
      _(props.textarea ? 'textarea' : 'input'),
      input.styles(props, $style)
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/form.sass';
</style>
