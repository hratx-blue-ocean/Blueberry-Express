import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { MediumBtn } from '../Buttons/MediumBtn';
import { MattsBtn } from '../Buttons/MattsBtn';
import CloseIcon from '@material-ui/icons/Close';
import { sendAppointmentRequest } from '../../api';

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
    height: 365,
    backgroundColor: '#2a2a72',
    color: 'white',
    padding: theme.spacing(2, 4, 3),
  },
}));

export const AvailabilityModal = ({ name, id }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [messageSubject, setSubject] = useState('');
  const [messageBody, setBody] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');



  const sendNewAppointment = async () => {
    let start = new Date(`${startDate} ${startTime}`);
    let startIso = start.toISOString();
    let end = new Date(`${startDate} ${endTime}`);
    let endIso = end.toISOString();

    await sendAppointmentRequest(id, startIso, endIso);
    handleClose();
  }

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

      <div className="p-2 mb-3 text-center">
        <p className="text-lg underline mb-1">Select Date:</p>
        <input onChange={(e) => { setStartDate(e.target.value) }} className="text-black p-1 rounded-md" type="date" />
      </div>
      <div className="flex p-2 mb-8 text-center">
        <div className="mr-10">
          <p className="text-lg underline mb-1">Start Time:</p>
          <input onChange={(e) => { setStartTime(e.target.value) }} className="text-black p-1 rounded-md" type="time" />
        </div>
        <div>
          <p className="text-lg underline mb-1">End Time:</p>
          <input onChange={(e) => { setEndTime(e.target.value) }} className="text-black p-1 rounded-md" type="time" />
        </div>
      </div>
      <MattsBtn className="p-2" label="Submit" handleClick={sendNewAppointment} />
    </div>
  );

  return (
    <div>
      <MediumBtn label="Request Appointment" handleClick={handleOpen} />
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