<template>
  <div>
    <input class="text-field" type="text" :placeholder="`${title}でフィルタ`" :value="value" @chenge="handleChange" />
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'FilterBox',
    props: {
      title: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: false,
        default: null,
      },
      onInput: {
        type: Function,
        required: true,
      },
    },
    methods: {
      handleChange(event) {
        this.onInput(event.target.value)
      }
    }
  })
</script>

<style scoped>
  .text-field {
    margin-bottom: 8px;
    font-size: 16px;
    padding: 4px;
  }
</style>