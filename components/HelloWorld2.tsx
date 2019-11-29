import React, { Component as C }  from 'react'

export class HelloWorld2 extends C{
  constructor(props)
  {
    super(props);
    this.state={
      FirstName:'Anjali',
      LastName:'Musmade',
      Salary:1000
    };  
  }

  render(){
    return(
      <div>
      <div>{this.state.FirstName}</div>
      <div>{this.state.LastName}</div>
      <div>{this.state.Salary}</div>
      </div>
    )
  }
}
