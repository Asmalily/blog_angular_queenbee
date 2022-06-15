import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url="http://localhost:3000/"
  public posts: Post[] = []



  constructor( private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url+'alltasks')
  }

  getpostById(id:string) {
return this.http.get(this.url+'tasks/'+ id)
  }

}

