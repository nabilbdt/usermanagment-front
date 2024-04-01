import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Home() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        console.log(result.data);
        setUsers(result.data);
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">USERNAME</th>
                            <th scope="col">EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home