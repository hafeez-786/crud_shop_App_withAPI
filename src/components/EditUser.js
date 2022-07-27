import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/action/action";

const EditUser = () => {
  const [addInfo, setAddInfo] = useState({
    fname: "",
    email: "",
    phone: "",
    country: "",
  });
  const [error, setError] = useState("");
  const { user } = useSelector((state) => state.data);

  const changeHandler = (e) => {
    const value = e.target.value;
    setAddInfo({
      ...addInfo,
      [e.target.name]: value,
    });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  //for single user
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    setAddInfo({ ...user });
  }, [user]);

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
      dispatch(updateUser(addInfo, id));
      navigate("/");
      setError("");
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      {/* <button onClick={() => navigate("/")}>Back To Home</button> */}

      {error && <h4 style={{ color: "red", textAlign: "center" }}>{error}</h4>}
      <div className="card m-auto" style={{ width: "25rem" }}>
        <div className="card-header">
          <h5>Edit User information</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="text"
                name="fname"
                value={addInfo.fname || ""} //|| "" this is for uncontrolled input error
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
                value={addInfo.email || ""}
                onChange={changeHandler}
                placeholder="Enter email..."
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                value={addInfo.phone || ""}
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
                value={addInfo.country || ""}
                onChange={changeHandler}
                placeholder="Enter country..."
                className="form-control"
              />
            </div>
            <div className="text-center">
              <button className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
