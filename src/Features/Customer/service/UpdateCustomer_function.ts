import type { Customer } from "../Type/Customer";

export default async function UpdateCustomer(customerToUpdate: Customer) : Promise<Customer>{
    try{
        const request = new Request("http://localhost:8080/api/v2/customers", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(customerToUpdate)
        }
        )

        const response = await fetch(request);

        if(!response.ok){
            throw new Error(`Server responded with an code: ${response.statusText}`)
        }

        const data: Customer = await response.json();

        return data;
    }catch(error){
        console.error(error)
        throw new Error("Error updating the customer");
    }
}