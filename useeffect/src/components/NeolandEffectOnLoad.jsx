import { useState, useEffect } from "react";

export const NeolandEffectOnLoad = () => {
  const [name, setName] = useState('Bruce Wayne');

  // obtiene sus cambios en el momento del Render -> Retorno
  // Mi cambio tarda 1.5 sg -> Rerender con el cambio
  useEffect(() => {
    setTimeout(() => {
      console.log('Effect Render', name);
      setName('Batman');
      console.log('Effect Render Change State', name);
    }, 1500)

  }, [])

  const handleChangeName = (e) => {
    setName(e.target.value)
  }


  return (
    <>
      <h1>{name}</h1>
      <input type="text" value={name} onChange={(e) => handleChangeName(e)} />
    </>)
}