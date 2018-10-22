<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver } from '../utils';
export default {
  name: 'Image',
  functional: true,
  props: {
    size: PropTypes.oneOf('16', '24', '32', '48', '64', '96', '128'),
    ratio: PropTypes.oneOf('square', '1by1', '4by3', '3by2', '16by9', '2by1'),
    src: PropTypes.string,
    alt: PropTypes.string
  },
  render: function render(h, ctx) {
    var _ctx$props = ctx.props,
        size = _ctx$props.size,
        ratio = _ctx$props.ratio,
        src = _ctx$props.src,
        alt = _ctx$props.alt;

    var _ = styleResolver(ctx.$style);

    return style(h('figure', ctx.data, ctx.children || [h('img', {
      attrs: {
        src: src,
        alt: alt
      }
    })]), _('image'), size && _("is-" + size + "x" + size), ratio && _("is-" + ratio));
  }
};
</script>

<style module>
* {
  box-sizing: inherit;
}

*:before, *:after {
  box-sizing: inherit;
}

@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.image {
  display: block;
  position: relative;
}

.image img {
  display: block;
  height: auto;
  width: 100%;
}

.image img.is-rounded {
  border-radius: 290486px;
}

.image.is-square img, .image.is-1by1 img, .image.is-4by3 img, .image.is-3by2 img, .image.is-16by9 img, .image.is-2by1 img {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

.image.is-square, .image.is-1by1 {
  padding-top: 100%;
}

.image.is-4by3 {
  padding-top: 75%;
}

.image.is-3by2 {
  padding-top: 66.6666%;
}

.image.is-16by9 {
  padding-top: 56.25%;
}

.image.is-2by1 {
  padding-top: 50%;
}

.image.is-16x16 {
  height: 16px;
  width: 16px;
}

.image.is-24x24 {
  height: 24px;
  width: 24px;
}

.image.is-32x32 {
  height: 32px;
  width: 32px;
}

.image.is-48x48 {
  height: 48px;
  width: 48px;
}

.image.is-64x64 {
  height: 64px;
  width: 64px;
}

.image.is-96x96 {
  height: 96px;
  width: 96px;
}

.image.is-128x128 {
  height: 128px;
  width: 128px;
}

.image img {
  height: auto;
  max-width: 100%;
}
</style>
