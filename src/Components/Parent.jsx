import React from 'react'
import Child from './Child';

const Parent = () => {
    const fullname="Aadit";
    const age="18";
  return (
    <>
    
    <Child name={fullname} age={age}/>
    </>
  )
}

export default Parent