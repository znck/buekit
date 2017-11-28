<script>
import PropTypes from '@znck/prop-types'
import { isNumber } from 'lodash'
import { style, styleResolver, call } from '../utils'
import { sizes } from '../shared'

function range(current, total, limit) {
  limit -= 2

  const pages = [1]
  const mid = (Math.round(limit / 2) - limit % 2)
  const start = total > limit + 2 ? (
    (total - current) < limit ? total - limit : Math.min(
      total - limit - 1, // include last.
      Math.max(current - mid, 2) // center current.
    )
  ) : 2

  for (let i = start, j = 0; j < limit; ++i, ++j) {
    pages.push(i)
  }

  pages.push(total)

  return pages
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
  render (h, ctx) {
    const { current, total: pages, limit: total, noNext, noPrev, right, centered, size } = ctx.props
    const _ = styleResolver(ctx.$style)

    const needsEllipsis = pages > total

    const { prev: textPrev, next: textNext } = ctx.slots()

    const goto = { goto: () => call(ctx.data && ctx.data.on && ctx.data.on.goto) }

    const numbers = range(current, pages, total)
    const preEllipsis = numbers[0] + 1 !== numbers[1]
    const postEllipsis = numbers[numbers.length - 2] + 1 !== numbers[numbers.length - 1]
    const links = numbers.map(
      page => h('li', {}, [
        h('a', { class: [_('pagination-link'), current === page && _('is-current')] }, page)
      ])
    )

    const ellipsis = () => h('li', {}, [
      h('span', { class: _('pagination-ellipsis'), domProps: { innerHTML: '&hellip;' } })
    ])

    preEllipsis && links.splice(1, 1, ellipsis())
    postEllipsis && links.splice(-2, 1, ellipsis())

    return style(
      h('div', ctx.data, [
        !noPrev && h('a', { class: _('pagination-previous'), on: goto, attrs: { disabled: current === 1 } }, textPrev || 'Previous'),
        !noNext && h('a', { class: _('pagination-next'), on: goto, attrs: { disabled: current === pages } }, textNext || 'Next'),
        h('ul', { class: _('pagination-list') }, links)
      ]), 
      _('pagination'),
      centered && _('is-centered'),
      right && _('is-right'),
      size && _('is-' + size)
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/pagination.sass';
</style>
