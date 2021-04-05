import React from 'react';
import InboxIcon from '@material-ui/icons/Inbox';


export const MessageBtn = ({handleClick}) => {
  return (
    <button
    type="button"
    className="h-10 px-5 m-2 text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-800"
    onClick={handleClick}>
      <InboxIcon className="pr-1" fontSize="large"/>
    </button>
  )
}
