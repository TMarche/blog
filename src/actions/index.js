import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({type: "FETCH_POSTS", payload: response.data})
};

export const fetchUser = (id) => async dispatch => {
    _fetchUser(id, dispatch);
}

// The underscore denotes that this is a private function
// We move the memoized definition outside of the original function so that
// it doesn't get re-memoized over and over again
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({type: "FETCH_USER", payload: response.data})
})