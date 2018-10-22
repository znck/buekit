<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver } from '../utils';
import { createTag } from '../mixins';
import { colors, sizes } from '../shared';
export default {
  name: 'Hero',
  functional: true,
  mixins: [createTag('section')],
  props: {
    bold: PropTypes.bool.value(false),
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(sizes)
  },
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    var _ctx$props = ctx.props,
        bold = _ctx$props.bold,
        color = _ctx$props.color,
        size = _ctx$props.size,
        tag = _ctx$props.tag;
    var slots = ctx.slots();
    return style(h(tag, ctx.data, [slots.head && h('div', {
      class: _('hero-head')
    }, slots.head), h('div', {
      class: _('hero-body')
    }, slots.default), slots.foot && h('div', {
      class: _('hero-foot')
    }, slots.foot)]), _('hero'), color && _("is-" + color), size && _("is-" + size), bold && _('is-bold'));
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

.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero .navbar {
  background: none;
}

.hero .tabs ul {
  border-bottom: none;
}

.hero.is-white {
  background-color: white;
  color: #0a0a0a;
}

.hero.is-white a:not(.button):not(.dropdown-item):not(.tag),
.hero.is-white strong {
  color: inherit;
}

.hero.is-white .title {
  color: #0a0a0a;
}

.hero.is-white .subtitle {
  color: rgba(10, 10, 10, 0.9);
}

.hero.is-white .subtitle a:not(.button),
.hero.is-white .subtitle strong {
  color: #0a0a0a;
}

@media screen and (max-width: 1023px) {
  .hero.is-white .navbar-menu {
    background-color: white;
  }
}

.hero.is-white .navbar-item,
.hero.is-white .navbar-link {
  color: rgba(10, 10, 10, 0.7);
}

.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,
.hero.is-white .navbar-link:hover,
.hero.is-white .navbar-link.is-active {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.hero.is-white .tabs a {
  color: #0a0a0a;
  opacity: 0.9;
}

.hero.is-white .tabs a:hover {
  opacity: 1;
}

.hero.is-white .tabs li.is-active a {
  opacity: 1;
}

.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {
  color: #0a0a0a;
}

.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}

.hero.is-white.is-bold {
  background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-white.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);
  }
}

.hero.is-black {
  background-color: #0a0a0a;
  color: white;
}

.hero.is-black a:not(.button):not(.dropdown-item):not(.tag),
.hero.is-black strong {
  color: inherit;
}

.hero.is-black .title {
  color: white;
}

.hero.is-black .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-black .subtitle a:not(.button),
.hero.is-black .subtitle strong {
  color: white;
}

@media screen and (max-width: 1023px) {
  .hero.is-black .navbar-menu {
    background-color: #0a0a0a;
  }
}

.hero.is-black .navbar-item,
.hero.is-black .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,
.hero.is-black .navbar-link:hover,
.hero.is-black .navbar-link.is-active {
  background-color: black;
  color: white;
}

.hero.is-black .tabs a {
  color: white;
  opacity: 0.9;
}

.hero.is-black .tabs a:hover {
  opacity: 1;
}

.hero.is-black .tabs li.is-active a {
  opacity: 1;
}

.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {
  color: white;
}

.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}

.hero.is-black.is-bold {
  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-black.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);
  }
}

.hero.is-light {
  background-color: whitesmoke;
  color: #363636;
}

.hero.is-light a:not(.button):not(.dropdown-item):not(.tag),
.hero.is-light strong {
  color: inherit;
}

.hero.is-light .title {
  color: #363636;
}

.hero.is-light .subtitle {
  color: rgba(54, 54, 54, 0.9);
}

.hero.is-light .subtitle a:not(.button),
.hero.is-light .subtitle strong {
  color: #363636;
}

@media screen and (max-width: 1023px) {
  .hero.is-light .navbar-menu {
    background-color: whitesmoke;
  }
}

.hero.is-light .navbar-item,
.hero.is-light .navbar-link {
  color: rgba(54, 54, 54, 0.7);
}

.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,
.hero.is-light .navbar-link:hover,
.hero.is-light .navbar-link.is-active {
  background-color: #e8e8e8;
  color: #363636;
}

.hero.is-light .tabs a {
  color: #363636;
  opacity: 0.9;
}

.hero.is-light .tabs a:hover {
  opacity: 1;
}

.hero.is-light .tabs li.is-active a {
  opacity: 1;
}

.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {
  color: #363636;
}

.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {
  background-color: #363636;
  border-color: #363636;
  color: whitesmoke;
}

.hero.is-light.is-bold {
  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-light.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
  }
}

.hero.is-dark {
  background-color: #363636;
  color: whitesmoke;
}

.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag),
.hero.is-dark strong {
  color: inherit;
}

.hero.is-dark .title {
  color: whitesmoke;
}

.hero.is-dark .subtitle {
  color: rgba(245, 245, 245, 0.9);
}

.hero.is-dark .subtitle a:not(.button),
.hero.is-dark .subtitle strong {
  color: whitesmoke;
}

@media screen and (max-width: 1023px) {
  .hero.is-dark .navbar-menu {
    background-color: #363636;
  }
}

.hero.is-dark .navbar-item,
.hero.is-dark .navbar-link {
  color: rgba(245, 245, 245, 0.7);
}

.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,
.hero.is-dark .navbar-link:hover,
.hero.is-dark .navbar-link.is-active {
  background-color: #292929;
  color: whitesmoke;
}

.hero.is-dark .tabs a {
  color: whitesmoke;
  opacity: 0.9;
}

.hero.is-dark .tabs a:hover {
  opacity: 1;
}

.hero.is-dark .tabs li.is-active a {
  opacity: 1;
}

.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {
  color: whitesmoke;
}

.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: #363636;
}

.hero.is-dark.is-bold {
  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-dark.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);
  }
}

.hero.is-primary {
  background-color: #00d1b2;
  color: #fff;
}

.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag),
.hero.is-primary strong {
  color: inherit;
}

.hero.is-primary .title {
  color: #fff;
}

.hero.is-primary .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-primary .subtitle a:not(.button),
.hero.is-primary .subtitle strong {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .hero.is-primary .navbar-menu {
    background-color: #00d1b2;
  }
}

.hero.is-primary .navbar-item,
.hero.is-primary .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,
.hero.is-primary .navbar-link:hover,
.hero.is-primary .navbar-link.is-active {
  background-color: #00b89c;
  color: #fff;
}

.hero.is-primary .tabs a {
  color: #fff;
  opacity: 0.9;
}

.hero.is-primary .tabs a:hover {
  opacity: 1;
}

.hero.is-primary .tabs li.is-active a {
  opacity: 1;
}

.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {
  color: #fff;
}

.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #00d1b2;
}

.hero.is-primary.is-bold {
  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-primary.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);
  }
}

.hero.is-link {
  background-color: #3273dc;
  color: #fff;
}

.hero.is-link a:not(.button):not(.dropdown-item):not(.tag),
.hero.is-link strong {
  color: inherit;
}

.hero.is-link .title {
  color: #fff;
}

.hero.is-link .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-link .subtitle a:not(.button),
.hero.is-link .subtitle strong {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .hero.is-link .navbar-menu {
    background-color: #3273dc;
  }
}

.hero.is-link .navbar-item,
.hero.is-link .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,
.hero.is-link .navbar-link:hover,
.hero.is-link .navbar-link.is-active {
  background-color: #2366d1;
  color: #fff;
}

.hero.is-link .tabs a {
  color: #fff;
  opacity: 0.9;
}

.hero.is-link .tabs a:hover {
  opacity: 1;
}

.hero.is-link .tabs li.is-active a {
  opacity: 1;
}

.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {
  color: #fff;
}

.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #3273dc;
}

.hero.is-link.is-bold {
  background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-link.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);
  }
}

.hero.is-info {
  background-color: #209cee;
  color: #fff;
}

.hero.is-info a:not(.button):not(.dropdown-item):not(.tag),
.hero.is-info strong {
  color: inherit;
}

.hero.is-info .title {
  color: #fff;
}

.hero.is-info .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-info .subtitle a:not(.button),
.hero.is-info .subtitle strong {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .hero.is-info .navbar-menu {
    background-color: #209cee;
  }
}

.hero.is-info .navbar-item,
.hero.is-info .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,
.hero.is-info .navbar-link:hover,
.hero.is-info .navbar-link.is-active {
  background-color: #118fe4;
  color: #fff;
}

.hero.is-info .tabs a {
  color: #fff;
  opacity: 0.9;
}

.hero.is-info .tabs a:hover {
  opacity: 1;
}

.hero.is-info .tabs li.is-active a {
  opacity: 1;
}

.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {
  color: #fff;
}

.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #209cee;
}

.hero.is-info.is-bold {
  background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-info.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);
  }
}

.hero.is-success {
  background-color: #23d160;
  color: #fff;
}

.hero.is-success a:not(.button):not(.dropdown-item):not(.tag),
.hero.is-success strong {
  color: inherit;
}

.hero.is-success .title {
  color: #fff;
}

.hero.is-success .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-success .subtitle a:not(.button),
.hero.is-success .subtitle strong {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .hero.is-success .navbar-menu {
    background-color: #23d160;
  }
}

.hero.is-success .navbar-item,
.hero.is-success .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,
.hero.is-success .navbar-link:hover,
.hero.is-success .navbar-link.is-active {
  background-color: #20bc56;
  color: #fff;
}

.hero.is-success .tabs a {
  color: #fff;
  opacity: 0.9;
}

.hero.is-success .tabs a:hover {
  opacity: 1;
}

.hero.is-success .tabs li.is-active a {
  opacity: 1;
}

.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {
  color: #fff;
}

.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #23d160;
}

.hero.is-success.is-bold {
  background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-success.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);
  }
}

.hero.is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag),
.hero.is-warning strong {
  color: inherit;
}

.hero.is-warning .title {
  color: rgba(0, 0, 0, 0.7);
}

.hero.is-warning .subtitle {
  color: rgba(0, 0, 0, 0.9);
}

.hero.is-warning .subtitle a:not(.button),
.hero.is-warning .subtitle strong {
  color: rgba(0, 0, 0, 0.7);
}

@media screen and (max-width: 1023px) {
  .hero.is-warning .navbar-menu {
    background-color: #ffdd57;
  }
}

.hero.is-warning .navbar-item,
.hero.is-warning .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}

.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,
.hero.is-warning .navbar-link:hover,
.hero.is-warning .navbar-link.is-active {
  background-color: #ffd83d;
  color: rgba(0, 0, 0, 0.7);
}

.hero.is-warning .tabs a {
  color: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
}

.hero.is-warning .tabs a:hover {
  opacity: 1;
}

.hero.is-warning .tabs li.is-active a {
  opacity: 1;
}

.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {
  color: rgba(0, 0, 0, 0.7);
}

.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 0, 0, 0.7);
  color: #ffdd57;
}

.hero.is-warning.is-bold {
  background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-warning.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);
  }
}

.hero.is-danger {
  background-color: #ff3860;
  color: #fff;
}

.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag),
.hero.is-danger strong {
  color: inherit;
}

.hero.is-danger .title {
  color: #fff;
}

.hero.is-danger .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-danger .subtitle a:not(.button),
.hero.is-danger .subtitle strong {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .hero.is-danger .navbar-menu {
    background-color: #ff3860;
  }
}

.hero.is-danger .navbar-item,
.hero.is-danger .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,
.hero.is-danger .navbar-link:hover,
.hero.is-danger .navbar-link.is-active {
  background-color: #ff1f4b;
  color: #fff;
}

.hero.is-danger .tabs a {
  color: #fff;
  opacity: 0.9;
}

.hero.is-danger .tabs a:hover {
  opacity: 1;
}

.hero.is-danger .tabs li.is-active a {
  opacity: 1;
}

.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {
  color: #fff;
}

.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #ff3860;
}

.hero.is-danger.is-bold {
  background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-danger.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);
  }
}

.hero.is-small .hero-body {
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
}

@media screen and (min-width: 769px), print {
  .hero.is-medium .hero-body {
    padding-bottom: 9rem;
    padding-top: 9rem;
  }
}

@media screen and (min-width: 769px), print {
  .hero.is-large .hero-body {
    padding-bottom: 18rem;
    padding-top: 18rem;
  }
}

.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body {
  align-items: center;
  display: flex;
}

.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container {
  flex-grow: 1;
  flex-shrink: 1;
}

.hero.is-halfheight {
  min-height: 50vh;
}

.hero.is-fullheight {
  min-height: 100vh;
}

.hero-video {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
}

.hero-video video {
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.hero-video.is-transparent {
  opacity: 0.3;
}

@media screen and (max-width: 768px) {
  .hero-video {
    display: none;
  }
}

.hero-buttons {
  margin-top: 1.5rem;
}

@media screen and (max-width: 768px) {
  .hero-buttons .button {
    display: flex;
  }
  .hero-buttons .button:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}

@media screen and (min-width: 769px), print {
  .hero-buttons {
    display: flex;
    justify-content: center;
  }
  .hero-buttons .button:not(:last-child) {
    margin-right: 1.5rem;
  }
}

.hero-head,
.hero-foot {
  flex-grow: 0;
  flex-shrink: 0;
}

.hero-body {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
}
</style>
