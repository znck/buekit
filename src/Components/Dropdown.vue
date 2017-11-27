<script>
import { cssModule, mergeData, toArray, addStyleToVnode, isFunction } from '../utils'
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
    icon: { default: 'fa fa-angle-down', type: String },
    open: { type: Boolean, required: true },
    title: { type: String },
    right: { default: false, type: Boolean },
    hoverable: { default: false, type: Boolean },
    direction: { type: String, validate: dir => dir === undefined || dir === 'up' }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { icon, open, tag, title, right, hoverable, direction } = ctx.props

    const style = [
      s('dropdown'),
      open && s('is-active'),
      right && s('is-right'),
      hoverable && s('is-hoverable'),
      direction && s('is-up'),
    ]

    let { trigger, default: content } = ctx.slots()

    trigger = trigger || [
      h(Button, {}, [
        h('span', {}, title),
        h(Icon, {}, [h('i', { class: icon })])
      ])
    ]
    content = content || []
    const itemClass = s('dropdown-item')
    const dividerClass = s('dropdown-divider')
    const data = mergeData(ctx.data, { class: style })
    const fireOpen = () => isFunction(ctx.data.on.open) && ctx.data.on.open(!open)

    const el =
      h(tag, data, [
        /* Trigger */
        h('div', {
          class: s('dropdown-trigger'),
          on: { click: fireOpen }
        }, trigger),
        /* Menu */
        h('div', { class: s('dropdown-menu') }, [
          h('div', { class: s('dropdown-content') }, content.map(
            item => (item && item.tag === 'hr') ?
              addStyleToVnode(item, dividerClass) :
              addStyleToVnode(item, itemClass)
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
