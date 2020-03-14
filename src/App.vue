<template>
  <div id="app">

    <div
      id="site-content"
      class="is-fluid"
    >
      <div class="columns">
        <sidebar class="column"></sidebar>
        <transition name="fade" mode="out-in">
          <div class="column" id="site-content-right">
            <router-view />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar'

export default {
  name: "App",
  components: {
    Sidebar
  }
}
</script>
