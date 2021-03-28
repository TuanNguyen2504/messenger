import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    transition: theme.transition.fast,
    borderRadius: 8,
    padding: 0,
    '&:hover, &:active': {
      backgroundColor: theme.color.secondary,
    },

    '&.active': {
      backgroundColor: `${theme.color.twoToneActive} !important`,
    },

    [theme.breakpoints.down('sm')]: {
      padding: '8px 0px',
      backgroundColor: 'transparent !important',
    },
  },

  avt: {
    width: '5rem',
    height: '5rem',
    flexBasis: '5rem',
    borderRadius: 50,

    '& .online-icon': {
      bottom: 0,
      right: 0,
      width: '1.6rem',
      height: '1.6rem',
      backgroundColor: theme.commonColor.online,
      border: `solid 3px ${theme.color.primary}`,
      borderRadius: 50,
    },
  },

  content: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  name: {
    color: theme.color.textPrim,
    fontSize: '1.5rem',
    letterSpacing: '0.75px',
    fontWeight: 400,

    '&.unread': {
      fontWeight: 500,
      filter: 'brightness(1.1)',
    },
  },

  message: {
    color: theme.color.textSec,
    fontSize: '1.2rem',

    '& .dot': {
      fontSize: '1.8rem',
    },

    '& .short-message': {
      maxWidth: '15rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',

      '&.unread': {
        color: theme.color.twoTone,
      },
    },

    '& .time': {
      width: 'max-content',
    },
  },

  viewed: {
    '& .icon': {
      color: theme.color.textSec,
      fontSize: '1.8rem',
    },

    '& .icon-unread': {
      color: theme.color.twoTone,
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  viewedItem: {
    width: '1.8rem',
    borderRadius: 50,
  },

  optionBalloon: {
    top: '50%',
    right: '2.8rem',
    transform: 'translateY(-50%)',

    backgroundColor: theme.color.secondary,
    transition: theme.transition.fast,

    borderRadius: 50,
    border: `solid 2px ${theme.color.textSec}`,
    padding: 4,
    width: '3.6rem',
    height: '3.6rem',

    '&:hover, &:active': {
      filter: theme.isLight ? 'brightness(0.85)' : 'brightness(1.2)',
    },

    '& .icon': {
      fontSize: '2.2rem',
      color: theme.color.textPrim,
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
