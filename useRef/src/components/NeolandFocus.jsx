import { useEffect, useRef, useState } from "react";

export const NeolandFocus = () => {

  const focusInputRef = useRef(null);


  useEffect(() => {
    if (focusInputRef.current) focusInputRef.current.focus();
  }, [])



  return (<>
    <form action="/" method="post">
      <fieldset>
        <legend>User</legend>
        <label htmlFor="user">Usuario</label>
        <input type="text" id="user" name="user" placeholder="name" ref={focusInputRef} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="password" />
      </fieldset>
    </form>

  </>)
}