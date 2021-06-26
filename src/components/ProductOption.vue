<template>

    <button class="btn button" :class="{ 'btn-primary': selected }">{{ option.name }}</button>

</template>

<script>

    export default {
        name: "Option",
        props: ["option", "feature"],
        computed: {
            selected() {
                return this.$store.getters.selected(this.feature.code, this.option.code);
            }
        }
    };

</script>

<style lang="scss" scoped>

    .button {
        min-width: 100px;
        margin-right: 20px;

        &:last-child {
            margin-right: 0;
        }
    }

</style>