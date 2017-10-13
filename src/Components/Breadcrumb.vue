<script>
import { cssModule, mergeData, toMap } from '../utils'
import { sizes, tag } from '../mixins'

const separators = toMap(['succeeds', 'dot', 'bullet', 'arrow'])

export default {
  name: 'Breadcrumb',
  functional: true,
  mixins: [sizes, tag],
  props: {
    tag: { default: 'nav' },
    centered: { default: false, type: Boolean },
    pushed: { default: false, type: Boolean },
    separator: { type: String, validate: separator => separator === undefined || separator in separators }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { size, tag, centered, pushed, separator } = ctx.props

    const styles = [
      s('breadcrumb'),
      size && s('is-' + size),
      centered && s('is-centered'),
      pushed && s('is-right'),
      separator && s('has-' + separator + '-separator')
    ]

    let { wrapper, default: links } = ctx.slots()

    if (!wrapper || !wrapper.length) {
      const k = links.length - 1
      wrapper = [h('ul', {}, links.map((link, i) => {
        if (!link || !link.tag || link.isComment) return link

        return h('li', { class: [ i === k && s('is-active') ] }, [link])
      }))]
    }

    return h(tag, mergeData(ctx.data, { class: styles }), wrapper)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/breadcrumb.sass';
</style>
