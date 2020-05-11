import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
// materialui
import Dialog from '@material-ui/core/Dialog';
import { TextField, Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import InputAdornment from '@material-ui/core/InputAdornment';

const SimpleDialog = ({ addPost, onClick, open }) => {
  const initialState = {
    text: '',
    from: '',
    to: '',
    date: '',
    time: '',
    space: '',
    type: '',
  };
  const [formData, setFormData] = useState(initialState);
  const { text, from, to, date, time, space, type } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData(initialState);
    onClick();
  };

  console.log(formData);

  return (
    <Fragment>
      <Dialog
        fullWidth
        onClose={onClick}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <div className="container">
          <form noValidate onSubmit={(e) => onSubmit(e)}>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                label="from"
                name="from"
                autoFocus
                value={from}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                name="to"
                label="Destination"
                value={to}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                name="date"
                label="Date"
                value={date}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                name="time"
                label="Time"
                value={time}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                name="space"
                label="Space"
                value={space}
                onChange={(e) => onChange(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PeopleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                name="type"
                label="Type"
                value={type}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div>
              <TextField
                multiline
                variant="outlined"
                margin="normal"
                required
                name="text"
                label="Description"
                value={text}
                onChange={(e) => onChange(e)}
              />
            </div>

            <Button type="submit" fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </form>
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
