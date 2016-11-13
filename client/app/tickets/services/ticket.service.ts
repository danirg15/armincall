import {Http, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()
export class TicketService {
    headers: Headers
    url = "/api/tickets/"

    constructor(private http: Http){
        this.headers = new Headers()
        this.headers.append("Content-Type", "application/json")
    }

    save(ticket){
        return this.http.post(this.url, JSON.stringify(ticket), {headers: this.headers})
                        .map(res => res.json())
    }

    updateTicket(id, data) {
        return this.http.put(this.url+id, JSON.stringify(data), {headers: this.headers})
                        .map(res => res.json())
    }

    getPendingTickets(workshopId){
        let url = this.url
        if (workshopId) 
            url += '?completed=false&workshop=' + workshopId
        else
            url += '?completed=false'
        
        return this.http.get(url, {headers: this.headers})
                        .map(res => res.json())
    }

}