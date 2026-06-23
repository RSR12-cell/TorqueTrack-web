import type React from "react";
import Navbar from "../Shared/Components/Navbar/Navbar";
import CustomerNavBar from "../Features/Customer/CustomerNavBar/CustomerNavBar";
import CViewer from "../Features/Customer/CustomerViewer/CViewer";
import { SearchContext } from "../Shared/Components/Navbar/SearchContext/SearchContext";
import { useState } from "react";
// import CustomerCreationForm from "../Features/Customer/CustomerCreationForm/CustomerCreationForm";


function App(): React.JSX.Element{
    try {
        const [search, setSearch] = useState("");
        return(
            <>
            <SearchContext value={{search, setSearch}}>
                <Navbar/>
                <div style={{display: "flex", flexDirection: "row", gap: "30px"}} id="application_body">
                    <CustomerNavBar/>
                    {/* <CustomerCreationForm></CustomerCreationForm> */}
                    <CViewer></CViewer>
                </div>
            </SearchContext>
    
            </>
        ) 
    } catch (error) {
        console.error(error)
        return <></>
    }

}

export default App;