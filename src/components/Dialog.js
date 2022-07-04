import React from 'react'
import FancyBorder from './FancyBorder'
function Dialog(props) {
  return (
    <FancyBorder>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.message}
        </p>
        {props.children}
    </FancyBorder>
  )
}

export default Dialog
