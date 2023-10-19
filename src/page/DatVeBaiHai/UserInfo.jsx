import React, { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelect, setUser } from "../../redux/action/ticket";
import { message } from "antd";

export default function UserInfo({updateState}) {
  //console.log("onload userinfo")
 // updateState(true);
  const dispatch = useDispatch();
  
  //let user = useSelector((state) => state.user);
  let nameInput = createRef();
  let numberSeatInput = createRef();

 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //console.log("name",nameInput.current.value)
   // console.log("number",numberSeatInput.current.value)
    if(nameInput.current.value && numberSeatInput.current.value){
      const name = nameInput.current.value;
      const numberOfSeat = numberSeatInput.current.value;
     const seats = "";
     const id = Math.floor(Math.random() * 100)
      const user = { name, numberOfSeat,seats, id };
      //console.log(user);
      dispatch(setUser(user));
      //dispatch(setSelect(false));
      numberSeatInput.current.value="";
      nameInput.current.value="";
    }
    else{
      message.warning("vui lòng nhập thông tin")
    }
 

    
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
