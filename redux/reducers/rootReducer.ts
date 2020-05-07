import { combineReducers } from "redux";
import userDataReducer from "./userData";

const rootReducer = combineReducers({
    lyrics: userDataReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;