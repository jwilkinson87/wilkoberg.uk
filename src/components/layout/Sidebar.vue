<template>
  <div class="column sidebar is-one-fifth">
    <div class="sidebar-header">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="@/assets/img/me.jpg" class="is-rounded" alt="Me, myself and I" />
              </figure>
            </div>
            <div class="media-right">
              <p class="title is-4">Jonathan Wilkinson</p>
              <p class="subtitle is-6">Software Developer</p>
              <dl>
                <dt><i class="fas fa-envelope"></i></dt>
                <dd>
                  <a href="mailto:me@wilkoberg.uk">me@wilkoberg.uk</a>
                </dd>
                <dt><i class="fab fa-linkedin"></i></dt>
                <dd>
                  <a href="#">LinkedIn Profile</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-navigation">
      <main-nav></main-nav>
    </div>
  </div>
</template>

<script lang="js">

  import MainNav from './MainNav'

  export default {
      components: {
        MainNav
      }
  }
</script>
