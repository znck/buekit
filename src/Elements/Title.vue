<script>
import createMixin from './title/mixin'

export default {
  name: 'Title',
  ...createMixin('title')
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/title.sass';
</style>
