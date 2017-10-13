<script>
import { cssModule, mergeData, toArray, addStyleToVnode } from '../utils'
import { tag } from '../mixins'

export default {
  name: 'Card',
  functional: true,
  mixins: [tag],
  props: {
    title: { type: String },
    centered: { default: false, type: Boolean }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { centered, tag, title } = ctx.props

    let { default: content, image, title: heading, icon, links } = ctx.slots()

    const hasHeader = Array.isArray(heading) || title !== undefined || Array.isArray(icon)

    if (icon) icon = icon[0]
    if (heading) heading = heading[0]
    
    const headStyle = [s('card-header-title'), centered && s('is-centered')]
    const footLinkStyle = [s('card-footer-item')]

    return h(tag, mergeData(ctx.data, { class: s('card') }), [
      /* Render Header */
      hasHeader && h('header', { class: s('card-header') }, [
        heading ? addStyleToVnode(heading, headStyle) : h('p', { class: headStyle }, title),
        icon && addStyleToVnode(icon, s('card-header-icon'))
      ].filter(i => i)),
      /* Render Image */
      image && h('div', { class: s('card-image') }, image),
      h('div', { class: s('card-content') }, content),
      links && h('footer', { class: s('card-footer') }, links.map(link => addStyleToVnode(link, footLinkStyle)))
    ].filter(i => i))
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/card.sass';
</style>
