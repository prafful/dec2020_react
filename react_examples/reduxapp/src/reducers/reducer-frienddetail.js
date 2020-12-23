const reducerDetail = function createReducerDetail(state = null, action ){

    var detail = []
    console.log("Value of state: ")
    console.log(state)
    console.log("Value of action: ")
    console.log(action)

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