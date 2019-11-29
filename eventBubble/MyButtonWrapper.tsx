import React from 'react';

import CustomButton from '/.eventBubble/MyButton';

export default function CustomButtonWrapper(props){
  return(
    <div>
    <CustomButton MyBtnClickHandler={props.MyButtonClick}/>
    </div>
  )
}