<template>
  <page title="TODO">
    <div class="text-center mt-4 h-8">
      <input
        type="text"
        v-model="formData.todo"
        class="border border-black w-4/12 rounded-md h-full px-2"
      />
      <button
        class="mx-3 h-full btn hover:bg-pink-500 focus:outline-none focus:ring focus:ring-pink-400"
        @click="onSend()">
        Send
      </button>
    </div>

    <div class="mt-4 text-xl overflow-auto h-200">
      <ul class="w-2/5 m-auto">
        <li v-for="(todo, index) in todos"
          :key="index">
          {{ todo }}
          <button class="bg-blue-300 btn ml-3 mb-2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
            @click="onDelete(index)">
            Done
          </button>
        </li>
      </ul>
    </div>
  </page>
</template>

<script lang='ts'>
import vue from 'vue'

interface Data {
  formData: {
    todo: string;
  };

  todos: string[];
}

export default vue.extend({

  data(): Data {
    return {
      formData: {
        todo: "",
      },

      todos: [],
    };
  },

  watch: {
    formData: {
      handler() {
        let comFlag = true

        window.addEventListener('compositionstart', () => {
          comFlag = false
        })

        window.addEventListener('keydown', (e) => {
           if (e.key === 'Enter' && comFlag) {
            this.onSend()
          }
        })

        window.addEventListener('compositionend', () => {
          comFlag = true
        })
      },
      deep: true,
    }
  },

  methods: {
    onSend(): void {
      if (this.formData.todo === "") return;

      this.todos.push(this.formData.todo);
      this.formData.todo = "";
    },

    onDelete(index: number): void {
      this.todos.splice(index, 1);
    },
  },
});
</script>

<style scoped>
.h-200 {
  height: 800px;
}
</style>>
