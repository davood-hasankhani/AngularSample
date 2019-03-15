import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {  map } from 'rxjs/operators'; // add to convert json and insert map


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( public http:Http) { 
    console.log("Data service is conected !!");
    // https://jsonplaceholder.typicode.com/posts
  }
  getPostsData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map(res => res.json())); 
    
  }

  getComment(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
    .pipe(map(res => res.json()));
  }
}
