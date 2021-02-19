import { combineReducers } from 'redux';

const numbers = (state = [], action) => {
    switch (action.type) {
        case 'SET_NUMBERS':
            return action.payload;
        case 'CLEAR_NUMBERS':
            return [];
        default:
            return state;
    }
};

export default combineReducers({
    numbers,
});

