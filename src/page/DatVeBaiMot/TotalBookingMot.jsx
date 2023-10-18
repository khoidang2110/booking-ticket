import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelSeatAction } from "../../redux/action/datvebaimot";

export default function TotalBookingMot() {
  let danhSachGheDaDat = useSelector(
    (state) => state.ticketOneReducer.danhSachGheDaDat
  );

  let dispatch = useDispatch();
  return (
    <div>
      <div className="displayerBoxes ">
        <h3 className="text-white">DANH SÁCH GHẾ BẠN CHỌN</h3>
        <ul className="seat_w3ls ">
          <li className="smallBox orangeBox">Ghế đã đặt</li>
          <br />
          <li className="smallBox greenBox ">Ghế đang chọn</li>
          <br />
          <li className="smallBox emptyBox ">Ghế chưa đặt</li>
        </ul>
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">Số ghế</th>
              <th scope="col">Giá</th>
              <th scope="col">Huỷ</th>
            </tr>
          </thead>
          <tbody>
            {danhSachGheDaDat.map((item,index) => {
              return (
                <tr key={index}>
                  <td className="text-warning">{item.soGhe}</td>
                  <td className="text-warning">{item.gia}</td>
                  <td>
                    <button onClick={()=>{
                   
                     dispatch(cancelSeatAction(item.soGhe))
                    }}>Huỷ</button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <th>Tổng tiền</th>
              <td className="text-warning">{
danhSachGheDaDat.reduce((sum,item)=>{
  return (sum += item.gia);
},0)

              }
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
