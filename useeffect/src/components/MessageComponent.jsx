import { useEffect } from "react"

export const MessageComponent = (props) => {

  useEffect(() => {
    console.log('Monto El compoennte en el DOM: Bienvenid@->', props.name);

    return () => {
      console.log('Me Desmonto del DOM: Hasta otra->', props.name);
    }
  }, [])



  return <h1>Hola {props.name}</h1>
}