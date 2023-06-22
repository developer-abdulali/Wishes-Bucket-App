import { createContext } from "react";
import { useState } from "react";
export const WishContext = createContext()
export const WishProvider = ({children}) => {
    const data = [
        {
            id: 1,
            title: "Go skydiving"
        },
        {
            id: 2,
            title: "Go bungee jumping"
        },
        {
            id: 3,
            title: "Go a new Guinness world record"
        }
    ];
    const [wishes, setWishes] = useState(data)
    return(
        <WishContext.Provider value={[wishes, setWishes]}>
            {children}
        </WishContext.Provider>
    )
}