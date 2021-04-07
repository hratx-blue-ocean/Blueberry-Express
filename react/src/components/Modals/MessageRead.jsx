import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 25;
  const left = 25;

  return {
    top: `${top}%`,
    margin: 'auto'
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 500,
    height: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const MessageRead = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className="mb-12" id="simple-modal-title">Message</h2>
      <input className="w-80 h-28 border border-black mb-12" type="text" placeholder="Enter Subject..."></input>
      <textarea className="w-80 h-28 border border-black mb-12" placeholder="Enter Message..."></textarea>
    </div>
  );

  return (
    <div>
      <Modal
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}