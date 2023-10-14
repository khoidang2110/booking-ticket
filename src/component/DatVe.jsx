import React from "react";
import "./DatVe.css";
import UserInfo from "./UserInfo";
import TotalBooking from "./TotalBooking";
import TicketPick from "./TicketPick";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/action/ticket";
export default function DatVe() {
  let data = useSelector((state) => state.data);
  let user = useSelector((state)=> state.user)
  console.log("lay data ve, datve", data);
 // const dispatch = useDispatch();

  // const updateState = (toggleValue) => {
  //   const newState = data.map((row) => {
  //     if (row.hang !== "") {
  //       return row.danhSachGhe.map((item) => {
  //         if (Object.keys(item).findIndex((e) => e == "daDat")) {
  //           return { ...item, daDat: toggleValue };
  //         }
  //         return item;
  //       });
  //     }
  //     return row;
  //   });
  //   console.log("newsate", newState);

  //   dispatch(setData(newState));
  // };
  // updateState(true);
  return (
    <div className="bgMovie ">
      <h1>Movie Seat Selection</h1>
      <div className="container">
        <div className="w3ls-reg">
          <UserInfo  />
          <TicketPick data={data}/>
          <TotalBooking user={user}/>
        </div>
      </div>
    </div>
  );
}
