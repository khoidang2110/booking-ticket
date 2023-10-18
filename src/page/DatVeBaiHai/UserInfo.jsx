import React, { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelect, setUser } from "../../redux/action/ticket";

export default function UserInfo({updateState}) {
  console.log("onload userinfo")
 // updateState(true);
  const dispatch = useDispatch();
  
  //let user = useSelector((state) => state.user);
  let nameInput = createRef();
  let numberSeatInput = createRef();

 
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = nameInput.current.value;
    const numberOfSeat = numberSeatInput.current.value;
   const seats = "";
   const id = Math.floor(Math.random() * 100)
    const user = { name, numberOfSeat,seats, id };
    console.log(user);
    dispatch(setUser(user));
    //dispatch(setSelect(false));
  };
  return (
    <div>
      <form className="inputForm">
        <h2>fill the required details below and select your seats</h2>
        <div className="mr_agilemain">
          <div className="agileits-left">
            <label>
              {" "}
              Name
              <span>*</span>
            </label>
            <input
              name="name"
              ref={nameInput}
              type="text"
              id="Username"
              required
            />
          </div>
          <br/>
          <div className="agileits-right">
            <label>
              {" "}
              Number of Seats
              <span>*</span>
            </label>
            <input
              ref={numberSeatInput}
              name="numberSeat"
              type="number"
              id="Numseats"
              required
              min={1}
            />
          </div>
        </div>
        <br/>
        <button onClick={handleFormSubmit}>Start Selecting</button>
      </form>
    </div>
  );
}
