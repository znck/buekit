<script>
import { style, styleResolver } from '../utils';
import PropTypes from '@znck/prop-types';
export default {
  name: 'Footer',
  functional: true,
  props: {
    tag: PropTypes.string.value('footer')
  },
  render: function render(h, ctx) {
    if (ctx === void 0) {
      ctx = {};
    }

    var _ = styleResolver(ctx.$style);

    var tag = ctx.props.tag;
    return style(h(tag, ctx.data, ctx.children), _('footer'));
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

.footer {
  background-color: whitesmoke;
  padding: 3rem 1.5rem 6rem;
}
</style>
