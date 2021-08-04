<template>
  <main>
    <section class="container">
      <h1>TODO</h1>
      <TodoList :ids="todoList.ids" :getTodoById="getTodoById"/>
    </section>
  </main>
</template>

<script>
  import Vue from 'vue'
  import TodoList from './components/todo-list.vue'
  import { setEntity } from './util'
  import { getTodos } from './service'

  export default Vue.extend({
    name: 'App',
    components: {
      TodoList
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
      getTodoById(id) {
        return this.entity.todo[id]
      },
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
    computed: {
      todos() {
        return this.todoList.ids.map((id) => this.getTodoById(id))
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
