<template>
  <section class="create-box">
  </section>
</template>

<script>
  import Vue from 'vue'
  
  export default Vue.extend({
    name: 'CreateBox',
  })
</script>

<style scoped>
  .create-box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ccc;
    height: 178px;
    background-color: #fff;
    box-sizing: border-box;
  }
  .text-field {
    margin-bottom: 8px;
    font-size: 16px;
    padding: 4px;
  }
  .create-box button {
    padding: 4px;
  }
</style>
