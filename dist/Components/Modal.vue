<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver, call } from '../utils';
import Delete from '../Elements/Delete.vue';
export default {
  name: 'Modal',
  functional: true,
  model: {
    prop: 'open',
    event: 'close'
  },
  props: {
    open: PropTypes.bool.value(false),
    classic: PropTypes.bool.value(false),
    preload: PropTypes.bool.value(false),
    title: PropTypes.string
  },
  render: function render(h, ctx) {
    var _ctx$props = ctx.props,
        open = _ctx$props.open,
        preload = _ctx$props.preload,
        classic = _ctx$props.classic,
        title = _ctx$props.title;

    var _ = styleResolver(ctx.$style);

    if (!open && !preload) return null;

    if (process.env.NODE_ENV !== 'production' && !classic && title) {
      console.warn("Prop 'title' is allowed in classic mode only.");
    }

    var styles = [_('modal'), open && _('is-active')];
    var close = {
      click: function click() {
        return call(ctx.data && ctx.data.on && ctx.data.on.close);
      }
    };

    if (classic) {
      var _ctx$slots = ctx.slots(),
          content = _ctx$slots.default,
          image = _ctx$slots.image,
          heading = _ctx$slots.title,
          links = _ctx$slots.links;

      var hasHeader = Array.isArray(heading) || title !== undefined || Array.isArray(icon);
      if (heading) heading = heading[0];
      var headStyle = [_('modal-card-title')];
      var footLinkStyle = [_('button')];
      return style(h('div', ctx.data, [h('div', {
        class: _('modal-background'),
        on: close
      }), h('div', {
        class: _('modal-card')
      }, [hasHeader && h('header', {
        class: _('modal-card-head')
      }, [heading ? style(heading, headStyle) : h('p', {
        class: headStyle
      }, title), h(Delete, {
        on: close
      })]), h('div', {
        class: _('modal-card-body')
      }, content), links && h('footer', {
        class: _('modal-card-foot')
      }, links.map(function (link) {
        return style(link, footLinkStyle);
      }))])]), styles);
    }

    return style(h('div', ctx.data, [h('div', {
      class: _('modal-background'),
      on: close
    }), h('div', {
      class: _('modal-content')
    }, ctx.children), h('div', {
      class: [_('modal-close'), _('is-large')],
      on: close
    })]), styles);
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

.modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  display: none;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 40;
}

.modal.is-active {
  display: flex;
}

.modal-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(10, 10, 10, 0.86);
}

.modal-content,
.modal-card {
  margin: 0 20px;
  max-height: calc(100vh - 160px);
  overflow: auto;
  position: relative;
  width: 100%;
}

@media screen and (min-width: 769px), print {
  .modal-content,
  .modal-card {
    margin: 0 auto;
    max-height: calc(100vh - 40px);
    width: 640px;
  }
}

.modal-close {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgba(10, 10, 10, 0.2);
  border: none;
  border-radius: 290486px;
  cursor: pointer;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 0;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
  outline: none;
  position: relative;
  vertical-align: top;
  width: 20px;
  background: none;
  height: 40px;
  position: fixed;
  right: 20px;
  top: 20px;
  width: 40px;
}

.modal-close:before, .modal-close:after {
  background-color: white;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}

.modal-close:before {
  height: 2px;
  width: 50%;
}

.modal-close:after {
  height: 50%;
  width: 2px;
}

.modal-close:hover, .modal-close:focus {
  background-color: rgba(10, 10, 10, 0.3);
}

.modal-close:active {
  background-color: rgba(10, 10, 10, 0.4);
}

.modal-close.is-small {
  height: 16px;
  max-height: 16px;
  max-width: 16px;
  min-height: 16px;
  min-width: 16px;
  width: 16px;
}

.modal-close.is-medium {
  height: 24px;
  max-height: 24px;
  max-width: 24px;
  min-height: 24px;
  min-width: 24px;
  width: 24px;
}

.modal-close.is-large {
  height: 32px;
  max-height: 32px;
  max-width: 32px;
  min-height: 32px;
  min-width: 32px;
  width: 32px;
}

.modal-card {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 40px);
  overflow: hidden;
}

.modal-card-head,
.modal-card-foot {
  align-items: center;
  background-color: whitesmoke;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
}

.modal-card-head {
  border-bottom: 1px solid #dbdbdb;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.modal-card-title {
  color: #363636;
  flex-grow: 1;
  flex-shrink: 0;
  font-size: 1.5rem;
  line-height: 1;
}

.modal-card-foot {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: 1px solid #dbdbdb;
}

.modal-card-foot .button:not(:last-child) {
  margin-right: 10px;
}

.modal-card-body {
  -webkit-overflow-scrolling: touch;
  background-color: white;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: 20px;
}
</style>
