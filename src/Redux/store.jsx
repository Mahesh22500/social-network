import { legacy_createStore,applyMiddleware, combineReducers} from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { postReducer } from "./Post/post.reducer";


const rootReducers = combineReducers({
    auth:authReducer,
    post:postReducer
})


const store = legacy_createStore(rootReducers,applyMiddleware(thunk))
export default store