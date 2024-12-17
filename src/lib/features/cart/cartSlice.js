import { createSlice } from '@reduxjs/toolkit'
import { vegItems,nonvegItems } from '@/app/data'

 const itemsCollection = [...vegItems , ...nonvegItems]

const initialState = {
  cartItems : [],
   allProducts : itemsCollection,

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      add : (state, action)=>{

        let find = state.cartItems.findIndex((item) => item.id === action.payload.id);
         if(find>=0) {

          state.cartItems[find].quantity +=1 
         }
          else{

           state.cartItems.push(action.payload)
          }
    },
    remove : (state, action) => {
     
      state.cartItems = state.cartItems.filter(item => item.id !==  action.payload );
    },

  },
})


export const { add , remove } = cartSlice.actions

export default cartSlice.reducer