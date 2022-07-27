import * as types from './actionType';
import axios from 'axios';

const getUsers = (users) => ({
   type: types.GET_USERS,
   payload: users,
})

const userDeleted = () => ({
    type: types.DELETE_USER
})

const userAdded = () => ({
    type: types.ADD_USER
})

const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
})

const userUpdated = () => ({
    type: types.UPDATE_USER
})

//GetUser List
export const loadUsers = () => {
    return function(dispatch) {
        axios.get('http://localhost:3000/details')
        .then((res) => {
            console.log('get all user details_____', res)
            dispatch(getUsers(res.data))
        })
        .catch((err) => console.log(err))
    }
}

//Delete User
export const deleteUser = (id) => {
    return function(dispatch) {
        axios.delete(`http://localhost:3000/details/${id}`)
        .then((res) => {
            console.log('delete user_____', res)
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
        .catch((err) => console.log(err))
    }
}


//Add User
export const addUser = (user) => {
    return function(dispatch) {
        axios.post(`http://localhost:3000/details`, user)
        .then((res) => {
            console.log('add user data_____', res)
            dispatch(userAdded());
            // dispatch(loadUsers());
        })
        .catch((err) => console.log(err))
    }
}


//Edit User
export const getSingleUser = (id) => {
    return function(dispatch) {
        axios.get(`http://localhost:3000/details/${id}`)
        .then((res) => {
            console.log('get single user data_____', res)
            dispatch(getUser(res.data));
        })
        .catch((err) => console.log(err))
    }
}


//Update User
export const updateUser = (user, id) => {
    return function(dispatch) {
        axios.put(`http://localhost:3000/details/${id}`, user)
        .then((res) => {
            console.log('get single user data_____', res)
            dispatch(userUpdated());
        })
        .catch((err) => console.log(err))
    }
}
