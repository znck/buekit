<template>
  <textarea v-model="proxy"></textarea>
</template>

<script>
export default {
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
