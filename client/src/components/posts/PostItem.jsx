import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
//  materialUi
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//  Actions
import { addLike, removeLike, deletePost } from '../../actions/post';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minHeight: 300,
    backgroundColor: 'white',
    color: 'black',
  },
  tooltip: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '4.2rem',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

let isUserAllowedToDeletePost = false;

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  post: {
    _id,
    user,
    name,
    avatar,
    date,
    text,
    from,
    to,
    travelDate,
    time,
    space,
    type,
    likes,
    comments,
  },
  auth,
}) => {
  useEffect(() => {
    user === auth.user._id
      ? (isUserAllowedToDeletePost = true)
      : (isUserAllowedToDeletePost = false);
  });

  //  materialUI
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // conditional style
  let bgColor = {};
  if (type === '0') {
    bgColor = { backgroundColor: 'gray' };
  }
  if (type === '1') {
    bgColor = { backgroundColor: 'purple' };
  }

  // formating date
  const formatedDate = (
    <Fragment>
      <Moment fromNow>{date}</Moment>
    </Fragment>
  );

  // console.log(`This is the user:   ${user}`);
  // console.log('break break break');
  // console.log(`This is the auth.user._id:  ${auth.user._id}`);

  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root} style={bgColor} variant="outlined">
          <CardHeader
            avatar={
              <Link to={`/profile/${user}`}>
                <Avatar aria-label="profile" className={classes.avatar}>
                  {name.charAt(0).toUpperCase()}
                </Avatar>
              </Link>
            }
            action={
              <IconButton aria-label="settings" onClick={() => deletePost(_id)}>
                {!auth.loading && isUserAllowedToDeletePost && <DeleteIcon />}
              </IconButton>
            }
            title={name}
            subheader={formatedDate}
          />

          <CardContent>
            <Typography variant="body1" color="textPrimary">
              {from && `From: ${from}`}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {to && `To: ${to}`}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {travelDate && `Date: ${travelDate}`}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {time && `Time: ${time}`}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {space && `Availability: ${space}`}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton onClick={() => addLike(_id)} aria-label="like">
              <ThumbUpAltOutlinedIcon />
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </IconButton>
            <IconButton aria-label="dislike" onClick={() => removeLike(_id)}>
              <ThumbDownAltOutlinedIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body1" color="textPrimary" paragraph>
                {text}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Fragment>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
