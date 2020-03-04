<template>
  <div id="app">

    <div
      id="site-content"
      class="is-fluid"
    >
      <div class="columns">
        <sidebar class="column"></sidebar>
        <div class="column">
          <router-view class="column" />
        </div>
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
