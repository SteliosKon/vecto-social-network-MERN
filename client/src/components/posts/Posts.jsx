import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
//  Redux
import { connect } from 'react-redux';

//  Actions
import { getAllPosts } from '../../actions/post';
// Gif
import Spinner from '../layout/Spinner';

const Posts = ({ getAllPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return <div></div>;
};

Posts.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getAllPosts })(Posts);
