<script>
import PropTypes from '@znck/prop-types'
import { isFunction } from 'lodash'
import { styleResolver, style, toArray, call } from '../utils'
import { createTag } from '../mixins'
import Button from '../Elements/Button.vue'
import Icon from '../Elements/Icon.vue'
import ClickAway from '../Abstract/ClickAway.vue'

export default {
  name: 'Dropdown',
  functional: true,
  mixins: [createTag()],
  model: {
    prop: 'open',
    event: 'open'
  },
  props: {
    icon: PropTypes.string.value('fa fa-angle-down'),
    open: PropTypes.bool.value(true),
    title: PropTypes.string,
    right: PropTypes.bool.value(false),
    hoverable: PropTypes.bool.value(false),
    direction: PropTypes.oneOf('up')
  },
  render (h, ctx) {
    const { icon, open, tag, title, right, hoverable, direction } = ctx.props
    const _ = styleResolver(ctx.$style)

    const style = [
      _('dropdown'),
      open && _('is-active'),
      right && _('is-right'),
      hoverable && _('is-hoverable'),
      direction && _(`is-${direction}`),
    ]

    let { trigger, default: content = [] } = ctx.slots()

    trigger = trigger || [
      h(Button, {}, [
        h('span', {}, title),
        h(Icon, {}, [h('i', { class: icon })])
      ])
    ]
    const itemClass = _('dropdown-item')
    const dividerClass = _('dropdown-divider')
    const fireOpen = () => call(ctx.data && ctx.data.on && ctx.data.on.open)

    const el =
      h(tag, ctx.data, [
        /* Trigger */
        h('div', {
          class: _('dropdown-trigger'),
          on: { click: fireOpen }
        }, trigger),
        /* Menu */
        h('div', { class: _('dropdown-menu') }, [
          h('div', { class: _('dropdown-content') }, content.map(
            item => style(item, (item && item.tag === 'hr') ? dividerClass : itemClass)
          ))
        ])
      ])

    if (open) return h(ClickAway, { on: { handle () { open && fireOpen() } } }, [ el ])

    return el
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/dropdown.sass';
</style>
