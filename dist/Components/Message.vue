<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver, call } from '../utils';
import { colors, sizes } from '../shared';
import Delete from '../Elements/Delete.vue';
export default {
  name: 'Message',
  functional: true,
  props: {
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(sizes),
    tag: PropTypes.string.value('span'),
    title: PropTypes.string,
    clearable: PropTypes.bool.value(true)
  },
  render: function render(h, ctx) {
    var s = styleResolver(ctx.$style);
    var _ctx$props = ctx.props,
        color = _ctx$props.color,
        size = _ctx$props.size,
        tag = _ctx$props.tag,
        title = _ctx$props.title,
        clearable = _ctx$props.clearable;

    var _ctx$slots = ctx.slots(),
        header = _ctx$slots.header,
        body = _ctx$slots.default;

    var needsHeader = header || title;
    var del;

    if (clearable) {
      del = {
        on: {
          click: function click() {
            return call(ctx.data && ctx.data.on && ctx.data.on.delete);
          }
        }
      };
    }

    if (header && clearable) {
      header.push(h(Delete, del));
    }

    return style(h(tag, ctx.data, [needsHeader && h('div', {
      class: s('message-header')
    }, header || [h('p', {}, title), !omit && h(Delete, del)]), h('div', {
      class: s('message-body')
    }, body)]), s('message'), color && s('is-' + color), size && s('is-' + size));
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

.message {
  background-color: whitesmoke;
  border-radius: 3px;
  font-size: 1rem;
}

.message:not(:last-child) {
  margin-bottom: 1.5rem;
}

.message strong {
  color: currentColor;
}

.message a:not(.button):not(.tag) {
  color: currentColor;
  text-decoration: underline;
}

.message.is-small {
  font-size: 0.75rem;
}

.message.is-medium {
  font-size: 1.25rem;
}

.message.is-large {
  font-size: 1.5rem;
}

.message.is-white {
  background-color: white;
}

.message.is-white .message-header {
  background-color: white;
  color: #0a0a0a;
}

.message.is-white .message-body {
  border-color: white;
  color: #4d4d4d;
}

.message.is-black {
  background-color: #fafafa;
}

.message.is-black .message-header {
  background-color: #0a0a0a;
  color: white;
}

.message.is-black .message-body {
  border-color: #0a0a0a;
  color: #090909;
}

.message.is-light {
  background-color: #fafafa;
}

.message.is-light .message-header {
  background-color: whitesmoke;
  color: #363636;
}

.message.is-light .message-body {
  border-color: whitesmoke;
  color: #505050;
}

.message.is-dark {
  background-color: #fafafa;
}

.message.is-dark .message-header {
  background-color: #363636;
  color: whitesmoke;
}

.message.is-dark .message-body {
  border-color: #363636;
  color: #2a2a2a;
}

.message.is-primary {
  background-color: #f5fffd;
}

.message.is-primary .message-header {
  background-color: #00d1b2;
  color: #fff;
}

.message.is-primary .message-body {
  border-color: #00d1b2;
  color: #021310;
}

.message.is-link {
  background-color: #f6f9fe;
}

.message.is-link .message-header {
  background-color: #3273dc;
  color: #fff;
}

.message.is-link .message-body {
  border-color: #3273dc;
  color: #22509a;
}

.message.is-info {
  background-color: #f6fbfe;
}

.message.is-info .message-header {
  background-color: #209cee;
  color: #fff;
}

.message.is-info .message-body {
  border-color: #209cee;
  color: #12537e;
}

.message.is-success {
  background-color: #f6fef9;
}

.message.is-success .message-header {
  background-color: #23d160;
  color: #fff;
}

.message.is-success .message-body {
  border-color: #23d160;
  color: #0e301a;
}

.message.is-warning {
  background-color: #fffdf5;
}

.message.is-warning .message-header {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.message.is-warning .message-body {
  border-color: #ffdd57;
  color: #3b3108;
}

.message.is-danger {
  background-color: #fff5f7;
}

.message.is-danger .message-header {
  background-color: #ff3860;
  color: #fff;
}

.message.is-danger .message-body {
  border-color: #ff3860;
  color: #cd0930;
}

.message-header {
  align-items: center;
  background-color: #4a4a4a;
  border-radius: 3px 3px 0 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  line-height: 1.25;
  padding: 0.5em 0.75em;
  position: relative;
}

.message-header .delete {
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 0.75em;
}

.message-header + .message-body {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: none;
}

.message-body {
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  color: #4a4a4a;
  padding: 1em 1.25em;
}

.message-body code,
.message-body pre {
  background-color: white;
}

.message-body pre code {
  background-color: transparent;
}
</style>
