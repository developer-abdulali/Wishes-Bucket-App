import React, { useState } from 'react'
import Wish from './Wish';

export default function WishList() {
    
  

  return (
    <>
        {wishes.map(wish =>{
            return <Wish wish={wish} />
        })}
    </>
  )
}
