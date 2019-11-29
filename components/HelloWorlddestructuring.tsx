import React from 'react'


export default function Destructuring({name,proj:project}){
  //let {name,project}=this.props;
  return(
  <div>
  <div><h2>{name}</h2></div>
  <div><h2>{project}</h2></div>
  </div>
  )
};