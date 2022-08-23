import { useState, useEffect } from "react";

import { MessageComponent } from './MessageComponent';


export const NeolandEffectUnmount = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {visible && <MessageComponent name="Pepe" />}
      <button onClick={() => { setVisible(!visible) }}>{!visible ? 'Mostrar Elemento' : 'Ocultar elemento'}</button>
    </div>
  )
}