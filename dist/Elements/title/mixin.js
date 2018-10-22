import { isString } from 'lodash-es';
import PropTypes from '@znck/prop-types';
import { style, styleResolver } from '../../utils';
import { createTag } from '../../mixins';
export default (function (name) {
  return {
    functional: true,
    mixins: [createTag(true, true)],
    props: {
      level: PropTypes.oneOfType(PropTypes.oneOf('1', '2', '3', '4', '5', '6'), PropTypes.number.validate(function (v) {
        return 1 <= v && v <= 6;
      })),
      spaced: PropTypes.bool.value(false)
    },
    render: function render(h, ctx) {
      var _ctx$props = ctx.props,
          level = _ctx$props.level,
          spaced = _ctx$props.spaced;
      var tag = isString(ctx.props.tag) ? ctx.props.tag : level ? 'h' + level : 'h1';

      var _ = styleResolver(ctx.$style);

      var styles = [_(name), spaced && _('is-spaced'), level && _("is-" + level)];
      if (ctx.props.tag !== false) return style(h(tag, ctx.data, ctx.children), styles);

      if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
        console.warn('Title is an abstract component. It requires exactly one child.');
        return null;
      }

      return style(ctx.children[0], styles);
    }
  };
});