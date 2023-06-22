import { createContext } from "react";
import { useState } from "react";
export const WishContext = createContext()
export const WishProvider = ({children}) => {
    const data = [
        {
            id: 1,
            title: "Become a King"
        },
        
    ];
    const [wishes, setWishes] = useState(data)
    return(
        <WishContext.Provider value={[wishes, setWishes]}>
            {children}
        </WishContext.Provider>
    )
}