import data from "../../Data/danhSachGhe.json";
import { setSelect } from "../action/ticket";
import {
  ADD_USER,
  SEAT_PICKER,
  SEAT_SELECTED,
  SET_DATA,
  START_SELECT,
} from "../constant/ticket";

const initialState = {
  data: data,
  users: [
    {
      name: "Ha",
      numberOfSeat: 3,
      seats: "A1,A2,A3",
      id: "",
    },
    {
      name: "Khoi",
      numberOfSeat: 2,
      seats: "B2,B3",
      id: "",
    },
  ],
  startSelect: true,
  seatSelected: ['A1','A2','A3','B2','B3'],
};

export let ticketTwoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER: {
      // return { ...state, user: payload };
      // return { ...state, users: [...state.users, payload], user: payload };
      return { ...state, users: [...state.users, payload] };
    }
    case START_SELECT: {
      return { ...state, startSelect: payload };
    }
    case SET_DATA: {
      return { ...state, data: payload };
    }
    case SEAT_PICKER: {
      const newSate = {...state}
      const { id, updateData } = payload;

      //   return (state.users.map((item) =>
      //   item.id === id ? { ...item, seats:updateData } : item,

      // ));
      let buyer = newSate.users.find((item) =>
        item.id === id 
      );
      buyer.seats = updateData;
      state = newSate
      return {
        //cap nhat duoc user, nhung chi 1 nguoi
        //...state, user: buyer

       // ...state, users: [...state.users, buyer],
       ...state
      };
    }
    case SEAT_SELECTED: {
      return { ...state, seatSelected: [...seatSelected,...payload] };
    }
    default:
      return state;
  }
};
