<script>
import PropTypes from '@znck/prop-types';
import { style, styleResolver, toArray } from '../utils';
import { createTag } from '../mixins';
export default {
  name: 'Card',
  functional: true,
  mixins: [createTag()],
  props: {
    title: PropTypes.string,
    centered: PropTypes.bool.value(false)
  },
  render: function render(h, ctx) {
    var _ctx$props = ctx.props,
        centered = _ctx$props.centered,
        tag = _ctx$props.tag,
        title = _ctx$props.title;

    var _ctx$slots = ctx.slots(),
        contentSLOT = _ctx$slots.default,
        imageSLOT = _ctx$slots.imageSLOT,
        headingSLOT = _ctx$slots.title,
        iconSLOT = _ctx$slots.iconSLOT,
        linksSLOT = _ctx$slots.linksSLOT;

    var _ = styleResolver(ctx.$style);

    var hasHeader = Array.isArray(headingSLOT) || title !== undefined || Array.isArray(iconSLOT);
    var headStyle = [_('card-header-title'), centered && _('is-centered')];

    var footLinkStyle = _('card-footer-item');

    return style(h(tag, ctx.data, [hasHeader && h('header', {
      class: _('card-header')
    }, [headingSLOT ? style(headingSLOT[0], headStyle) : h('p', {
      class: headStyle
    }, title), iconSLOT && style(iconSLOT[0], _('card-header-icon'))]), imageSLOT && h('div', {
      class: _('card-image')
    }, imageSLOT), h('div', {
      class: _('card-content')
    }, contentSLOT), linksSLOT && h('footer', {
      class: _('card-footer')
    }, linksSLOT.map(function (link) {
      return style(link, footLinkStyle);
    }))]), _('card'));
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

.card {
  background-color: white;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
}

.card-header {
  align-items: stretch;
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
  display: flex;
}

.card-header-title {
  align-items: center;
  color: #363636;
  display: flex;
  flex-grow: 1;
  font-weight: 700;
  padding: 0.75rem;
}

.card-header-title.is-centered {
  justify-content: center;
}

.card-header-icon {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
}

.card-image {
  display: block;
  position: relative;
}

.card-content {
  padding: 1.5rem;
}

.card-footer {
  border-top: 1px solid #dbdbdb;
  align-items: stretch;
  display: flex;
}

.card-footer-item {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.75rem;
}

.card-footer-item:not(:last-child) {
  border-right: 1px solid #dbdbdb;
}

.card .media:not(:last-child) {
  margin-bottom: 0.75rem;
}
</style>
