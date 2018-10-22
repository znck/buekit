<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver } from '../utils';
import { createTag } from '../mixins';
import { colors } from '../shared';
export default {
  name: 'Notification',
  functional: true,
  mixins: [createTag('div', true)],
  props: {
    color: PropTypes.oneOf(colors)
  },
  render: function render(h, ctx) {
    var _ctx$props = ctx.props,
        abstract = _ctx$props.abstract,
        color = _ctx$props.color,
        tag = _ctx$props.tag;

    var _ = styleResolver(ctx.$style);

    var styles = [_('notification'), color && _('is-' + color)];

    if (!ctx.children || ctx.children.length !== 1 || !ctx.children[0].tag) {
      return style(h('div', ctx.data, ctx.children), styles);
    }

    return style(ctx.children[0], styles);
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

.notification {
  background-color: whitesmoke;
  border-radius: 3px;
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  position: relative;
}

.notification:not(:last-child) {
  margin-bottom: 1.5rem;
}

.notification a:not(.button) {
  color: currentColor;
  text-decoration: underline;
}

.notification strong {
  color: currentColor;
}

.notification code,
.notification pre {
  background: white;
}

.notification pre code {
  background: transparent;
}

.notification > .delete {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}

.notification .title,
.notification .subtitle,
.notification .content {
  color: currentColor;
}

.notification.is-white {
  background-color: white;
  color: #0a0a0a;
}

.notification.is-black {
  background-color: #0a0a0a;
  color: white;
}

.notification.is-light {
  background-color: whitesmoke;
  color: #363636;
}

.notification.is-dark {
  background-color: #363636;
  color: whitesmoke;
}

.notification.is-primary {
  background-color: #00d1b2;
  color: #fff;
}

.notification.is-link {
  background-color: #3273dc;
  color: #fff;
}

.notification.is-info {
  background-color: #209cee;
  color: #fff;
}

.notification.is-success {
  background-color: #23d160;
  color: #fff;
}

.notification.is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.notification.is-danger {
  background-color: #ff3860;
  color: #fff;
}
</style>
