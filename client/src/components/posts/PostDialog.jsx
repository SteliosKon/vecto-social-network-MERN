import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
// materialui
import Dialog from '@material-ui/core/Dialog';

const SimpleDialog = ({ addPost, onClick, open }) => {
  const [text, setText] = useState('');
  return (
    <Fragment>
      <Dialog
        onClose={onClick}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <div className="container">
          <div className="post-form">
            <h3>Add a new Journey</h3>

            <form
              className="form my-1"
              onSubmit={(e) => {
                e.preventDefault();
                addPost({ text });
                setText('');
                onClick();
              }}
            >
              <textarea
                name="text"
                cols="30"
                rows="5"
                placeholder="Description.."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              ></textarea>
              <input
                type="submit"
                className="btn btn-dark my-1"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </Dialog>
    </Fragment>
  );
};

SimpleDialog.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(SimpleDialog);
