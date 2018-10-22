<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver } from '../utils';
import { sizes } from '../shared';
export default {
  name: 'Icon',
  functional: true,
  props: {
    size: PropTypes.oneOf(sizes)
  },
  render: function render(h, ctx) {
    var s = styleResolver(ctx.$style);
    var size = ctx.props.size;
    return style(h('span', ctx.data, ctx.children), s('icon'), size && s("is-" + size));
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

.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
}

.icon.is-small {
  height: 1rem;
  width: 1rem;
}

.icon.is-medium {
  height: 2rem;
  width: 2rem;
}

.icon.is-large {
  height: 3rem;
  width: 3rem;
}
</style>
