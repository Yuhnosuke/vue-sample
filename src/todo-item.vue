<template>
  <div class="todo-item">
    <h2>{{ content.title }}</h2>
    <p v-if="content.expiresAt">{{ content.expiresAt }}まで</p>
    <p v-if="content.category">{{ content.category }}</p>
    <button class="remove-button" @click="onClickRemove">削除</button>
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
  }

  .remove-button {
    background-color: #f44336; /* Green */
    border-radius: 4px;
    border: none;
    color: white;
    padding: 8px;
    margin-top: 8px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
  }
</style>
