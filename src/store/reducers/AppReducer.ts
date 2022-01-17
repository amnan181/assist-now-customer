import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AppReducerState} from '../../types/UserTypes';

const initialState: AppReducerState = {
  isDarkTheme: false,
};

const AppReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeAppTheme(state, action: PayloadAction<boolean>) {
      state.isDarkTheme = action.payload
    }
  }
})

export const {
  changeAppTheme
} = AppReducer.actions

export default AppReducer.reducer;
