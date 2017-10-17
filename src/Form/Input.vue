<script>
import { addStyleToVnode, toArray } from '../utils'
import { input } from '../mixins'
import InputText from './_InputText.vue'
import InputTextarea from './_InputTextarea.vue'

export default {
  name: 'Input',
  functional: true,
  mixins: [input],
  render (h, ctx) {
    const { $style = {}, props = {}, data = {} } = ctx
    
    if (!data.on) data.on = {}
    if (!data.attrs) data.attrs = {}
    
    if (!props.largeText) 
      data.attrs.type = data.attrs.type || 'text'
    
    const handlers = toArray(data.on.input)
    data.on.input = value => {
      value = value.target ? value.target.value : value
      handlers.map(
        cb => setTimeout(cb(value), 0)
      )
    }

    return addStyleToVnode(
      h(props.largeText ? InputTextarea : InputText, data), [
        props.largeText ? $style['textarea'] : $style['input'],
        ...input.styles(props, $style)
      ]
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/form.sass';
</style>
