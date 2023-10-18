import { DAT_VE, HUY_VE } from "../constant/datvebaimot";

const initialState = {
  danhSachGheDaDat: [
    { soGhe: "A1", gia: 0 },
    { soGhe: "A2", gia: 0 },
 
  ],
};

export let ticketOneReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DAT_VE: {
    let CapNhatDanhSachGhe = [...state.danhSachGheDaDat];
      let bookingIndex = state.danhSachGheDaDat.findIndex(
        (seat) => seat.soGhe === payload.soGhe
      );

      if (bookingIndex !== -1) {
        CapNhatDanhSachGhe.splice(bookingIndex, 1);
      } else {
        console.log("chay push")
        CapNhatDanhSachGhe.push(payload);
      }
      state.danhSachGheDaDat = CapNhatDanhSachGhe;
     return { ...state };
    }
    // case DAT_VE: {
    //   const itemAdd = payload;
    //   const updateCartItems = state.danhSachGheDaDat.filter(
    //     (item) => item.soGhe !== itemAdd
    //   );
    // }
    //   case HUY_VE: {
    //     let CapNhatDanhSachGhe = [...state.danhSachGheDaDat];
    //     let bookingIndex = state.danhSachGheDaDat.findIndex(
    //       (seat) => seat.soGhe === payload
    //     );

    //     if (bookingIndex !== -1) {
    //       CapNhatDanhSachGhe.splice(bookingIndex, 1);
    //     }
    //     state.danhSachGheDaDat = CapNhatDanhSachGhe;
    //    return { ...state };
    //   }


    case HUY_VE: {
      
      const itemToDelete = payload;
      const updateCartItems = state.danhSachGheDaDat.filter(
        (item) => item.soGhe !== itemToDelete
      );

      return { ...state, danhSachGheDaDat: updateCartItems };
    }




    default:
      return state;
  }
};
