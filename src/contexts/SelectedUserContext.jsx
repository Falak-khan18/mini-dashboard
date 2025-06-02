import React, { createContext, useState, useContext } from "react";

// Create the context
const SelectedUserContext = createContext(null);

// Create provider
export const SelectedUserProvider = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
            {children}
        </SelectedUserContext.Provider>
    );
};

// Custom hook to use context
export const useSelectedUser = () => useContext(SelectedUserContext);
