import React from 'react'

interface User {
    name: string;
    id: number;
    email: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/', { cache: 'no-store'})
    const users: User[] = await res.json();
  return (
    <>
    <p className='text-center'>{new Date().toLocaleTimeString()}</p>
    <h1>Users</h1>
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Nmae</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td></tr>)}
        </tbody>
    </table>
    </>
  )
}

export default UsersPage