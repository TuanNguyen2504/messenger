import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiBadge-badge': {
      color: '#fff',
      backgroundColor: theme.commonColor.badge,
      fontSize: '1.2rem',
    },

    boxShadow: theme.isLight ? '0 1px 4px 1px rgba(0,0,0,0.08)' : 'none',
    borderBottom: !theme.isLight
      ? `solid 1px ${theme.color.secondary}`
      : 'none',
  },

  // search bar
  logo: {
    width: 40,
    height: 40,
    animation: '$slideRight .1s ease-in forwards',

    [theme.breakpoints.down('sm')]: {
      width: 32,
      height: 32,
    },
  },

  arrowIcon: {
    color: theme.color.textSec,
    fontSize: '2.4em',
    boxSizing: 'content-box',
    padding: 8,
    '&:hover, &:active': {
      backgroundColor: theme.color.secondary,
      borderRadius: '50%',
      transition: theme.transition.fast,
    },
    animation: '$slideLeft .1s ease-in forwards',
  },

  searchBar: {
    flexBasis: '38rem',
    [theme.breakpoints.down('md')]: {
      flexBasis: '18.5%',
    },

    [theme.breakpoints.down(860)]: {
      flexBasis: '40rem',
    },
  },

  search: {
    backgroundColor: theme.color.secondary,
    borderRadius: 25,
    minHeight: 38,
    height: '90%',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },

    [theme.breakpoints.down(860)]: {
      display: 'flex',
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  searchIcon: {
    color: theme.color.textSec,
    fontSize: '2.4rem',
  },

  searchInput: {
    '& input': {
      padding: 0,
      fontSize: '1.5rem',
      color: theme.color.textPrim,
      '&::placeholder': {
        fontWeight: 'lighter',
        color: theme.color.textSec,
        opacity: 1,
      },
    },
  },

  // search for small device
  wrapSearchIcon: {
    display: 'none',

    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '3.8rem',
      height: '3.8rem',
      boxSizing: 'content-box',
      cursor: 'pointer',

      borderRadius: 50,
      backgroundColor: theme.color.secondary,
      transition: theme.transitions.fast,

      '&:hover, &:active': {
        filter: theme.isLight ? 'brightness(0.85)' : 'brightness(1.2)',
      },
    },

    [theme.breakpoints.down(860)]: {
      display: 'none',
    },

    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },

  searchSm: {
    backgroundColor: theme.color.secondary,
    borderRadius: 25,
    width: '25rem',
    zIndex: 2,
    top: 0,
    left: 0,

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

    [theme.breakpoints.up(860)]: {
      display: 'flex',
    },

    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },

    '& input': {
      padding: '1.1rem 2.4rem',
      paddingLeft: '0',
    },
  },

  // navigation
  nav: {
    padding: '0px 32px',

    // wrap icon
    '& li': {
      cursor: 'pointer',
      padding: '10px 48px',
      margin: '0 3px',
      transition: theme.transition.fast,
      borderRadius: 8,

      '&:hover, &:active': {
        backgroundColor: theme.color.secondary,
      },

      '&.active': {
        borderBottom: `solid 3px ${theme.color.twoTone}`,
        borderRadius: 0,
        '&:hover, &:active': {
          backgroundColor: 'transparent',
        },
        '& .nav-item': {
          color: theme.color.twoTone,
        },
      },
    },

    // icon
    '& li .nav-item': {
      color: theme.color.textSec,
      fontSize: '2.8rem',
    },

    [theme.breakpoints.down('lg')]: {
      '& li': {
        padding: '10px 32px',
      },
      padding: '0 12px',
    },

    [theme.breakpoints.down(860)]: {
      display: 'none',
    },
  },

  // user information
  information: {
    flexBasis: '18.5%',
  },

  user: {
    '& img': {
      width: '2.8rem',
      height: '2.8rem',
      borderRadius: 50,
    },

    '& h3': {
      color: theme.color.textPrim,
      fontSize: '1.4rem',
    },

    cursor: 'pointer',
    width: 'max-content',
    padding: '4px 8px',
    borderRadius: 50,
    transition: theme.transition.fast,

    '&:hover, &:active': {
      backgroundColor: theme.color.secondary,
    },

    [theme.breakpoints.down('sm')]: {
      '& h3': {
        display: 'none',
      },
      '& img': {
        width: '3.6rem',
        height: '3.6rem',
        marginRight: '6px !important',
      },
      padding: 0,
      backgroundColor: 'transparent !important',
    },
  },

  control: {
    '& li': {
      backgroundColor: theme.color.secondary,
      padding: 8,
      margin: '0 6px',
      borderRadius: 50,

      height: '3.8rem',
      width: '3.8rem',

      transition: theme.transitions.fast,
      cursor: 'pointer',

      '&.active': {
        backgroundColor: theme.color.twoToneActive,
        '& .icon': {
          color: theme.color.twoTone,
        },
      },

      '&:hover, &:active': {
        filter: theme.isLight ? 'brightness(0.85)' : 'brightness(1.2)',
      },

      // menu sidebar for small device
      '&.menu-bar': {
        display: 'none',
        [theme.breakpoints.down(860)]: {
          display: 'block',
        },
      },
    },

    '& .icon': {
      fontSize: '2.2rem',
      color: theme.color.textPrim,
    },
  },

  // animation
  '@keyframes slideLeft': {
    from: {
      transform: 'translateX(15px)',
      opacity: 0.5,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  },

  '@keyframes slideRight': {
    from: {
      transform: 'translateX(-15px)',
      opacity: 0.5,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  },
}));
