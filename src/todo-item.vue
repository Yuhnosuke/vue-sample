<template>
  <div class="todo-item">
    <button class="delete-button" @click="onClickDelete">X</button>
    <button class="done-button" @click="onClickDone">○</button>
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
      deleteItem: {
        type: Function,
        required: true,
      }
    },
    methods: {
      onClickDelete() {
        this.deleteItem(this.content.id)
      },
      onClickDone() {
        console.log('Done', this.content.id)
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

  .todo-item .delete-button, .todo-item .done-button {
    position: absolute;
    top: 8px;
    width: 28px;
    height: 28px;
    border-radius: 5px;
  }

  .todo-item .delete-button {
    right: 8px;
    background-color: #2a4d69 ;

  }
  .todo-item .done-button {
    right: 48px;
    background-color: #e7eff6;
  }
</style>
