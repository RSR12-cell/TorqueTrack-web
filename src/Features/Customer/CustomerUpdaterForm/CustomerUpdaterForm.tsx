import React, { useState, type SetStateAction } from 'react';
import type { Customer } from '../Type/Customer';
import styles from './CustomerUpdaterForm.module.css'

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
        
        console.log(`First name: ${firstName}\nLast name: ${lastName}\nPhone number: ${phoneNumber}`);
        
    }

     return (
            <form className={styles.creation_form} onSubmit={formSubmit}>
                <div style={{display: "flex", flexDirection: "row", gap: "5px", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{textAlign: "center", flex: "1"}}>Fueling up the client list</h1>

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