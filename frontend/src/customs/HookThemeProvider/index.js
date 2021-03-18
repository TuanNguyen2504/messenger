import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import theme from 'theme';

function HookThemeProvider(props) {
  const { isLight } = useSelector((state) => state.theme);

  const themes = createMuiTheme(isLight ? theme.lightTheme : theme.darkTheme);
  return <ThemeProvider theme={themes}>{props.children}</ThemeProvider>;
}

HookThemeProvider.propTypes = {
  children: PropTypes.any,
};

export default HookThemeProvider;
