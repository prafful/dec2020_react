import { combineReducers } from "redux";
import reducerDetail from "./reducer-frienddetail";
import reducerFriendList from "./reducer-friendlist";



const allReducerCombined = combineReducers({
    allfriends:reducerFriendList,
    friendDetail: reducerDetail

})

export default allReducerCombined