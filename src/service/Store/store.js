import { legacy_createStore as createStore} from 'redux';
import rootReducers from "../Reducers/index";

// create redux store using createStore passing two arguments reduces and redux devtool extension.
const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
