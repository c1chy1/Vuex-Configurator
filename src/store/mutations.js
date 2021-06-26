import Vue from "vue";

export default {
    select(state, payload) {
        Vue.set(state.selected, payload.feature, payload.option);
    },
    finish(state) {
        state.finished = true;
    }
};