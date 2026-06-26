import type React from "react";
import styles from './CViewer.module.css';
import type { Customer } from "../Type/Customer";
import CustomerCardHolder from "../Customer-Card-Holder/CustomerCardHolder";
import { useEffect, useState } from "react";
import getAllCustomers from "../service/GetCustomers";
import { useSearchedContext } from "../../../Shared/Components/Navbar/SearchContext/UseSearchContext";
import CustomerContextMenu from "../CustomerContextMenu/CustomerContextMenu";


interface MenuPosition{
    x: number,
    y: number
}

export default function CViewer() :React.JSX.Element{

    const {search} = useSearchedContext()
    const [menuPosition, setMenuPosition] = useState<MenuPosition | null>()
    const [customerCard, setCustomerCard] = useState<Customer | null>(null)

    const [customers, setCustomers] = useState<Customer[]>([]) //I am going to use this filter the data and display it
    const [lstCustomer, setLstCustomer] = useState<Customer[]>([])

    const handleOnContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(customerCard !== null){
            e.preventDefault();
            setMenuPosition({x: e.clientX, y: e.clientY})            
        }
    }
    
    

    useEffect(() => {
       getAllCustomers()
        .then(lst => {
            setLstCustomer(lst)
            setCustomers(lst)
        })

        const closeMenu = () => {setMenuPosition(null)}
        window.addEventListener('click', closeMenu)
        return () => window.removeEventListener('click', closeMenu)
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
        setLstCustomer(prev => prev.filter(c => c.customerId !== customerID))
        setCustomers(prev => prev.filter(c => c.customerId !== customerID))
    }



    return(
        <>
                <div className= {styles.viewer} onContextMenu={handleOnContextMenu}>
            {
                customers.filter(c => c.customerId !== null).map((c, ind) => (
                  <CustomerCardHolder 
                        key={`${c.customerId}: ${ind}`}
                        removeCustomerFromList={deleteCustomer}
                        handleOnMouseEnter={() => setCustomerCard(c)}
                        handleOnMouseExit={() => setCustomerCard(null)}
                        customerId={c.customerId}
                        firstName={c.firstName} 
                        lastName={c.lastName} 
                        phoneNumber={c.phoneNumber}
                        />
                        
                ))
            }
        </div>

        {menuPosition && (
                <CustomerContextMenu x={menuPosition.x} y={menuPosition.y}></CustomerContextMenu>
            )}
        </>

    )
}