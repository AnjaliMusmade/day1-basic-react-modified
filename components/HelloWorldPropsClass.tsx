import React, { Component }  from 'react';

export default class HelloWorld2 extends Component{
  constructor(props)
  {
    super(props);
     this.state={
      FirstName:"Anjali",
      LastName:"Musmade",
      Salary:1000
    }; 
     this.increaseSalary=this.increaseSalary.bind(this);
  }

increaseSalary()
{
 alert("Clicked");
//  this.setState({
//       FirstName:'Anjali',   //not compulsory
//       LastName:'Musmade',
//       //...this.state,
//       Salary:this.state.Salary + 1000
//  });
 this.setState((state)=>({
      Salary : state.Salary + 1000
 }));

 this.setState((state)=>({
      Salary: state.Salary + 200
 }));
}

  render(){
    return(
      <div>
      <div>{this.props.FirstName}</div>
      <div>{this.props.LastName}</div>
      <hr/>
      <div>Salary: {this.state.Salary}</div>
      <hr/>
      <button onClick={this.increaseSalary}>Increase Salary</button>
      </div>
    );
  }
}
