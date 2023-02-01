<template>
    <div>
        <div class="p-5 mb-5 bg-light">
            <div class="row">
                <div class="col-2">
                    &nbsp;
                </div>
                <div class="col-lg-4 col-sm-8 m-auto">
                    <h3 class="">
                        Gadelog (Gadget Catalog)
                    </h3>
                </div>
                <div class="col-lg-4 col-sm-8">
                    <img src="../assets/stuff3s.png" class="w-100" alt="">
                </div>
                <div class="col-2">
                    &nbsp;
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-2">
            </div>
            <div class="col-4">
                <h5 class="">
                    Project Description
                </h5>
            </div>
            <div class="col-4">
                This project is a web application that displays items based on the selected category. The available categories are Smartphones and Laptops.
            </div>
            <div class="col-2">
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-2">
            </div>
            <div class="col-4">
                <h5 class="">
                    Project Goals
                </h5>
            </div>
            <div class="col-4">
                A web application that can display items from the selected category. There are two categories namely smartphones and laptops. the user can select one of these categories and press Find to display 5 items in each category.
            </div>
            <div class="col-2">
            </div>
        </div>
        <br>
        <div class="row mt-5">
            <div class="col-1">

            </div>
            <div class="col-10 m-auto">
                <div class="row">
                    <div class="col">
                        <hr>
                        <h5 class="text-center mb-3">
                            Final Result
                        </h5>
                    </div>
                </div>
                <div>
                    <b-embed
                        type="iframe"
                        aspect="21by9"
                        src="https://asyrafbilalfbj.github.io/Gadget-Catalog/"
                    ></b-embed>
                </div>
                <div class="text-center mt-3">
                    <a href="https://asyrafbilalfbj.github.io/Gadget-Catalog/" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0">
                        Try this out!
                    </a>&ensp;
                    <a href="https://github.com/AsyrafbilalFBJ/Gadget-Catalog" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0">
                        Source code
                    </a>
                </div>
            </div>
            <div class="col-1">

            </div>
        </div>
    </div>
</template>

<script>
// import ProductDisplay from './ProductDisplay.vue'

export default {
    name: 'ThirdStuff',
    components: {
        // ProductDisplay,
    }
}
</script>

<style>

</style>