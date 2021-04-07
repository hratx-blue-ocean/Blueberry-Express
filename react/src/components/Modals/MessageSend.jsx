import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { MessageBtn } from '../Buttons/MessageBtn';
import { MediumBtn } from '../Buttons/MediumBtn';

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
    background: 'rgb(222,222,222)',
    background: 'linear-gradient(140deg, rgb(207, 207, 207) 5%, rgb(211, 211, 211) 20%, rgb(236, 236, 236) 62%, rgba(236,236,236,1) 100%)',
    padding: theme.spacing(2, 4, 3),
  },
}));

export const MessageSend = ({ name }) => {
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
      <h2 className="mb-10 text-2xl underline" id="simple-modal-title">Message</h2>
      <div className="flex items-center justify-center mb-8 mr-2">
        <p className="text-xl mr-4">To: </p>
        <input className="w-30 rounded-md p-2 h-8 text-lg bg-white border-black border" type="text" value={name} disabled></input>
      </div>
      <input className="w-80 h-12 p-2 rounded-md border border-black mb-10" type="text" placeholder="Enter Subject..."
        onChange={(e) => { setSubject(e.target.value) }}></input>
      <textarea className="w-80 h-28 p-2 rounded-md border border-black mb-10" placeholder="Enter Message..."
        onChange={(e) => { setBody(e.target.value) }}></textarea>
      <MediumBtn label="Send" handleClick={handleClose} />
    </div>
  );

  return (
    <div>
      <MessageBtn handleClick={handleOpen} />
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