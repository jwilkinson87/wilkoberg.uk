<template>
  <div class="column sidebar is-one-fifth">
    <div class="sidebar-header">
      <sidebar-card></sidebar-card>
    </div>
    <div class="sidebar-navigation">
      <main-nav></main-nav>
    </div>
  </div>
</template>

<script lang="js">

  import MainNav from './MainNav'
  import SidebarCard from './SidebarCard'

  export default {
      components: {
        MainNav,
        SidebarCard
      }
  }
</script>
