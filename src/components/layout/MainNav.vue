<template functional>
    <nav class="main-navigation" role="navigation">
        <router-link tag="a" :to="{name: 'pages.home'}" class="navigation-item">About</router-link>
        <a href="#" class="navigation-item">CV</a>
        <a href="#" class="navigation-item">Skills</a>
        <router-link tag="a" :to="{name: 'pages.contact'}" class="navigation-item">Contact</router-link>
    </nav>
</template>
