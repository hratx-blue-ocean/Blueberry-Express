import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  1: 'Terrible',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

// import {HoverRating} from './Shared/Star';
export const HoverRating = () => {
  const [value, setValue] = React.useState(null);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root} id='hover-rating' value={value}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
    </div>
  );
}

// import {StaticRating} from './Shared/Star';
export const StaticRating = (props) => {
  let value = props.rating;

  return (
    <div value={value}>
      <Rating
        name="read-only"
        value={value} readOnly
        precision={1}
        size={props.size || 'medium'}
      />
    </div>
  );
}
