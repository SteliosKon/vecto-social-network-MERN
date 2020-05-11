import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import AddPostButton from './AddPostButton';
import { getPosts } from '../../actions/post';
// materialUi
import Grid from '@material-ui/core/Grid';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      <div className="container">
        <h1 className="large text-primary">Journeys</h1>
        <p className="lead">Find you next journey</p>
        <AddPostButton />
        <Grid container spacing={4}>
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </Grid>
      </div>
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
