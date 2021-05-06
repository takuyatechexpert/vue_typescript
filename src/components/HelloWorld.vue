<template>
  <page title="Hello World">
    <h1 class="text-red-500 text-4xl">{{ msg }}</h1>
    <div>{{ book.title }}</div>
    <div>{{ book.author }}</div>
    <div>{{ book.year }}</div>

    <div>Full Name</div>
    <div>{{ fullname }}</div>
  </page>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

interface Data {
  msg?: string,
  book: {
    title: string,
    author: string,
    year: number,
  },

  user: {
  firstName: string;
  lastName: string;
  age: number;
  }
}

export default Vue.extend({
  name: 'HelloWorld',

  props: {
    msg: {
      type: String as PropType<string>,
      default: 'No message',
    }
  },

  data(): Data {
    return {
      book: {
        title: 'test',
        author: 'testくん',
        year: 1,
      },

      user: {
        firstName: '名',
        lastName: '苗字',
        age: 23,
      },
    }
  },

  computed: {
    fullname(): string {
      return `${this.user.lastName} ${this.user.firstName}`
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
