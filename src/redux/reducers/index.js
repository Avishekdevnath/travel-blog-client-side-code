import { combineReducers } from "redux";
import { firebaseReducer } from "./firebaseReducer";
import { blogsReducer } from "./blogsReducer";
import { ordersReducer } from "./ordersReducer";
const reducers = combineReducers({
    firebaseReducer: firebaseReducer,
    blogsReducer: blogsReducer,
    ordersReducer: ordersReducer
    // product: selectedProductsReducer,
});
export default reducers;
