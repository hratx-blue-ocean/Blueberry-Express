import React, { useState } from 'react';
import { MessageSend } from '../Modals/MessageSend.jsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { LargeBtn } from '../Buttons/LargeBtn';
import { RescheduleModal } from '../Modals/RescheduleModal.jsx';
import { ReviewModal } from '../Modals/ReviewModal.jsx';

const useStyles = makeStyles((theme) => ({
  check: {
    '& svg': {
      fontSize: 35,
      color: "white",
      borderLeft: "1px solid white",
      paddingLeft: "10px",
    }
  },
  clear: {
    '& svg': {
      fontSize: 35,
      color: "white",
      paddingLeft: "10px",
    }
  },
}));

export const TeacherAppointment = ({ appointment }) => {
  const[checked, setChecked] = useState(false);
  const[clear, setClear] = useState(false);
  const classes = useStyles();

  return (
    <div className="individual-appointment">
      {clear ? 
          <h1 className="text-3xl">Cleared</h1>
        :
        <>
          <div className="appointment-info">
            <p className="pb-1 text-lg"><span>Student:</span> {appointment.with}</p>
            <p className="pb-1"><span>Lang:</span> {appointment.lang}</p>
            <p className="pb-1">4/5/21 {appointment.start}</p>
          </div>

          <div className="flex items-center appointment-button">
            <MessageSend name={appointment.with}/>
            {checked ?
              <>
                <RescheduleModal name={appointment.with} reschedule={setClear}/>
                {/* <ReviewModal name={appointment.with} reschedule={setClear}/> */}
                <LargeBtn label="Complete" handleClick={setClear} />
              </>
            :
              <>
                <IconButton className={classes.check} onClick={() => {setChecked(true)}}>
                  <CheckIcon />
                </IconButton>
                <IconButton className={classes.clear} onClick={() => {setClear(true)}}>
                  <ClearIcon />
                </IconButton>
              </>
            }
          </div>
        </>
      }

    </div>
  )
}