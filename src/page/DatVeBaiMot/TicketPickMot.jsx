import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { bookSeatAction } from "../../redux/action/datvebaimot";
import seatData from "../../Data/danhSachGhe.json";

export default function TicketPickMot() {

  let danhSachGheDaDat = useSelector(
    (state) => state.ticketOneReducer.danhSachGheDaDat
   
  );
 
  const dispatch = useDispatch();

  const renderList = seatData.map((row,index) => {
    if (row.hang == "") {
      return (
        // render 1 2 3 4...
       
         <tr key={index}>
          <td>{row.hang}</td>
          {row.danhSachGhe.map((item,index) => {
            return <td key={index}>{item.soGhe}</td>;
          })}
        </tr> 
      );
    }
    // render phan con lai A1 A2 A3...
    return (
      <tr>
        <td>{row.hang}</td>

        {row.danhSachGhe.map((item,index) => {
          let checked = false;
          
          let indexBookingSeat = danhSachGheDaDat.findIndex(
            (bookSeat) => bookSeat.soGhe === item.soGhe
          );

          if (indexBookingSeat !== -1) {
            checked = true;
          }
          return (
            <td key={index}>
          <input
                type="checkbox"
            
                defaultValue={item.soGhe}
                disabled={item.daDat}
                defaultChecked={checked}
                onChange={() => {
                  console.log("item clicked", item);
                  dispatch(bookSeatAction(item));
                
                }}
              ></input>
            </td>
          );
        })}
      </tr>
    );
  });
  return (
    <div>
      <div className="seatStructure txt-center">
        <div className="screen">
          <h2 className="wthree">Màn Hình</h2>
        </div>
        <table id="seatsBlock">
        <tbody>{renderList}</tbody>
        </table>
        <br />
      </div>
    </div>
  );
}
