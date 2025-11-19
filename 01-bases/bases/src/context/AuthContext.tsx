import { createContext, useContext, type PropsWithChildren } from "react"
interface AuthState {
    saludo: string;
    token: string;
}

export const AuthContext = createContext<AuthState>({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }: PropsWithChildren) => {
    return (
        <AuthContext.Provider value={{
            saludo: 'Hola Mundo',
            token: 'asdasdas'
        }}>
            {children}
        </AuthContext.Provider>
    )
}