
const INIT_STATE ={
    carts: []
}

export const cartReducer = (state=INIT_STATE, action)=> {
    switch(action.type){
        case "ADD_CART":
            // return{
            //     ...state,
            //     carts: [...state.carts, action.payload]
            // }
            const index = state.carts.findIndex((item) => item.product_id === action.payload.product_id);
            if(index >= 0){
                state.carts[index].quantity += 1
            }else{
                const temp = {...action.payload, quantity:1}
                return{
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        
            
        case "INCREASE_CART":
            const i = state.carts.findIndex((item)=>item.product_id === action.data.product_id);
            if(i>=0){
                state.carts[i].quantity = action.quantity + state.carts[i].quantity
            }else{
                const temp = {...action.data, quantity: action.quantity}
                return{
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
            
        // case "DELETE_CART":
        //     const data = state.carts.filter((el)=>el.product_id !==  action.payload);
        //     return {
        //         ...state,
        //         carts: data
        //     }
        
        case "DELETE_CART":
            const index_dec = state.carts.findIndex((item) => item.product_id === action.payload.product_id);
            if(state.carts[index_dec].quantity > 1){
                state.carts[index_dec].quantity -= 1
                return{
                    ...state,
                    carts: [...state.carts, ]
                }
            }else if(state.carts[index_dec].quantity === 1){
                const data = state.carts.filter((el)=>el.product_id !==  action.payload.product_id);
                return {
                    ...state,
                    carts: data
                }
            }
        default:
            return state
    }
}