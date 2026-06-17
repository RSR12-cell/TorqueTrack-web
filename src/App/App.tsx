import type React from "react";
import Navbar from "../Shared/Components/Navbar/Navbar";
import CustomerNavBar from "../Features/Customer/CustomerNavBar/CustomerNavBar";
import CustomerCreationForm from "../Features/Customer/CustomerCreationForm/CustomerCreationForm";


function App(): React.JSX.Element{

    return(
        <>
        <Navbar></Navbar>
        <div style={{display: "flex", flexDirection: "row", gap: "15px", height: "100%", width: "100%"}} id="application_body">
            <CustomerNavBar/>
            <CustomerCreationForm></CustomerCreationForm>
        </div>
        </>
    )
}

export default App;