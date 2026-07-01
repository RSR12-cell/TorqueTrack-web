import type { Dispatch, SetStateAction } from "react";

interface CustomerFunctions{
    setFirstName: Dispatch<SetStateAction<string>>
    setLastName: Dispatch<SetStateAction<string>>,
    setPhoneNumber: Dispatch<SetStateAction<string>>
}

const customerMap: Map<String, CustomerFunctions> = new Map();

export default customerMap;