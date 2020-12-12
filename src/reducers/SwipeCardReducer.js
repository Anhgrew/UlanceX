import { LOAD_CARDS, SET_TODO } from '../reducers/Constant';

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

export const loadCards = () => ({
    type: LOAD_CARDS,
});

// export const setTodo = (items) => ({
//     type: SET_TODO,
//     payload: items
// });


const SwipeCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDS:
            return {
                ...state,
                items: [...state.items]
            };

        default:
            return state;
    }
}
export default SwipeCardReducer;