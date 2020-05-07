import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//  Actions
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [Text, setText] = useState('');

  return (
    <div className="container">
      <div className="post-form">
        <div className="bg-primary p">
          <h3>Leave A Comment</h3>
        </div>
        <form
          className="form my-1"
          onSubmit={(e) => {
            e.preventDefault();
            addPost({ Text });
            setText('');
          }}
        >
          <textarea
            name="Text"
            cols="30"
            rows="5"
            placeholder="Comment on this post"
            value={Text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
