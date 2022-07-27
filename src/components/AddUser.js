import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action/action";

const AddUser = () => {
  const [addInfo, setAddInfo] = useState({
    fname: "",
    email: "",
    phone: "",
    country: "",
  });
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    const value = e.target.value;
    setAddInfo({
      ...addInfo,
      [e.target.name]: value,
    });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !addInfo.fname ||
      !addInfo.email ||
      !addInfo.phone ||
      !addInfo.country
    ) {
      setError("Please fill all input feilds");
    } else {
      dispatch(addUser(addInfo));
      navigate("/");
      setError("");
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      {/* <button onClick={() => navigate("/")}>Back To Home</button> */}
      
      {error && <h6 style={{ color: "red", textAlign: "center" }}>{error}</h6>}
      <div className="card m-auto" style={{ width: "25rem"}}>
        <div className="card-header"><h5>Add User information</h5></div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="text"
                name="fname"
                value={addInfo.fname}
                onChange={changeHandler}
                placeholder="Enter name..."
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={addInfo.email}
                onChange={changeHandler}
                placeholder="Enter email..."
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Number
              </label>
              <input
                type="number"
                name="phone"
                value={addInfo.phone}
                onChange={changeHandler}
                placeholder="Enter phone..."
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={addInfo.country}
                onChange={changeHandler}
                placeholder="Enter country..."
                className="form-control"
              />
            </div>
            <div className="text-center">
               <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
