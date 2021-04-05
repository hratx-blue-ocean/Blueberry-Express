import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


export const MessageBtn = ({handleClick}) => {
  return (
    <button
    type="button"
    className=" p-2 text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-800"
    onClick={handleClick}>
      <MailOutlineIcon fontSize="large"/>
    </button>
  )
}
