<script>
import { style, styleResolver } from '../utils';
export default {
  name: 'AbstractBox',
  abstract: true,
  functional: true,
  render: function render(h, ctx) {
    var s = styleResolver(ctx.$style);

    if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
      console.warn('Box is an abstract component. It requires exactly one child.');
      return null;
    }

    return style(ctx.children[0], s('box'), ctx.data && ctx.data.class, ctx.data && ctx.data.staticClass);
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
