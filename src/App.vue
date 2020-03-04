<template>
  <div id="app">
    <site-header />

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
import SiteHeader from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'

export default {
  name: "App",
  components: {
    SiteHeader,
    Sidebar
  }
}
</script>
