import React from 'react'

interface User {
    name: string,
    id: number
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const users: User[] = await res.json();
  return (
    <>
    </>
  )
}

export default UsersPage