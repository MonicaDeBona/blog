<script>
    export default {
        name: 'AppHeader',
    }
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-md bg-light">
            <div class="container-fluid">
                <!-- <a class="navbar-brand" href="#">Blog</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" :class="this.$route.name === 'home' ? 'active' : ''"
                                aria-current="page" :to="{ name: 'home' }">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :class="this.$route.name === 'articles' ? 'active' : ''"
                                :to="{ name: 'articles' }">
                                Articles
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :class="this.$route.name === 'edit' ? 'active' : ''"
                                :to="{ name: 'edit' }">
                                Edit
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>



<style lang="scss" scoped>

</style>