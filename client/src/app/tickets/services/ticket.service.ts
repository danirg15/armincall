import {HttpServices}   from '../../shared/services/http.services'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()
export class TicketService {
    url = "/api/tickets/"

    constructor(private http: HttpServices){
       
    }

    save(ticket){
        return this.http.post(this.url, ticket)
    }

    updateTicket(id, ticket) {
        return this.http.put(this.url+id, ticket)
    }

    getPendingTickets(workshopId){
        let url = this.url
        if (workshopId) 
            url += '?completed=false&workshop=' + workshopId
        else
            url += '?completed=false'
        
        return this.http.get(url)
    }

    getAll() {
        return this.http.get(this.url)
    }

}