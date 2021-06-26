<template>

    <div class="option">
        <h3 class="option__label">{{ feature.name }}</h3>

        <div class="option__group">
            <Option v-for="option in feature.options" :option="option" :feature="feature" :key="option.code" @click.native="select(option)" />
        </div>
    </div>

</template>

<script>

    import Option from "./ProductOption";

    export default {
        name: "OptionGroup",
        props: ["feature"],
        methods: {
            select(option) {
                this.$store.commit("select", {
                    feature: this.feature.code,
                    option: option.code
                });
            }
        },
        components: {
            Option
        },
        created() {

            this.feature.options
                .filter(option => option.price === 0)
                .forEach(option => this.select(option));

        }
    };

</script>

<style lang="scss" scoped>

    .option {
        padding: 30px;
        margin-bottom: 20px;
        border-radius: 10px;
        background-color: #f3f3f3;

        &:last-child {
            margin-bottom: 0;
        }

        &__label {
            margin-bottom: 30px;
        }
    }

</style>