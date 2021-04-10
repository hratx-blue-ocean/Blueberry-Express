import React, { useState } from 'react';
import { MessageSend } from '../Modals/MessageSend.jsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { LargeBtn } from '../Buttons/LargeBtn';
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

  // {
  //   "with": {
  //     "id": 1001,
  //     "name": "Kate D",
  //     "email": "katespb98@gmail.com",
  //     "googleKey": "116841410873596401606",
  //     "calendarId": "c477flh6pj1qrip7nc1blg0870@group.calendar.google.com",
  //     "bio": null,
  //     "profileImg": "https://lh3.googleusercontent.com/a-/AOh14GiEiB0R1Mm3_ecpVu5dIq7h1AbEh9hIIC9jWmIZEg=s96-c",
  //     "timezone": 0,
  //     "lastLogin": "2021-04-09",
  //     "zoomLink": null,
  //     "student": true,
  //     "refreshToken": "1//0flMNdne7qhNNCgYIARAAGA8SNwF-L9Ir5O5q3ojAfJIcLIVNagMbwWvpHGpRvFmy3U-cLW7sFTGBf33TijIrLvO75ylUN8VZFJE"
  //   },
  //   "pending": true,
  //   "approved": false,
  //   "start": "2021-04-10T15:00:00Z",
  //   "end": "2021-04-11T17:00:00Z"
  // }
  let appointmentDate = new Date(appointment.start);
  let appointmentStart = new Date(appointment.start);
  let appointmentEnd = new Date(appointment.end);
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