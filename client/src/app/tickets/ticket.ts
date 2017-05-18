export class Ticket {
    description: string = ''
    createdAt: string = ''
    completed: boolean = false
    category: Category = new Category()
    calls: Call[] = []
    workshop: Workshop = new Workshop()
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