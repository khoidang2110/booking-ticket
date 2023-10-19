import { ADD_USER, SEAT_PICKER, SEAT_SELECTED, SET_DATA, START_SELECT} from "../constant/ticket";

export const setUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const setSelect = (startSelect) => ({
  type: START_SELECT,
  payload: startSelect,
});
export const setData = (data) => ({
  type: SET_DATA,
  payload:data,
});
export const seatPicker = (id,updateData) => ({
  type: SEAT_PICKER,
  payload:{
    id,updateData,
  }
});
export const setSeatSelected = (seatSelected) => ({
  type: SEAT_SELECTED,
  payload:
    seatSelected,
  
});

