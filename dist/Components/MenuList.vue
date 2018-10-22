<script>
import { style, styleResolver, isIgnoredVnode } from '../utils';
export default {
  name: 'MenuList',
  functional: true,
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    var tag = ctx.props.tag;
    return style(h('ul', ctx.data, (ctx.children || []).map(function (node) {
      return isIgnoredVnode(node) || node.tag === 'li' ? node : h('li', {}, [node]);
    })), _('menu-list'));
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

.menu {
  font-size: 1rem;
}

.menu.is-small {
  font-size: 0.75rem;
}

.menu.is-medium {
  font-size: 1.25rem;
}

.menu.is-large {
  font-size: 1.5rem;
}

.menu-list {
  line-height: 1.25;
}

.menu-list a {
  border-radius: 2px;
  color: #4a4a4a;
  display: block;
  padding: 0.5em 0.75em;
}

.menu-list a:hover {
  background-color: whitesmoke;
  color: #363636;
}

.menu-list a.is-active {
  background-color: #3273dc;
  color: #fff;
}

.menu-list li ul {
  border-left: 1px solid #dbdbdb;
  margin: 0.75em;
  padding-left: 0.75em;
}

.menu-label {
  color: #7a7a7a;
  font-size: 0.75em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.menu-label:not(:first-child) {
  margin-top: 1em;
}

.menu-label:not(:last-child) {
  margin-bottom: 1em;
}
</style>
