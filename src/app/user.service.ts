import { Injectable } from '@angular/core';
import { User } from "./user"
import { Http, Response, Headers, RequestOptions } from "@angular/http" 
import { Observable } from 'rxjs/Rx'

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

	users: User[] = [];

  private url = "http://localhost:3000"

  constructor(private http: Http) { }

  addUser(body: Object): Observable<User>{
  	let bodyString = JSON.stringify(body); // Stringigy body
    let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options    = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(`${this.url}/addmenu`, body, options)
            .map((res:Response) => res.json())
            .catch((err:any) => Observable.throw(err.json().error || "Server error"))
  }

  getAllUsers(): Observable<User[]> {
  	return this.http.get(`${this.url}/getallmenus`)
            .map((res:Response) => res.json())
            .catch((err:any) => Observable.throw(err.json.error || "Server error"))

  }

  getById(_id: number): Observable<User> {
  	return this.http.get(`${this.url}/getmenu/${_id}`)
            .map((res:Response) => res.json())
            .catch((err:any) => Observable.throw(err.json().error || "Server error"))

  }

}