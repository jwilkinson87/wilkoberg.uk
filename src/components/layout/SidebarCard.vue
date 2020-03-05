<template functional>
    <div class="card card-personal">
        <section class="card-image">
            <figure class="image is-64x64">
                <img src="@/assets/img/me.jpg" class="is-rounded" alt="Me, myself and I" />
            </figure>
        </section>
        <div class="card-content">
            <div class="content">
                <p class="title is-4">Jonathan Wilkinson</p>
                <p class="subtitle is-6">Software Developer</p>
                <dl v-if="false">
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
</template>
