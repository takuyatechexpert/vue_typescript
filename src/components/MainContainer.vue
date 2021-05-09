<template>
  <main
    class="main-container"
    :class="{ shrunked: isSidebarActive }">
    <sidebar />
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import vue from 'vue'
import Sidebar from './Sidebar.vue'

export default vue.extend({
  name: 'mainContainer',

  components: {
    Sidebar,
  },

  computed: {
    isSidebarActive(): boolean {
      return this.$store.state.isSidebarActive
    },
  },
})
</script>

<style scoped>
.main-container {
  padding-left: 60px;
}

@media (min-width: 768px) {
  .main-container {
    transition: padding-left 0.2s;
  }

  .main-container.shrunked {
    padding-left: 200px;
  }
}
</style>