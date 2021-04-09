import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { XLargeBtn } from '../Buttons/XLargeBtn';
import CloseIcon from '@material-ui/icons/Close';
import { ContinueBtn } from '../Buttons/ContinueBtn';


function getModalStyle() {
  const top = 25;
  const left = 35;

  return {
    top: `${top}%`,
    left: `${left}%`,
    margin: 'auto'
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
    alignItems: 'center',
    width: 500,
    height: 450,
    backgroundColor: '#2a2a72',
    color: 'white',
    padding: theme.spacing(2, 4, 3),
  },
}));

export const TypeConfirmation = ({ action, type, proceed }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [messageSubject, setSubject] = useState('');
  const [messageBody, setBody] = useState('');

  useEffect(() => {
    if (proceed === true) {
      setOpen(false);
    }
  }, [proceed])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="change-font message-send-modal">
      <div style={modalStyle} className={classes.paper}>
        <button style={{ outline: 'none' }} onClick={handleClose}> <CloseIcon fontSize="large" /></button>
        <p>You have selected to join as a <u>{type}</u>, <b>this can't be undone</b>.</p>
        <p>Would you like to proceed?</p>
        <div className="relative bottom-0 right-0">
          <ContinueBtn handleClick={action} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <XLargeBtn handleClick={handleOpen} label="Continue" />
      <Modal
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        open={open}
        onClose={handleClose}
      >
        <div style={{ outline: 'none' }}>
          {body}
        </div>
      </Modal>
    </div>
  );
}