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
    backgroundColor: '#2a2a72',
    color: 'white',
    padding: theme.spacing(2, 4, 3),
  },
}));

export const AvailabilityModal = ({ name }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [messageSubject, setSubject] = useState('');
  const [messageBody, setBody] = useState('');

  let dummyAvailability = [
    {
      start: 'Wed, 1:00pm',
      end: 'Wed, 3:00pm'
    },
    {
      start: 'Thurs, 9:00am',
      end: 'Thurs, 11:00am'
    },
    {
      start: 'Fri, 11:00am',
      end: 'Fri, 1:00pm'
    },
    {
      start: 'Mon, 11:00am',
      end: 'Mon, 1:00pm'
    }
  ]

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <button className="absolute right-5" style={{ outline: 'none' }} onClick={handleClose}> <CloseIcon fontSize="large" /></button>
      <h2 className="mb-6 text-2xl underline" id="simple-modal-title">Scheduling</h2>
      <h2 className="underline text-lg mb-1">Teacher's Current Schedule</h2>
      {dummyAvailability.map((date, index) => {
        return <div key={index} className="p-1">
          <span>{date.start}</span> - <span>{date.end}</span>
        </div>
      })}
      <h2 className="mt-10 text-lg">(select time frame not listed above)</h2>
      <div className="flex justify-center text-center change-font mb-10">
        <div className="p-2 mb-2">
          <p className="text-lg underline mb-1">Day</p>
          <select className="h-9 w-48 rounded-md p-2 text-black">
            <option>Select One...</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </div>
        <div className="p-2 mb-2">
          <p className="text-lg underline mb-1">Hours</p>
          <select className="h-9 w-48 rounded-md p-2 text-black">
            <option>Select One...</option>
            <option>9:00am - 11:00am</option>
            <option>11:00am - 1:00pm</option>
            <option>1:00pm - 3:00pm</option>
            <option>3:00pm - 5:00pm</option>
          </select>
        </div>
      </div>
      <XLargeBtn className="p-2" label="Submit" handleClick={handleClose} />
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