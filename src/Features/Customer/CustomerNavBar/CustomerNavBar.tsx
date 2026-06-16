import styles from './CustomerNavbar.module.css';

export default function CustomerNavBar() : React.JSX.Element{
    return(
        <ul className= {styles.customer_navBar}>
            <li>View All Customers</li>
            <li>Add new Customer</li>
        </ul>
    )
}