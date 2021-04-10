import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { LargeBtn } from '../Buttons/LargeBtn';
import { SmallBtn } from '../Buttons/SmallBtn';
import { XLargeBtn } from '../Buttons/XLargeBtn';
import CloseIcon from '@material-ui/icons/Close';
import { setBusySchedule } from '../../api';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    display: 'block',
    top: '10vh',
    left: '50%',
    height: '80vh',
  },
  inner: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'auto',
    marginLeft: '-50%',
    backgroundColor: '#2a2a72',
    color: 'white',
    padding: theme.spacing(2, 4, 3),
    borderRadius: 20,
    width: 500,
    height: '80vh',
  }
}));

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dates = [];
const day = new Date();
weekDays.forEach(() => {
  dates[day.getDay()] = new Date(day);
  day.setDate(day.getDate() + 1);
})
console.log(dates);

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

  const handleSubmit = async () => {
    const busyTimes = {};
    weekDays.forEach((day, i) => {
      busyTimes[day.toLowerCase()] = [];
      for(let j = 0; j < numBlocks[i]; j++) {
        let startTime = document.getElementById(`${day}-${j}-start`).value;
        let endTime = document.getElementById(`${day}-${j}-end`).value;
        if(startTime && endTime) {
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
      <div className={classes.inner}>
      <button className="absolute right-5" style={{ outline: 'none' }} onClick={handleClose}> <CloseIcon fontSize="large" /></button>
      <h2 className="mb-6 text-2xl underline" id="simple-modal-title">Select time blocks where you <b>AREN'T</b> available</h2>
      {weekDays.map((day, index) => {
        const timeBlocks = [];
        for(let i = 0; i < numBlocks[index]; i++) {
          timeBlocks.push(
            <div className="flex p-2 mb-8 text-center">
              <div className="mr-10">
                <p className="text-lg underline mb-1">From:</p>
                <input className="text-black p-1 rounded-md" type="time" id={day + '-' + i + '-start'} />
              </div>
              <div>
                <p className="text-lg underline mb-1">To:</p>
                <input className="text-black p-1 rounded-md" type="time" id={day + '-' + i + '-end'}/>
              </div>
            </div>
          );
        }
        return (
          <div>
            <h2>{day}:</h2>
            {timeBlocks}
            <SmallBtn label="+" handleClick={() => addBlock(index)} />
          </div>
        );
      })}
      <XLargeBtn className="p-2" label="Submit" handleClick={handleSubmit} />
      </div>
    </div>
  );

  return (
    <div>
      <LargeBtn label="Set Availability" handleClick={handleOpen} />
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