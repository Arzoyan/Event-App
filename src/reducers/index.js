const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'REGISTR_SUCCESS':
      return { ...state, result: action.result, loading: false }
    case 'GET_POST':
      return {
        ...state, userID: action.json
      }
    case 'GET_USER_POSTS':
      return {
        ...state, userPosts: action.json, postId: action.arg
      }
    case 'GET_Post':
      return { ...state, posts: action.json }
    case 'LOGIN_SUCCESS':
      return { ...state, userToken: action.json, }
      case'LOGIN_ERROR':
      return{
        ...state, userToken: action.json,
      }
    default:
      return state;
  }
};




export default reducer;
