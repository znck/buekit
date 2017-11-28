<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver, toArray } from '../utils'
import { createTag } from '../mixins'

export default {
  name: 'Card',
  functional: true,
  mixins: [createTag()],
  props: {
    title: PropTypes.string,
    centered: PropTypes.bool.value(false)
  },
  render (h, ctx) {
    const { centered, tag, title } = ctx.props
    const { default: contentSLOT, imageSLOT, title: headingSLOT, iconSLOT, linksSLOT } = ctx.slots()
    const _ = styleResolver(ctx.$style)

    const hasHeader = Array.isArray(headingSLOT) || title !== undefined || Array.isArray(iconSLOT)
    const headStyle = [_('card-header-title'), centered && _('is-centered')]
    const footLinkStyle = _('card-footer-item')

    return style(
      h(tag, ctx.data, [
        /* Render Header */
        hasHeader && h('header', { class: _('card-header') }, [
          headingSLOT ? style(headingSLOT[0], headStyle) : h('p', { class: headStyle }, title),
          iconSLOT && style(iconSLOT[0], _('card-header-icon'))
        ]),
        /* Render Image */
        imageSLOT && h('div', { class: _('card-image') }, imageSLOT),
        h('div', { class: _('card-content') }, contentSLOT),
        linksSLOT && h('footer', { class: _('card-footer') }, linksSLOT.map(link => style(link, footLinkStyle)))
      ]),
      _('card')
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/card.sass';
</style>
