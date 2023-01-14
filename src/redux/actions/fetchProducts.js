export const fetchProducts = (products) => {
    return {
        type: "GET_PRODUCTS",
        payload: products
    }
}