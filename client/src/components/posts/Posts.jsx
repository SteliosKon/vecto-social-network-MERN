import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
//  Redux
import { connect } from 'react-redux';

//  Actions
import { getAllPosts } from '../../actions/post';
//  Components
import PostItem from './PostItem.jsx';
//  GIF
import Spinner from '../layout/Spinner';

const Posts = ({ getAllPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="container">
            {posts.map((post, index) => (
              <div key={index} className="p-1">
                <PostItem key={post._id} post={post}></PostItem>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Posts.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getAllPosts })(Posts);
