<template>
  <div
    class="sidebar fixed left-0 h-screen thema-main"
    :class="{ active: isSidebarActive, 'thema-main-red': isThemaRed }">
    <div class="h-28 p-3 flex justify-between items-center">
      <div
        class="menu-text"
        :class="{ 'active': isSidebarActive }">
        Vue2<br>
        TypeScript<br>
        Lesson
      </div>
      <button
        class="hum focus:outline-none m-auto"
        :class="{ 'active mx-0': isSidebarActive }"
        @click="onMenuClick">
        <span class="hum_line"></span>
      </button>
    </div>

    <ul class="p-3">
      <li>
        <router-link
          class="hover:text-gray-400 flex"
          to="/hello-world">
          <div>logo</div>
          <div
            class="pl-2 menu-text"
            :class="{ 'active': isSidebarActive }">
            Hello World
          </div>
        </router-link>
      </li>
      <li>
        <router-link
          class="hover:text-gray-400 flex"
          to="/">
          <div>logo</div>
          <div
          class="pl-2 menu-text"
          :class="{ 'active': isSidebarActive }">
          TODO</div>
        </router-link>
      </li>
      <li>
        <a
          href="#"
          class="menu-text hover:text-gray-400"
          @click="onThemaRed()"
          :class="{ 'active': isSidebarActive }">
          Thema Color Red
        </a>
      </li>
    </ul>
  </div>  
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SideBar',

  data() {
    return {
      isTextVisible: false,
    }
  },

  computed: {
    isSidebarActive(): boolean {
      return this.$store.state.isSidebarActive
    },

    isThemaRed():boolean {
      return this.$store.state.themaRed
    }
  },

  methods: {
    onMenuClick(): void {
      this.$store.commit('toggleSidebar')
    },

    onThemaRed() {
      this.$store.commit('themaRed')
    },
  }
});
</script>

<style scoped>
.sidebar {
  width: 60px;
  transition: width 0.3s;
}

.sidebar.active {
  width: 200px;
}

.menu-text {
  opacity: 0;
  display: none;
  white-space: nowrap;
  transition: opacity 0.5s;
}

.menu-text.active {
  opacity: 1;
  display: block;
}

.hum {
  display: block;
  width: 30px;
  height: 26px;
  cursor: pointer;
}
.hum_line {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 30px;
  height: 2px;
  background: #000;
  transition: all 0.4s;
  transform: rotate(0);
}
.hum_line:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: #000;
  transition: all 0.4s;
  transform: translateY(-12px);
}
.hum_line:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: #000;
  transition: all 0.4s;
  transform: translateY(12px);
}
.hum.active .hum_line {
  background-color: rgba(53, 126, 207, 0);
}
.hum.active .hum_line:before {
  transform: rotate(-45deg) translateY(0);
}
.hum.active .hum_line:after {
  transform: rotate(45deg) translateY(0);
}
</style>

