import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Button clicked')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button> {/* No parenthesis */}
    </div>
  )
}

export default FunctionClick