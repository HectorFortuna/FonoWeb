import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContextType, User } from "./AuthContextType";

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded: any = jwtDecode(token);
                setUser({
                    name: decoded.name,
                    email: decoded.sub,
                    role: decoded.role,
                });
            } catch (error) {
                console.error("Erro ao decodificar token:", error);
                logout();
            }
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem("token", token);
        try {
            const decoded: any = jwtDecode(token);
            setUser({
                name: decoded.name,
                email: decoded.sub,
                role: decoded.role,
            });
        } catch (error) {
            console.error("Erro ao decodificar token:", error);
            logout();
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
