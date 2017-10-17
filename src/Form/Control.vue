<script>
import { cssModule, addStyleToVnode, toArray } from '../utils'
import { sizes } from '../mixins'
import Icon from '../Elements/Icon.vue'
import Input from './Input.vue'

const icon = {
  small: 'small',
  large: 'medium'
}

export default {
  name: 'Control',
  functional: true,
  mixins: [sizes],
  props: {
    loading: { default: false, type: Boolean }
  },
  render (h, ctx) {
    const { $style, props = {}, data = {} } = ctx
    const { left, right, default: content = [] } = ctx.slots()
  
    const s = cssModule($style)
    const { size, largeText, loading } = props
    
    const styles = [ icon[size] && s('is-' + icon[size]) ]

    if (!content.length) {
      if (!data.props) data.props = {}
      if (!data.on) data.on = {}
      
      data.props.size = size
      
      // Handle Input.
      const input = toArray(data.on.input)
      data.on.input = value => {
        value = value.target ? value.target.value : value
        input.map(
          cb => setTimeout(cb(value), 0)
        )
      }

      content.push(
        h(Input, data, ctx.children)
      )
    }
    
    return h('div', { class: [
        s('control'),
        loading && s('is-loading'),
        size && s('is-' + size),
        left && s('has-icons-left'),
        right && s('has-icons-right')
      ] }, [
      ...content,
      left && h(Icon, { class: [...styles, s('is-left')] }, left),
      right && h(Icon, { class: [...styles, s('is-right')] }, right)
    ])
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/form.sass';
</style>
