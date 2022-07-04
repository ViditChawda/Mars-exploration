import React from 'react'
import './Style.css'
function FancyBorder(props) {
  return (
    <div className= {'FancyBorder FancyBorder-' +props.color}>
         {props.children}
    </div>
  )
}

export default FancyBorder
