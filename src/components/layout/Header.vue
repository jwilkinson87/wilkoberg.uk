<template>
  <header class="site-header site-header--responsive">
    <nav
      class="site-header-navbar navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="site-header-brand navbar-brand">
          <menu-icon></menu-icon>
        </div>
        <navigation-menu></navigation-menu>
      </div>
    </nav>
  </header>
</template>

<script>
  import MenuIcon from "./header/MenuIcon"
  import NavigationMenu from "./header/NavigationMenu"

  export default {
    components: {
      MenuIcon,
      NavigationMenu
    }
  }
</script>
