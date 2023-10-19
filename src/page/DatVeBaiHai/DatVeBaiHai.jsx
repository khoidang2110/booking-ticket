import React, { useState } from "react";
import "./style.css";
import UserInfo from "./UserInfo";
import TotalBooking from "./TotalBookingHai";
import TicketPick from "./TicketPickHai";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/action/ticket";
export default function DatVeBaiHai() {
  let data = useSelector((state) => state.ticketTwoReducer.data);
  let users = useSelector((state)=> state.ticketTwoReducer.users)
  console.log("lay data ve, datve", data);
  const [keyNumber,setKeyNumber]=useState(11)
  console.log("keyNumber",keyNumber)
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
      <h1 className="mt-0">Movie Seat Selection</h1>
      <div className="container">
        <div className="w3ls-reg">
          <UserInfo  />
          <TicketPick data={data} setKeyNumber={setKeyNumber} keyNumber={keyNumber}/>
          <TotalBooking users={users} keyNumber={keyNumber}/>
        </div>
      </div>
    </div>
  );
}
