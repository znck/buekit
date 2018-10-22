<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver } from '../utils';
import { sizes } from '../shared';
import { createTag } from '../mixins';
export default {
  name: 'Section',
  functional: true,
  mixins: [createTag('section')],
  props: {
    size: PropTypes.oneOf(sizes)
  },
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    var _ctx$props = ctx.props,
        size = _ctx$props.size,
        tag = _ctx$props.tag;
    return style(h(tag, ctx.data, ctx.children), _('section'), size && _("is-" + size));
  }
};
</script>

<style module>
@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

* {
  box-sizing: inherit;
}

*:before, *:after {
  box-sizing: inherit;
}

.section {
  padding: 3rem 1.5rem;
}

@media screen and (min-width: 1024px) {
  .section.is-medium {
    padding: 9rem 1.5rem;
  }
  .section.is-large {
    padding: 18rem 1.5rem;
  }
}
</style>
