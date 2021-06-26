import _ from "lodash";

export default {
    price(state) {

        const features = state.product.features;
        let sum = 0;

        for(let key in state.selected) {

            const feature = _.find(features, { code: key });
            const option = _.find(feature.options, { code: state.selected[key] });

            sum += option.price;

        }

        return state.product.price + sum;

    },
    selected(state) {
        return (feature, option) => {
            return state.selected[feature] === option;
        };
    }
};