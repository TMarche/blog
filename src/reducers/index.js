import {combineReducers} from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
    // Removes error message from redux
    posts: postsReducer,
});