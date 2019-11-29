import React from 'react';

import CustomButton from '/.components/MyButton';

export default function CustomButtonWrapper(props){
  return(
    <div>
    <CustomButton MyBtnClickHandler={props.MyButtonClick}/>
    </div>
  )
}