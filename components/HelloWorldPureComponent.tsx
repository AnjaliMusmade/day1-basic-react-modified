import React, {PureComponent} from 'react';

export default class extends PureComponent{
  constructor(props)
  {
    super(props);
     this.state={
      FirstName:"Anjali",
      LastName:"Musmade",
      Salary:1000,
      ArrayOfNum :[1,2]
    }; 
     this.increaseSalary=this.increaseSalary.bind(this);
  }

increaseSalary()
{
//mutation
//   const ArrayOfNum1 = this.state.ArrayOfNum;
// ArrayOfNum1.push(3);
//   this.setState(()=>({
//     ArrayOfNum : ArrayOfNum1
//   }));

//non mutated
const ArrayOfNum2 = this.state.ArrayOfNum.concat(3);
  this.setState(()=>({
    ArrayOfNum : ArrayOfNum2
  }));


  //  const newSalary=this.state.Salary;
  //  newSalary=newSalary+500;
  //  this.setState({Salary:newSalary})

  // const newSalary1=this.state.Salary+500;
  // this.setState({Salary:newSalary1})

//  alert("Clicked");
//  this.setState((state)=>({
//       Salary : state.Salary + 1000
//  }));

//  this.setState((state)=>({
//       Salary: state.Salary + 200
//  }));
}

  render(){
    return(
      <div>
      <div>{this.props.FirstName}</div>
      <div>{this.props.LastName}</div>
      <hr/>
      <div>{this.state.ArrayOfNum}</div>
      <div>Passed Salary: {this.props.Salary}</div>
      <div>Stored Salary: {this.state.Salary}</div>
      <hr/>
      <button onClick={this.increaseSalary}>Increase Salary</button>
      </div>
    );
  }
}
