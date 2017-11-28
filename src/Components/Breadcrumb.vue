<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver, isIgnoredVnode } from '../utils'
import { createTag } from '../mixins'
import { sizes } from '../shared'


export default {
  name: 'Breadcrumb',
  functional: true,
  mixins: [createTag('nav')],
  props: {
    centered: PropTypes.bool.value(false),
    pushed: PropTypes.bool.value(false),
    separator: PropTypes.oneOf('succeeds', 'dot', 'bullet', 'arrow'),
    size: PropTypes.oneOf(sizes)
  },
  render (h, ctx) {
    const { size, tag, centered, pushed, separator } = ctx.props
    const _ = styleResolver(ctx.$style)
    const slots = ctx.slots()
    const links = (slots.default || []).filter(v => !isIgnoredVnode(v))
    const k = links.length - 1
    const wrapper = [
      h('ul', {}, links.map((link, i) => h('li', { class: [ i === k && _('is-active') ] }, [link])))
    ]

    return style(
      h(tag, ctx.data, wrapper),
      _('breadcrumb'),
      size && _(`is-${size}`),
      centered && _('is-centered'),
      pushed && _('is-right'),
      separator && _(`has-${separator}-separator`)
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/breadcrumb.sass';
</style>
