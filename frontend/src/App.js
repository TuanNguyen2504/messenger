import { Button } from '@material-ui/core';
import Header from 'components/Header';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
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
    <Router>
      <div className={`${classes.root} App h-100 w-100`}>
        <Header />
        <Button
          onClick={onClick}
          className="m-20 trans-center"
          variant="contained"
          color="primary">
          Change Theme
        </Button>
      </div>
    </Router>
  );
}

export default App;
