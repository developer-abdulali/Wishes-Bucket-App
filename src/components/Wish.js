import React, { useContext } from "react"
import { WishContext } from "../context/WishProvider"
import {ImCancelCircle} from "react-icons/im"

export default function Wish({wish}) {
    const [wishes, setWishes] = useContext(WishContext) 
    const removeWish = () => {
        setWishes(
            wishes.filter((item) => {
                return item.id !== wish.id
            })
        )
    }
  return (
    <div className="wish">
        <h3>{wish.title}</h3>
        <button onClick={removeWish}><ImCancelCircle className="btnIcon" size={20} /></button>
    </div>
  )
}
