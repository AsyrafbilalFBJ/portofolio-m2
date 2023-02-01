<template>
    <div>
        <div class="p-5 mb-5 bg-light">
            <div class="row">
                <div class="col-2">
                    &nbsp;
                </div>
                <div class="col-lg-4 col-sm-8 m-auto">
                    <h3 class="">
                        E-commerce Product Display
                    </h3>
                </div>
                <div class="col-lg-4 col-sm-8">
                    <img src="../assets/stuff1s.png" class="w-100" alt="">
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
                This project is a web application that displays two product categories, namely man's clothing and woman's clothing. If other than these two categories, the product will not be displayed.
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
                Web application that has a display according to the existing design and can retrieve data from the provided API. The products displayed are from two categories, namely man's clothing and woman's clothing. Users can see the various products displayed by pressing Next Product.
            </div>
            <div class="col-2">
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-2">

            </div>
            <div class="col-8 m-auto">
                <h5 class="">
                    Project Components
                </h5>
                <div>
                    <a href="https://www.figma.com/file/x1bkO3alpmGQFtysh9Lmn7/Task-5-Ecommerce?t=X5xC13nUBxLyXkLG-6" class="fw-semibold text-primary text-decoration-none">
                        Desain
                    </a>
                    <div>
                        <img src="../assets/design_stuff1.png" alt="" class="w-100">
                    </div>
                </div>
                
                <div>
                    <a href="https://fakestoreapi.com/products" class="fw-semibold text-primary text-decoration-none">
                        API
                    </a>
                    <h6>
                        Example code
                    </h6>
                    <div class="bg-light">
                        <pre><code>
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
        </code></pre>
                    </div>
                    <h6>
                        Output
                    </h6>
                    <div class="bg-light">
                        <pre><code>
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        }
        </code></pre>
                    </div>
                </div>

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
                        src="https://asyrafbilalfbj.github.io/Ecommerce-Product_Display/"
                    ></b-embed>
                </div>
                <div class="text-center mt-3">
                    <a href="https://asyrafbilalfbj.github.io/Ecommerce-Product_Display/" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0">
                    Try this out!
                    </a>&ensp;
                    <a href="https://github.com/AsyrafbilalFBJ/Ecommerce-Product_Display" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0">
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
    name: 'FirstStuff',
    components: {
        // ProductDisplay,
    }
}
</script>

<style>

</style>