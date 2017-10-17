<script>
import { cssModule, toArray, toMap } from '../utils'
import { input } from '../mixins'
import InputSelect from './_InputSelect.vue'

function prepareOptions (options) {
  return Array.isArray(options)
        ? options.map(option => typeof option === 'object' ? option : { value: option })
        : Object.keys(options || {}).map(value => ({ value, label: props.options[value] }))
}

export default {
  name: 'Select',
  functional: true,
  mixins: [input],
  props: {
    multiple: { default: false, type: [Boolean, Number] },
    options: {
      type: [Object, Array],
      validate: options => (Array.isArray(options) && options.every(
        option => option && typeof option === 'object' && 'value' in option
      )) || (options && typeof options === 'object')
    }
  },
  render (h, ctx) {
    const { props = {}, data = {} } = ctx
    const s = cssModule(ctx.$style)
    
    if (!data.on) data.on = {}
    if (!data.attrs) data.attrs = {}

    if (props.multiple) {
      data.attrs.multiple = true
    }

    if (props.multiple > 1) {
      data.attrs.size = props.multiple
    }
    
    // Handle Input.
    const handlers = toArray(data.on.input)
    data.on.input = value => {
      value = value.target ? value.target.value : value
      handlers.map(
        cb => setTimeout(cb(value), 0)
      )
    }
    const value = toMap(toArray(props.value))
    const { default: slotOPTIONS } = ctx.slots()

    const options = slotOPTIONS && slotOPTIONS.length 
      ? slotOPTIONS
      : prepareOptions(props.options).map(
          option => h('option', { attrs: { value: option.value } }, option.label || option.value)
        )

    return h('div', { class: [
        s`select`,
        props.multiple && s`is-multiple`,
        ...input.styles(props, ctx.$style)
      ] }, [
        h(InputSelect, data, options)
    ])
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/form.sass';
</style>
