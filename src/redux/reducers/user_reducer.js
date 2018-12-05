

export default function(state = {}, action){
    switch(action.type){
        case 'USER_DETAIL.USER':
            return {...state,userReducer:action.payload}
        case 'POST_DETAIL.POST':
            return {...state,postReducer:action.payload}
        case 'COMMENT_DETAIL.COMMENT':
            return {...state,commentReducer:action.payload}
        default:
            return state;
    }
}