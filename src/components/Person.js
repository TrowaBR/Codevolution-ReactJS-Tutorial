import React from 'react'

function Person({person}) {
  return (
    <div>I am {person.name}, a {person.age} years old person that knows {person.skill}.</div>
  )
}

export default Person