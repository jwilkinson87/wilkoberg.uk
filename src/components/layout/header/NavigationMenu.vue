<template>
  <div id="site-header-navigation" class="navbar-menu site-header-navigation">
    <div class="navbar-end">
      <router-link
        v-for="(link, index) in links"
        :to="link.path"
        tag="a"
        :key="index"
        :class="{'navbar-item': true, 'is-active': isActive(link.path)}"
      >
        <i :class="link.icon">
          <span class="is-sr-only">{{ link.name }}</span>
        </i>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            path: "/",
            name: "Home",
            icon: 'fas fa-user'
          },
          {
            path: "/contact",
            name: "Contact",
            icon: 'fas fa-envelope'
          }
        ]
      }
    },

    methods: {
      isActive(path) {
        return this.$route.path === path
      }
    }
  }
</script>
