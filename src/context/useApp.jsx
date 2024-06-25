import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within the AppProvider");
  }
  return context;
}
