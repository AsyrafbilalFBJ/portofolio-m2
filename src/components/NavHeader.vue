<template>
    <div>
        <div class="row bg-primary" style="height:1.5vh">&ensp;</div>
        <div class="mr-5 ml-5">
            <b-navbar toggleable="lg" type="dark" variant="white" class="p-4">
                <b-navbar-brand href="#" class="ml-lg-5 ml-sm-0">
                    <router-link to="/" exact class="text-decoration-none">
                        <h5 class="text-uppercase text-dark fw-semibold m-0 align-middle">Portofolio</h5>
                    </router-link>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse" class="border-0">
                    <template v-slot:default="{ expanded }">
                        <b-icon v-if="expanded" icon="x-square-fill" variant="dark" class="bg-light p-1 rounded-1" scale="2"></b-icon>
                        <b-icon v-else icon="caret-down-square" variant="primary" class="bg-light p-1 rounded-1" scale="2"></b-icon>
                    </template>
                </b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#" class="mr-3">
                            <router-link to="/" exact class="text-decoration-none text-end txt-black">
                                <p class="text-uppercase fw-normal m-0">Work</p>
                            </router-link>
                        </b-nav-item>
                        <b-nav-item href="#" class="mr-5">
                            <router-link to="/about" exact class="text-decoration-none text-end txt-black">
                                <p class="text-uppercase fw-normal m-0">About</p>
                            </router-link>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
    <!-- <div>
        <div class="row bg-primary" style="height:1.5vh">&ensp;</div>
        <div class="row m-5">
            <div class="col-1">
            </div>
            <div class="col-lg-7 col-sm-12">
                <router-link to="/" exact class="text-decoration-none">
                    <h5 class="text-uppercase text-dark fw-semibold m-0 align-middle">Asyrafbilal Fadhila Bhinar Jaya</h5>
                </router-link>
            </div>
            <div class="col-1">
            </div>
            <div class="col-lg-1 col-sm-12">
                <router-link to="/" exact class="text-decoration-none text-end txt-black">
                    <p class="text-uppercase fw-normal m-0">Work</p>
                </router-link>
            </div>
            <div class="col-lg-1 col-sm-12">
                <router-link to="/about" exact class="text-decoration-none text-end txt-black">
                    <p class="text-uppercase fw-normal m-0">About</p>
                </router-link>
            </div>
            <div class="col-1">
            </div>
        </div>
    </div> -->
</template>

<script>
export default {
    name: 'NavHeader',
    props: {
        msg: String
    }
}
</script>

<style>
.txt-black{
    color: black
}
.router-link-exact-active{
    color: #0D6EFD
}
</style>