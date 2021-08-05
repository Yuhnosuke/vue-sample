<template>
  <div>
    <template v-for="todo in this.todos">
      <TodoItem
        :key="todo._id"
        :content="todo"
        :onClickDelete="onClickDelete"
      />
    </template>
  </div>
  
</template>

<script>
import Vue from 'vue'
import TodoItem from './todo-item.vue'

export default Vue.extend({
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    ids: {
      type: Array,
      required: true,
    },
    getTodoById: {
      type: Function,
      required: true,
    },
    onClickDelete: {
      type: Function,
      required: true,
    }
  },
  computed: {
    todos() {
      return this.ids.map(this.getTodoById)
    },
  },
})
</script>

