<script>
import PropTypes from '@znck/prop-types';
import { isNumber } from 'lodash-es';
import { style, styleResolver, call } from '../utils';
import { sizes } from '../shared';

function range(current, total, limit) {
  limit -= 2;
  var pages = [1];
  var mid = Math.round(limit / 2) - limit % 2;
  var start = total > limit + 2 ? total - current < limit ? total - limit : Math.min(total - limit - 1, Math.max(current - mid, 2)) : 2;

  for (var i = start, j = 0; j < limit; ++i, ++j) {
    pages.push(i);
  }

  pages.push(total);
  return pages;
}

export default {
  name: 'Pagination',
  functional: true,
  model: {
    prop: 'current',
    event: 'goto'
  },
  props: {
    size: PropTypes.oneOf(sizes),
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    limit: PropTypes.number.value(5),
    noPrev: PropTypes.bool.value(false),
    noNext: PropTypes.bool.value(false),
    centered: PropTypes.bool.value(false),
    right: PropTypes.bool.value(false)
  },
  render: function render(h, ctx) {
    var _ctx$props = ctx.props,
        current = _ctx$props.current,
        pages = _ctx$props.total,
        total = _ctx$props.limit,
        noNext = _ctx$props.noNext,
        noPrev = _ctx$props.noPrev,
        right = _ctx$props.right,
        centered = _ctx$props.centered,
        size = _ctx$props.size;

    var _ = styleResolver(ctx.$style);

    var needsEllipsis = pages > total;

    var _ctx$slots = ctx.slots(),
        textPrev = _ctx$slots.prev,
        textNext = _ctx$slots.next;

    var goto = {
      goto: function goto() {
        return call(ctx.data && ctx.data.on && ctx.data.on.goto);
      }
    };
    var numbers = range(current, pages, total);
    var preEllipsis = numbers[0] + 1 !== numbers[1];
    var postEllipsis = numbers[numbers.length - 2] + 1 !== numbers[numbers.length - 1];
    var links = numbers.map(function (page) {
      return h('li', {}, [h('a', {
        class: [_('pagination-link'), current === page && _('is-current')]
      }, page)]);
    });

    var ellipsis = function ellipsis() {
      return h('li', {}, [h('span', {
        class: _('pagination-ellipsis'),
        domProps: {
          innerHTML: '&hellip;'
        }
      })]);
    };

    preEllipsis && links.splice(1, 1, ellipsis());
    postEllipsis && links.splice(-2, 1, ellipsis());
    return style(h('div', ctx.data, [!noPrev && h('a', {
      class: _('pagination-previous'),
      on: goto,
      attrs: {
        disabled: current === 1
      }
    }, textPrev || 'Previous'), !noNext && h('a', {
      class: _('pagination-next'),
      on: goto,
      attrs: {
        disabled: current === pages
      }
    }, textNext || 'Next'), h('ul', {
      class: _('pagination-list')
    }, links)]), _('pagination'), centered && _('is-centered'), right && _('is-right'), size && _('is-' + size));
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

.pagination {
  font-size: 1rem;
  margin: -0.25rem;
}

.pagination.is-small {
  font-size: 0.75rem;
}

.pagination.is-medium {
  font-size: 1.25rem;
}

.pagination.is-large {
  font-size: 1.5rem;
}

.pagination.is-rounded .pagination-previous,
.pagination.is-rounded .pagination-next {
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 290486px;
}

.pagination.is-rounded .pagination-link {
  border-radius: 290486px;
}

.pagination,
.pagination-list {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}

.pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  justify-content: center;
  margin: 0.25rem;
  text-align: center;
}

.pagination-previous:focus, .pagination-previous.is-focused, .pagination-previous:active, .pagination-previous.is-active,
.pagination-next:focus,
.pagination-next.is-focused,
.pagination-next:active,
.pagination-next.is-active,
.pagination-link:focus,
.pagination-link.is-focused,
.pagination-link:active,
.pagination-link.is-active,
.pagination-ellipsis:focus,
.pagination-ellipsis.is-focused,
.pagination-ellipsis:active,
.pagination-ellipsis.is-active {
  outline: none;
}

.pagination-previous[disabled],
.pagination-next[disabled],
.pagination-link[disabled],
.pagination-ellipsis[disabled] {
  cursor: not-allowed;
}

.pagination-previous,
.pagination-next,
.pagination-link {
  border-color: #dbdbdb;
  color: #363636;
  min-width: 2.25em;
}

.pagination-previous:hover,
.pagination-next:hover,
.pagination-link:hover {
  border-color: #b5b5b5;
  color: #363636;
}

.pagination-previous:focus,
.pagination-next:focus,
.pagination-link:focus {
  border-color: #3273dc;
}

.pagination-previous:active,
.pagination-next:active,
.pagination-link:active {
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
}

.pagination-previous[disabled],
.pagination-next[disabled],
.pagination-link[disabled] {
  background-color: #dbdbdb;
  border-color: #dbdbdb;
  box-shadow: none;
  color: #7a7a7a;
  opacity: 0.5;
}

.pagination-previous,
.pagination-next {
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}

.pagination-link.is-current {
  background-color: #3273dc;
  border-color: #3273dc;
  color: #fff;
}

.pagination-ellipsis {
  color: #b5b5b5;
  pointer-events: none;
}

.pagination-list {
  flex-wrap: wrap;
}

@media screen and (max-width: 768px) {
  .pagination {
    flex-wrap: wrap;
  }
  .pagination-previous,
  .pagination-next {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .pagination-list li {
    flex-grow: 1;
    flex-shrink: 1;
  }
}

@media screen and (min-width: 769px), print {
  .pagination-list {
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: flex-start;
    order: 1;
  }
  .pagination-previous {
    order: 2;
  }
  .pagination-next {
    order: 3;
  }
  .pagination {
    justify-content: space-between;
  }
  .pagination.is-centered .pagination-previous {
    order: 1;
  }
  .pagination.is-centered .pagination-list {
    justify-content: center;
    order: 2;
  }
  .pagination.is-centered .pagination-next {
    order: 3;
  }
  .pagination.is-right .pagination-previous {
    order: 1;
  }
  .pagination.is-right .pagination-next {
    order: 2;
  }
  .pagination.is-right .pagination-list {
    justify-content: flex-end;
    order: 3;
  }
}
</style>
