import deleteCustomer from '../service/DeleteCustomer_function'
import type { Customer } from '../Type/Customer'
import styles from './CustomerContextMenu.module.css'

interface contextMenuProp{
    position: {
        x: number,
        y: number
    },
    customer: Customer ,
    handleOnDeleteClick: () => void,
    handleOnUpdateClick: () => void
}

export default function CustomerContextMenu({position, customer, handleOnDeleteClick, handleOnUpdateClick}: contextMenuProp){

    return (
        <menu  className={styles.customer_contextMenu} style={{ top: `${position.y}px`,left: `${position.x + 5}px`}}>
            <button onClick={_ => handleOnUpdateClick}>Update Customer</button>
            <button onClick={() => {
                try {               
                    deleteCustomer(customer.customerId!)
                    handleOnDeleteClick() //this is going to used to remove a customer from the list once it has been removed
                } catch (error) {
                    console.error(error)
                    throw new Error("Unable to delete Customer")
                }
            }}>Delete Customer</button>
        </menu>
 
    )
}