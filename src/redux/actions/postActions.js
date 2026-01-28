export const fetchPost = () => async (dispatch) => {
  dispatch({ type: 'POST_LOADING' });
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    dispatch({ type: 'POST_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'POST_ERROR', payload: err.message });
  }
};
