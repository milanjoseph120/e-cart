const { createSlice } = require("@reduxjs/toolkit");

const wishListSlice = createSlice({
    name:'wishlist',
    initialState:[], /* since this state has to store more than one item */
    reducers:{
        // actions
        addToWishlist:(state, action )=>{
            state.push(action.payload)
        },
        // functions to remove items from wishlist
        removeFromWishlist:(state , action)=>{
            // it returns new array with items satisfying the condition
                return state.filter(item=>item.id!==action.payload)
        }
    }
})
export const {addToWishlist , removeFromWishlist} = wishListSlice.actions
export default wishListSlice.reducer