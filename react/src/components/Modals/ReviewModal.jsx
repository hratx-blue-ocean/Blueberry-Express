import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { LargeBtn } from '../Buttons/LargeBtn';
import { RescheduleBtn } from '../Buttons/RescheduleBtn';
import CloseIcon from '@material-ui/icons/Close';
import {HoverRating} from '../Shared/Star'

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
    width: 500,
    height: 450,
    backgroundColor: '#2a2a72',
    color: 'white',
    padding: theme.spacing(2, 4, 3),
  },
}));

export const ReviewModal = ({ name, reschedule }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [messageSubject, setSubject] = useState('');
  const [messageBody, setBody] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="change-font">
      <div style={modalStyle} className={classes.paper}>
        <button className="absolute right-5" style={{ outline: 'none' }} onClick={handleClose}> <CloseIcon fontSize="large" /></button>
        <h2 className="text-2xl underline" id="simple-modal-title">Review Teacher</h2>
        <p className="text-sm mr-4 mb-10">Please leave a review! </p>
        <div className="pb-4">
            <h1>Leave a star rating: </h1>
            <HoverRating />
        </div>
        <div className="">
            <h1>Write a review: </h1>
            <textarea className="w-80 h-28 p-2 rounded-md border border-black mb-10" placeholder="Enter Review Message..." onChange={(e) => { setBody(e.target.value) }}></textarea>
            <LargeBtn label="Submit" handleClick={handleClose}/>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <LargeBtn label="Review" handleClick={handleOpen} />
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