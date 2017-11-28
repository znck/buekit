<script>
import createMixin from './title/mixin'

export default {
  name: 'Subtitle',
  ...createMixin('subtitle')
}
</script>

<style lang="scss" module>
@import '~bulma/sass/utilities/_all.sass';
@import '../_base.scss';
@import '~bulma/sass/elements/title.sass';
</style>
