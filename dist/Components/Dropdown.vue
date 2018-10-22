<script>
import PropTypes from '@znck/prop-types';
import { isFunction } from 'lodash-es';
import { styleResolver, style, toArray, call } from '../utils';
import { createTag } from '../mixins';
import Button from '../Elements/Button.vue';
import Icon from '../Elements/Icon.vue';
import ClickAway from '../Abstract/ClickAway.vue';
export default {
  name: 'Dropdown',
  functional: true,
  mixins: [createTag()],
  model: {
    prop: 'open',
    event: 'open'
  },
  props: {
    icon: PropTypes.string.value('fa fa-angle-down'),
    open: PropTypes.bool.value(true),
    title: PropTypes.string,
    right: PropTypes.bool.value(false),
    hoverable: PropTypes.bool.value(false),
    direction: PropTypes.oneOf('up')
  },
  render: function render(h, ctx) {
    var _ctx$props = ctx.props,
        icon = _ctx$props.icon,
        open = _ctx$props.open,
        tag = _ctx$props.tag,
        title = _ctx$props.title,
        right = _ctx$props.right,
        hoverable = _ctx$props.hoverable,
        direction = _ctx$props.direction;

    var _ = styleResolver(ctx.$style);

    var style = [_('dropdown'), open && _('is-active'), right && _('is-right'), hoverable && _('is-hoverable'), direction && _("is-" + direction)];

    var _ctx$slots = ctx.slots(),
        trigger = _ctx$slots.trigger,
        _ctx$slots$default = _ctx$slots.default,
        content = _ctx$slots$default === void 0 ? [] : _ctx$slots$default;

    trigger = trigger || [h(Button, {}, [h('span', {}, title), h(Icon, {}, [h('i', {
      class: icon
    })])])];

    var itemClass = _('dropdown-item');

    var dividerClass = _('dropdown-divider');

    var fireOpen = function fireOpen() {
      return call(ctx.data && ctx.data.on && ctx.data.on.open);
    };

    var el = h(tag, ctx.data, [h('div', {
      class: _('dropdown-trigger'),
      on: {
        click: fireOpen
      }
    }, trigger), h('div', {
      class: _('dropdown-menu')
    }, [h('div', {
      class: _('dropdown-content')
    }, content.map(function (item) {
      return style(item, item && item.tag === 'hr' ? dividerClass : itemClass);
    }))])]);
    if (open) return h(ClickAway, {
      on: {
        handle: function handle() {
          open && fireOpen();
        }
      }
    }, [el]);
    return el;
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

.dropdown {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}

.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {
  display: block;
}

.dropdown.is-right .dropdown-menu {
  left: auto;
  right: 0;
}

.dropdown.is-up .dropdown-menu {
  bottom: 100%;
  padding-bottom: 4px;
  padding-top: unset;
  top: auto;
}

.dropdown-menu {
  display: none;
  left: 0;
  min-width: 12rem;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  z-index: 20;
}

.dropdown-content {
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.dropdown-item {
  color: #4a4a4a;
  display: block;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0.375rem 1rem;
  position: relative;
}

a.dropdown-item {
  padding-right: 3rem;
  white-space: nowrap;
}

a.dropdown-item:hover {
  background-color: whitesmoke;
  color: #0a0a0a;
}

a.dropdown-item.is-active {
  background-color: #3273dc;
  color: #fff;
}

.dropdown-divider {
  background-color: #dbdbdb;
  border: none;
  display: block;
  height: 1px;
  margin: 0.5rem 0;
}
</style>
