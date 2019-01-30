const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state, news: action.json, loading: false }
    case 'GET_POST':
      return {
        ...state, userID: action.json
      }
      case'GET_USER_POSTS':
      return{
        ...state, userPosts: action.json, postId:action.arg
      }
    case 'GET_Post':
      return { ...state, posts: action.json }
    default:
      return state;
  }
};




export default reducer;
