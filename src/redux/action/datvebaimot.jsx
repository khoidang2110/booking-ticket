import { DAT_VE, HUY_VE } from "../constant/datvebaimot";

export const bookSeatAction = (seat) => {
  return {
    type: DAT_VE,
    payload:seat,
  };
};

export const cancelSeatAction = (seatNumber) => {
  return {
    type: HUY_VE,
    payload:seatNumber,
  };
};
