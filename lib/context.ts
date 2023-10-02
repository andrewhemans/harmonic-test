import { createContext } from "react";

interface UserContextType {
    user: any;
    username: string | null;
  }
  export const UserContext = createContext<UserContextType>({
    user: null,
    username: null,
  });

