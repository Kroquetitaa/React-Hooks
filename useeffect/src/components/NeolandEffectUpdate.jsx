import { useState } from "react";
import { MessageUpdateComponent } from './MessageUpdateComponent';

export const NeolandEffectUpdate = () => {
  const [visible, setVisible] = useState(false);


  const handleClickChangeState = () => {
    console.log('Clicked')
    setVisible(!visible)
  }

  return (
    <>
      {visible && MessageUpdateComponent}
      <button onClick={() => handleClickChangeState()}>Open Person</button>
    </>

  )
}