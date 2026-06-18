import type React from "react";
import styles from './CViewer.module.css';
import type { Customer } from "../Type/Customer";
import customerCardHolder from "../Customer-Card-Holder/CustomerCardHolder";
import CustomerCardHolder from "../Customer-Card-Holder/CustomerCardHolder";

export default function CViewer() :React.JSX.Element{

    const lstCustomer: Customer[] = [{
        id: "1",
        firstName: "Ryan-Sean",
        lastName: "Rajpaul",
        phoneNumber: "07468932890"
    },{
        id: "2",
        firstName: "Kyle",
        lastName: "Rajpaul",
        phoneNumber: "0742685489"
    },{
        id: "3",
        firstName: "Rene",
        lastName: "Rajpaul",
        phoneNumber: "0892898934"
    },{
        id: "4",
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "0749832890"
    },{
        id: "5",
        firstName: "Dr",
        lastName: "Bob",
        phoneNumber: "0749832890"
    },{
        id: "6",
        firstName: "Old",
        lastName: "Sailor",
        phoneNumber: "0749832890"
    },{
        id: "7",
        firstName: "Provison's",
        lastName: "Keeper",
        phoneNumber: "0749832890"
    }

]

    return(
        <div className= {styles.viewer}>
            {
                lstCustomer.map((c) => (
                  <CustomerCardHolder 
                        key={c.id} id={null}
                        firstName={c.firstName} 
                        lastName={c.lastName} 
                        phoneNumber={c.phoneNumber} />
                ))
            }
        </div>
    )
}