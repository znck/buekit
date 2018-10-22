<script>
import { isFunction } from 'lodash-es';
import PropTypes from '@znck/prop-types';
import { createTag } from '../mixins';
import { styleResolver, style } from '../utils';
import { colors } from '../shared';
import Burger from './NavbarBurger.vue';
export default {
  name: 'Navbar',
  data: function data() {
    return {
      active: false
    };
  },
  mixins: [createTag()],
  props: {
    color: PropTypes.oneOf.apply(PropTypes, ['white'].concat(colors)),
    noBurger: PropTypes.bool.value(false),
    transparent: PropTypes.bool.value(false)
  },
  render: function render(h) {
    var _this = this;

    var _ = styleResolver(this.$style);

    var _this$$props = this.$props,
        color = _this$$props.color,
        transparent = _this$$props.transparent,
        tag = _this$$props.tag,
        noBurger = _this$$props.noBurger;
    var active = this.active;
    var _this$$slots = this.$slots,
        menu = _this$$slots.menu,
        _this$$slots$default = _this$$slots.default,
        brand = _this$$slots$default === void 0 ? [] : _this$$slots$default,
        left = _this$$slots.start,
        right = _this$$slots.end;

    if (menu) {
      left = menu.concat(left || []);
    }

    var needsBrand = !noBurger || brand;
    var needsMenu = left || right;

    if (!noBurger) {
      brand = brand.concat([h(Burger, {
        class: active && _('is-active'),
        on: {
          click: function click() {
            return _this.activate(!active);
          }
        }
      })]);
    }

    return style(h(tag, {
      props: this.$attrs,
      on: this.$listeners
    }, [needsBrand && h('div', {
      class: _('navbar-brand')
    }, brand), needsMenu && h('div', {
      class: [_('navbar-menu'), active && _('is-active')]
    }, [left && h('div', {
      class: _('navbar-start')
    }, left), right && h('div', {
      class: _('navbar-end')
    }, right)])]), _('navbar'), color && _("is-" + color), transparent && _('is-transparent'));
  },
  methods: {
    activate: function activate(value) {
      this.active = value;
    }
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

.navbar {
  background-color: white;
  min-height: 3.25rem;
  position: relative;
}

.navbar.is-white {
  background-color: white;
  color: #0a0a0a;
}

.navbar.is-white .navbar-brand > .navbar-item,
.navbar.is-white .navbar-brand .navbar-link {
  color: #0a0a0a;
}

.navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,
.navbar.is-white .navbar-brand .navbar-link:hover,
.navbar.is-white .navbar-brand .navbar-link.is-active {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.navbar.is-white .navbar-brand .navbar-link::after {
  border-color: #0a0a0a;
}

@media screen and (min-width: 1024px) {
  .navbar.is-white .navbar-start > .navbar-item,
  .navbar.is-white .navbar-start .navbar-link,
  .navbar.is-white .navbar-end > .navbar-item,
  .navbar.is-white .navbar-end .navbar-link {
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,
  .navbar.is-white .navbar-start .navbar-link:hover,
  .navbar.is-white .navbar-start .navbar-link.is-active,
  .navbar.is-white .navbar-end > a.navbar-item:hover,
  .navbar.is-white .navbar-end > a.navbar-item.is-active,
  .navbar.is-white .navbar-end .navbar-link:hover,
  .navbar.is-white .navbar-end .navbar-link.is-active {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-start .navbar-link::after,
  .navbar.is-white .navbar-end .navbar-link::after {
    border-color: #0a0a0a;
  }
  .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {
    background-color: white;
    color: #0a0a0a;
  }
}

.navbar.is-black {
  background-color: #0a0a0a;
  color: white;
}

.navbar.is-black .navbar-brand > .navbar-item,
.navbar.is-black .navbar-brand .navbar-link {
  color: white;
}

.navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,
.navbar.is-black .navbar-brand .navbar-link:hover,
.navbar.is-black .navbar-brand .navbar-link.is-active {
  background-color: black;
  color: white;
}

.navbar.is-black .navbar-brand .navbar-link::after {
  border-color: white;
}

@media screen and (min-width: 1024px) {
  .navbar.is-black .navbar-start > .navbar-item,
  .navbar.is-black .navbar-start .navbar-link,
  .navbar.is-black .navbar-end > .navbar-item,
  .navbar.is-black .navbar-end .navbar-link {
    color: white;
  }
  .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,
  .navbar.is-black .navbar-start .navbar-link:hover,
  .navbar.is-black .navbar-start .navbar-link.is-active,
  .navbar.is-black .navbar-end > a.navbar-item:hover,
  .navbar.is-black .navbar-end > a.navbar-item.is-active,
  .navbar.is-black .navbar-end .navbar-link:hover,
  .navbar.is-black .navbar-end .navbar-link.is-active {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-start .navbar-link::after,
  .navbar.is-black .navbar-end .navbar-link::after {
    border-color: white;
  }
  .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {
    background-color: #0a0a0a;
    color: white;
  }
}

.navbar.is-light {
  background-color: whitesmoke;
  color: #363636;
}

.navbar.is-light .navbar-brand > .navbar-item,
.navbar.is-light .navbar-brand .navbar-link {
  color: #363636;
}

.navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,
.navbar.is-light .navbar-brand .navbar-link:hover,
.navbar.is-light .navbar-brand .navbar-link.is-active {
  background-color: #e8e8e8;
  color: #363636;
}

.navbar.is-light .navbar-brand .navbar-link::after {
  border-color: #363636;
}

@media screen and (min-width: 1024px) {
  .navbar.is-light .navbar-start > .navbar-item,
  .navbar.is-light .navbar-start .navbar-link,
  .navbar.is-light .navbar-end > .navbar-item,
  .navbar.is-light .navbar-end .navbar-link {
    color: #363636;
  }
  .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,
  .navbar.is-light .navbar-start .navbar-link:hover,
  .navbar.is-light .navbar-start .navbar-link.is-active,
  .navbar.is-light .navbar-end > a.navbar-item:hover,
  .navbar.is-light .navbar-end > a.navbar-item.is-active,
  .navbar.is-light .navbar-end .navbar-link:hover,
  .navbar.is-light .navbar-end .navbar-link.is-active {
    background-color: #e8e8e8;
    color: #363636;
  }
  .navbar.is-light .navbar-start .navbar-link::after,
  .navbar.is-light .navbar-end .navbar-link::after {
    border-color: #363636;
  }
  .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #e8e8e8;
    color: #363636;
  }
  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #363636;
  }
}

.navbar.is-dark {
  background-color: #363636;
  color: whitesmoke;
}

.navbar.is-dark .navbar-brand > .navbar-item,
.navbar.is-dark .navbar-brand .navbar-link {
  color: whitesmoke;
}

.navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,
.navbar.is-dark .navbar-brand .navbar-link:hover,
.navbar.is-dark .navbar-brand .navbar-link.is-active {
  background-color: #292929;
  color: whitesmoke;
}

.navbar.is-dark .navbar-brand .navbar-link::after {
  border-color: whitesmoke;
}

@media screen and (min-width: 1024px) {
  .navbar.is-dark .navbar-start > .navbar-item,
  .navbar.is-dark .navbar-start .navbar-link,
  .navbar.is-dark .navbar-end > .navbar-item,
  .navbar.is-dark .navbar-end .navbar-link {
    color: whitesmoke;
  }
  .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,
  .navbar.is-dark .navbar-start .navbar-link:hover,
  .navbar.is-dark .navbar-start .navbar-link.is-active,
  .navbar.is-dark .navbar-end > a.navbar-item:hover,
  .navbar.is-dark .navbar-end > a.navbar-item.is-active,
  .navbar.is-dark .navbar-end .navbar-link:hover,
  .navbar.is-dark .navbar-end .navbar-link.is-active {
    background-color: #292929;
    color: whitesmoke;
  }
  .navbar.is-dark .navbar-start .navbar-link::after,
  .navbar.is-dark .navbar-end .navbar-link::after {
    border-color: whitesmoke;
  }
  .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #292929;
    color: whitesmoke;
  }
  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {
    background-color: #363636;
    color: whitesmoke;
  }
}

.navbar.is-primary {
  background-color: #00d1b2;
  color: #fff;
}

.navbar.is-primary .navbar-brand > .navbar-item,
.navbar.is-primary .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,
.navbar.is-primary .navbar-brand .navbar-link:hover,
.navbar.is-primary .navbar-brand .navbar-link.is-active {
  background-color: #00b89c;
  color: #fff;
}

.navbar.is-primary .navbar-brand .navbar-link::after {
  border-color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-primary .navbar-start > .navbar-item,
  .navbar.is-primary .navbar-start .navbar-link,
  .navbar.is-primary .navbar-end > .navbar-item,
  .navbar.is-primary .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,
  .navbar.is-primary .navbar-start .navbar-link:hover,
  .navbar.is-primary .navbar-start .navbar-link.is-active,
  .navbar.is-primary .navbar-end > a.navbar-item:hover,
  .navbar.is-primary .navbar-end > a.navbar-item.is-active,
  .navbar.is-primary .navbar-end .navbar-link:hover,
  .navbar.is-primary .navbar-end .navbar-link.is-active {
    background-color: #00b89c;
    color: #fff;
  }
  .navbar.is-primary .navbar-start .navbar-link::after,
  .navbar.is-primary .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #00b89c;
    color: #fff;
  }
  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {
    background-color: #00d1b2;
    color: #fff;
  }
}

.navbar.is-link {
  background-color: #3273dc;
  color: #fff;
}

.navbar.is-link .navbar-brand > .navbar-item,
.navbar.is-link .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,
.navbar.is-link .navbar-brand .navbar-link:hover,
.navbar.is-link .navbar-brand .navbar-link.is-active {
  background-color: #2366d1;
  color: #fff;
}

.navbar.is-link .navbar-brand .navbar-link::after {
  border-color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-link .navbar-start > .navbar-item,
  .navbar.is-link .navbar-start .navbar-link,
  .navbar.is-link .navbar-end > .navbar-item,
  .navbar.is-link .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,
  .navbar.is-link .navbar-start .navbar-link:hover,
  .navbar.is-link .navbar-start .navbar-link.is-active,
  .navbar.is-link .navbar-end > a.navbar-item:hover,
  .navbar.is-link .navbar-end > a.navbar-item.is-active,
  .navbar.is-link .navbar-end .navbar-link:hover,
  .navbar.is-link .navbar-end .navbar-link.is-active {
    background-color: #2366d1;
    color: #fff;
  }
  .navbar.is-link .navbar-start .navbar-link::after,
  .navbar.is-link .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #2366d1;
    color: #fff;
  }
  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {
    background-color: #3273dc;
    color: #fff;
  }
}

.navbar.is-info {
  background-color: #209cee;
  color: #fff;
}

.navbar.is-info .navbar-brand > .navbar-item,
.navbar.is-info .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,
.navbar.is-info .navbar-brand .navbar-link:hover,
.navbar.is-info .navbar-brand .navbar-link.is-active {
  background-color: #118fe4;
  color: #fff;
}

.navbar.is-info .navbar-brand .navbar-link::after {
  border-color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-info .navbar-start > .navbar-item,
  .navbar.is-info .navbar-start .navbar-link,
  .navbar.is-info .navbar-end > .navbar-item,
  .navbar.is-info .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,
  .navbar.is-info .navbar-start .navbar-link:hover,
  .navbar.is-info .navbar-start .navbar-link.is-active,
  .navbar.is-info .navbar-end > a.navbar-item:hover,
  .navbar.is-info .navbar-end > a.navbar-item.is-active,
  .navbar.is-info .navbar-end .navbar-link:hover,
  .navbar.is-info .navbar-end .navbar-link.is-active {
    background-color: #118fe4;
    color: #fff;
  }
  .navbar.is-info .navbar-start .navbar-link::after,
  .navbar.is-info .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #118fe4;
    color: #fff;
  }
  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {
    background-color: #209cee;
    color: #fff;
  }
}

.navbar.is-success {
  background-color: #23d160;
  color: #fff;
}

.navbar.is-success .navbar-brand > .navbar-item,
.navbar.is-success .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,
.navbar.is-success .navbar-brand .navbar-link:hover,
.navbar.is-success .navbar-brand .navbar-link.is-active {
  background-color: #20bc56;
  color: #fff;
}

.navbar.is-success .navbar-brand .navbar-link::after {
  border-color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-success .navbar-start > .navbar-item,
  .navbar.is-success .navbar-start .navbar-link,
  .navbar.is-success .navbar-end > .navbar-item,
  .navbar.is-success .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,
  .navbar.is-success .navbar-start .navbar-link:hover,
  .navbar.is-success .navbar-start .navbar-link.is-active,
  .navbar.is-success .navbar-end > a.navbar-item:hover,
  .navbar.is-success .navbar-end > a.navbar-item.is-active,
  .navbar.is-success .navbar-end .navbar-link:hover,
  .navbar.is-success .navbar-end .navbar-link.is-active {
    background-color: #20bc56;
    color: #fff;
  }
  .navbar.is-success .navbar-start .navbar-link::after,
  .navbar.is-success .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #20bc56;
    color: #fff;
  }
  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {
    background-color: #23d160;
    color: #fff;
  }
}

.navbar.is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-brand > .navbar-item,
.navbar.is-warning .navbar-brand .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,
.navbar.is-warning .navbar-brand .navbar-link:hover,
.navbar.is-warning .navbar-brand .navbar-link.is-active {
  background-color: #ffd83d;
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-brand .navbar-link::after {
  border-color: rgba(0, 0, 0, 0.7);
}

@media screen and (min-width: 1024px) {
  .navbar.is-warning .navbar-start > .navbar-item,
  .navbar.is-warning .navbar-start .navbar-link,
  .navbar.is-warning .navbar-end > .navbar-item,
  .navbar.is-warning .navbar-end .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,
  .navbar.is-warning .navbar-start .navbar-link:hover,
  .navbar.is-warning .navbar-start .navbar-link.is-active,
  .navbar.is-warning .navbar-end > a.navbar-item:hover,
  .navbar.is-warning .navbar-end > a.navbar-item.is-active,
  .navbar.is-warning .navbar-end .navbar-link:hover,
  .navbar.is-warning .navbar-end .navbar-link.is-active {
    background-color: #ffd83d;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start .navbar-link::after,
  .navbar.is-warning .navbar-end .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ffd83d;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {
    background-color: #ffdd57;
    color: rgba(0, 0, 0, 0.7);
  }
}

.navbar.is-danger {
  background-color: #ff3860;
  color: #fff;
}

.navbar.is-danger .navbar-brand > .navbar-item,
.navbar.is-danger .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,
.navbar.is-danger .navbar-brand .navbar-link:hover,
.navbar.is-danger .navbar-brand .navbar-link.is-active {
  background-color: #ff1f4b;
  color: #fff;
}

.navbar.is-danger .navbar-brand .navbar-link::after {
  border-color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-danger .navbar-start > .navbar-item,
  .navbar.is-danger .navbar-start .navbar-link,
  .navbar.is-danger .navbar-end > .navbar-item,
  .navbar.is-danger .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,
  .navbar.is-danger .navbar-start .navbar-link:hover,
  .navbar.is-danger .navbar-start .navbar-link.is-active,
  .navbar.is-danger .navbar-end > a.navbar-item:hover,
  .navbar.is-danger .navbar-end > a.navbar-item.is-active,
  .navbar.is-danger .navbar-end .navbar-link:hover,
  .navbar.is-danger .navbar-end .navbar-link.is-active {
    background-color: #ff1f4b;
    color: #fff;
  }
  .navbar.is-danger .navbar-start .navbar-link::after,
  .navbar.is-danger .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ff1f4b;
    color: #fff;
  }
  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {
    background-color: #ff3860;
    color: #fff;
  }
}

.navbar > .container {
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
}

.navbar.has-shadow {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.navbar.is-fixed-bottom, .navbar.is-fixed-top {
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
}

.navbar.is-fixed-bottom {
  bottom: 0;
}

.navbar.is-fixed-bottom.has-shadow {
  box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
}

.navbar.is-fixed-top {
  top: 0;
}

html.has-navbar-fixed-top {
  padding-top: 3.25rem;
}

html.has-navbar-fixed-bottom {
  padding-bottom: 3.25rem;
}

.navbar-brand,
.navbar-tabs {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
}

.navbar-tabs {
  -webkit-overflow-scrolling: touch;
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
}

.navbar-burger {
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
}

.navbar-burger span {
  background-color: currentColor;
  display: block;
  height: 1px;
  left: calc(50% - 8px);
  position: absolute;
  transform-origin: center;
  transition-duration: 86ms;
  transition-property: background-color, opacity, transform;
  transition-timing-function: ease-out;
  width: 16px;
}

.navbar-burger span:nth-child(1) {
  top: calc(50% - 6px);
}

.navbar-burger span:nth-child(2) {
  top: calc(50% - 1px);
}

.navbar-burger span:nth-child(3) {
  top: calc(50% + 4px);
}

.navbar-burger:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.navbar-burger.is-active span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}

.navbar-burger.is-active span:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

.navbar-menu {
  display: none;
}

.navbar-item,
.navbar-link {
  color: #4a4a4a;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  position: relative;
}

a.navbar-item:hover, a.navbar-item.is-active,
a.navbar-link:hover,
a.navbar-link.is-active {
  background-color: whitesmoke;
  color: #3273dc;
}

.navbar-item {
  flex-grow: 0;
  flex-shrink: 0;
}

.navbar-item img {
  max-height: 1.75rem;
}

.navbar-item.has-dropdown {
  padding: 0;
}

.navbar-item.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}

.navbar-item.is-tab {
  border-bottom: 1px solid transparent;
  min-height: 3.25rem;
  padding-bottom: calc(0.5rem - 1px);
}

.navbar-item.is-tab:hover {
  background-color: transparent;
  border-bottom-color: #3273dc;
}

.navbar-item.is-tab.is-active {
  background-color: transparent;
  border-bottom-color: #3273dc;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  color: #3273dc;
  padding-bottom: calc(0.5rem - 3px);
}

.navbar-content {
  flex-grow: 1;
  flex-shrink: 1;
}

.navbar-link {
  padding-right: 2.5em;
}

.navbar-dropdown {
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.navbar-dropdown .navbar-item {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.navbar-divider {
  background-color: #dbdbdb;
  border: none;
  display: none;
  height: 1px;
  margin: 0.5rem 0;
}

@media screen and (max-width: 1023px) {
  .navbar > .container {
    display: block;
  }
  .navbar-brand .navbar-item,
  .navbar-tabs .navbar-item {
    align-items: center;
    display: flex;
  }
  .navbar-menu {
    background-color: white;
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    padding: 0.5rem 0;
  }
  .navbar-menu.is-active {
    display: block;
  }
  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .navbar.is-fixed-bottom-touch {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-touch.has-shadow {
    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
  }
  .navbar.is-fixed-top-touch {
    top: 0;
  }
  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {
    -webkit-overflow-scrolling: touch;
    max-height: calc(100vh - 3.25rem);
    overflow: auto;
  }
  html.has-navbar-fixed-top-touch {
    padding-top: 3.25rem;
  }
  html.has-navbar-fixed-bottom-touch {
    padding-bottom: 3.25rem;
  }
}

@media screen and (min-width: 1024px) {
  .navbar,
  .navbar-menu,
  .navbar-start,
  .navbar-end {
    align-items: stretch;
    display: flex;
  }
  .navbar {
    min-height: 3.25rem;
  }
  .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,
  .navbar.is-transparent a.navbar-link:hover,
  .navbar.is-transparent a.navbar-link.is-active {
    background-color: transparent !important;
  }
  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {
    background-color: transparent !important;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {
    background-color: whitesmoke;
    color: #0a0a0a;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #3273dc;
  }
  .navbar-burger {
    display: none;
  }
  .navbar-item,
  .navbar-link {
    align-items: center;
    display: flex;
  }
  .navbar-item.has-dropdown {
    align-items: stretch;
  }
  .navbar-item.has-dropdown-up .navbar-link::after {
    transform: rotate(135deg) translate(0.25em, -0.25em);
  }
  .navbar-item.has-dropdown-up .navbar-dropdown {
    border-bottom: 1px solid #dbdbdb;
    border-radius: 5px 5px 0 0;
    border-top: none;
    bottom: 100%;
    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);
    top: auto;
  }
  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {
    display: block;
  }
  .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
  .navbar-link::after {
    border: 1px solid #3273dc;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.5em;
    pointer-events: none;
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: center;
    width: 0.5em;
    margin-top: -0.375em;
    right: 1.125em;
    top: 50%;
  }
  .navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
  }
  .navbar-start {
    justify-content: flex-start;
    margin-right: auto;
  }
  .navbar-end {
    justify-content: flex-end;
    margin-left: auto;
  }
  .navbar-dropdown {
    background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: 1px solid #dbdbdb;
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);
    display: none;
    font-size: 0.875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: 20;
  }
  .navbar-dropdown .navbar-item {
    padding: 0.375rem 1rem;
    white-space: nowrap;
  }
  .navbar-dropdown a.navbar-item {
    padding-right: 3rem;
  }
  .navbar-dropdown a.navbar-item:hover {
    background-color: whitesmoke;
    color: #0a0a0a;
  }
  .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #3273dc;
  }
  .navbar-dropdown.is-boxed {
    border-radius: 5px;
    border-top: none;
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    display: block;
    opacity: 0;
    pointer-events: none;
    top: calc(100% + (-4px));
    transform: translateY(-5px);
    transition-duration: 86ms;
    transition-property: opacity, transform;
  }
  .navbar-dropdown.is-right {
    left: auto;
    right: 0;
  }
  .navbar-divider {
    display: block;
  }
  .navbar > .container .navbar-brand,
  .container > .navbar .navbar-brand {
    margin-left: -1rem;
  }
  .navbar > .container .navbar-menu,
  .container > .navbar .navbar-menu {
    margin-right: -1rem;
  }
  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .navbar.is-fixed-bottom-desktop {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-desktop.has-shadow {
    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
  }
  .navbar.is-fixed-top-desktop {
    top: 0;
  }
  html.has-navbar-fixed-top-desktop {
    padding-top: 3.25rem;
  }
  html.has-navbar-fixed-bottom-desktop {
    padding-bottom: 3.25rem;
  }
  a.navbar-item.is-active,
  a.navbar-link.is-active {
    color: #0a0a0a;
  }
  a.navbar-item.is-active:not(:hover),
  a.navbar-link.is-active:not(:hover) {
    background-color: transparent;
  }
  .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: whitesmoke;
  }
}
</style>
