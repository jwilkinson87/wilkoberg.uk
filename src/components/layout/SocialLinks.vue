<template>
  <ul class="social-links-list">
    <li v-for="(item, index) in socialMediaLinks" :key="index">
      <a :href="item.url" target="_blank">
        <i :class="getIcon(item)"></i>
        <span class="sr-only">LinkedIn</span>
      </a>
    </li>
  </ul>
</template>

<script lang="js">

export default {
    computed: {
        socialMediaLinks() {
            return [
                {
                    icon: 'linkedin',
                    url: 'https://www.linkedin.com/in/jonathan-wilkinson-b611371b/',
                    text: 'LinkedIn',
                    isBrand: true
                },
                {
                    icon: 'instagram',
                    url: "https://www.instagram.com/wilko_87/",
                    text: 'Instagram',
                    isBrand: true
                },
                {
                    icon: 'flickr',
                    url: "https://www.flickr.com/photos/jwilko_87/",
                    text: 'Flickr',
                    isBrand: true
                },
                {
                    icon: 'envelope',
                    url: 'mailto:me@wilkoberg.uk',
                    text: 'Email',
                    isBrand: false
                }
            ]
        }
    },

    methods: {
        getIcon(item) {
            if (item.isBrand) {
                return `fab fa-${item.icon}`
            }

            return `fas fa-${item.icon}`
        }
    }
}

</script>