import { createSlice } from '@reduxjs/toolkit';
import constant from 'constant';

function isLightTheme() {
  const theme = localStorage.getItem(constant.THEME_KEY_LS);
  if (!theme) return true;
  return theme === constant.LIGHT_THEME_VALUE_LS ? true : false;
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isLight: isLightTheme() },
  reducers: {
    // Action: set theme
    setTheme(state, action) {
      const isLight = action.payload;
      // Save into local storage
      localStorage.setItem(
        constant.THEME_KEY_LS,
        isLight ? constant.LIGHT_THEME_VALUE_LS : constant.DARK_THEME_VALUE_LS,
      );
      // Update store
      if (typeof isLight === 'boolean') state.isLight = isLight;
      else state.isLight = true; // Default light theme
    },
  },
});

const { reducer, actions } = themeSlice;
export const { setTheme } = actions;
export default reducer;
