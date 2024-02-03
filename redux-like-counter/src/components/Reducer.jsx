const firstState = {
  likes: 0
};
const likeCounter = (state = firstState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        likes: state.likes + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        likes: Math.max(state.likes - 1, 0)
      };
    default:
      return state;
  }
};
export default likeCounter;