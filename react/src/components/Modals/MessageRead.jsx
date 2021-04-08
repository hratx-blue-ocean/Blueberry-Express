import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { TeacherMessage } from '../Shared/TeacherMessage';

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
        alignItems: 'left',
        width: 500,
        backgroundColor: "#2a2a72",
        color: "white",
        padding: theme.spacing(2, 4, 3),
    },
}));

export const MessageRead = ({ message }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      console.log('clicked')
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="flex justify-between pb-4 border-b">
        <h2 className="text-2xl text-bold">{message.from}</h2>
        <h3 className="text-sm italic">{message.created_at}</h3>
      </div>
      <p className="pt-4">{message.subject}</p>
      <div className="pt-7 flex justify-end">
        <button className="border rounded-full" style={{ outline: 'none' }} onClick={handleClose}> <CloseIcon fontSize="large" /></button>
      </div>
    </div>
  );

  return (
    <div>
      <TeacherMessage message={message} handleClick={handleOpen} />
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