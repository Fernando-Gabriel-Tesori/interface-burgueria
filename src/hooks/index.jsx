import { UserProvider } from './UserContext'; // Corrigido nome do provider

const AppProvider = ({ children }) => {
   return (
      <UserProvider>
         {children}
      </UserProvider>
   );
};

export default AppProvider;
