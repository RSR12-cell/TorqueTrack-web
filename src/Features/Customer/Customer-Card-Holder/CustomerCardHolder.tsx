import type { Customer } from "../Type/Customer";
import styles from './cardHolder.module.css';

export default function CustomerCardHolder({firstName, lastName, phoneNumber}: Customer){
    return(
        <div className={styles.customer_card}>
            <label>{firstName}</label>
            <label>{lastName}</label>
            <label>{phoneNumber}</label>
        </div>
    )
}