import { createContext, type Dispatch, type SetStateAction } from "react";

type SearchContextType ={
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextType | null>(null)