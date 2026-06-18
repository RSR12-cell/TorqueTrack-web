import createCustomer from '../service/CreateCustomer_function';
import type { Customer } from '../Type/Customer';
import styles from './CustomerCreation.module.css'
import React, { useState } from 'react'

export default function CustomerCreationForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [status, setStatus] = useState<"Created" | "Sending" | "" | "Ok" | "Request_Error" | "Internal server error">("")

    const formSubmit = (e : React.SubmitEvent) =>{
       
        e.preventDefault();      

        if(firstName.length <= 0 || lastName.length <= 0 || phoneNumber.length !== 10){
            setStatus("")
            return 
        }
        

        for (let index = 0; index < phoneNumber.length; index++) {
            const element = phoneNumber.charAt(index);

            if(!(element >= '0' && element <= '9')){
                setStatus("")
                return
            }
            
        }
        
        let newClient: Customer = {
            id: null,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        } 

        try{
            const result = createCustomer(newClient);
            
            console.log(result.then(c => console.log(c)));
            
        }catch(error){
            console.error(error)
        }
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