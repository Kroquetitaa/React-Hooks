import { useRef } from 'react'
import '../App.css'


export const NeolandRefColor = () => {
  const colorRef = useRef(null);

  const changeColor = () => {


    colorRef.current.className === "default-color" ? colorRef.current.className = "modify-color" : colorRef.current.className = "default-color";
  }


  return (
    <>
      <div className='default-color' ref={colorRef}>Tengo Colores</div>
      <button onClick={changeColor} >Change Color!</button>
    </>
  )

}