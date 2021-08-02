<template>
  <div 
  id="overlay"
  v-if="showDialog"
  >
  <div id="content">
    <!-- TODO: きれいにする -->
    <div class="input-container">
      <label for="title">タイトル</label>
      <input id="title"
      class="text-field"
      type="text"
      :value="this.contentToUpdate.title"
      @keyup="onInputTitle"
        /> 
    </div>
    <div class="input-container">
      <label for="expiresAt">期限</label>
      <input 
        id="expiresAt"
        class="text-field"
        type="text"
        :value="this.contentToUpdate.expiresAt" 
        @keyup="onInputExpiresAt"
        />
    </div>
    <div class="input-container">
      <label for="category">カテゴリー</label>
      <input
        id="category"
        class="text-field"
        type="text"
        :value="this.contentToUpdate.category"
        @keyup="onInputCategory"
        />
    </div>
    <div class="input-container">
      <label for="memo">メモ</label>
      <input
        id="memo"
        class="text-field"
        type="text"
        :value="this.contentToUpdate.memo"
        @keyup="onInputMemo"
        />
    </div>
    <div class="button-wrapper">
      <button 
        class="update-button"
        @click="onClickUpdate"
        >更新</button>
      <button
        class="cancel-button"
        @click="this.closeEditDialog"
        >閉じる
      </button>
    </div>
  </div>
</div>  
</template>

<script>
import Vue from 'vue'

export default Vue.extend ({
  name: 'EditDialog',
  props: {
    showDialog: {
      type: Boolean,
      required: true,
    },
    content: {
      type: Object,
      required: true
    },
    closeEditDialog: {
      type: Function,
      required: true,
    },
    updateTodoItem: {
      type: Function,
      required: true,
    }
    
  },
  methods: {
    setPropertyInContent(property, value) {
      this.$set(this.contentToUpdate, property, value)
    },
    onInputTitle(event) {
      this.setPropertyInContent('title', event.target.value)
    },
    onInputExpiresAt(event) {
      this.setPropertyInContent('expiresAt', event.target.value)
    },
    onInputCategory(event) {
      this.setPropertyInContent('category', event.target.value)
    },
    onInputMemo(event) {
      this.setPropertyInContent('memo', event.target.value)
    },
    onClickUpdate() {
      this.updateTodoItem(this.contentToUpdate)
      this.closeEditDialog()
    },
  },
  computed: {
  contentToUpdate: function() {
    return {
      ...this.content
    }
  }
}
    
})
</script>

<style scoped>
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
    height: 50%;
    padding: 1em;
    background-color: #fff;
    position: relative;
  }
  
  .text-field {
    margin-bottom: 4px;
    font-size: 16px;
    padding: 4px;
    display: block;
  }

  .input-container label,
  .input-container input {
    display: inline-block;
  }

  .input-container label {
    width: 100px;
  }

  .button-wrapper {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .update-button {
    border-radius: 5px;
    width: 50px;
    display: inline-block;
    margin-right: 8px;
    background-color:rgb(100, 220, 70);
  }

  .cancel-button {
    border-radius: 5px;
    width: 50px;
    display: inline-block;
    margin-right: 8px;
    background-color:rgb(220, 100, 70); 
  }
</style>