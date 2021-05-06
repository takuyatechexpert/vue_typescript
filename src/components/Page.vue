<template>
<div class="max-w-7xl bg-blue-50 p-2 h-screen main-container"
  :class="{shrunked: isSidebarActive}">
  <header class="text-4xl py-3 pl-4">
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
