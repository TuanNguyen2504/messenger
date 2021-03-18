import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/slices/themeSlice';
import useStyle from './style';

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);

  const onClick = () => {
    dispatch(setTheme(!isLight));
  };

  return (
    <div className={`${classes.root} App h-100 w-100`}>
      <Button
        onClick={onClick}
        className="m-20"
        variant="contained"
        color="primary">
        Change Theme
      </Button>
    </div>
  );
}

export default App;
