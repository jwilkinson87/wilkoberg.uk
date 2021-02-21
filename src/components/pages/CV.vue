<template>
    <div>
        <div class="page-title">
            <h1 class="title is-1">Curriculum Vitae</h1>
        </div>
        <section class="content" v-for="(job, index) in cv" :key="index">
            <h2 class="is-size-6 has-text-weight-bold job-title">{{ job.job_title }}</h2>
            <div class="work-meta">
                <p class="company-name has-text-grey dark has-text-weight-400">{{ job.company }}</p>
                <p class="has-text-grey-dark work-period">{{ job.work_period}}</p>
            </div>
            <div class="work-description" v-html="nl2br(job.description)">
            </div>
        </section>
    </div>
</template>

<script>

import { default as CV } from './../../data/cv.json'

export default {
    data() {
        return {
            cv: CV
        }
    },

    mounted() {
        console.log(CV)
    },

    methods: {
        nl2br(str) {
            return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2')
        }
    }
}


</script>

<style lang="scss" scoped>

.work-meta {
    p {
        font-size: 0.9rem;
        margin-bottom: 0 !important;
    }
}

.work-description {
    padding: 10px 0;
    font-size: 1.1rem;
}

</style>