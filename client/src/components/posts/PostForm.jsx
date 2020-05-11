import React, { Fragment, useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SimpleDialog from './PostDialog.jsx';

export default function SimpleDialogDemo() {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Fragment>
      <div className="container">
        <Fab color="primary" aria-label="add" onClick={onClick}>
          <AddIcon />
        </Fab>
        <SimpleDialog open={open} onClick={onClick} />
      </div>
    </Fragment>
  );
}
