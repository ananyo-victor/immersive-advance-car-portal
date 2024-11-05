import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [navHeight, setNavHeight] = useState(0);

    return (
        <UserContext.Provider value={{ navHeight, setNavHeight }}>
            {children}
        </UserContext.Provider>
    );
};
 export default UserContext