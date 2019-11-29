import React from 'react';

// export default props => (
//   <button onClick={props.MyBtnClickHandler}>Click Me</button>
// )

export default function MyButton(props){
  return(
    <div>
   <button onClick={props.MyBtnClickHandler}>Click Me</button>
    </div>
  )
}