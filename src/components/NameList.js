import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const nameList = names.map((name, index) => <div key={index}>{name}</div>)
    return <div>{nameList}</div>
}

export default NameList