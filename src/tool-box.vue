<template>
  <section class="tool-box">
    <input class="text-field" type="text" placeholder="タイトル" :value="title" @keyup="onInputTitle" />
    <input class="text-field" type="text" placeholder="期限" :value="expiresAt" @keyup="onInputExpiresAt" />
    <div v-for="candidateCategory in candiDateCategories" :key="candidateCategory.id">
      <input
        type="radio"
        name="selectCategory"
        :id="'radio-' + candidateCategory.id"
        :value="candidateCategory.name"
        @change="onSelectCategory"
        />
      <label
        :for="'radio-' + candidateCategory.id"
        >{{ candidateCategory.name}}
      </label>
    </div>
    <input class="text-field" type="text" placeholder="メモ" :value="memo" @keyup="onInputMemo"/>
    <button @click="onClickAdd">追加</button>
  </section>
</template>

<script>
  const idByUnit = (unit) => () => [...Array(unit)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
  const generateId = idByUnit(8)

  import Vue from 'vue'
  
  export default Vue.extend({
    name: 'ToolBox',
    props: {
      addTodoItem: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        title: '',
        expiresAt: '',
        category: '',
        memo: '',
        candiDateCategories: [
          { id: generateId(), name: '遊び' },
          { id: generateId(), name: '仕事' },
          { id: generateId(), name: 'プライベート' }
        ]
      }
    },
    methods: {
      onInputTitle(event) {
        this.title = event.target.value
      },
      onInputExpiresAt(event) {
         this.expiresAt = event.target.value
      },
      onSelectCategory(event) {
        this.category = event.target.value
      },
      onInputMemo(event) {
        this.memo = event.target.value
      },
      onClickAdd() {
        this.addTodoItem({
          title: this.title,
          expiresAt: this.expiresAt,
          category: this.category,
          memo: this.memo,
        })
        this.title = ''
        this.expiresAt = ''
        this.category = ''
        this.memo = ''
      },
    },
  })
</script>

<style scoped>
  .tool-box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ccc;
    height: 230px;
    background-color: #fff;
    box-sizing: border-box;
  }
  .text-field {
    margin-bottom: 8px;
    font-size: 16px;
    padding: 4px;
  }
  .tool-box button {
    padding: 4px;
  }
</style>
