import React from "react";
import { useSelector } from "react-redux";

export default function TotalBookingHai({ users,keyNumber }) {
  let renderList = users.map((item,index) => {
    return (
      <tr id={index+keyNumber}>
        <th>
          <textarea id="nameDisplay" disabled defaultValue={item.name} />
        </th>
        <th>
          <textarea
            id="NumberDisplay"
            disabled
            defaultValue={item.numberOfSeat}
          />
        </th>
        <th>
          <textarea
            id="seatsDisplay"
            disabled
            defaultValue={item.seats.toString()}
          />
        </th>
      </tr>
    );
  });

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
            {renderList}
          </tbody>
        </table>
      </div>
    </div>
  );
}
