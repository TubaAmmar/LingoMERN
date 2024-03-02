import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './userData.css';

export default function UserData() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/allData')
            .then(response => {
                setListOfUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const filteredUsers = listOfUsers.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    
const deleteUser = async(userId) =>{
  axios.delete(`http://localhost:5000/del/${userId}`).then((response)=>{
       setListOfUsers((prevUser) => prevUser.filter((user)=> user._id !== userId) )
  }).catch((error) => {
    console.log(error)
   })

}

    return (
        <div className="user-data-container">
            <div className="i11">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search by name"
                    className="input11"
                />
            </div>

            <h6 className="total-users">Total Users: {filteredUsers.length}</h6>

            <div className="table-container t1">
                <table className="table">
                    <thead>
                        <tr>
                            <th >User Number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={index} className="table-row">
                                <td data-label="User Number" style={{ }} className='username'>{index + 1}</td>
                                <td data-label="Name" >{user.name}</td>
                                <td data-label="Email">{user.email}</td>
                                <td data-label="Phone">{user.phone}</td>
                                <td data-label="Subject">{user.subject}</td>
                                <td data-label="Message">{user.message}</td>
                                <td><button onClick={()=> deleteUser(user._id) } className='del'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
