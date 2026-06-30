import { useEffect, useRef, useState } from "react";
import type { Customer } from "../Type/Customer";
import styles from './cardHolder.module.css';
import deleteCustomer from "../service/DeleteCustomer_function";

interface CustomerCardHolderProp extends Customer {
    removeCustomerFromList: (customerId: string) => void;
    handleOnFocus: () => void;
    handleOnMouseEnter: () => void;
    handleOnMouseExit: () => void;
}

export default function CustomerCardHolder({customerId, firstName, lastName, phoneNumber, removeCustomerFromList,handleOnFocus, handleOnMouseEnter, handleOnMouseExit}: CustomerCardHolderProp){
    
    const container = useRef<HTMLDivElement>(null);

    const handleOnCLick = () =>{
        container.current?.focus()
    }

    const handleOnKeyPressed = (event: React.KeyboardEvent<HTMLDivElement>) =>{
        if(event.key === "Delete"){
            
            if(customerId !== null){
                try {
                    deleteCustomer(customerId)
                    .then(() => {removeCustomerFromList(customerId);})                
                } catch (error) {
                    console.error(error)
                }
            }
        }
    }
    return(
        <div ref={container}
         onClick={handleOnCLick} className={styles.customer_card} onKeyDown={handleOnKeyPressed} 
         tabIndex={-1} onFocus={handleOnFocus} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseExit}>
            <label>{firstName}</label>
            <label>{lastName}</label>
            <label>{phoneNumber}</label>
        </div>
    )
}