<script>
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes, { normalize } from '@znck/prop-types';
import { styleResolver, style } from '../utils';
import { devices, additionalDevices, columns as sizes } from '../shared';
import { createTag } from '../mixins';

var sizeType = function sizeType(name, extras) {
  if (extras === void 0) {
    extras = [];
  }

  return PropTypes.oneOfType(PropTypes.number.validate(function (v) {
    return 1 <= v && v <= 12;
  }), PropTypes.string.validate(function (v) {
    return function (x) {
      return 1 <= x && x <= 12;
    }(Number(x));
  }), PropTypes.oneOf(sizes)).modifiers(name, [].concat(devices, extras));
};

var normalizer;

var props = function props(_props, _) {
  normalizer = normalizer || normalize(_props, function (name, value) {
    switch (name) {
      case 'size':
        return [_("is-" + value)];

      case 'offset':
        return [_("is-" + name + "-" + value)];

      case 'narrow':
        return value && [_("is-" + name)];

      default:
        return value;
    }
  }, function (name, suffix, value) {
    switch (name) {
      case 'size':
        return _("is-" + value + "-" + suffix);

      case 'narrow':
        return value && _("is-" + name + "-" + suffix);

      case 'offset':
        return _("is-" + name + "-" + value + "-" + suffix);
    }
  });
  return normalizer(_props);
};

export default {
  name: 'Column',
  functional: true,
  mixins: [createTag()],
  props: _extends({}, PropTypes.bool.value(false).modifiers('narrow', devices), sizeType('offset'), sizeType('size', additionalDevices)),
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    var _props2 = props(ctx.props, _),
        tag = _props2.tag,
        rest = _objectWithoutProperties(_props2, ["tag"]);

    return style(h(tag, ctx.data, ctx.children), _('column'), Object.values(rest));
  }
};
</script>

<style src="./columns.css" module>

</style>
