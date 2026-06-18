import type { Customer } from "../Type/Customer";

async function createCustomer(client: Customer) : Promise<Customer> {
    try {
        console.log(JSON.stringify(client));
        
        const request = new Request("http://localhost:8080/api/v2/customers", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(client)
        })
    
        const response = await fetch(request);

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data : Customer = await response.json();

        return data;
    } catch (error) {
        console.error(error)
        throw new Error("Did not create and save Customer");
    }


}

export default createCustomer