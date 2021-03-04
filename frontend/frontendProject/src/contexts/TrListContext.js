import React, { createContext, useState } from 'react';

export const TrListContext = createContext();

export default function TrListProvider({children}){
    const [addresses, setAddresses] = useState([]);

    return <TrListContext.Provider value={{addresses, setAddresses}}>
                {children}
           </TrListContext.Provider>
}