import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AddUser() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });
    const { name, username, email } = user;
    const onInputChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate('/');
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
                    <h2 className='text-center m-4'>Add User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3 '>
                            <label htmlFor="Name" className='form-label'>Name</label>
                            <input type="text" onChange={(e) => { onInputChange(e) }} value={name} className='form-control' placeholder='Enter the name' name='name' />
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor="username" className='form-label'>Username</label>
                            <input type="text" onChange={(e) => { onInputChange(e) }} value={username} className='form-control' placeholder='Enter the Username' name='username' />
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" onChange={(e) => { onInputChange(e) }} value={email} className='form-control' placeholder='Enter the Email' name='email' />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Add</button>
                        <Link to={'/'} type='reset' className='btn btn-outline-danger mx-2'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser