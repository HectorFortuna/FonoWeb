// context/AuthContextType.ts

export type Role = "ADMIN" | "USER";

export type User = {
    name: string;
    email: string;
    role: Role;
};

export type AuthContextType = {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
};
