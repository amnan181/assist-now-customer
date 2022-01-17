import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserModel, UserReducerState} from '../../types/UserTypes';

const initialState: UserReducerState = {
  user: null,
};

const UserReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserModel | null>) {
      state.user = action.payload;
    },
  },
});

export const {setUser} = UserReducer.actions;

export default UserReducer.reducer;
