<script>
import { cssModule, mergeData, toMap } from '../utils'
import { tag } from '../mixins'

const devices = toMap(['mobile'])

export default {
  name: 'Level',
  functional: true,
  mixins: [tag],
  props: {
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    item: { type: Boolean, default: false },
    device: { type: String, validator: device => device in devices }
  },
  render (h, ctx) {
    const s = cssModule(ctx.$style)
    const { left, right, item, tag, device } = ctx.props
    const classes = []

    if (left) classes.push(s('level-left'))
    else if (right) classes.push(s('level-right'))
    else if (item) classes.push(s('level-item'))
    else classes.push(s('level'))

    if (device) classes.push(s('is-mobile'))

    return h(tag, mergeData({ class: classes }, ctx.data), ctx.children)
  }
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/components/level.sass';
</style>
