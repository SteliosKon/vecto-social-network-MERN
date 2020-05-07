import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
//  Redux
import { connect } from 'react-redux';

//  Actions
import { getPosts } from '../../actions/post';
//  Components
import PostItem from './PostItem.jsx';
import PostForm from './PostForm.jsx';
//  GIF
import Spinner from '../layout/Spinner';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="container">
            {posts.map((post, index) => (
              <div key={index}>
                <PostItem key={post._id} post={post}></PostItem>
              </div>
            ))}
          </div>
        </Fragment>
      )}
      <PostForm />
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
