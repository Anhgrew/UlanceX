import * as types from '../constants/ActionTypes';
const initialState = {
    items: [
        {
            name: 'Anhbren',
            url: './img/anhbren.jpg'
        },
        {
            name: 'Anhbren2',
            url: './img/yy.png'
        },
        {
            name: 'Anhbren3',
            url: './img/kk.png'
        },
        {
            name: 'Anhbren4',
            url: './img/ll.jpg'
        }
    ],
    alreadyRemovedArr: []
};

const SwipeCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CARDS:
            return {
                ...state,
                items: [...state.items]
            };

        default:
            return state;
    }
}
export default SwipeCardReducer;