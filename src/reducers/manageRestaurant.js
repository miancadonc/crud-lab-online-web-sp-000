import cuid from 'cuid';

export default function manageRestaurants(state={
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            return {
                ...state,
                restaurants: state.restaurants.concat({text: action.text, id: cuid()})
            }

        case "DELETE_RESTAURANT":
            return {
                ...state,
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.restaurantId)
            }

        case "ADD_REVIEW":
            return {
                ...state,
                reviews: state.reviews.concat(action.review)
            }

        case "DELETE_REVIEW":
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.reviewId)
            }
        
        default:
            return state
    }
}
