import type { Customer } from '../Type/Customer';
import styles from './CustomerCreation.module.css'
import React, { useState } from 'react'

export default function CustomerCreationForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const formSubmit = (e : React.SubmitEvent) =>{
        e.preventDefault();

        let newClient: Customer = {
            id: null,
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber
        }

        console.log(newClient);
        
    }

    return (
        <>
            <form className={styles.creation_form} onSubmit={formSubmit}>
                <h1 style={{textAlign: "center"}}>Fueling up the client list</h1>
                    <div className={styles.field_container}>
                        <label >Client's first name: </label>
                        <input type="text" onChange={i => setFirstName(i.target.value)}/>
                    </div>
                    <div className={styles.field_container}>
                        <label >Client's last name: </label>
                        <input type="text" onChange={i => setLastName(i.target.value)}/>
                    </div>
                    <div className={styles.field_container}>
                        <label >Client's phone number: </label>
                        <input type="text" onChange={i => setPhoneNumber(i.target.value)}/>
                    </div>
                
                    <div className= {styles.button_container} >
                        <button type='submit'>Add client to the list</button> 
                    </div>
            </form>
        </>
    )
}