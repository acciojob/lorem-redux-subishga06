import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../redux/actions/postActions';

function Post() {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;


