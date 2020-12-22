const friendClickedAction = function(friend){
    console.log(friend)
    return {
        type: "FRIEND_CLICKED",
        payload: friend
    }

}

export default friendClickedAction