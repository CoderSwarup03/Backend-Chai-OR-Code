import React from 'react'

const UserItem = ({ item }) => {
    return (
        <>
            <div>
                <h3>{item.title}</h3>
                <span>{item.content}</span>
            </div>
        </>
    )
}

export default UserItem