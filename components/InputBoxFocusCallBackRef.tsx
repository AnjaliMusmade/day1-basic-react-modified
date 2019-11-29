import React from 'react'
//using callbackrefs
export default function InputBoxFocusCallBackRef(){
  //let inputHandle=React.createRef();
 let inputHandle=React;
  function OnClick(){
    //inputHandle.current.focus();
    inputHandle.focus();
  }
  return(
 <div>
 <h5>input to focus using callbackrefs</h5>
 <input type="text" ref={(handle)=>inputHandle=handle}/>
 <input type="button" value="Click Me To Focus" onClick={OnClick}/>
 
 <button onClick={OnClick}>Click For Focus</button>
 </div>
  )
};