<script>
import PropTypes from '@znck/prop-types';
import { isString } from 'lodash-es';
import { style, styleResolver } from '../utils';
import { createTag } from '../mixins';
export default {
  name: 'PanelBlock',
  functional: true,
  mixins: [createTag('div', true)],
  props: {
    icon: PropTypes.bool.value(false),
    tabs: PropTypes.bool.value(false)
  },
  render: function render(h, ctx) {
    var _ctx$props = ctx.props,
        icon = _ctx$props.icon,
        tabs = _ctx$props.tabs;
    var s = styleResolver(ctx.$style);
    var styles = [icon && s('panel-icon'), tabs && s('panel-tabs'), !icon && !tabs && s('panel-block')];

    if (isString(ctx.props.tag)) {
      return style(h(icon ? 'span' : ctx.props.tag, ctx.data, ctx.children), styles);
    }

    if (process.env.NODE_ENV !== 'production' && (!ctx.children || ctx.children.length !== 1)) {
      console.warn('Title is an abstract component. It requires exactly one child.');
      return null;
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

.panel {
  font-size: 1rem;
}

.panel:not(:last-child) {
  margin-bottom: 1.5rem;
}

.panel-heading,
.panel-tabs,
.panel-block {
  border-bottom: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
}

.panel-heading:first-child,
.panel-tabs:first-child,
.panel-block:first-child {
  border-top: 1px solid #dbdbdb;
}

.panel-heading {
  background-color: whitesmoke;
  border-radius: 3px 3px 0 0;
  color: #363636;
  font-size: 1.25em;
  font-weight: 300;
  line-height: 1.25;
  padding: 0.5em 0.75em;
}

.panel-tabs {
  align-items: flex-end;
  display: flex;
  font-size: 0.875em;
  justify-content: center;
}

.panel-tabs a {
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: -1px;
  padding: 0.5em;
}

.panel-tabs a.is-active {
  border-bottom-color: #4a4a4a;
  color: #363636;
}

.panel-list a {
  color: #4a4a4a;
}

.panel-list a:hover {
  color: #3273dc;
}

.panel-block {
  align-items: center;
  color: #363636;
  display: flex;
  justify-content: flex-start;
  padding: 0.5em 0.75em;
}

.panel-block input[type="checkbox"] {
  margin-right: 0.75em;
}

.panel-block > .control {
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
}

.panel-block.is-wrapped {
  flex-wrap: wrap;
}

.panel-block.is-active {
  border-left-color: #3273dc;
  color: #363636;
}

.panel-block.is-active .panel-icon {
  color: #3273dc;
}

a.panel-block,
label.panel-block {
  cursor: pointer;
}

a.panel-block:hover,
label.panel-block:hover {
  background-color: whitesmoke;
}

.panel-icon {
  display: inline-block;
  font-size: 14px;
  height: 1em;
  line-height: 1em;
  text-align: center;
  vertical-align: top;
  width: 1em;
  color: #7a7a7a;
  margin-right: 0.75em;
}

.panel-icon .fa {
  font-size: inherit;
  line-height: inherit;
}
</style>
