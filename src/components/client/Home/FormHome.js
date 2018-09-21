import React from 'react'

export default (props) => {
  return (
    <form onSubmit={props.getUser}>
        <input type="text" name="username"/>
        <button>button</button>
    </form>
  )
}
