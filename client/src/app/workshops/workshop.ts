export class Address {
    description: string; 
}

export class Workshop {
    id: number;
    name: string;
    cif: string;
    contact: string; 
    address = new Address();
    distributor: string;
    email: string;
    phone: string;
    current_dms: string;
    previous_dms: string;
}