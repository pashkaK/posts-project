import React from "react";
import PostItem from "./PostItem";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const PostList = ({posts, title, remove}) => {
  if(!posts.length) {
    return (
      <h1>Posts not found!</h1>
    )
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }} className='posts__title'>
          {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>  
        ))}
      </TransitionGroup>
      
    </div>
  );
};

export default PostList;
