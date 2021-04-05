import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-blue-600 text-white">
      <div className="ml-5">
      <TwitterIcon className="pr-1" fontSize="large"/>
      <FacebookIcon className="pr-1" fontSize="large"/>
      <InstagramIcon className="pr-1" fontSize="large"/>
      </div>
      <div>
        <p className="tracking-wide text-lg">Copyright &#169;2021 Blueberry Express Inc. All Rights Reserved</p>
      </div>
      <div>
        <a className="pr-5 text-lg" href="#">Contact Us</a>
        <a className="mr-10 text-lg" href="#">About Us</a>
      </div>
    </div>
  )
}