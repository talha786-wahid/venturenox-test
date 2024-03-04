import { combineReducers } from 'redux';

import postViewsReducer from './postViewsReducer';
import propertyReducer from './propertyReducer';

const rootReducer = combineReducers({
  propertyReducer,
  postViewsReducer,
});
export default rootReducer;
