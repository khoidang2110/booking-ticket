import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  seatPicker,
  setData,
  setSeatSelected,
  setSelect,
  setUser,
} from "../../redux/action/ticket";
import { message } from "antd";

export default function TicketPickHai({ data, setKeyNumber,keyNumber }) {
  let startSelect = useSelector((state) => state.ticketTwoReducer.startSelect);
  console.log("ticket pick toggle select", startSelect);
let  seatSelected = useSelector((state)=> state.ticketTwoReducer.seatSelected)
  // let data = useSelector((state) => state.data);
  // console.log("lay data ve",data)
  let users = useSelector((state) => state.ticketTwoReducer.users);

  const dispatch = useDispatch();
  // console.log(data[1].danhSachGhe[1]);
  //console.log(data.danhSachGhe.daDat ? data.danhSachGhe.daDat : '')

  const updateState = (toggleValue) => {
    const newState = data.map((row) => {
      // 👇️ if id equals 2, update country property
      if (row.hang !== "") {
        // return {...danhSachGhe, daDat: true};
        return row.danhSachGhe.map((item) => {
          // console.log("keys",Object.keys(item).findIndex(e=>e=="daDat"))
          if (Object.keys(item).findIndex((e) => e == "daDat")) {
            return { ...item, daDat: toggleValue };
          }
          return item;
        });
      }

      // 👇️ otherwise return the object as is

      return row;
    });
    console.log("newsate", newState);
    // console.log("getdata",newState[1].danhSachGhe[1].daDat)

    dispatch(setData(newState));
  };

  //let  numberOfSeat = user.numberOfSeat*1+1;
  console.log("users", users);
  let user = users.find((item) => item.seats == "");

  console.log("tìm user de lay so ghe", user);

  let numberOfSeat = user ? user.numberOfSeat : "";

  //console.log("numberOfSeat",numberOfSeat)
  let arrDat = [];
  let checked = false;
  let handlePickSeat = (e) => {
    console.log("pick");
    // console.log("e",e.target.value);

    // const name = nameInput.current.value;
    // const numberOfSeat = numberSeatInput.current.value;

    // const user = { name, numberOfSeat };

    // console.log(user);

    // dispatch(setUser(user));
if(user){
  if (e.target.checked && numberOfSeat > 0) {
    numberOfSeat--;
    console.log("e.target.checked", e.target.checked);
    console.log("so ghe", numberOfSeat);
    console.log("soghe vua chon", e.target.value);
    arrDat.push(e.target.value);
    console.log("mang tam - bam dat", arrDat);
    console.log("id nguoi dat ve ", user.id);
    console.log("e.target", e.target);
    // e.target.disabled=true
  } else if (e.target.checked && numberOfSeat == 0) {
    // dispatch(setUser(data.danhSachGhe.daDat=true));
    //updateState(true);

   // dispatch(setSelect(true));
    //dispatch(seatSelected(arrDat));
    //dispatch(seatPicker(user.id, arrDat));
    //khi chon het ghe
    console.log("e.target.disabled", e.target.disabled);
    e.target.checked = false;
  }
  // if(e.target.checked==false)
  else {
    numberOfSeat++;
    console.log("soghe vua huy", e.target.value);
    console.log("số ghế", numberOfSeat);
    const new_arr = arrDat.filter((item) => item !== e.target.value);
    console.log("mang moi bo chon ghe", new_arr);
    arrDat = new_arr;
    console.log("mang tam - bam huy", arrDat);

    // if (arr.find(item=>item == e.target.value)) {
    //   // Removes the value from the original array

    //       return true;
    //   }
    //   return false;
  }
}else{
  message.warning("vui lòng nhập tên và số lượng ghế")
  e.target.checked = false;
}
  

  };
  let updateTextArea = () => {
    console.log("bam dat, arrdat",arrDat);
   if(user){
    dispatch(seatPicker(user.id, arrDat));
   
    dispatch(setSeatSelected(arrDat));
     setKeyNumber(Math.random());
   }
   else {
    message.warning("vui lòng chọn ghế")
   }
   
    //dispatch(setSelect(true));
  };
  let newData = [];
  newData = data.map((row)=>{
    if (row.hang !== ""){
      return row.danhSachGhe.map((item)=>{

        let indexBookingSeat = seatSelected.findIndex(
          (index) => index === item.soGhe
        );
    
        if (indexBookingSeat !== -1) {
          item.daDat = true;
        }
        return ;
      })
    }
  
     
   }
 
   )
   console.log("newdt",newData)
  const renderList = data.map((row, key1) => {
    if (row.hang == "") {
      return (
        // render 1 2 3 4...
        <tr key={key1+keyNumber}>
          <td>{row.hang}</td>
          {row.danhSachGhe.map((item) => {
            if (item.soGhe == 6) {
              return (
                <>
                  <td></td>
                  <td>{item.soGhe}</td>
                </>
              );
            }
            return <td>{item.soGhe}</td>;
          })}
        </tr>
      );
    }
    //render khoang trong va row F tro di
    if (row.hang == "F") {
      return (
        <>
          <tr className="seatVGap"></tr>
          <tr key={key1+keyNumber}>
            <td>{row.hang}</td>

            {row.danhSachGhe.map((item) => {
              if (item.soGhe.slice(-1) == 6) {
                return (
                  <>
                    <td></td>
                    <td>
                      <input
                        // checked="false"

                        onClick={handlePickSeat}
                        type="checkbox"
                        className="seats"
                        defaultValue={item.soGhe}
                        defaultChecked={checked}
                        // disabled={item.daDat}
                        disabled={item.daDat}
                        readOnly
                      />
                    </td>
                  </>
                );
              }
              // render binh thuong
              return (
                <td>
                  <input
                    onClick={handlePickSeat}
                    type="checkbox"
                    className="seats"
                    defaultValue={item.soGhe}
                    disabled={item.daDat}
                  />
                </td>
              );
            })}
          </tr>
        </>
      );
    }
    return (
      <tr>
        <td>{row.hang}</td>

        {row.danhSachGhe.map((item) => {
          if (item.soGhe.slice(-1) == 6) {
            return (
              <>
                <td></td>
                <td>
                  <input
                    onClick={handlePickSeat}
                    type="checkbox"
                    className="seats"
                    defaultValue={item.soGhe}
                    disabled={item.daDat}
                  />
                </td>
              </>
            );
          }
          return (
            <td>
              <input
                onClick={handlePickSeat}
                type="checkbox"
                className="seats"
                defaultValue={item.soGhe}
                disabled={item.daDat}
              />
            </td>
          );
        })}
      </tr>
    );
  });
  console.log("render.ist",renderList)


  return (
    <div>
      <ul className="seat_w3ls">
        <li className="smallBox greenBox">Selected Seat</li>
        <li className="smallBox redBox">Reserved Seat</li>
        <li className="smallBox emptyBox">Empty Seat</li>
      </ul>

      <div className="seatStructure txt-center" style={{ overflowX: "auto" }}>
        {startSelect == false && (
          <p id="notification" className="screen">
            <b
              style={{
                marginBottom: 0,
                background: "#ff9800",
                letterSpacing: 1,
              }}
            >
              Please Select your Seats NOW!
            </b>
          </p>
        )}

        <table id="seatsBlock">
          <tbody>{renderList}</tbody>
        </table>
        <div className="screen">
          <h2 className="wthree">Screen this way</h2>
        </div>
        <button onClick={updateTextArea}>Confirm Selection</button>
      </div>
    </div>
  );
}