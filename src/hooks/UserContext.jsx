import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({ id: 1, name: 'Fernando' });

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);

        localStorage.setItem('devburguer:userData',JSON.stringify(userInfo));
    };

    return (
        <UserContext.Provider value={{ userInfo, putUserData }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom Hook para acessar o contexto
export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser deve ser usado dentro de um UserProvider');
    }

    return context;
};
