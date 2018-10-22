<script>
import PropTypes from '@znck/prop-types'
import { style, styleResolver } from '../utils'

export default {
  name: 'Image',
  functional: true,
  props: {
    size: PropTypes.oneOf('16', '24', '32', '48', '64', '96', '128'),
    ratio: PropTypes.oneOf('square', '1by1', '4by3', '3by2', '16by9', '2by1'),
    src: PropTypes.string,
    alt: PropTypes.string
  },
  render (h, ctx) {
    const { size, ratio, src, alt } = ctx.props
    const _ = styleResolver(ctx.$style)

    return style(
      h('figure', ctx.data, ctx.children || [
        h('img', { attrs: { src, alt } })
      ]),
      _('image'),
      size && _(`is-${size}x${size}`),
      ratio && _(`is-${ratio}`)
    )
  }
}
</script>

<style lang="scss" module>
@import '../_base.scss';
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/elements/image.sass';

.image {
  img { 
    height: auto;
    max-width: 100%
  }
}
</style>
