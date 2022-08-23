import { useState } from "react";

export const MessageUpdateComponent = () => {
  const [info, setInfo] = useState({ name: 'Paco', lastName: 'Martinez' });


  return (
    <div>
      <h1>{info.name + ' ' + info.lastName}</h1>
      <input type="text" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} />
      <input type="text" value={info.lastName} onChange={(e) => setInfo({ ...info, lastName: e.target.value })} />
    </div>
  )
}

