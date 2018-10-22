<script>
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from '@znck/prop-types';
import { style, styleResolver, toObject } from '../utils';
import { colors, sizes } from '../shared';
export default {
  name: 'Progress',
  functional: true,
  props: {
    max: PropTypes.number.value(100),
    value: PropTypes.number.isRequired,
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(sizes)
  },
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    var _ctx$props = ctx.props,
        color = _ctx$props.color,
        size = _ctx$props.size,
        value = _ctx$props.value,
        max = _ctx$props.max;
    ctx.data = ctx.data || {};
    ctx.data.attrs = _extends({}, toObject(ctx.data.attrs), {
      value: value,
      max: max
    });
    return style(h('progress', ctx.data, [value + '%']), _('progress'), color && _("is-" + color), size && _("is-" + size));
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

.progress {
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 290486px;
  display: block;
  height: 1rem;
  overflow: hidden;
  padding: 0;
  width: 100%;
}

.progress:not(:last-child) {
  margin-bottom: 1.5rem;
}

.progress::-webkit-progress-bar {
  background-color: #dbdbdb;
}

.progress::-webkit-progress-value {
  background-color: #4a4a4a;
}

.progress::-moz-progress-bar {
  background-color: #4a4a4a;
}

.progress::-ms-fill {
  background-color: #4a4a4a;
  border: none;
}

.progress.is-white::-webkit-progress-value {
  background-color: white;
}

.progress.is-white::-moz-progress-bar {
  background-color: white;
}

.progress.is-white::-ms-fill {
  background-color: white;
}

.progress.is-black::-webkit-progress-value {
  background-color: #0a0a0a;
}

.progress.is-black::-moz-progress-bar {
  background-color: #0a0a0a;
}

.progress.is-black::-ms-fill {
  background-color: #0a0a0a;
}

.progress.is-light::-webkit-progress-value {
  background-color: whitesmoke;
}

.progress.is-light::-moz-progress-bar {
  background-color: whitesmoke;
}

.progress.is-light::-ms-fill {
  background-color: whitesmoke;
}

.progress.is-dark::-webkit-progress-value {
  background-color: #363636;
}

.progress.is-dark::-moz-progress-bar {
  background-color: #363636;
}

.progress.is-dark::-ms-fill {
  background-color: #363636;
}

.progress.is-primary::-webkit-progress-value {
  background-color: #00d1b2;
}

.progress.is-primary::-moz-progress-bar {
  background-color: #00d1b2;
}

.progress.is-primary::-ms-fill {
  background-color: #00d1b2;
}

.progress.is-link::-webkit-progress-value {
  background-color: #3273dc;
}

.progress.is-link::-moz-progress-bar {
  background-color: #3273dc;
}

.progress.is-link::-ms-fill {
  background-color: #3273dc;
}

.progress.is-info::-webkit-progress-value {
  background-color: #209cee;
}

.progress.is-info::-moz-progress-bar {
  background-color: #209cee;
}

.progress.is-info::-ms-fill {
  background-color: #209cee;
}

.progress.is-success::-webkit-progress-value {
  background-color: #23d160;
}

.progress.is-success::-moz-progress-bar {
  background-color: #23d160;
}

.progress.is-success::-ms-fill {
  background-color: #23d160;
}

.progress.is-warning::-webkit-progress-value {
  background-color: #ffdd57;
}

.progress.is-warning::-moz-progress-bar {
  background-color: #ffdd57;
}

.progress.is-warning::-ms-fill {
  background-color: #ffdd57;
}

.progress.is-danger::-webkit-progress-value {
  background-color: #ff3860;
}

.progress.is-danger::-moz-progress-bar {
  background-color: #ff3860;
}

.progress.is-danger::-ms-fill {
  background-color: #ff3860;
}

.progress.is-small {
  height: 0.75rem;
}

.progress.is-medium {
  height: 1.25rem;
}

.progress.is-large {
  height: 1.5rem;
}
</style>
