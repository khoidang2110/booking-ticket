import data from "../../danhSachGhe.json";
import {
  ADD_USER,
  SEAT_PICKER,
  SEAT_SELECTED,
  SET_DATA,
  START_SELECT,
} from "../constant/ticket";

const initialState = {
  data: data,
  user: {
    name: "",
    numberOfSeat: 0,
    seats: "",
    id: "",
  },
  users: [
    {
      name: "",
      numberOfSeat: 0,
      seats: "",
      id: "",
    },
  ],
  startSelect: true,
  seatSelected:[]
};

export let ticketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER: {
      // return { ...state, user: payload };
      return { ...state, users: [...state.users, payload], user: payload };
    }
    case START_SELECT: {
      return { ...state, startSelect: payload };
    }
    case SET_DATA: {
      return { ...state, data: payload };
    }
    case SEAT_PICKER: {
      const { id, updateData } = payload;

      //   return (state.users.map((item) =>
      //   item.id === id ? { ...item, seats:updateData } : item,

      // ));
      let buyer = state.users.map((item) =>
        item.id === id ? { ...item, seats: updateData } : item
      );
      return {
        ...state, user: buyer
       // ...state, users: [...state.users, buyer]
        //...state, buyer
       
      };
    }
    case SEAT_SELECTED: {
      return { ...state, seatSelected: payload };
    }
    default:
      return state;
  }
};
