import type React from "react";
import Navbar from "../Shared/Components/Navbar/Navbar";
import CustomerNavBar from "../Features/Customer/CustomerNavBar/CustomerNavbar";


function App(): React.JSX.Element{

    return(
        <>
        <Navbar></Navbar>
        <div style={{display: "flex", flexDirection: "row", gap: "15px", height: "100%", width: "100%"}} id="application_body">
            <CustomerNavBar/>
            <span>span 2</span>
        </div>
        </>
    )
}

export default App;