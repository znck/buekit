<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver, call } from '../utils'
import Delete from '../Elements/Delete.vue'

export default {
  name: 'Modal',
  functional: true,
  model: {
    prop: 'open',
    event: 'close'
  },
  props: {
    open: PropTypes.bool.value(false),
    classic: PropTypes.bool.value(false),
    preload: PropTypes.bool.value(false),
    title: PropTypes.string
  },
  render (h, ctx) {
    const { open, preload, classic, title } = ctx.props
    const _ = styleResolver(ctx.$style)

    if (!open && !preload) return null

    if (process.env.NODE_ENV !== 'production' && !classic && title) {
      console.warn(`Prop 'title' is allowed in classic mode only.`)
    }

    const styles = [
      _('modal'),
      open && _('is-active')
    ]

    const close = {
      click: () => call(ctx.data && ctx.data.on && ctx.data.on.close)
    }

    if (classic) {
      let { default: content, image, title: heading, links } = ctx.slots()
      const hasHeader = Array.isArray(heading) || title !== undefined || Array.isArray(icon)

      if (heading) heading = heading[0]
      
      const headStyle = [_('modal-card-title')]
      const footLinkStyle = [_('button')]

      return style(
        h('div', ctx.data, [
          h('div', { class: _('modal-background'), on: close }),
          h('div', { class: _('modal-card') }, [
            /* Render Header */
            hasHeader && h('header', { class: _('modal-card-head') }, [
              heading
                ? style(heading, headStyle)
                : h('p', { class: headStyle }, title),
              h(Delete, { on: close })
            ]),
            /* Render Body */
            h('div', { class: _('modal-card-body') }, content),
            /* Render Footer */
            links && h(
              'footer', { class: _('modal-card-foot') },
              links.map(link => style(link, footLinkStyle))
            )
          ])
        ]), styles
      )
    }

    return style(
      h('div', ctx.data, [
        h('div', { class: _('modal-background'), on: close }),
        h('div', { class: _('modal-content') }, ctx.children),
        h('div', { class: [_('modal-close'), _('is-large')], on: close })
      ]), styles
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/modal.sass';
</style>
