import type React from "react";
import styles from './CViewer.module.css';
import type { Customer } from "../Type/Customer";
import CustomerCardHolder from "../Customer-Card-Holder/CustomerCardHolder";
import { useEffect, useState } from "react";
import getAllCustomers from "../service/GetCustomers";
import { useSearchedContext } from "../../../Shared/Components/Navbar/SearchContext/UseSearchContext";
import CustomerContextMenu from "../CustomerContextMenu/CustomerContextMenu";
import CustomerUpdaterForm from "../CustomerUpdaterForm/CustomerUpdaterForm";
import customerMap from "../CustomerMap/CustomerMap";


interface MenuPosition{
    x: number,
    y: number
}

export default function CViewer() :React.JSX.Element{

    const {search} = useSearchedContext()
    const [menuPosition, setMenuPosition] = useState<MenuPosition | null>()
    const [toggleUF, setToggleUF] = useState<boolean>(false)

    const [prevCustomerCard, setPrevCustomerCard] = useState<Customer | null>(null)//I am going to use this to identify when a 
    const [prevCustomer, setPrevCustomer] = useState<Customer | null>()

    const [customers, setCustomers] = useState<Customer[]>([]) //I am going to use this filter the data and display it
    const [lstCustomer, setLstCustomer] = useState<Customer[]>([])

    const handleOnContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(prevCustomerCard !== null){
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
        
        if(customerID !== null){
            customerMap.delete(customerID);
        }
    }

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        if(event.target === event.currentTarget){
            setToggleUF(false)
        }
    }

    

    return(
         <div className= {styles.viewer} onContextMenu={handleOnContextMenu} onClick={handleOnClick}>
            {
                customers.filter(c => c.customerId !== null).map((c, ind) => (
                  <CustomerCardHolder 
                        key={`${c.customerId}: ${ind}`}
                        removeCustomerFromList={deleteCustomer}
                        handleOnFocus={() => { setPrevCustomer(c); } }
                        customerId={c.customerId}
                        firstName={c.firstName}
                        lastName={c.lastName}
                        phoneNumber={c.phoneNumber} 
                        handleOnMouseEnter={() => setPrevCustomerCard(c)} 
                        handleOnMouseExit={() => setPrevCustomerCard(null)}                        
                        />
                ))
            }
            
        {menuPosition && prevCustomer &&(
                <CustomerContextMenu position={{
                        x: menuPosition.x,
                        y: menuPosition.y
                    }
                
                } 
                
                customer={prevCustomer} handleOnDeleteClick={() => deleteCustomer(prevCustomer.customerId!)} 
                handleOnUpdateClick={() => {
                    setMenuPosition(null)
                    setToggleUF(true);
                }}
                ></CustomerContextMenu>
            )}

           { toggleUF === true && <CustomerUpdaterForm customer={prevCustomer!} handleToggle={() => setToggleUF(false)} />}

            
        </div>

    )
}