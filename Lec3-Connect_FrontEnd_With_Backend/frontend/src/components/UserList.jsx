import React from 'react'
import UserItem from './UserItem'

const UserList = ({ jokes }) => {
    return (
        <div>
            {jokes.map((item, idx) => {
                return (
                    <UserItem key={idx} item={item} />
                )
            })}
        </div>
    )
}

export default UserList