<template>
  <select v-model="proxy" v-bind="$attrs" v-on="$listeners">
    <slot/>
  </select>
</template>

<script>
export default {
  abstract: true,
  name: 'InputSelect',
  props: ['value'],
  computed: {
    proxy: {
      get () {
        return this.value
      },
      set (value) {
        return this.$emit('input', value)
      }
    }
  }
}
</script>
