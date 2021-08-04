<template>
  <main>
    <section class="container">
      <h1>TODO</h1>
      <TodoList :ids="todoList.ids" :getTodoById="getTodoById"/>
    </section>
    <CreateBox :createTodo="createTodo" />
  </main>
</template>

<script>
  import Vue from 'vue'
  import TodoList from './components/todo-list.vue'
  import CreateBox from './components/create-box.vue'
  import { setEntity, emptyStringToNull } from './util'
  import { getTodos, createTodo } from './service'

  export default Vue.extend({
    name: 'App',
    components: {
      TodoList,
      CreateBox
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
      setTodo(todo) {
        this.entity.todo = setEntity(this.entity.todo, todo)
      },
      addTodoIds(ids) {
        this.todoList.ids = [...ids, ...this.todoList.ids]
      },
      addTodoId(id) {
        this.todoList.ids.unshift(id)
      },
      // Async ops
      async fetchTodos() {
        const todos = await getTodos()
        this.setTodos(todos)
        this.addTodoIds(todos.map((todo) => todo._id))
      },
      async createTodo(content) {
        if (!content.title) return
        const todo = await createTodo(emptyStringToNull(content))
        this.setTodo(todo)
        this.addTodoId(todo._id)
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
