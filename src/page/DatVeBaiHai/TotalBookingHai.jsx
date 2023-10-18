import React from "react";
import { useSelector } from "react-redux";

export default function TotalBookingHai({ user }) {
  console.log("user", user);
  console.log("is arr check ",Array.isArray(user))
  let seatSelected = useSelector((state)=> state.ticketTwoReducer.seatSelected)
  //console.log("arr",user.seats)
 // 
let renderList = " "
 if (Array.isArray(user)==true){
  console.log("dieu kien iff ")
  console.log("dieu kien iff  user",user)
  renderList = user.map((item) => {
    <>
      <td>
        <textarea id="nameDisplay" disabled defaultValue={item.name} />
      </td>
      <td>
        <textarea
          id="NumberDisplay"
          disabled
          defaultValue={item.numberOfSeat}
        />
      </td>
      <td>
        <textarea id="seatsDisplay" disabled defaultValue={item.seats.toString()} />
      </td>
    </>;
  });
console.log("renderlist",renderList)
console.log("user.name",user.name)
 } 
  

 
  return (
    <div>
      <div className="displayerBoxes txt-center" style={{ overflowX: "auto" }}>
        <table className="Displaytable w3ls-table" width="100%">
          <tbody>
            <tr className="result"> 
              <th>Name</th>
              <th>Number of Seats</th>
              <th>Seats</th>
            </tr>
            <tr>
              
              <td>
                <textarea id="nameDisplay" disabled defaultValue={user.name} />
              </td>
              <td>
                <textarea
                  id="NumberDisplay"
                  disabled
                  defaultValue={user.numberOfSeat}
                />
              </td>
              <td>
                <textarea
                  id="seatsDisplay"
                  disabled
                  defaultValue={seatSelected.toString()}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
