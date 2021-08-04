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
      }
    },
    methods: {
      // Atomic ops
      setTodos(todos) {
        this.entity.todo = todos.reduce(setEntity, this.entity.todo)
      },
      addTodoIds(ids) {
        this.todoList.ids = [...ids, ...this.todoList.ids]
      },
      // Async ops
      async fetchTodos() {
        const todos = await getTodos()
        this.setTodos(todos)
        this.addTodoIds(todos.map((todo) => todo._id))
      },
    },
    mounted() {
        this.fetchTodos()
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
