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
      <input
        class="text-field add-category-field"
        type="text"
        placeholder="カテゴリを追加"
        :value="input.candidate.category.name"
        @change="onInputCandidateCategory"
        >
      <button
        class="deleted-todos-button"
        :deletedTodoList="deletedTodoList"
        @click="showDeletedTodoList"
        >削除済Todo
      </button>
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
      :inputedCandidateCategories="candidates"
      />
  </main>
</template>

<script>
  import Vue from 'vue'
  import TodoItem from './todo-item'
  import ToolBox from './tool-box'

  const idByUnit = (unit) => () => [...Array(unit)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
  const generateIdEightDigits = idByUnit(8)

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
        deletedTodoList: [],
        input: {
          filter: {
            category: null,
          },
          candidate: {
            category: {
              id: null,
              name: null
            },
          },
        },
        candidates: []
      }
    },
    mounted() {
      this.axios.get(baseURL)
        .then((response) => {
          const data  = response.data.data
          for (const key in data) {
            const item = data[key]
            const itemId = item._id
            this.todoList[itemId] = item._id
            this.todoList[itemId] = {
              _id: item._id,
              title: item.title,
              expiresAt: item.expiresAt,
              category: item.category,
              memo: item.memo,
              isDone: item.isDone
            }
          }
        })
        .catch((e) => {console.log('Get Error: ', e)})
      const deletedTodoListJson = localStorage.getItem('deletedTodoList')

      if (deletedTodoListJson) {
        const deletedTodoList = JSON.parse(deletedTodoListJson)
        this.deletedTodoList = deletedTodoList
      }
    },
    computed: {
      filteredTodoList() {
        if (this.input.filter.category === null) {
          return this.todoList
        }
        return this.todoList.filter((item) => {
          return item.category === this.input.filter.category
        })
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
      onInputCandidateCategory(event) {
        if (event.target.value === '') {
          this.input.candidate.category = null
          return
        }
        this.input.candidate.category = {
          id: generateIdEightDigits(),
          name: event.target.value
        }
        this.candidates.push(this.input.candidate.category)
        this.input.candidate.category = {}
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
        this.todoList.push(payload)

        localStorage.setItem('deletedTodoList', JSON.stringify(this.deletedTodoList))
      },
      handleDeleteItem(_id) {
        this.axios.delete(baseURL + _id)

        this.todoList = this.todoList.filter(item => item._id !== _id)
      },
      handleUpdateTodoItem(payload) {
        this.axios.put(baseURL + String(payload._id), payload)

        const targetUpdateTodoItem =  this.todoList.filter(item => item._id == payload._id)[0]
        for (const key in targetUpdateTodoItem) {
          targetUpdateTodoItem[key] = payload[key]
        }
      },
      showDeletedTodoList() {
        if(this.deletedTodoList.length === 0) {
          console.log('削除済Todoはありません')
          return
        }
        this.deletedTodoList.map(item => console.log(item.title))
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
  .deleted-todos-button {
    margin-bottom: 8px;
    font-size: 16px;
    padding: 2px;
    position: absolute;
    right: 16px;
  }

  .add-category-field {
    margin-left: 8px;
  }

</style>
