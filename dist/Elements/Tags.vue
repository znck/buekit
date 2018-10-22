<script>
import { style, styleResolver } from '../utils';
import PropTypes from '@znck/prop-types';
export default {
  name: 'Tags',
  functional: true,
  props: {
    tag: PropTypes.string.value('span'),
    addons: PropTypes.bool.value(false)
  },
  render: function render(h, ctx) {
    if (ctx === void 0) {
      ctx = {};
    }

    var s = styleResolver(ctx.$style);
    var _ctx$props = ctx.props,
        addons = _ctx$props.addons,
        tag = _ctx$props.tag;
    var styles = [s('tags'), addons && s('has-addons')];
    return style(h(tag, ctx.data, ctx.children), styles);
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

.tags {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.tags .tag {
  margin-bottom: 0.5rem;
}

.tags .tag:not(:last-child) {
  margin-right: 0.5rem;
}

.tags:last-child {
  margin-bottom: -0.5rem;
}

.tags:not(:last-child) {
  margin-bottom: 1rem;
}

.tags.has-addons .tag {
  margin-right: 0;
}

.tags.has-addons .tag:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.tags.has-addons .tag:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.tags.is-centered {
  justify-content: center;
}

.tags.is-centered .tag {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}

.tags.is-right {
  justify-content: flex-end;
}

.tags.is-right .tag:not(:first-child) {
  margin-left: 0.5rem;
}

.tags.is-right .tag:not(:last-child) {
  margin-right: 0;
}

.tag:not(body) {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 3px;
  color: #4a4a4a;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}

.tag:not(body) .delete {
  margin-left: 0.25em;
  margin-right: -0.375em;
}

.tag:not(body).is-white {
  background-color: white;
  color: #0a0a0a;
}

.tag:not(body).is-black {
  background-color: #0a0a0a;
  color: white;
}

.tag:not(body).is-light {
  background-color: whitesmoke;
  color: #363636;
}

.tag:not(body).is-dark {
  background-color: #363636;
  color: whitesmoke;
}

.tag:not(body).is-primary {
  background-color: #00d1b2;
  color: #fff;
}

.tag:not(body).is-link {
  background-color: #3273dc;
  color: #fff;
}

.tag:not(body).is-info {
  background-color: #209cee;
  color: #fff;
}

.tag:not(body).is-success {
  background-color: #23d160;
  color: #fff;
}

.tag:not(body).is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.tag:not(body).is-danger {
  background-color: #ff3860;
  color: #fff;
}

.tag:not(body).is-medium {
  font-size: 1rem;
}

.tag:not(body).is-large {
  font-size: 1.25rem;
}

.tag:not(body) .icon:first-child:not(:last-child) {
  margin-left: -0.375em;
  margin-right: 0.1875em;
}

.tag:not(body) .icon:last-child:not(:first-child) {
  margin-left: 0.1875em;
  margin-right: -0.375em;
}

.tag:not(body) .icon:first-child:last-child {
  margin-left: -0.375em;
  margin-right: -0.375em;
}

.tag:not(body).is-delete {
  margin-left: 1px;
  padding: 0;
  position: relative;
  width: 2em;
}

.tag:not(body).is-delete:before, .tag:not(body).is-delete:after {
  background-color: currentColor;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}

.tag:not(body).is-delete:before {
  height: 1px;
  width: 50%;
}

.tag:not(body).is-delete:after {
  height: 50%;
  width: 1px;
}

.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {
  background-color: #e8e8e8;
}

.tag:not(body).is-delete:active {
  background-color: #dbdbdb;
}

.tag:not(body).is-rounded {
  border-radius: 290486px;
}

a.tag:hover {
  text-decoration: underline;
}
</style>
