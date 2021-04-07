import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { MediumBtn } from '../Buttons/MediumBtn';
import { XLargeBtn } from '../Buttons/XLargeBtn';
import CloseIcon from '@material-ui/icons/Close';

function getModalStyle() {
  const top = 20;
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
    height: 550,
    background: 'rgb(222,222,222)',
    background: 'linear-gradient(140deg, rgb(207, 207, 207) 5%, rgb(211, 211, 211) 20%, rgb(236, 236, 236) 62%, rgba(236,236,236,1) 100%)',
    padding: theme.spacing(2, 4, 3),
  },
}));

export const AvailabilityModal = ({ name }) => {
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
    <div style={modalStyle} className={classes.paper}>
      <button className="absolute right-5" style={{ outline: 'none' }} onClick={handleClose}> <CloseIcon fontSize="large"/></button>
      <h2 className="mb-5 text-2xl underline" id="simple-modal-title">Availability</h2>

      <div className="flex mb-10 change-font">
        <div className="text-center mr-10">
          <div className="p-2 mb-2">
            <p className="text-lg underline mb-1">Monday</p>
            <select className="h-9 rounded-md p-2">
              <option>9:00am - 11:00am</option>
              <option>11:00am - 1:00pm</option>
              <option>1:00pm - 3:00pm</option>
              <option>3:00pm - 5:00pm</option>
            </select>
          </div>
          <div className="p-2 mb-2">
            <p className="text-lg underline mb-1">Tuesday</p>
            <select className="h-9 rounded-md p-2">
              <option>9:00am - 11:00am</option>
              <option>11:00am - 1:00pm</option>
              <option>1:00pm - 3:00pm</option>
              <option>3:00pm - 5:00pm</option>
            </select>
          </div>
          <div className="p-2 mb-2">
            <p className="text-lg underline mb-1">Wednesday</p>
            <select className="h-9 rounded-md p-2">
              <option>9:00am - 11:00am</option>
              <option>11:00am - 1:00pm</option>
              <option>1:00pm - 3:00pm</option>
              <option>3:00pm - 5:00pm</option>
            </select>
          </div>
          <div className="p-2 mb-2">
            <p className="text-lg underline mb-1">Thursday</p>
            <select className="h-9 rounded-md p-2">
              <option>9:00am - 11:00am</option>
              <option>11:00am - 1:00pm</option>
              <option>1:00pm - 3:00pm</option>
              <option>3:00pm - 5:00pm</option>
            </select>
          </div>
        </div>
        <div className="text-center">
          <div className="p-2 mb-2">
            <p className="text-lg underline mb-1">Friday</p>
            <select className="h-9 rounded-md p-2">
              <option>9:00am - 11:00am</option>
              <option>11:00am - 1:00pm</option>
              <option>1:00pm - 3:00pm</option>
              <option>3:00pm - 5:00pm</option>
            </select>
          </div>
          <div className="p-2 mb-2">
            <p className="text-lg underline mb-1">Saturday</p>
            <select className="h-9 rounded-md p-2">
              <option>9:00am - 11:00am</option>
              <option>11:00am - 1:00pm</option>
              <option>1:00pm - 3:00pm</option>
              <option>3:00pm - 5:00pm</option>
            </select>
          </div>
          <div className="p-2 mb-2">
            <p className="text-lg underline mb-1">Sunday</p>
            <select className="h-9 rounded-md p-2">
              <option>9:00am - 11:00am</option>
              <option>11:00am - 1:00pm</option>
              <option>1:00pm - 3:00pm</option>
              <option>3:00pm - 5:00pm</option>
            </select>
          </div>
        </div>
      </div>
      <XLargeBtn className="p-2"  label="Submit" handleClick={handleClose} />
    </div>
  );

  return (
    <div>
      <MediumBtn label="Check Availability" handleClick={handleOpen} />
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