import React, { useState } from 'react';
import { MessageSend } from '../Modals/MessageSend.jsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { CompleteBtn } from '../Buttons/CompleteBtn';
import { RescheduleModal } from '../Modals/RescheduleModal.jsx';
import { updateAppointmentRequest, deleteAppointment } from '../../api';
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
  let appointmentDate = new Date(appointment.start);
  let appointmentStart = new Date(appointment.start);
  let appointmentEnd = new Date(appointment.end);

  const answerAppointment = async (answer) => {
    await updateAppointmentRequest(appointment.id, answer);

    if (answer) {
      setChecked(true);
    } else {
      setClear(true)
    }    
  }

  return (
    <div className="individual-appointment">
      {clear ? 
          <h1 className="text-3xl">Cleared</h1>
        :
        <>
          <div className="appointment-info text-left">
            <p className="pb-1 text-lg"><span>Teacher:</span> {appointment.with.name}</p>
            <p className="pb-1">Date: {appointmentDate.toLocaleDateString()}</p>
            <p className="pb-1">Start: {appointmentStart.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
            <p className="pb-1 mb-2">End: {appointmentEnd.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
          </div>

          <div className="flex items-center appointment-button">
            <MessageSend name={appointment.with.name} id={appointment.with.id}/>
            {checked ?
              <>
                <RescheduleModal name={appointment.with.name} reschedule={setClear} id={appointment.with.id}/>
                {/* <ReviewModal name={appointment.with} reschedule={setClear}/> */}
                <CompleteBtn label="Complete" handleClick={setClear} appointmentId={appointment.with.id}/>
              </>
            :
              <>
                <IconButton className={classes.check} onClick={() => {answerAppointment(true)}}>
                  <CheckIcon />
                </IconButton>
                <IconButton className={classes.clear} onClick={() => {answerAppointment(false)}}>
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