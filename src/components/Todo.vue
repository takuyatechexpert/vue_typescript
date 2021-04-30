<template>
  <div>
    <div class="text-center text-4xl mt-1">TODO</div>

    <div class="text-center mt-4">
      <input
        type="text"
        v-model="formData.todo"
        class="border border-black rounded-md h-8 p-4">
      <button class="mx-3 h-8 border border-black rounded-md px-2" @click="onSend()">send</button>
    </div>

    <div class="text-center mt-4 text-xl">
      <ul>
        <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import vue, { PropType } from 'vue'

interface Data {
  formData: {
    todo: string,
  }

  todos: [],
}

export default vue.extend({
  data(): Data {
    return {
      formData: {
        todo: ''
      },

      todos: []
    }
  },

  methods: {
    onSend(): void {
      this.todos.push(this.formData.todo)
      this.formData.todo = ''
    }
  }
})
</script>
