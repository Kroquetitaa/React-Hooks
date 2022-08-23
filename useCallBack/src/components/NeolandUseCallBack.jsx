import React from 'react'
import { useCallback, useState, memo } from 'react'

const NeolandUseCallBack = () => {

    const [ user, setUser ] = useState({
        name: 'Pepe',
        lastName: 'Gotera'
    })

    const deletedUseCallBack = useCallback( () => {
      setUser({ name: '', lastName: ''})
    }, []);

    const handleChangeName = e => {
      console.log('name')
      setUser( {...user, name: e.target.value } )
    }

    const handleChangeLastName= e => {
      console.log('lastName')
      setUser( {...user, lastName: e.target.value } )
    }

  return (<>
    <div> { user.name } | { user.lastName } </div>
    <input 
      type="text" 
      value={ user.name } 
      onChange={ e => { handleChangeName(e) } }
    />
    <input 
      type="text" 
      value={ user.lastName } 
      onChange={ e => { handleChangeLastName(e) } }
    />
    <DeletedUser DeletedUser= { deletedUseCallBack }/>
    </>)
}

export const DeletedUser = memo( ( { DeletedUser } ) => {
  console.log('Me renderizo');
  return (
    <button onClick={ DeletedUser }> Eliminar usuario </button>
  )
})

export default NeolandUseCallBack