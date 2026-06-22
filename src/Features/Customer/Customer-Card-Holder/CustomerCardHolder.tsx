import { useRef } from "react";
import type { Customer } from "../Type/Customer";
import styles from './cardHolder.module.css';
import deleteCustomer from "../service/DeleteCustomer_function";

interface CustomerCardHolderProp extends Customer {
    removeCustomerFromList: (customerId: string) => void;
}

export default function CustomerCardHolder({id, firstName, lastName, phoneNumber, removeCustomerFromList}: CustomerCardHolderProp){
    
    const container = useRef<HTMLDivElement>(null);

    const handleOnCLick = () =>{
        container.current?.focus()
    }

    const handleOnKeyPressed = (event: React.KeyboardEvent<HTMLDivElement>) =>{
        if(event.key === "Delete"){
            console.log("Delete was pressed");
            
            if(id !== null){
                try {
                    deleteCustomer(id)
                    .then(() => {removeCustomerFromList(id);})                
                } catch (error) {
                    console.error(error)
                }
            }
        }
    }
    return(
        <div ref={container} onClick={handleOnCLick} className={styles.customer_card} onKeyDown={handleOnKeyPressed} tabIndex={-1}>
            <label>{firstName}</label>
            <label>{lastName}</label>
            <label>{phoneNumber}</label>
        </div>
    )
}