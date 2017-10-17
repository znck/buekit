<script>
import { addStyleToVnode, cssModule, isNumber } from '../utils'
import { sizes } from '../mixins'

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
  mixins: [sizes],
  model: {
    prop: 'current',
    event: 'goto'
  },
  props: {
    current: { type: Number, required: true },
    total: { type: Number, required: true },
    limit: { default: 5, type: Number },
    noPrev: { default: false, type: Boolean },
    noNext: { default: false, type: Boolean },
    centered: { default: false, type: Boolean },
    right: { default: false, type: Boolean }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { current, total: pages, limit: total, noNext, noPrev, right, centered, size } = ctx.props

    const needsEllipsis = pages > total

    const { prev: textPrev, next: textNext } = ctx.slots()

    const goto = {
      goto () {
        ctx.data && ctx.data.on && ctx.data.on.goto && ctx.data.on.goto()
      }
    }

    const numbers = range(current, pages, total)
    const preEllipsis = numbers[0] + 1 !== numbers[1]
    const postEllipsis = numbers[numbers.length - 2] + 1 !== numbers[numbers.length - 1]
    const links = numbers.map(
      page => h('li', {}, [
        h('a', { class: [s('pagination-link'), current === page && s('is-current')] }, page)
      ])
    )

    const ellipsis = () => h('li', {}, [
      h('span', { class: s('pagination-ellipsis'), domProps: { innerHTML: '&hellip;' } })
    ])

    preEllipsis && links.splice(1, 1, ellipsis())
    postEllipsis && links.splice(-2, 1, ellipsis())

    return addStyleToVnode(
      h('div', ctx.data, [
        !noPrev && h('a', { class: s('pagination-previous'), on: goto, attrs: { disabled: current === 1 } }, textPrev || 'Previous'),
        !noNext && h('a', { class: s('pagination-next'), on: goto, attrs: { disabled: current === pages } }, textNext || 'Next'),
        h('ul', { class: s('pagination-list') }, links)
      ]), [ s('pagination'), centered && s('is-centered'), right && s('is-right'), size && s('is-' + size) ]
    )
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/pagination.sass';
</style>
