import React from 'react'
//using simple ref
export default function InputBoxFocus(){
  let inputHandle=React.createRef();

  function OnClick(){
    inputHandle.current.focus();
  }
  return(
 <div>
 <h5>input to focus using createref</h5>
 <input type="text" ref={inputHandle}/>
 <input type="button" value="Click Me To Focus" onClick={OnClick}/>
 
 <button onClick={OnClick}>Click For Focus</button>
 </div>
  )
};