export const ADD = (item)=> {
    return{
        type: "ADD_CART",
        payload: item
    }
}

export const INCREASE_CART = (i, num) => {
    return{
        type: "INCREASE_CART",
        data: i,
        quantity: num
    }
}

// export const REMOVE = (i)=> {
//     return{
//         type: "REMOVE_ONE",
//         payload: i
//     }
// }

export const DELETE = (id)=> {
    return{
        type: "DELETE_CART",
        payload: id
    }
}

