import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    overflow: 'scroll',

    '&::-webkit-scrollbar': {
      width: 4,
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      backgroundColor: theme.isLight ? '#bcbdbe' : '#6b6c6e',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
  },
  chatBalloonWrap: {},
}));
