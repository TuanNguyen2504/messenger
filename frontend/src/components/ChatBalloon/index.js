import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DotIcon from '@material-ui/icons/FiberManualRecord';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import defaultAvt from 'assets/imgs/default-user.png';
import helper from 'helper';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useStyle from './style';

function ChatBalloon(props) {
  const {
    name,
    avtUrl,
    from,
    message,
    time,
    status,
    isOnline,
    viewedList,
  } = props;
  const classes = useStyle();
  const [isShowOptionBalloon, setIsShowOptionBalloon] = useState(false);
  const unreadClass = status === 2 ? 'unread' : '';

  return (
    <div
      className={`${classes.root} flex-center-between cur-pointer pos-rel`}
      onMouseEnter={() => setIsShowOptionBalloon(true)}
      onMouseLeave={() => setIsShowOptionBalloon(false)}>
      <div className={`${classes.avt} pos-rel`}>
        <img src={avtUrl !== '' ? avtUrl : defaultAvt} className="w-100" />
        {isOnline && <div className="online-icon pos-abs" />}
      </div>

      <div className={`${classes.content} flex-grow-1 p-lr-8`}>
        <h4 className={`${classes.name} p-b-4 ${unreadClass}`}>
          {helper.reduceString(name, 24)}
        </h4>
        <div className={`${classes.message} flex-ver-center`}>
          <span className="p-r-4">{from}</span>
          <span className={`short-message ${unreadClass}`}>{message}</span>
          <span className="p-lr-4 dot">·</span>
          <span className="time">{helper.reduceTime(time)}</span>
        </div>
      </div>

      <div className={classes.viewed}>
        {/* received, sended */}
        {status === 1 && <CheckCircleIcon className="icon" />}

        {/* unread */}
        {status === 2 && <DotIcon className="icon-unread" />}

        {/* viewed */}
        <div className="d-flex">
          {status === 3 &&
            viewedList.length < 4 &&
            viewedList.map((item, index) => (
              <img key={index} src={item} className={classes.viewedItem} />
            ))}
        </div>
      </div>

      {/* option balloon */}
      {isShowOptionBalloon && (
        <div className={`${classes.optionBalloon} pos-abs flex-center`}>
          <MoreIcon className="icon" />
        </div>
      )}
    </div>
  );
}

ChatBalloon.propTypes = {
  avtUrl: PropTypes.string,
  from: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.number,
  time: PropTypes.any,
  viewedList: PropTypes.array,
  isOnline: PropTypes.bool,
};

ChatBalloon.defaultProps = {
  avtUrl: '',
  from: 'You:',
  message: 'This is a message',
  name: 'Anonymous',
  status: 0,
  time: new Date(),
  viewedList: [],
  isOnline: false,
};

export default ChatBalloon;
