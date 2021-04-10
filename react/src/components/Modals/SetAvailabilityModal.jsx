import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { SettingsBtn } from '../Buttons/SettingsBtn';
import { SmallBtn } from '../Buttons/SmallBtn';
import { MattsBtn } from '../Buttons/MattsBtn';
import CloseIcon from '@material-ui/icons/Close';
import { setBusySchedule } from '../../api';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '10%',
    left: '24%',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    borderRadius: 20,
    alignItems: 'center',
    width: 1000,
    height: 725,
    backgroundColor: '#2a2a72',
    color: 'white',
    padding: theme.spacing(2, 4, 3),
  },
}));

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dates = [];
const day = new Date();
weekDays.forEach(() => {
  dates[day.getDay()] = new Date(day);
  day.setDate(day.getDate() + 1);
})

export const SetAvailabilityModal = ({ name, id }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [numBlocks, setNumBlocks] = useState(weekDays.map(() => 1));


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addBlock = (i) => {
    const newBlocks = [...numBlocks];
    newBlocks[i]++;
    setNumBlocks(newBlocks);
  }

  const removeBlock = (i) => {
    const newBlocks = [...numBlocks];
    if (numBlocks[i] > 1) {
      newBlocks[i]--;
      setNumBlocks(newBlocks);
    }
  }

  const handleSubmit = async () => {
    const busyTimes = {};
    weekDays.forEach((day, i) => {
      busyTimes[day.toLowerCase()] = [];
      for (let j = 0; j < numBlocks[i]; j++) {
        let startTime = document.getElementById(`${day}-${j}-start`).value;
        let endTime = document.getElementById(`${day}-${j}-end`).value;
        if (startTime && endTime) {
          let busy = {}
          dates[i].setHours(...startTime.split(':').map(Number));
          busy.start = dates[i].toISOString();
          dates[i].setHours(...endTime.split(':').map(Number));
          busy.end = dates[i].toISOString();
          busyTimes[day.toLowerCase()].push(busy);
        }
      }
    })
    await setBusySchedule(busyTimes);
    handleClose();
  }

  const body = (
    <div className={classes.paper}>
      <div className="text-center">
        <button className="absolute right-5" style={{ outline: 'none' }} onClick={handleClose}> <CloseIcon fontSize="large" /></button>
        <h2 className="mb-6 text-2xl underline" id="simple-modal-title">Select time blocks where you <b>AREN'T</b> available</h2>
        <div className="make-scroll flex flex-wrap justify-center">
          {weekDays.map((day, index) => {
            const timeBlocks = [];
            for (let i = 0; i < numBlocks[index]; i++) {
              timeBlocks.push(
                <div key={i} className="flex p-2 mb-2 text-center">
                  <div className="mr-10">
                    <p className="text-lg underline mb-1">From:</p>
                    <input className="text-black p-1 rounded-md" type="time" id={day + '-' + i + '-start'} />
                  </div>
                  <div>
                    <p className="text-lg underline mb-1">To:</p>
                    <input className="text-black p-1 rounded-md" type="time" id={day + '-' + i + '-end'} />
                  </div>
                </div>
              );
            }
            return (
              <div key={day}>
                <div className="flex flex-col items-center border border-gray shadow-xl p-1 rounded-md m-4">
                  <h2>{day}:</h2>
                  {timeBlocks}
                  <div>
                    <SmallBtn label="-" handleClick={() => removeBlock(index)} />
                    <SmallBtn label="+" handleClick={() => addBlock(index)} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <MattsBtn className="p-2" label="Submit" handleClick={handleSubmit} />
      </div>
    </div>
  );

  return (
    <div>
      <SettingsBtn label="Set Availability" handleClick={handleOpen} />
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