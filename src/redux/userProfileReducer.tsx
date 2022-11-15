const GET_USER = 'GET_USER'

const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    favoriteItemsQuantity: 0,
    shopCartItemsQuantity: 0,
}

const userProfileReducer = (state = initialState, action: any) =>{
    switch(action.type){
        case GET_USER:
            return{...state}
        default:
            return state
    }
}

export default userProfileReducer

