import { combineReducers } from "redux";
import reducerDetail from "./reducer-frienddetail";
import reducerFriendList from "./reducer-friendlist";
import reducerFriendStats from "./reducer-friendstats";



const allReducerCombined = combineReducers({
    allfriends:reducerFriendList,
    friendDetail: reducerDetail,
    friendStats: reducerFriendStats

})

export default allReducerCombined