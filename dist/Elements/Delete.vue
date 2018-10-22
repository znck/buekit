<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver } from '../utils';
import { createTag } from '../mixins';
import { sizes } from '../shared';
export default {
  name: 'Delete',
  functional: true,
  mixins: [createTag('a')],
  props: {
    size: PropTypes.oneOf(sizes)
  },
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    var _ctx$props = ctx.props,
        size = _ctx$props.size,
        tag = _ctx$props.tag;
    var styles = [_('delete'), size && _('is-' + size)];

    if (process.env.NODE_ENV !== 'production' && ctx.children && ctx.children.length) {
      console.warn('Delete component should not have any child nodes.');
    }

    return style(h(tag, ctx.data, []), styles);
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

.block:not(:last-child) {
  margin-bottom: 1.5rem;
}

.delete {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgba(10, 10, 10, 0.2);
  border: none;
  border-radius: 290486px;
  cursor: pointer;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 0;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
  outline: none;
  position: relative;
  vertical-align: top;
  width: 20px;
}

.delete:before, .delete:after {
  background-color: white;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}

.delete:before {
  height: 2px;
  width: 50%;
}

.delete:after {
  height: 50%;
  width: 2px;
}

.delete:hover, .delete:focus {
  background-color: rgba(10, 10, 10, 0.3);
}

.delete:active {
  background-color: rgba(10, 10, 10, 0.4);
}

.delete.is-small {
  height: 16px;
  max-height: 16px;
  max-width: 16px;
  min-height: 16px;
  min-width: 16px;
  width: 16px;
}

.delete.is-medium {
  height: 24px;
  max-height: 24px;
  max-width: 24px;
  min-height: 24px;
  min-width: 24px;
  width: 24px;
}

.delete.is-large {
  height: 32px;
  max-height: 32px;
  max-width: 32px;
  min-height: 32px;
  min-width: 32px;
  width: 32px;
}

.heading {
  display: block;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.highlight {
  font-weight: 400;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
}

.highlight:not(:last-child) {
  margin-bottom: 1.5rem;
}

.highlight pre {
  overflow: auto;
  max-width: 100%;
}

.loader {
  animation: spinAround 500ms infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}

.number {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 290486px;
  display: inline-flex;
  font-size: 1.25rem;
  height: 2em;
  justify-content: center;
  margin-right: 1.5rem;
  min-width: 2.5em;
  padding: 0.25rem 0.5rem;
  text-align: center;
  vertical-align: top;
}
</style>
