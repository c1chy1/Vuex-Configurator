import axios from "axios";

export default {
    order({ state, commit }) {

        axios.post("https://web300421.roc130.rockinghoster.cloud/order", state.selected)
            .then( () => commit("finish"));

    }
};