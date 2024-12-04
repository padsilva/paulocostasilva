import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type FC,
  useMemo,
} from "react";

interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: (param?: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (isToClose?: boolean) => {
    setIsSidebarOpen(isToClose ?? !isSidebarOpen);
  };

  const value = useMemo(
    () => ({ isSidebarOpen, toggleSidebar }),
    [isSidebarOpen, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
