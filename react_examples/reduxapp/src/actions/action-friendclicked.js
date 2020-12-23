const friendClickedAction = function(friend){
    console.log("Clicked friend will be broadcasted....")
    console.log(friend)
    return {
        type: "FRIEND_CLICKED",
        payload: friend
    }

}

export default friendClickedAction