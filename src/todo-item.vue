<template>
  <div class="todo-item"
    :class="classObject"
    >
    <button class="done-button"
      @click="toggleIsDone"
      :class="classObject"
      >○</button>
    <button class="edit-button"
      @click="openEditDialog"
      >△</button>
    <div id="overlay">
      <div id="content">
        <!-- TODO: きれいにする -->
        <label for="title">タイトル</label>
        <input id="title"
          class="text-field"
          type="text"
          :value="this.contentToUpdate.title"
          @keyup="onInputTitle"
           />
        <label for="expiresAt">期限</label>
        <input 
          id="expiresAt"
          class="text-field"
          type="text"
          :value="this.contentToUpdate.expiresAt" 
          @keyup="onInputExpiresAt"
          />
        <label for="category">カテゴリー</label>
        <input
          id="category"
          class="text-field"
          type="text"
          :value="this.contentToUpdate.category"
          @keyup="onInputCategory"
          />
        <label for="memo">メモ</label>
        <input
          id="memo"
          class="text-field"
          type="text"
          :value="this.contentToUpdate.memo"
          @keyup="onInputMemo"
          />
        <button 
          class="update-button"
          @click="onClickEdit"
          >更新</button>
      </div>
    </div>
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
      deleteItem: {
        type: Function,
        required: true,
      },
      updateTodoItem: {
        type: Function,
        required: true
      }
    },
    methods: {
      onClickDelete() {
        this.deleteItem(this.content.id)
      },
      toggleIsDone() {
        this.content.isDone = !this.content.isDone
       },
       openEditDialog() {
        //  TODO: モーダルを開く
         console.log('open dialog')
       },
       onClickEdit() {
         const id = this.contentToUpdate.id
         console.log(id)
         const payload = {
           title: this.contentToUpdate.title,
           expiresAt: this.contentToUpdate.expiresAt,
           category: this.contentToUpdate.category,
           memo: this.contentToUpdate.memo
         }
         this.updateTodoItem(id, payload)
       },
       onInputTitle(event) {
         this.contentToUpdate.title = event.target.value
       },
       onInputExpiresAt(event) {
         this.contentToUpdate.expiresAt = event.target.value
       },
       onInputCategory(event) {
         this.contentToUpdate.category = event.target.value
       },
       onInputMemo(event) {
         this.contentToUpdate.memo = event.target.value
       }
    },
    computed: {
      classObject: function() {
        return {
          done: this.content.isDone
        }
      },
      contentToUpdate: function() {
        return {
          id: this.content.id,
          title: this.content.title,
          expiresAt: this.content.expiresAt,
          category: this.content.category,
          memo: this.content.memo,
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

  #overlay {
    z-index: 1;
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #content {
    z-index: 2;
    width: 50%;
    padding: 1em;
    background-color: #fff;
  }
  
  .text-field {
    margin-bottom: 4px;
    font-size: 16px;
    padding: 4px;
  }

  .update-button {
    background-color:rgb(100, 220, 70);
    border-radius: 5px;

  }
</style>
