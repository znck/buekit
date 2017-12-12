<script>
import PropTypes from '@znck/prop-types'
import { isString } from 'lodash-es'
import { style, styleResolver } from '../utils'
import { createTag } from '../mixins'

export default {
  name: 'PanelBlock',
  functional: true,
  mixins: [createTag('div', true)],
  props: {
    icon: PropTypes.bool.value(false),
    tabs: PropTypes.bool.value(false)
  },
  render (h, ctx) {
    const { icon, tabs } = ctx.props
    const s = styleResolver(ctx.$style)
    const styles = [
      icon && s('panel-icon'),
      tabs && s('panel-tabs'),
      !icon && !tabs && s('panel-block')
    ]

    if (isString(ctx.props.tag)) {
      return style(
        h(icon ? 'span' : ctx.props.tag, ctx.data, ctx.children),
        styles
      )
    }

    if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
      console.warn('Title is an abstract component. It requires exactly one child.')

      return null
    }

    return style(ctx.children[0], styles)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/panel.sass';
</style>
