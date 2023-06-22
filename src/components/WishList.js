import React, { useContext, useState } from 'react'
import Wish from "./Wish";
import { WishContext } from "../context/WishProvider";

export default function WishList() {
    const [wishes, setWishes] = useContext(WishContext)
  return (
    <>
        {wishes.map(wish =>{
            return <Wish wish={wish} />
        })}
    </>
  )
}
