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
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        return this.$emit('input', value);
      }
    }
  }
};
</script>
