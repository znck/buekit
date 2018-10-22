<script>
import { isString } from 'lodash-es';
import { style, styleResolver } from '../utils';
import { createTag } from '../mixins';
export default {
  name: 'Box',
  functional: true,
  mixins: [createTag('div', true)],
  render: function render(h, ctx) {
    var tag = ctx.props.tag;

    var _ = styleResolver(ctx.$style);

    if (isString(tag)) return style(h(tag, ctx.data, ctx.children), _('box'));

    if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
      console.warn('Box is an abstract component. It requires exactly one child.');
      return null;
    }

    return style(ctx.children[0], _('box'));
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

.box {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}

.box:not(:last-child) {
  margin-bottom: 1.5rem;
}

a.box:hover, a.box:focus {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;
}

a.box:active {
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;
}
</style>
