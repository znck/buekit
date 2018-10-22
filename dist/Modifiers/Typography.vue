<script>
var _PropTypes$oneOfType, _PropTypes$oneOf;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes, { normalize } from '@znck/prop-types';
import { style, styleResolver } from '../utils';
import { colors, devices } from '../shared';
var normalizer = null;

var styles = function styles(props, _) {
  if (!normalizer) {
    normalizer = normalize(props, function (prop, value) {
      switch (prop) {
        case 'align':
        case 'color':
          return _("has-text-" + value);

        case 'size':
          return _("is-size-" + value);

        case 'transform':
          return _("is-" + value);

        case 'weight':
          return _("has-text-weight-" + value);
      }
    }, function (prop, modifier, value) {
      switch (prop) {
        case 'align':
          return _("has-text-" + value + "-" + modifier);

        case 'size':
          return _("is-size-" + value + "-" + modifier);
      }
    });
  }

  return Object.values(normalizer(props));
};

export default {
  name: 'TypographyHelper',
  abstract: true,
  functional: true,
  props: _extends({
    color: PropTypes.oneOf(colors, 'black-bis', 'black-ter', 'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter', 'white-ter', 'white-bis', 'white')
  }, (_PropTypes$oneOfType = PropTypes.oneOfType(PropTypes.oneOf('1', '2', '3', '4', '5', '6', '7'), PropTypes.number.validate(function (v) {
    return 1 <= v && v <= 7;
  }))).modifiers.apply(_PropTypes$oneOfType, ['size'].concat(devices, ['touch', 'fullhd', 'widescreen'])), (_PropTypes$oneOf = PropTypes.oneOf('centered', 'justified', 'left', 'right')).modifiers.apply(_PropTypes$oneOf, ['align'].concat(devices, ['widescreen', 'fullhd'])), {
    transform: PropTypes.oneOf('capitalized', 'lowercase', 'uppercase', 'italic'),
    weight: PropTypes.oneOf('light', 'normal', 'semibold', 'bold')
  }),
  render: function render(h, ctx) {
    var _ = styleResolver(ctx.$style);

    return style(ctx.children[0], styles(ctx.props, _));
  }
};
</script>

<style module>
@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.is-clearfix:after {
  clear: both;
  content: " ";
  display: table;
}

.is-pulled-left {
  float: left !important;
}

.is-pulled-right {
  float: right !important;
}

.is-clipped {
  overflow: hidden !important;
}

.is-overlay {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.is-size-1 {
  font-size: 3rem !important;
}

.is-size-2 {
  font-size: 2.5rem !important;
}

.is-size-3 {
  font-size: 2rem !important;
}

.is-size-4 {
  font-size: 1.5rem !important;
}

.is-size-5 {
  font-size: 1.25rem !important;
}

.is-size-6 {
  font-size: 1rem !important;
}

.is-size-7 {
  font-size: 0.75rem !important;
}

@media screen and (max-width: 768px) {
  .is-size-1-mobile {
    font-size: 3rem !important;
  }
  .is-size-2-mobile {
    font-size: 2.5rem !important;
  }
  .is-size-3-mobile {
    font-size: 2rem !important;
  }
  .is-size-4-mobile {
    font-size: 1.5rem !important;
  }
  .is-size-5-mobile {
    font-size: 1.25rem !important;
  }
  .is-size-6-mobile {
    font-size: 1rem !important;
  }
  .is-size-7-mobile {
    font-size: 0.75rem !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-size-1-tablet {
    font-size: 3rem !important;
  }
  .is-size-2-tablet {
    font-size: 2.5rem !important;
  }
  .is-size-3-tablet {
    font-size: 2rem !important;
  }
  .is-size-4-tablet {
    font-size: 1.5rem !important;
  }
  .is-size-5-tablet {
    font-size: 1.25rem !important;
  }
  .is-size-6-tablet {
    font-size: 1rem !important;
  }
  .is-size-7-tablet {
    font-size: 0.75rem !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-size-1-touch {
    font-size: 3rem !important;
  }
  .is-size-2-touch {
    font-size: 2.5rem !important;
  }
  .is-size-3-touch {
    font-size: 2rem !important;
  }
  .is-size-4-touch {
    font-size: 1.5rem !important;
  }
  .is-size-5-touch {
    font-size: 1.25rem !important;
  }
  .is-size-6-touch {
    font-size: 1rem !important;
  }
  .is-size-7-touch {
    font-size: 0.75rem !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-size-1-desktop {
    font-size: 3rem !important;
  }
  .is-size-2-desktop {
    font-size: 2.5rem !important;
  }
  .is-size-3-desktop {
    font-size: 2rem !important;
  }
  .is-size-4-desktop {
    font-size: 1.5rem !important;
  }
  .is-size-5-desktop {
    font-size: 1.25rem !important;
  }
  .is-size-6-desktop {
    font-size: 1rem !important;
  }
  .is-size-7-desktop {
    font-size: 0.75rem !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-size-1-widescreen {
    font-size: 3rem !important;
  }
  .is-size-2-widescreen {
    font-size: 2.5rem !important;
  }
  .is-size-3-widescreen {
    font-size: 2rem !important;
  }
  .is-size-4-widescreen {
    font-size: 1.5rem !important;
  }
  .is-size-5-widescreen {
    font-size: 1.25rem !important;
  }
  .is-size-6-widescreen {
    font-size: 1rem !important;
  }
  .is-size-7-widescreen {
    font-size: 0.75rem !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-size-1-fullhd {
    font-size: 3rem !important;
  }
  .is-size-2-fullhd {
    font-size: 2.5rem !important;
  }
  .is-size-3-fullhd {
    font-size: 2rem !important;
  }
  .is-size-4-fullhd {
    font-size: 1.5rem !important;
  }
  .is-size-5-fullhd {
    font-size: 1.25rem !important;
  }
  .is-size-6-fullhd {
    font-size: 1rem !important;
  }
  .is-size-7-fullhd {
    font-size: 0.75rem !important;
  }
}

.has-text-centered {
  text-align: center !important;
}

@media screen and (max-width: 768px) {
  .has-text-centered-mobile {
    text-align: center !important;
  }
}

@media screen and (min-width: 769px), print {
  .has-text-centered-tablet {
    text-align: center !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-centered-tablet-only {
    text-align: center !important;
  }
}

@media screen and (max-width: 1023px) {
  .has-text-centered-touch {
    text-align: center !important;
  }
}

@media screen and (min-width: 1024px) {
  .has-text-centered-desktop {
    text-align: center !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-centered-desktop-only {
    text-align: center !important;
  }
}

@media screen and (min-width: 1216px) {
  .has-text-centered-widescreen {
    text-align: center !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-centered-widescreen-only {
    text-align: center !important;
  }
}

@media screen and (min-width: 1408px) {
  .has-text-centered-fullhd {
    text-align: center !important;
  }
}

.has-text-justified {
  text-align: justify !important;
}

@media screen and (max-width: 768px) {
  .has-text-justified-mobile {
    text-align: justify !important;
  }
}

@media screen and (min-width: 769px), print {
  .has-text-justified-tablet {
    text-align: justify !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-justified-tablet-only {
    text-align: justify !important;
  }
}

@media screen and (max-width: 1023px) {
  .has-text-justified-touch {
    text-align: justify !important;
  }
}

@media screen and (min-width: 1024px) {
  .has-text-justified-desktop {
    text-align: justify !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-justified-desktop-only {
    text-align: justify !important;
  }
}

@media screen and (min-width: 1216px) {
  .has-text-justified-widescreen {
    text-align: justify !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-justified-widescreen-only {
    text-align: justify !important;
  }
}

@media screen and (min-width: 1408px) {
  .has-text-justified-fullhd {
    text-align: justify !important;
  }
}

.has-text-left {
  text-align: left !important;
}

@media screen and (max-width: 768px) {
  .has-text-left-mobile {
    text-align: left !important;
  }
}

@media screen and (min-width: 769px), print {
  .has-text-left-tablet {
    text-align: left !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-left-tablet-only {
    text-align: left !important;
  }
}

@media screen and (max-width: 1023px) {
  .has-text-left-touch {
    text-align: left !important;
  }
}

@media screen and (min-width: 1024px) {
  .has-text-left-desktop {
    text-align: left !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-left-desktop-only {
    text-align: left !important;
  }
}

@media screen and (min-width: 1216px) {
  .has-text-left-widescreen {
    text-align: left !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-left-widescreen-only {
    text-align: left !important;
  }
}

@media screen and (min-width: 1408px) {
  .has-text-left-fullhd {
    text-align: left !important;
  }
}

.has-text-right {
  text-align: right !important;
}

@media screen and (max-width: 768px) {
  .has-text-right-mobile {
    text-align: right !important;
  }
}

@media screen and (min-width: 769px), print {
  .has-text-right-tablet {
    text-align: right !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-right-tablet-only {
    text-align: right !important;
  }
}

@media screen and (max-width: 1023px) {
  .has-text-right-touch {
    text-align: right !important;
  }
}

@media screen and (min-width: 1024px) {
  .has-text-right-desktop {
    text-align: right !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-right-desktop-only {
    text-align: right !important;
  }
}

@media screen and (min-width: 1216px) {
  .has-text-right-widescreen {
    text-align: right !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-right-widescreen-only {
    text-align: right !important;
  }
}

@media screen and (min-width: 1408px) {
  .has-text-right-fullhd {
    text-align: right !important;
  }
}

.is-capitalized {
  text-transform: capitalize !important;
}

.is-lowercase {
  text-transform: lowercase !important;
}

.is-uppercase {
  text-transform: uppercase !important;
}

.is-italic {
  font-style: italic !important;
}

.has-text-white {
  color: white !important;
}

a.has-text-white:hover, a.has-text-white:focus {
  color: #e6e6e6 !important;
}

.has-text-black {
  color: #0a0a0a !important;
}

a.has-text-black:hover, a.has-text-black:focus {
  color: black !important;
}

.has-text-light {
  color: whitesmoke !important;
}

a.has-text-light:hover, a.has-text-light:focus {
  color: #dbdbdb !important;
}

.has-text-dark {
  color: #363636 !important;
}

a.has-text-dark:hover, a.has-text-dark:focus {
  color: #1c1c1c !important;
}

.has-text-primary {
  color: #00d1b2 !important;
}

a.has-text-primary:hover, a.has-text-primary:focus {
  color: #009e86 !important;
}

.has-text-link {
  color: #3273dc !important;
}

a.has-text-link:hover, a.has-text-link:focus {
  color: #205bbc !important;
}

.has-text-info {
  color: #209cee !important;
}

a.has-text-info:hover, a.has-text-info:focus {
  color: #0f81cc !important;
}

.has-text-success {
  color: #23d160 !important;
}

a.has-text-success:hover, a.has-text-success:focus {
  color: #1ca64c !important;
}

.has-text-warning {
  color: #ffdd57 !important;
}

a.has-text-warning:hover, a.has-text-warning:focus {
  color: #ffd324 !important;
}

.has-text-danger {
  color: #ff3860 !important;
}

a.has-text-danger:hover, a.has-text-danger:focus {
  color: #ff0537 !important;
}

.has-text-black-bis {
  color: #121212 !important;
}

.has-text-black-ter {
  color: #242424 !important;
}

.has-text-grey-darker {
  color: #363636 !important;
}

.has-text-grey-dark {
  color: #4a4a4a !important;
}

.has-text-grey {
  color: #7a7a7a !important;
}

.has-text-grey-light {
  color: #b5b5b5 !important;
}

.has-text-grey-lighter {
  color: #dbdbdb !important;
}

.has-text-white-ter {
  color: whitesmoke !important;
}

.has-text-white-bis {
  color: #fafafa !important;
}

.has-text-weight-light {
  font-weight: 300 !important;
}

.has-text-weight-normal {
  font-weight: 400 !important;
}

.has-text-weight-semibold {
  font-weight: 600 !important;
}

.has-text-weight-bold {
  font-weight: 700 !important;
}

.is-block {
  display: block !important;
}

@media screen and (max-width: 768px) {
  .is-block-mobile {
    display: block !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-block-tablet {
    display: block !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-block-tablet-only {
    display: block !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-block-touch {
    display: block !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-block-desktop {
    display: block !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-block-desktop-only {
    display: block !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-block-widescreen {
    display: block !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-block-widescreen-only {
    display: block !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-block-fullhd {
    display: block !important;
  }
}

.is-flex {
  display: flex !important;
}

@media screen and (max-width: 768px) {
  .is-flex-mobile {
    display: flex !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-flex-tablet {
    display: flex !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-flex-tablet-only {
    display: flex !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-flex-touch {
    display: flex !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-flex-desktop {
    display: flex !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-flex-desktop-only {
    display: flex !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-flex-widescreen {
    display: flex !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-flex-widescreen-only {
    display: flex !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-flex-fullhd {
    display: flex !important;
  }
}

.is-inline {
  display: inline !important;
}

@media screen and (max-width: 768px) {
  .is-inline-mobile {
    display: inline !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-inline-tablet {
    display: inline !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-tablet-only {
    display: inline !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-inline-touch {
    display: inline !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-inline-desktop {
    display: inline !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-desktop-only {
    display: inline !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-inline-widescreen {
    display: inline !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-widescreen-only {
    display: inline !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-inline-fullhd {
    display: inline !important;
  }
}

.is-inline-block {
  display: inline-block !important;
}

@media screen and (max-width: 768px) {
  .is-inline-block-mobile {
    display: inline-block !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-inline-block-tablet {
    display: inline-block !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-block-tablet-only {
    display: inline-block !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-inline-block-touch {
    display: inline-block !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-inline-block-desktop {
    display: inline-block !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-block-desktop-only {
    display: inline-block !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-inline-block-widescreen {
    display: inline-block !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-block-widescreen-only {
    display: inline-block !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-inline-block-fullhd {
    display: inline-block !important;
  }
}

.is-inline-flex {
  display: inline-flex !important;
}

@media screen and (max-width: 768px) {
  .is-inline-flex-mobile {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-inline-flex-tablet {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-flex-tablet-only {
    display: inline-flex !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-inline-flex-touch {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-inline-flex-desktop {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-flex-desktop-only {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-inline-flex-widescreen {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-flex-widescreen-only {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-inline-flex-fullhd {
    display: inline-flex !important;
  }
}

.is-hidden {
  display: none !important;
}

@media screen and (max-width: 768px) {
  .is-hidden-mobile {
    display: none !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-hidden-tablet {
    display: none !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-hidden-tablet-only {
    display: none !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-hidden-touch {
    display: none !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-hidden-desktop {
    display: none !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-hidden-desktop-only {
    display: none !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-hidden-widescreen {
    display: none !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-hidden-widescreen-only {
    display: none !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-hidden-fullhd {
    display: none !important;
  }
}

.is-invisible {
  visibility: hidden !important;
}

@media screen and (max-width: 768px) {
  .is-invisible-mobile {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-invisible-tablet {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-invisible-tablet-only {
    visibility: hidden !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-invisible-touch {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-invisible-desktop {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-invisible-desktop-only {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-invisible-widescreen {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-invisible-widescreen-only {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-invisible-fullhd {
    visibility: hidden !important;
  }
}

.is-marginless {
  margin: 0 !important;
}

.is-paddingless {
  padding: 0 !important;
}

.is-radiusless {
  border-radius: 0 !important;
}

.is-shadowless {
  box-shadow: none !important;
}

.is-unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
