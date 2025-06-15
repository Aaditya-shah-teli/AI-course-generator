import { createContext } from "react";

// Define the shape of your context value
interface UserInputContextType {
  input: string;
  setInput: (value: string) => void;
}

// Create the context with a default value (can be null if you're using a provider)
export const UserInputContext = createContext<UserInputContextType | null>(null);