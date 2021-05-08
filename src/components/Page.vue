<template>
<div class="bg-blue-50 p-5 h-screen">
  <header class="text-4xl mb-3">
    {{ title }}
  </header>

  <slot />
</div>
</template>

<script lang="ts">
import vue, { PropType } from 'vue'

export default vue.extend({
  name: 'page',

  props: {
    title: {
      type: String as PropType<string>,
      default: 'No Title'
    }
  },

  computed: {
    isSidebarActive(): boolean {
      return this.$store.state.isSidebarActive
    }
  },
})
</script>
