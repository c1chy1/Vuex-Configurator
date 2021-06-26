<template>

    <div id="app">

        <Product :product="product" />

    </div>

</template>

<script>

    import Product from "./components/Product";

    export default {
        name: "App",
        computed: {
            product() {
                return this.$store.state.product;
            }
        },
        components: {
            Product
        },
        created() {

            this.$http.get("https://c1chyweb.de/product.json")
                .then(({ data }) => this.$store.state.product = data);

        }
    }

</script>

<style>

    @import "spectre.css";

</style>