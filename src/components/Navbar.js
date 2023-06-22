import React, { useContext } from 'react'
import { WishContext } from '../context/WishProvider'

export default function Navbar() {
    const [wishes, setWishes] = useContext(WishContext)
    return (
    <nav className='navbar'>
        <div>Wish Bucket</div>
        <div>Wishes: {wishes.length}</div>
    </nav>
  )
}
