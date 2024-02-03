import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLike, decrementLike } from './Action';

const LikeCounter = () => {
  const likes = useSelector((state) => state.likes);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={() => dispatch(incrementLike())}>Like</button>
      <button onClick={() => dispatch(decrementLike())}>Unlike</button>
    </div>
  );
};

export default LikeCounter;