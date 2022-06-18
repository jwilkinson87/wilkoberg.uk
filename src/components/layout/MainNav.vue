<template functional>
    <nav class="main-navigation" role="navigation">
        <router-link tag="a" :to="{name: 'pages.home'}" class="navigation-item">About</router-link>
        <router-link tag="a" :to="{name: 'pages.cv'}" class="navigation-item">CV</router-link>
        <router-link tag="a" :to="{name: 'pages.skills'}" class="navigation-item">Skills</router-link>
    </nav>
</template>
