const initialState = {
  post: {},
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_LOADING':
      return { ...state, loading: true };
    case 'POST_SUCCESS':
      return { ...state, loading: false, post: action.payload };
    case 'POST_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
