import type React from "react";
import styles from './CViewer.module.css';
import type { Customer } from "../Type/Customer";
import CustomerCardHolder from "../Customer-Card-Holder/CustomerCardHolder";
import { useEffect, useState } from "react";
import getAllCustomers from "../service/GetCustomers";

export default function CViewer() :React.JSX.Element{

    const [lstCustomer, setLstCustomer] = useState<Customer[]>([])

    useEffect(() => {
       getAllCustomers()
        .then(lst => setLstCustomer(lst))
    }, [])

    const deleteCustomer = (customerID: string) => {
        setLstCustomer(prev => prev.filter(c => c.id !== customerID))
    }

    return(
        <div className= {styles.viewer}>
            {
                lstCustomer.map((c) => (
                  <CustomerCardHolder 
                        key={c.id}
                        removeCustomerFromList={deleteCustomer}
                        id={c.id}
                        firstName={c.firstName} 
                        lastName={c.lastName} 
                        phoneNumber={c.phoneNumber}
                        />
                        
                ))
            }
        </div>
    )
}