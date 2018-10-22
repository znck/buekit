<script>
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import PropType, { normalize } from '@znck/prop-types';
import { isBoolean } from 'lodash-es';
import { styleResolver, style } from '../utils';
import { createTag } from '../mixins';
var normalizer;

var props = function props(_props, _) {
  normalizer = normalizer || normalize(_props, function (name, value) {
    switch (name) {
      case 'gap':
        return value === false ? [_('is-gapless')] : value !== true ? [_('is-variable'), _("is-" + value)] : [];

      case 'tag':
        return value;

      default:
        return value && _("is-" + name);
    }
  });
  return normalizer(_props);
};

export default {
  name: 'Columns',
  functional: true,
  mixins: [createTag()],
  props: {
    centered: PropType.bool.value(false),
    vcentered: PropType.bool.value(false),
    mobile: PropType.bool.value(false),
    desktop: PropType.bool.value(false),
    gap: PropType.oneOfType(PropType.bool, PropType.number.validate(function (v) {
      return 0 <= v && v <= 8;
    }), PropType.string.validate(function (v) {
      return /^[0-8]$/.test(v);
    })).value(true),
    multiline: PropType.bool.value(false)
  },
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    var _props2 = props(ctx.props, _),
        tag = _props2.tag,
        rest = _objectWithoutProperties(_props2, ["tag"]);

    return style(h(tag, ctx.data, ctx.children), _('columns'), Object.values(rest));
  }
};
</script>

<style src="./columns.css" module>

</style>
