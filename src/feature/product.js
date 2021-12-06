import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products:[
       
    ]
}
export const product = createSlice({
    name: 'productData',
    initialState,
    reducers: {
      setApiData: (state, action) => {
        return {...state, products:[...action.payload]}
       
      },
      selectedCatProduct:(state, action)=>{
          return {...state,  selectedCategory:{products:[...action.payload]}}
      },
     
     
    },
  })

  export const { setApiData, selectedCatProduct} = product.actions

export default product.reducer