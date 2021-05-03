<template>
<div>
  <header class="text-4xl py-3 pl-4">
    {{ title }}
  </header>

  <div class="h-screen max-w-7xl bg-blue-50 m-auto p-2">
    <slot />
  </div>
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
})
</script>
