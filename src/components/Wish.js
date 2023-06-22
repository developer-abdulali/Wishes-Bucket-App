import React from 'react'

export default function Wish({wish}) {
  return (
    <div className='wish'>
        <h3>{wish.title}</h3>
        <button>remove</button>
    </div>
  )
}
