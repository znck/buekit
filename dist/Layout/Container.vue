<script>
import PropTypes from '@znck/prop-types';
import { styleResolver, style } from '../utils';
import { createTag } from '../mixins';
export default {
  name: 'Container',
  functional: true,
  mixins: [createTag()],
  props: {
    type: PropTypes.oneOf('fluid', 'widescreen', 'fullhd')
  },
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    var _ctx$props = ctx.props,
        type = _ctx$props.type,
        tag = _ctx$props.tag;
    return style(h(tag, ctx.data, ctx.children), _('container'), type && _("is-" + type));
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

.container {
  margin: 0 auto;
  position: relative;
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 960px;
    width: 960px;
  }
  .container.is-fluid {
    margin-left: 32px;
    margin-right: 32px;
    max-width: none;
    width: auto;
  }
}

@media screen and (max-width: 1215px) {
  .container.is-widescreen {
    max-width: 1152px;
    width: auto;
  }
}

@media screen and (max-width: 1407px) {
  .container.is-fullhd {
    max-width: 1344px;
    width: auto;
  }
}

@media screen and (min-width: 1216px) {
  .container {
    max-width: 1152px;
    width: 1152px;
  }
}

@media screen and (min-width: 1408px) {
  .container {
    max-width: 1344px;
    width: 1344px;
  }
}
</style>
