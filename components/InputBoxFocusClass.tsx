import React, { Component as C }  from 'react'

export default class InputBoxFocusClass extends C{
  constructor(props)
  {
    super(props); 
    this.focusTextInput=this.focusTextInput.bind(this);
  }

//another way to bind. Dont use this as not still standardized
focusTextInput=()=>{
  this.textInput.focus();
 }

  render(){
    return(
      <div>
 <div><h5>input to focus using createref using class and binding</h5></div>
 <input type="text" ref={(handle)=>this.textInput=handle}/>
 <input type="button" value="Click Me To Focus" onClick={this.focusTextInput} />
 </div>
    )
  }
}