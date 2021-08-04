<template>
  <main>
    <section class="container">
      <h1>TODO</h1>
    </section>
  </main>
</template>

<script>
  import Vue from 'vue'
  import { setEntity } from './util'
  import { getTodos } from './service'

  export default Vue.extend({
    name: 'App',
    components: {
    },
    data() {
      return {
        entity: {
          todo: {},
        },
        todoList: {
          ids: [],
        },
        input: {
          filter: {
            category: null,
            expiresAt: null,
          },
        },
      }
    },
    computed: {
    },
    methods: {
      // Atomic ops
      getTodoById(id) {
        return this.entity.todo[id]
      },
      setTodo(todo) {
        this.entity.todo = setEntity(this.entity.todo, todo)
      },
      setTodos(todos) {
        this.entity.todo = todos.reduce(setEntity, this.entity.todo)
      },
      addTodoId(id) {
        this.todoList.ids.unshift(id)
      },
      addTodoIds(ids) {
        this.todoListIds = [...ids, ...this.todoListId.ids]
      },
      // Async ops
      async fetchTodos() {
        const todos = await getTodos()
        this.setTodos(todos)
        this.addTodoId(todo._id)
      },
    },
  })
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
</style>

<style scoped>
  .container {
    padding: 0 16px;
    padding-bottom: 178px;
  }
  h1 {
    margin-bottom: 8px;
  }
  .text-field {
    margin-bottom: 8px;
    font-size: 16px;
    padding: 4px;
  }

</style>
