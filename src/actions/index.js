import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    // _.chain is a special function that lets us chain together
    // functions that manipulate our data
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({type: "FETCH_POSTS", payload: response.data})
};

// This is some really crazy syntax that may or may not be necessary
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({type: "FETCH_USER", payload: response.data})
}


// // This is some really crazy syntax that may or may not be necessary
// export const fetchUser = (id) => async dispatch => _fetchUser(id, dispatch);

// // The underscore denotes that this is a private function
// // We move the memoized definition outside of the original function so that
// // it doesn't get re-memoized over and over again
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//     dispatch({type: "FETCH_USER", payload: response.data})
// })