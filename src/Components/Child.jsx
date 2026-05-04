import React from 'react'

const Child = ({name,age}) => {
  return (
    <>
    <h2>Props passed to Child</h2>
    <h1>Name:{name}</h1>
    <h1>Age:{age}</h1>
    </>
  )
}

export default Child
