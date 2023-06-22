import React, { useContext } from "react"
import { WishContext } from "../context/WishProvider"

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
        <button onClick={removeWish}>remove</button>
    </div>
  )
}




// import React from 'react';

// export default function Wish({ wish, setWishs, wishes }) { 
//   const removeWish = () => {
//     setWishs(wishes.filter((item) => item.id !== wish.id));
//   };

//   return (
//     <div className='wish'>
//       <h3>{wish.title}</h3>
//       <button onClick={removeWish}>remove</button>
//     </div>
//   );
// }

