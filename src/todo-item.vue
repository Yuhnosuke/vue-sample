<template>
  <div class="todo-item">
    <button class="remove-button" @click="onClickRemove">x</button>
    <h2>{{ content.title }}</h2>
    <p v-if="content.expiresAt">{{ content.expiresAt }}まで</p>
    <p v-if="content.category">{{ content.category }}</p>
    <p v-if="content.memo">{{ content.memo }}</p>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'TodoItem',
    props: {
      content: {
        type: Object,
        required: true,
      },
      removeItem: {
        type: Function,
        required: true,
      }
    },
    methods: {
      onClickRemove() {
        this.removeItem(this.content.id)
      }
    }
  })
</script>

<style scoped>
  .todo-item {
    border-radius: 4px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    padding: 8px;
    margin-bottom: 8px;
    position: relative;
  }

  .todo-item .remove-button {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 28px;
    height: 28px;

  }
</style>
