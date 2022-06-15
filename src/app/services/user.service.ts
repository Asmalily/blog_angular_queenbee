import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3000/"

  constructor(private http:HttpClient) { }
  
  subscr(email:any){
    return this.http.post(this.url + 'subscribe', email)
  }
}
