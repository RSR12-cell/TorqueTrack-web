import type React from "react";
import styles from './CViewer.module.css';
import type { Customer } from "../Type/Customer";
import CustomerCardHolder from "../Customer-Card-Holder/CustomerCardHolder";
import { useEffect, useState } from "react";
import getAllCustomers from "../service/GetCustomers";
import { useSearchedContext } from "../../../Shared/Components/Navbar/SearchContext/UseSearchContext";

export default function CViewer() :React.JSX.Element{

    const {search} = useSearchedContext()

    const [customers, setCustomers] = useState<Customer[]>([]) //I am going to use this filter the data and display it
    const [lstCustomer, setLstCustomer] = useState<Customer[]>([])

    useEffect(() => {
       getAllCustomers()
        .then(lst => {
            setLstCustomer(lst)
            setCustomers(lst)
        })
    }, [])

    useEffect(() => {
              setCustomers(lstCustomer.filter(c => {
                    if(search.charAt(0) === "0"){
                        return c.phoneNumber.includes(search)
                    }else{
                        let fullName: string = c.firstName + " " + c.lastName;
                        
                        return fullName.includes(search)
                    }
              })) 
    }, [search])

    const deleteCustomer = (customerID: string) => {
        setLstCustomer(prev => prev.filter(c => c.id !== customerID))
        setCustomers(prev => prev.filter(c => c.id !== customerID))
    }



    return(
        <div className= {styles.viewer}>
            {
                customers.map((c) => (
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