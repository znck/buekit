<script>
import { cssModule, addStyleToVnode } from '../utils'
import Delete from '../Elements/Delete.vue'

export default {
  name: 'Modal',
  functional: true,
  model: {
    prop: 'open',
    event: 'close'
  },
  props: {
    open: { default: false, type: Boolean },
    classic: { default: false, type: Boolean },
    preload: { default: false, type: Boolean },
    title: { type: String }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { open, preload, classic, title } = ctx.props

    if (!open && !preload) return null

    if (process.env.NODE_ENV !== 'production' && !classic && title) {
      console.warn(`Prop 'title' is allowed in classic mode only.`)
    }

    const styles = [
      s('modal'),
      open && s('is-active')
    ]

    const close = {
      click () {
        ctx.data && ctx.data.on && ctx.data.on.close && ctx.data.on.close(false)
      }
    }

    if (classic) {
      let { default: content, image, title: heading, links } = ctx.slots()
      const hasHeader = Array.isArray(heading) || title !== undefined || Array.isArray(icon)

      if (heading) heading = heading[0]
      
      const headStyle = [s('modal-card-title')]
      const footLinkStyle = [s('button')]

      return addStyleToVnode(
        h('div', ctx.data, [
          h('div', { class: s('modal-background'), on: close }),
          h('div', { class: s('modal-card') }, [
            /* Render Header */
            hasHeader && h('header', { class: s('modal-card-head') }, [
              heading
                ? addStyleToVnode(heading, headStyle)
                : h('p', { class: headStyle }, title),
              h(Delete, { on: close })
            ]),
            /* Render Body */
            h('div', { class: s('modal-card-body') }, content),
            /* Render Footer */
            links && h(
              'footer', { class: s('modal-card-foot') },
              links.map(link => addStyleToVnode(link, footLinkStyle))
            )
          ])
        ]), styles
      )
    }

    return addStyleToVnode(
      h('div', ctx.data, [
        h('div', { class: s('modal-background'), on: close }),
        h('div', { class: s('modal-content') }, ctx.children),
        h('div', { class: [s('modal-close'), s('is-large')], on: close })
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
