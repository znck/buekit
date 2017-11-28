<template>
  <input v-model="proxy" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
export default {
  abstract: true,
  name: 'InputText',
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
