<template>
  <main>
    <section class="container">
      <h1>TODO</h1>
      <input
        class="text-field"
        type="text"
        placeholder="カテゴリでフィルタ"
        :value="input.filter.category"
        @change="onInputFilterCategory"
      />
      <template v-for="item in this.filteredTodoList">
        <TodoItem
          :key="item._id"
          :content="item"
          :deleteTodoItem="handleDeleteItem"
          :updateTodoItem="handleUpdateTodoItem"
          />
      </template>
    </section>
    <ToolBox
      :addTodoItem="handleAddTodoItem"
      />
  </main>
</template>

<script>
  import Vue from 'vue'
  import TodoItem from './todo-item'
  import ToolBox from './tool-box'

  // const idByUnit = (unit) => () => [...Array(unit)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

  const baseURL = 'https://jsondb.app/todoapp/todos/'

  export default Vue.extend({
    name: 'App',
    components: {
      TodoItem,
      ToolBox,
    },
    data() {
      return {
        todoList: {},
        todoListIds: [],
        input: {
          filter: {
            category: null,
          },
        },
      }
    },
    mounted() {
      this.axios.get(baseURL)
        .then((response) => {
          const {data} = response.data
          this.todoListIds = data.map(item => item._id)
          this.todoList = data.reduce((todoList, item) => ({...todoList, [item._id]: item}), this.todoList)
        })
        .catch((e) => {console.log('GET Error: ', e)})
    },
    computed: {
      filteredTodoList() {
        if (this.input.filter.category === null) {
          return this.todoList
        }

        const filterdToListIds = this.todoListIds.filter(id => {
          return this.todoList[id].category === this.input.filter.category
        })

        const todoListAsArray = Object.entries(this.todoList)
        const filterdtodoListAsArray = todoListAsArray.filter(([id, _]) => {
          // FIXME: Linter に使わない変数: _ を怒られる
          console.log(_)
          return filterdToListIds.includes(id)
        })
        return Object.fromEntries(filterdtodoListAsArray)
      },
    },
    methods: {
      onInputFilterCategory(event) {
        if (event.target.value === '') {
          this.input.filter.category = null
          return
        }
        this.input.filter.category = event.target.value
      },
      handleAddTodoItem(item) {
        if (item.title === '') {
          return
        }

        const payload = {
          title: item.title,
          expiresAt: item.expiresAt || null,
          category: item.category || null,
          memo: item.memo || null,
          isDone: false,
        }

        this.axios.post(baseURL, payload)
          .then((response) => {
            const {data} = response.data
            this.todoListIds.concat([data._id])
            this.todoList = {...this.todoList, [data._id]: data}
          })
          .catch((e) => console.log('POST error: ', e))
      },
      handleDeleteItem(_id) {
        this.axios.delete(baseURL + _id)
        .then(() => {
          this.todoListIds = this.todoListIds.filter((id) => id !== _id)
          const { [_id]: removed, ...rest } = this.todoList
          // FIXME: 本来、不要なlog
          console.log(removed)
          this.todoList = rest
        })
        .catch((e) => console.log('DELETE error: ', e))
      },
      handleUpdateTodoItem(payload) {
        this.axios.put(baseURL + payload._id, payload)
        .then((response) => {
          const {data} = response.data
          this.todoList = {...this.todoList, [data._id]: data}
        })
        .catch((e) => console.log('PUT error: ', e))
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
  .add-category-field {
    margin-left: 8px;
  }

</style>
