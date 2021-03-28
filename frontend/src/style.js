import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.color.primary,
    overflow: 'hidden',
  },

  navWrapper: {
    flexBasis: '40rem',
    boxShadow: theme.isLight ? '1px 8px 4px 1px rgba(0,0,0,0.08)' : 'none',
    borderRight: !theme.isLight ? `solid 1px ${theme.color.secondary}` : 'none',

    [theme.breakpoints.down('sm')]: {
      flexBasis: '8rem',
      width: '8rem',
    },
  },
}));
