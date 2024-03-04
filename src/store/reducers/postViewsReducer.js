// Initial state object
const initialState = {
  postViews: {},
};

// Action creator
export const incrementPostView = (postId) => ({
  type: 'INCREMENT_POST_VIEW',
  payload: {
    postId,
  },
});

export default function postViewsReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_POST_VIEW':
      const updatedPostViews = {
        ...state.postViews,
        [action.payload.postId]:
          (state.postViews[action.payload.postId] || 0) + 1,
      };
      return {
        ...state,
        postViews: updatedPostViews,
      };
    default:
      return state;
  }
}
