import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    // Removes error message from redux
    posts: postsReducer,
    users: usersReducer,
});