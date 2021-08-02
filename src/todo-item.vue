<template>
  <div class="todo-item"
    :class="classObject"
    >
    <button class="done-button"
      @click="toggleIsDone"
      :class="classObject"
      >○</button>
    <button class="edit-button"
      @click="this.openEditDialog"
      >△</button>
    <button class="delete-button"
      @click="onClickDelete"
      >X</button>
    <h2 :class="classObject">{{ content.title }}</h2>
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
      deleteTodoItem: {
        type: Function,
        required: true,
      },
      openEditDialog: {
        type: Function,
        required: true
      },
    },
    methods: {
      onClickDelete() {
        this.deleteTodoItem(this.content._id)
      },
      toggleIsDone() {
        this.content.isDone = !this.content.isDone
       },
    },
    computed: {
      classObject: function() {
        return {
          done: this.content.isDone
        }
      },
      contentToUpdate: function() {
        return {
          ...this.content
        }
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

  .todo-item .delete-button,
  .todo-item .done-button,
  .todo-item .edit-button {
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
    right: 72px;
    background-color: #e7eff6;
  }

  .todo-item .edit-button {
    right: 40px;
    background-color: #adcbe3;
  }

  h2.done {
    text-decoration: line-through;
  }

  button.done-button.done {
    background-color: #4b86b4;
  }

  .todo-item.done {
    background-color: #ccc;
  }
</style>
