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

    getPendingTickets(){
        return this.http.get(this.url+'?completed=false', {headers: this.headers})
                        .map(res => res.json())
    }

}