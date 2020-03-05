<template>
  <div class="column sidebar is-one-fifth">
    <div class="sidebar-header">
      <sidebar-card></sidebar-card>
    </div>
    <div class="sidebar-navigation">
      <main-nav></main-nav>
    </div>
    <social-links></social-links>
  </div>
</template>

<script lang="js">

  import MainNav from './MainNav'
  import SidebarCard from './SidebarCard'
  import SocialLinks from './SocialLinks'

  export default {
      components: {
        MainNav,
        SidebarCard,
        SocialLinks
      }
  }
</script>
