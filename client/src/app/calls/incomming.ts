import { Ticket } from '../tickets/ticket'
import { Workshop } from '../workshops/workshop'

export class Incomming {
    workshop: Workshop = new Workshop;
    tickets: Ticket[] = []
}