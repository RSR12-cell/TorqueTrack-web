import React, { useState, type SetStateAction } from 'react';
import type { Customer } from '../Type/Customer';
import styles from './CustomerUpdaterForm.module.css'
import UpdateCustomer from '../service/UpdateCustomer_function';
import customerMap from '../CustomerMap/CustomerMap';

interface CustomerUpdaterFormProps{
    customer: Customer,
    // handleOnFirstNameChange: React.SetStateAction<String>,
    // handleOnLastNameChanged: React.SetStateAction<String>,
    // handleOnPhoneNumberChanged: React.SetStateAction<String>
    handleToggle: React.Dispatch<SetStateAction<boolean>>
}

export default function CustomerUpdaterForm({handleToggle, customer}: CustomerUpdaterFormProps){

    const [firstName, setFirstName] = useState(customer.firstName);
    const [lastName, setLastName] = useState(customer.lastName);
    const [phoneNumber, setPhoneNumber] = useState(customer.phoneNumber);



    const formSubmit = (e : React.SubmitEvent) =>{
        e.preventDefault(); 
        
        try{
            const updatedCustomer = UpdateCustomer({
                customerId: customer.customerId,
                firstName: firstName,
                lastName:  lastName,
                phoneNumber: phoneNumber
            })

            const updateCard = (c: Customer) => {
                if(c.customerId !== null){
                    const updatableFunctions = customerMap.get(c.customerId);

                    if(updatableFunctions !== undefined){
                      updatableFunctions.setFirstName(c.firstName)
                      updatableFunctions.setLastName(c.lastName)
                      updatableFunctions.setPhoneNumber(c.phoneNumber)
                    }
                }
            }

            updatedCustomer.then(updateCard);        
        }catch(error){
            console.error(error);
        }     
    }

    const handleOnClose = () =>{        
        handleToggle(false)
    }

    

     return (
            <form className={styles.creation_form} onSubmit={formSubmit} onClick={i => i}>
                <div style={{display: "flex",padding: "5px", flexDirection: "row", gap: "5px", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{textAlign: "center", flex: "1"}}>Fueling up the client list</h1>
                    <button className={styles.btnClose} onClick={() => handleOnClose()}>X</button>
                </div>
                    <div className={styles.field_container}>
                        <label >Client's first name: </label>
                        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className={styles.field_container}>
                        <label >Client's last name: </label>
                        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className={styles.field_container}>
                        <label >Client's phone number: </label>
                        <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                    </div>
                
                    <div className= {styles.button_container} >
                        <button type='submit'>Update Client</button> 
                    </div>
            </form>
    )
}