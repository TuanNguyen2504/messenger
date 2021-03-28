import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: '1.2rem 0',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  title: {
    color: theme.color.textPrim,
    fontSize: '2.4rem',
  },

  options: {
    '& li': {
      padding: 4,
      backgroundColor: theme.color.secondary,
      transition: theme.transition.fast,
      borderRadius: 50,

      width: '4rem',
      height: '4rem',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',

      '&:hover, &:active': {
        filter: theme.isLight ? 'brightness(0.85)' : 'brightness(1.2)',
      },

      '&:not(:last-child)': {
        marginRight: 12,
      },
    },
  },

  optionIcon: {
    color: theme.color.textPrim,
    fontSize: '2.2rem',
  },
}));
