import { User } from '../users/user'

export class Reminder {
    id: number;
    description: string;
    date: string;
    time: string;
    ISODate: string;
    owner: User;
}