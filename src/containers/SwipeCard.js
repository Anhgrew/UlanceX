import { connect } from 'react-redux';
import SwipeCard from '../components/SwipeCard'
import { loadCards } from '../actions/SwipeCardAction'
const mapStateToProps = (state) => {
    console.log(state)
    return {
        db: state.SwipeCardReducer.items,
        alreadyRemovedArr: state.SwipeCardReducer.alreadyRemovedArr
    }
}

const mapDispatchToProps = {
    loadCards
}
export default connect(mapStateToProps, mapDispatchToProps)(SwipeCard);
