import React, { useState } from "react";
import "./style.css";



import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/action/ticket";

import TicketPickMot from "./TicketPickMot";
import TotalBookingMot from "./TotalBookingMot";

export default function DatVeBaiMot() {
const [keyNumber,setKeyNumber]=useState(0);
 

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
  console.log("forceupdate")
  return (
    
    <div className="bgMovie bookingMovie">
      <h1 className="mt-0 bookingMovie">Đặt Vé Xem Phim CyberLearn.vn</h1>
      <div className="container">
        <div className="row">
          <div className="col-7">
          <TicketPickMot keyNumber={keyNumber}/>
          </div>
          <div className="col-5">
          <TotalBookingMot setKeyNumber={setKeyNumber} />
          </div>
        
         
        </div>
      </div>
    </div>
  );
}
