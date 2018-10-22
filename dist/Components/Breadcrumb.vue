<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver, isIgnoredVnode } from '../utils';
import { createTag } from '../mixins';
import { sizes } from '../shared';
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
  render: function render(h, ctx) {
    var _ctx$props = ctx.props,
        size = _ctx$props.size,
        tag = _ctx$props.tag,
        centered = _ctx$props.centered,
        pushed = _ctx$props.pushed,
        separator = _ctx$props.separator;

    var _ = styleResolver(ctx.$style);

    var slots = ctx.slots();
    var links = (slots.default || []).filter(function (v) {
      return !isIgnoredVnode(v);
    });
    var k = links.length - 1;
    var wrapper = [h('ul', {}, links.map(function (link, i) {
      return h('li', {
        class: [i === k && _('is-active')]
      }, [link]);
    }))];
    return style(h(tag, ctx.data, wrapper), _('breadcrumb'), size && _("is-" + size), centered && _('is-centered'), pushed && _('is-right'), separator && _("has-" + separator + "-separator"));
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

.breadcrumb {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}

.breadcrumb:not(:last-child) {
  margin-bottom: 1.5rem;
}

.breadcrumb a {
  align-items: center;
  color: #3273dc;
  display: flex;
  justify-content: center;
  padding: 0.5em 0.75em;
}

.breadcrumb a:hover {
  color: #363636;
}

.breadcrumb li {
  align-items: center;
  display: flex;
}

.breadcrumb li:first-child a {
  padding-left: 0;
}

.breadcrumb li.is-active a {
  color: #363636;
  cursor: default;
  pointer-events: none;
}

.breadcrumb li + li::before {
  color: #4a4a4a;
  content: "\0002f";
}

.breadcrumb ul, .breadcrumb ol {
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
}

.breadcrumb .icon:first-child {
  margin-right: 0.5em;
}

.breadcrumb .icon:last-child {
  margin-left: 0.5em;
}

.breadcrumb.is-centered ol, .breadcrumb.is-centered ul {
  justify-content: center;
}

.breadcrumb.is-right ol, .breadcrumb.is-right ul {
  justify-content: flex-end;
}

.breadcrumb.is-small {
  font-size: 0.75rem;
}

.breadcrumb.is-medium {
  font-size: 1.25rem;
}

.breadcrumb.is-large {
  font-size: 1.5rem;
}

.breadcrumb.has-arrow-separator li + li::before {
  content: "\02192";
}

.breadcrumb.has-bullet-separator li + li::before {
  content: "\02022";
}

.breadcrumb.has-dot-separator li + li::before {
  content: "\000b7";
}

.breadcrumb.has-succeeds-separator li + li::before {
  content: "\0227B";
}
</style>
