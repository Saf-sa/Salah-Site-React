
export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cart: [...state.cart, action.newItem]
            }
    
        default:
            return state
    }
}

