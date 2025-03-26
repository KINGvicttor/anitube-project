import { createContext, ReactNode } from "react";

type DataContextType = {

}

type Props = {
    children: ReactNode
}

export const DataContext = createContext<DataContextType | null>(null);
export const DataContextProvider = ({children}: Props) => {
    return(
        <DataContext.Provider value={''}>
            {children}
        </DataContext.Provider>
    )
}