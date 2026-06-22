
export default async function deleteCustomer(customerId: string){
    try {
        console.log(customerId);
        
        console.log(`http://localhost:8080/api/v2/customers/${customerId}`);
        
        const response  = await fetch(`http://localhost:8080/api/v2/customers/${customerId}`, {
            method: "DELETE"
        })

        if(!response.ok){
            throw new Error()
        }


    } catch (error) {
        console.error(error)
        throw new Error("Unable to delete customer");
    }
}