const reducerDetail = function createReducerDetail(state = null, action ){

    var detail = []

    switch (action.type) {
        case "FRIEND_CLICKED":
            return action.payload
            break;
    
        default:
            break;
    }

    return detail

}

export default reducerDetail