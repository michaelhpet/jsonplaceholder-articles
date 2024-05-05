import {
  ReactNode,
  ReactPortal,
  createContext,
  useContext,
  useState,
} from "react";

type LayoutContextType = {
  portal: ReactPortal | null;
  setPortal: (portal: ReactPortal | null) => void;
};

const LayoutContext = createContext({} as LayoutContextType);

export function LayoutProvider(props: { children: ReactNode }) {
  const [portal, setPortal] = useState<ReactPortal | null>(null);
  return (
    <LayoutContext.Provider value={{ portal, setPortal }}>
      {props.children}
      {portal}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}
