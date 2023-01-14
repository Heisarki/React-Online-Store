const initialState = {
    products: [],
}

const allProducts = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET_PRODUCTS":
            return { ...state, products: payload };
    
        default:
            return state;
    }
}

export default allProducts;