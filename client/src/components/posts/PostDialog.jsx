import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
// materialui
import Dialog from '@material-ui/core/Dialog';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
//  Radio Buttons
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

// How many people fit in the car
const spaces = [
  {
    value: '0',
    label: '0',
  },
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: 'theme.spacing(1)',
      width: '25ch',
    },
  },
  item: {
    textAlign: 'center',

    width: '30%',
    padding: '4px',
  },
}));

const SimpleDialog = ({ addPost, onClick, open }) => {
  const classes = useStyles();

  const initialState = {
    text: '',
    from: '',
    to: '',
    travelDate: '',
    time: '',
    space: '',
    type: '',
  };
  const [formData, setFormData] = useState(initialState);
  const { text, from, to, travelDate, time, space, type } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData(initialState);
  };

  // console.log(formData);

  return (
    <Fragment>
      <Dialog
        onClose={onClick}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <form noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}>
          <Grid container justify="center" alignItems="center">
            <Grid item className={classes.item} xs={12}>
              <h1>Share your journey with others</h1>
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                label="from"
                name="from"
                autoFocus
                value={from}
                onChange={(e) => onChange(e)}
                helperText="Where do you start"
              />
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                name="travelDate"
                label="Date"
                value={travelDate}
                onChange={(e) => onChange(e)}
                helperText="The exact day of journey"
              />
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                name="to"
                label="Destination"
                value={to}
                onChange={(e) => onChange(e)}
                helperText="Where are you going"
              />
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                name="time"
                label="Time"
                value={time}
                onChange={(e) => onChange(e)}
                helperText="What time are you starting"
              />
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <TextField
                id="select-space"
                required
                select
                label="Space"
                name="space"
                value={space}
                onChange={(e) => onChange(e)}
                helperText="How many people can travel with you"
              >
                {spaces.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <RadioGroup
                aria-label="Select Type"
                name="type"
                value={type}
                onChange={onChange}
              >
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="Offering"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Asking"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <TextField
                variant="outlined"
                margin="normal"
                name="text"
                label="Description"
                multiline
                rows={4}
                value={text}
                onChange={(e) => onChange(e)}
                helperText="Fields with * are required"
              />
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
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
