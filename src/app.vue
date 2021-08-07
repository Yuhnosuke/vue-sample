<template>
  <main>
    <section class="container">
      <h1>TODO</h1>
      <FilterBox title="カテゴリ" :value="input.filter.category" :onInput="setFilterCategory" />
      <FilterBox title="期限" :value="input.filter.expiresAt" :onInput="setFilterExpiresAt" />
      <TodoList
        :ids="filterdTodoIds"
        :getTodoById="getTodoById"
        :onClickDelete="deleteTodoById" 
      />
    </section>
    <CreateBox :createTodo="createTodo" />
  </main>
</template>

<script>
  import Vue from 'vue'
  import TodoList from './components/todo-list.vue'
  import CreateBox from './components/create-box.vue'
  import FilterBox from './components/filter-box.vue'
  import { setEntity, emptyStringToNull } from './util'
  import { getTodos, createTodo, deleteTodo } from './service'

  export default Vue.extend({
    name: 'App',
    components: {
      TodoList,
      CreateBox,
      FilterBox,
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
          }
        }
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
      removeTodoId(id) {
        this.todoList.ids = this.todoList.ids.filter((_id) => _id !== id)
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
      async deleteTodoById(id) {
        await deleteTodo(id)
        this.removeTodoId(id)
      },
      // FIlter
      setFilterCategory(value) {
        const category = value === '' ? null : value
        this.input.filter = { ...this.input.filter, category }
      },
      setFilterExpiresAt(value) {
        const expiresAt = value ==='' ? null : value
        this.input.filter = { ...this.input,filter, expiresAt }
      }
    },
    computed: {
      todos() {
        return this.todoList.ids.map((id) => this.getTodoById(id))
      },
      filterdTodoIds() {
        const { category, expiresAt } = this.input.filter
        return this.todos
          .filter((todo) => category === null || todo.category === category)
          .filter((todo) => exporesAt === null || todo.expiresAt === expiresAt)
          .map((todo) => todo._id)
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
