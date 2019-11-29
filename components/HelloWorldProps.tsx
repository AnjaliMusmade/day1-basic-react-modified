import React from 'react';

export default function HelloWorldProps(props){
   
  return(
    <div>
  <div><h2>{props.name}</h2></div>
  <button onClick={()=>props.MyHandler(props.name)}>ClickMe</button>  
  <br/>
  </div>
  )
}