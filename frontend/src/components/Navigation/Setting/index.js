import CreateIcon from '@material-ui/icons/Create';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import React from 'react';
import useStyle from './style';

function NavigationSetting() {
  const classes = useStyle();

  return (
    <div className={`${classes.root} flex-ver-center justify-content-between`}>
      <b className={classes.title}>Chat</b>
      <ul className={`${classes.options} d-flex`}>
        <li>
          <CreateIcon className={classes.optionIcon} />
        </li>
        <li>
          <VideoCallIcon className={classes.optionIcon} />
        </li>
        <li>
          <MoreIcon className={classes.optionIcon} />
        </li>
      </ul>
    </div>
  );
}

export default NavigationSetting;
