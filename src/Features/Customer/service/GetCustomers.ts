import type { Customer } from "../Type/Customer";

export default async function getAllCustomers(): Promise<Customer[]> {
   try {
        const response = await fetch("http://localhost:8080/api/v2/customers", {
            method: "GET"
        })

        if(!response.ok){
            throw new Error("")
        }

        const data = response.json();

        return data;
   } catch (error) {
        console.error(error)
        throw new Error("Error getting customers");
   }
}