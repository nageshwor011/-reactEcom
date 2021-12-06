import { configureStore } from '@reduxjs/toolkit'
import productReducer from './feature/product'
import categoryReducer from './feature/category';
// import dogReducer from '../feature/counter/dog'
// import productAction from '../feature/product/productAction'

export const store = configureStore({
  reducer: {
    // dog: dogReducer,
    // productDatas: productAction
        product: productReducer,
        categories: categoryReducer
  },
})

