import { User } from '../users/user'

export class Ticket {
    description: string = ''
    solution: string = ''
    createdAt: string = ''
    completed: boolean = false
    category: Category = new Category()
    calls: Call[] = []
    workshop: Workshop = new Workshop()
    owner: User;
}

class Category {
    name: string = ''
}

class Workshop {
    _id: string = ''
    name: string = ''
}

class Call {
    status:string = ''
    callerNumber: string = ''
    recieverNumber: string = ''
}