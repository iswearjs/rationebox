const initState = {
    products: [
        { id: 1, product_bname: 'Fresho', product_name: 'Onion', image: 'pro-1.jpg', imageOne: '1-fresho-onion.jpg', imageTwo: '2-fresho-onion.jpg', imageThree: '3-fresho-onion.jpg', vname: 'veg.png', price: 31.25, discount: 2, discountPrice: 31.25 - 2 / 100 * 31.25, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 2, product_bname: 'Fresho', product_name: 'Green Capsicum', image: 'pro-2.jpg', imageOne: '1-fresho-onion.jpg', imageTwo: '2-fresho-onion.jpg', imageThree: '3-fresho-onion.jpg', vname: 'veg.png', price: 20, discount: 3, discountPrice: 20 - 3 / 100 * 20, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 3, product_bname: 'Fresho', product_name: 'Orange Carrot', image: 'pro-3.jpg', vname: 'veg.png', price: 23, discount: 5, discountPrice: 23 - 5 / 100 * 23, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 4, product_bname: 'Fresho', product_name: 'Potato', image: 'pro-4.jpg', vname: 'veg.png', price: 22, discount: 10, discountPrice: 22 - 10 / 100 * 22, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 5, product_bname: 'Fresho', product_name: 'Palak', image: 'pro-5.jpg', vname: 'veg.png', price: 12, discount: 4, discountPrice: 12 - 4 / 100 * 12, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 6, product_bname: 'Fresho', product_name: 'Sugar', image: 'pro-6.jpg', vname: 'veg.png', price: 40, discount: 5, discountPrice: 40 - 5 / 100 * 40, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 7, product_bname: 'Fresho', product_name: 'Mango', image: 'pro-7.jpg', vname: 'veg.png', price: 55, discount: 8, discountPrice: 55 - 8 / 100 * 55, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 8, product_bname: 'Fresho', product_name: 'Refine Food Oil', image: 'pro-8.jpg', vname: 'veg.png', price: 180, discount: 15, discountPrice: 180 - 15 / 100 * 180, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        // { id: 9, product_bname: 'Fresho', product_name: 'Nevia Soft Cream', image: 'pro-9.jpg', price: 220, discount: 12, discountPrice: 220 - 12 / 100 * 220, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        // { id: 10, product_bname: 'Fresho', product_name: 'Nevia Body Protection', image: 'pro-10.jpg', price: 250, discount: 8, discountPrice: 250 - 8 / 100 * 250, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        // { id: 11, product_bname: 'Fresho', product_name: 'Harpic', image: 'pro-11.jpg', price: 31.25, discount: 2, discountPrice: 31.25 - 2 / 100 * 31.25, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 9, product_bname: 'Fresho', product_name: 'Maggie Noddles', image: 'pro-12.jpg', vname: 'veg.png', price: 130, discount: 5, discountPrice: 130 - 5 / 100 * 130, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 10, product_bname: 'India Gate Basmate Rice', product_name: 'Basmati Dubar Rice', vname: 'veg.png', image: 'pro-13.jpg', price: 120, discount: 9, discountPrice: 120 - 9 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 11, product_bname: 'Lays', product_name: 'Lays Magic Masala', image: 'pro-14.jpg', vname: 'veg.png', price: 30, discount: 5, discountPrice: 30 - 5 / 100 * 30, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 12, product_bname: 'Royal Organic', product_name: 'Daliya', image: 'pro-15.jpg', vname: 'veg.png', price: 30, discount: 7, discountPrice: 30 - 7 / 100 * 30, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 13, product_bname: 'Safe Harvest', product_name: 'Soya Rice', image: 'pro-16.jpg', vname: 'veg.png', price: 70, discount: 10, discountPrice: 70 - 10 / 100 * 70, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        { id: 14, product_bname: 'Aashirvaad Atta', product_name: 'Aashirvaad Wheat Atta', image: 'pro-17.jpg', vname: 'veg.png', price: 170, discount: 5, discountPrice: 170 - 5 / 100 * 170, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        // { id: 18, product_bname: 'Amul', product_name: 'Amul Chocolate Ice-cream', image: 'pro-18.jpg', price: 130, discount: 15, discountPrice: 130 - 15 / 100 * 130, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        // { id: 19, product_bname: 'Bingo', product_name: 'Masale Chips', image: 'pro-19.jpg', price: 20, discount: 5, discountPrice: 20 - 5 / 100 * 20, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        // { id: 20, product_bname: 'Amul', product_name: 'Amul Ice-cream', image: 'pro-20.jpg', price: 300, discount: 25, discountPrice: 300 - 25 / 100 * 300, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: state.products.find(product => product.id === parseInt(action.id)) }
        default:
            return state;
    }
}
export default ProductsReducer;