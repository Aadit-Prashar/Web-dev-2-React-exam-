import React from 'react'

const Child = ({name,age}) => {
  return (
    <>
    <h2>Rendered in child</h2>
    <h1>Name:{name}</h1>
    <h1>Age:{age}</h1>
    </>
  )
}

export default Child
