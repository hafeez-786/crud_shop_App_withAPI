import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, loadUsers } from "../redux/action/action";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete the user")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/addUser")}
        >
          Add User
        </button>
      </div>
      <table className="table table-bordered my-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.fname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.country}</td>
                <td>
                  <button 
                    className="btn btn-success"
                    onClick={() => navigate(`/editUser/${user.id}`)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button 
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
