import { useContext } from "react";
import { SearchContext } from "./SearchContext";

export function useSearchedContext(){
    const contex = useContext(SearchContext);

    if(!contex){
        throw new Error("useSharedContext must be used within a SharedContext.Provider")
    }

    return contex;
}