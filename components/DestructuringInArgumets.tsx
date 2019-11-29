import React from 'react'
import HelloWorlddestructuring from './HelloWorlddestructuring';

export default function Destructuring(props){
  //passing props as is it is 
  return(
  <div> <HelloWorlddestructuring {...props}/> </div>
 
  )
};