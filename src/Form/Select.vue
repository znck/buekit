<script>
import { every } from 'lodash-es'
import PropTypes from '@znck/prop-types'
import { style, styleResolver, toArray, toObject } from '../utils'
import * as input from '../mixins/input'
import InputSelect from './input/InputSelect.vue'

function prepareOptions (options) {
  return Array.isArray(options)
        ? options.map(option => typeof option === 'object' ? option : { value: option })
        : Object.keys(options || {}).map(value => ({ value, label: props.options[value] }))
}

export default {
  name: 'Select',
  functional: true,
  props: {
    ...input.props,
    multiple: PropTypes.oneOfType(
      PropTypes.number,
      PropTypes.bool
    ).value(false),
    options: PropTypes.oneOfType(
      PropTypes.array,
      PropTypes.object
    )
  },
  render (h, ctx) {
    const { props = {}, data = {} } = ctx
    const s = styleResolver(ctx.$style)

    if (props.multiple) {
      data.on = { ...toObject(data.on), multiple: true, size: props.multiple !== true && props.multiple }
    }
    
    // Handle Input.
    data.on.input = [
      value => { value = value.target ? value.target.value : value },
      ...toArray(data.on.input)
    ]
    const { default: slotOPTIONS } = ctx.slots()

    const options = slotOPTIONS && slotOPTIONS.length 
      ? slotOPTIONS
      : prepareOptions(props.options).map(
          option => h('option', { attrs: { value: option.value } }, option.label || option.value)
        )

    return style(
      h('div', {}, [h(InputSelect, data, options)]),
      _('select'),
      props.multiple && _('is-multiple'),
      input.styles(props, $style)
    )
  }
}
</script>

<style lang="scss" module>
@import '../_base.scss';
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/elements/form.sass';
</style>
