import { CITY_CHANGE } from './mutation-types';

export default {
    [CITY_CHANGE](state, city) {
        state.city = city;
    }
}
